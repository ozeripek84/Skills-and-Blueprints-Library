---
description: 7 günde sıfırdan MVP SaaS uygulaması kur (auth + payment + dashboard + email + deploy)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /web-saas:saas-mvp

Sen kıdemli bir full-stack geliştiricisin. Görevin: kullanıcının verdiği proje adı için sıfırdan üretime hazır bir SaaS MVP'si kurmak. Aşağıdaki 7 günlük plana göre adım adım ilerleyeceksin.

## Bağlam

Bu komut çağrıldığında kullanıcı yeni bir SaaS ürünü kurmak istiyor. Tek başına çalışan bir indie-hacker'ın 1 hafta içinde launch edebileceği bir iskelet kuracaksın.

**Stack (zorunlu):**
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS + shadcn/ui
- Supabase (Auth + Database + RLS)
- Stripe (Subscriptions + Customer Portal)
- Resend (Transactional email)
- Vercel (Hosting + Edge functions)

**Proje adı:** `$1` (verilmediyse kullanıcıdan iste)

---

## Süreç

### Gün 1 — Setup ve Authentication

```bash
npx create-next-app@latest $1 --typescript --tailwind --app --src-dir --import-alias "@/*"
cd $1
```

Sonra şu paketleri yükle:

```bash
npm install @supabase/supabase-js @supabase/ssr stripe @stripe/stripe-js resend lucide-react next-themes zod react-hook-form @hookform/resolvers zustand sonner date-fns
npx shadcn-ui@latest init -d
npx shadcn-ui@latest add button input label card form dialog dropdown-menu avatar toast
```

**`.env.local` template:**
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO=
RESEND_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Klasör yapısı:**
```
src/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Landing
│   │   └── pricing/page.tsx
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── reset-password/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── settings/
│   │   └── billing/
│   ├── api/
│   │   └── webhooks/stripe/route.ts
│   └── layout.tsx
├── components/
│   ├── ui/                       # shadcn
│   ├── auth/
│   ├── dashboard/
│   └── marketing/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── stripe/
│   │   ├── client.ts
│   │   └── helpers.ts
│   └── utils.ts
└── middleware.ts
```

**Supabase setup:**
1. supabase.com → New project
2. Settings → API → URL ve anon key kopyala
3. SQL Editor'da `auth.users`'a trigger ekle:

```sql
-- Auto-create profile on signup
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  stripe_customer_id TEXT UNIQUE,
  subscription_status TEXT DEFAULT 'free',
  subscription_tier TEXT DEFAULT 'free',
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
```

**Login/Signup pages:** Server Actions ile, password validation zod schema kullan, error mesajları Türkçe.

**Middleware:** Protected route'lar için (`/dashboard/*` → login redirect if no session).

**Test:** Yeni hesap aç, logout, login, password reset.

---

### Gün 2 — Database Schema ve Core Tablolar

Ana feature için schema (örnek: project management SaaS):

```sql
CREATE TABLE workspaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'archived', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_projects_workspace ON projects(workspace_id);
CREATE INDEX idx_projects_status ON projects(status);

-- RLS
ALTER TABLE workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owner full access workspaces"
  ON workspaces FOR ALL
  USING (auth.uid() = owner_id);

CREATE POLICY "Workspace members access projects"
  ON projects FOR ALL
  USING (
    workspace_id IN (
      SELECT id FROM workspaces WHERE owner_id = auth.uid()
    )
  );
```

**TypeScript types üret:**
```bash
npx supabase gen types typescript --project-id YOUR_PROJECT > src/types/database.ts
```

---

### Gün 3 — Core Feature CRUD

`src/app/(dashboard)/projects/` altında:
- `page.tsx` — projeleri listeleyen sayfa
- `[id]/page.tsx` — proje detay
- `new/page.tsx` — yeni proje formu

**Server Actions:**
```typescript
// src/app/actions/projects.ts
'use server'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const projectSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().optional(),
})

export async function createProject(workspaceId: string, formData: FormData) {
  const supabase = createClient()
  const data = projectSchema.parse({
    name: formData.get('name'),
    description: formData.get('description'),
  })

  const { error } = await supabase
    .from('projects')
    .insert({ ...data, workspace_id: workspaceId })

  if (error) throw error
  revalidatePath('/dashboard/projects')
}
```

**UI:** Loading states (skeleton), empty states ("Henüz proje yok, ilkini oluştur"), error states (toast).

---

### Gün 4 — Stripe Integration

**Stripe Dashboard:**
1. Test mode → Products → 2 product: Pro ($19/ay), Business ($49/ay)
2. Her birinin price_id'sini al
3. Webhooks → `https://yourapp.com/api/webhooks/stripe`
4. Events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`

**Checkout endpoint:**
```typescript
// src/app/api/checkout/route.ts
import { stripe } from '@/lib/stripe/client'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  const { priceId } = await req.json()
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return new Response('Unauthorized', { status: 401 })
  
  const { data: profile } = await supabase
    .from('profiles')
    .select('stripe_customer_id')
    .eq('id', user.id)
    .single()
  
  let customerId = profile?.stripe_customer_id
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { supabase_user_id: user.id }
    })
    customerId = customer.id
    await supabase.from('profiles').update({ stripe_customer_id: customerId }).eq('id', user.id)
  }
  
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?upgraded=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
  })
  
  return Response.json({ url: session.url })
}
```

**Webhook handler:**
```typescript
// src/app/api/webhooks/stripe/route.ts
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe/client'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!
  
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    return new Response('Webhook signature verification failed', { status: 400 })
  }
  
  const supabase = createClient()
  
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const subscription = await stripe.subscriptions.retrieve(session.subscription as string)
      const userId = (await stripe.customers.retrieve(session.customer as string) as Stripe.Customer).metadata.supabase_user_id
      
      await supabase.from('profiles').update({
        subscription_status: 'active',
        subscription_tier: 'pro',
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString()
      }).eq('id', userId)
      break
    }
    // Diğer event'ler için case'ler...
  }
  
  return new Response('OK', { status: 200 })
}
```

**Stripe CLI ile local test:**
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
stripe trigger checkout.session.completed
```

---

### Gün 5 — Dashboard UI ve Settings

**Dashboard (`/dashboard`):**
- Welcome card (kullanıcı ismi, son giriş)
- 3 stat kartı (toplam proje, aktif task, bu hafta tamamlanan)
- Recent activity feed
- Quick actions buttons

**Settings sayfaları:**
- `/settings/profile` — isim, avatar
- `/settings/account` — email, şifre değiştir
- `/settings/billing` — mevcut plan, Customer Portal link, fatura geçmişi
- `/settings/notifications` — email tercihleri

**Customer Portal endpoint:**
```typescript
// src/app/api/portal/route.ts
const session = await stripe.billingPortal.sessions.create({
  customer: customerId,
  return_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings/billing`,
})
return Response.json({ url: session.url })
```

**Sidebar nav:** shadcn ile, mobile'da Sheet (drawer).

---

### Gün 6 — Email Sequences (Resend + React Email)

```bash
npm install resend @react-email/components
```

**Email templates:**
```tsx
// src/lib/emails/welcome.tsx
import { Html, Body, Container, Heading, Text, Button } from '@react-email/components'

export default function WelcomeEmail({ name }: { name: string }) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>Hoş geldin, {name}! 👋</Heading>
          <Text>Hesabını başarıyla oluşturduğun için teşekkürler.</Text>
          <Button href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`}>
            Dashboard'a git
          </Button>
        </Container>
      </Body>
    </Html>
  )
}
```

**Send helper:**
```typescript
// src/lib/email/send.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(to: string, subject: string, react: React.ReactElement) {
  return resend.emails.send({
    from: 'noreply@yourdomain.com',
    to,
    subject,
    react,
  })
}
```

**Onboarding sequence (cron):**
- Day 0: Welcome
- Day 1: Quick start guide
- Day 3: First success story
- Day 7: Personal check-in
- Day 14: Trial ending (if applicable)

Vercel Cron ile her gün çalışan endpoint:
```typescript
// src/app/api/cron/onboarding/route.ts
export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }
  
  // Kullanıcıları kayıt tarihine göre çek
  // Day 0 olanlara welcome
  // Day 1 olanlara quick start
  // ...
}
```

`vercel.json`:
```json
{
  "crons": [{ "path": "/api/cron/onboarding", "schedule": "0 9 * * *" }]
}
```

---

### Gün 7 — Deploy ve Production

**Vercel:**
1. GitHub repo → Vercel'e import
2. Environment variables tamamı (production değerleri)
3. Deploy
4. Custom domain (Cloudflare DNS)

**Stripe:**
1. Test mode → Live mode geçiş
2. Live API keys Vercel env'e
3. Webhook URL'ini production'a güncelle

**Supabase:**
1. Auth → URL Configuration → production domain ekle
2. Email templates customize (Türkçe)
3. SMTP customization (Resend bağla)

**Final checklist:**
- [ ] Login/signup 3 farklı email ile test
- [ ] Stripe live mode'da test ödeme (sonra refund)
- [ ] Webhook subscription oluşturuyor
- [ ] Email gönderiliyor (welcome, billing, reset)
- [ ] Mobile'da kullanılabilir
- [ ] Privacy + Terms sayfaları
- [ ] Cookie consent (AB için)
- [ ] Custom domain SSL aktif
- [ ] Analytics aktif (Vercel Analytics + Plausible)
- [ ] Error tracking (Sentry)

**Launch:**
- DOA topluluğunda paylaş
- Twitter/LinkedIn duyuru
- Product Hunt (gerekirse)
- İlk 100 user için extended trial (30 gün)

---

## Çıktı standardı

7 gün sonunda elinde:
- ✅ Production'da çalışan SaaS
- ✅ Custom domain + SSL
- ✅ Subscription tiers aktif (Stripe live mode)
- ✅ Email automation çalışıyor
- ✅ Mobile responsive
- ✅ Lighthouse 85+ (mobile)
- ✅ Privacy + Terms + Cookie banner
- ✅ Analytics + error tracking

---

## Anti-patterns (yapma)

❌ Authentication'ı kendin yazma — Supabase Auth'u kullan
❌ Database'i NoSQL ile başlatma — Postgres + RLS daha güvenli
❌ Email'i SMTP ile uğraşma — Resend yeter
❌ Marketing site ile app'i karıştırma — ya monorepo ya farklı domain
❌ Webhook idempotency unutma — aynı event 2 kere gelir
❌ Test mode'dan live'a geçince webhook URL'i güncellemeyi unutma
❌ Refund flow düşünmemek — müşteri sorduğunda hazır ol
❌ Cancel flow zor yapmak — yasal sorun olur

---

## Yaygın hatalar

**"Webhook subscription oluşturmuyor":**
- Webhook secret yanlış, Stripe Dashboard'tan tekrar kopyala
- Body raw alınmamış, `req.text()` kullan

**"Email spam'a düşüyor":**
- SPF/DKIM/DMARC kurulmamış, Resend dashboard'tan domain verify et
- From address `noreply@yourdomain.com` olsun, gmail.com kullanma

**"Production'da auth çalışmıyor":**
- Supabase redirect URL'lerine production domain eklenmemiş
- Cookie domain settings yanlış

**"Stripe live mode'da hata":**
- Live API keys env'de mi, test keys'le karıştırılmış mı?
- Live mode'da product/price'lar yeniden oluşturulmalı

---

Şimdi başla. İlk olarak proje adını teyit et, sonra Day 1 setup'ından başla. Her gün bittiğinde özetle, sonraki güne geçmeden önce kullanıcıdan onay al.
