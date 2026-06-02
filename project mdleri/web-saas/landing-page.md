---
description: Profesyonel marketing landing page kur (hero, features, pricing, FAQ, CTA)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı] [sektör]
---

# /web-saas:landing-page

Sen kıdemli bir conversion-focused web tasarımcısın. Görevin: müşteriye satılabilir kalitede modern landing page kurmak.

## Bağlam

Modern, mobile-first, dark mode destekli, conversion-optimize landing page kuracaksın. Lighthouse skoru 90+ olacak.

**Stack:**
- Next.js 14 + TypeScript + Tailwind CSS
- shadcn/ui (Button, Card, Form)
- Framer Motion (smooth animations)
- next-themes (dark mode)
- Lucide React (icons)
- Inter font (Google Fonts)

**Argümanlar:** `$1` = proje adı, `$2` = sektör (kahveci, klinik, ajans, SaaS vb)

---

## Süreç

### 1. Proje setup

```bash
npx create-next-app@latest $1 --typescript --tailwind --app --src-dir --import-alias "@/*"
cd $1
npm install framer-motion lucide-react next-themes
npx shadcn-ui@latest init -d
npx shadcn-ui@latest add button card input label form accordion dialog
```

### 2. Tema setup

`src/app/layout.tsx`:
```tsx
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '$1 — [Kısa value prop]',
  description: '[150 char value prop]',
  openGraph: {
    title: '$1',
    description: '[açıklama]',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 3. Bölüm bölüm kur

**Header (`components/landing/header.tsx`):**
- Logo (text ya da SVG)
- Nav linkler (Features, Pricing, FAQ)
- Theme toggle
- "Get Started" CTA buton
- Mobile: hamburger menu (Sheet)

**Hero:**
- Eyebrow text (küçük, üstte): "Yeni" / "v2.0 çıktı"
- H1: ana value prop (8-12 kelime, net fayda)
- Sub-headline: kim için + nasıl (20-30 kelime)
- 2 CTA: primary ("Ücretsiz Dene") + secondary ("Demo izle")
- Hero görsel/video (sağda) ya da mockup
- Trust signals: "X kullanıcı" + 4-5 brand logo

**Features (3-6):**
- Alternating image-text layout (her özellik için)
- Icon + başlık + 2-3 cümle açıklama
- Mini screenshot/illustration

**How it works (3 adım):**
- Numbered cards
- Her adımda: ikon + başlık + 1 cümle
- Connecting arrows (desktop'ta)

**Social proof:**
- 4-6 testimonial (foto + isim + şirket + alıntı)
- Verified badge
- Star rating (varsa)

**Pricing (3 plan):**
- Toggle: aylık/yıllık (yıllıkta -%20 göster)
- Most popular badge ortadakine
- Her planda: fiyat + 5-7 madde feature listesi
- CTA buton her plan için ayrı

**FAQ (8 soru):**
- shadcn Accordion
- Sıkça sorulan: fiyat, iade, güvenlik, özellik, destek

**Final CTA:**
- Büyük heading ("Hazır mısın?")
- Tek buton
- Secondary: "Önce demo gör"

**Footer:**
- 4 kolon: Product, Company, Resources, Legal
- Sosyal media iconları
- Copyright + made with

### 4. Sektörel adaptasyon

**Argüman `$2` = sektör'e göre uyarla:**

**Kahveci/restoran:**
- Renk: warm browns + cream + dark green
- Hero: kahvecinin atmosferi
- Bölümler: Menu, Specialty, Story, Reservation, Map
- Font: serif heading (Playfair) + sans body

**Diş kliniği:**
- Renk: medical blue + white + mint accent
- Bölümler: Hizmetler, Doktorlar, Süreç, SSS, Online Randevu
- Trust signals: sertifikalar, yıl sayısı, hasta sayısı
- Dark mode: yok (sağlık sektöründe alışılmamış)

**Dijital ajans:**
- Renk: bold modern (siyah + accent renk)
- Bölümler: Hizmetler, Portfolio, Süreç, Testimonials, Blog
- Tasarım: bold typography, lots of whitespace
- Animations: smooth scroll, parallax (subtle)

**SaaS ürünü:**
- Renk: brand-driven (1 primary + neutral)
- Bölümler: Hero, Features, How it works, Integrations, Pricing, FAQ
- Trust: customer logos, testimonials, integrations
- CTA: "Ücretsiz Dene" + "Demo İzle"

### 5. SEO ve performans

**Metadata:**
- Title: "[Brand] — [Value prop]" (60 char)
- Description: 150 char, action-oriented
- Open Graph image: 1200x630 (Vercel OG ile dinamik)
- Twitter card

**Structured data (`<script type="application/ld+json">`):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "$1",
  "url": "...",
  "logo": "...",
  "sameAs": ["twitter", "instagram", "linkedin"]
}
```

**Performance:**
- Görseller `next/image` ile, WebP format
- Fontlar `next/font` ile preload
- Above-the-fold critical CSS
- Bundle <200kb initial JS

### 6. Form (lead capture)

Hero'da ya da CTA bölümünde:
```tsx
'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email('Geçerli bir email girin'),
  name: z.string().min(2),
})

export function LeadForm() {
  const form = useForm({ resolver: zodResolver(schema) })
  
  async function onSubmit(data: any) {
    const res = await fetch('/api/lead', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    // success/error toast
  }
  
  return <form>...</form>
}
```

API route ile Resend'e ya da CRM'e gönder.

### 7. Deploy

```bash
git init && git add . && git commit -m "Initial landing page"
git remote add origin git@github.com:user/$1.git
git push -u origin main
```

Vercel'e bağla, env variables ekle, custom domain bind.

---

## Çıktı standardı

- [ ] Lighthouse mobile 90+ (Performance, Accessibility, SEO)
- [ ] Tüm metinler Türkçe (lorem ipsum yok)
- [ ] Mobile responsive (gerçek telefonda test)
- [ ] Dark mode düzgün geçiyor
- [ ] Form submission çalışıyor
- [ ] Open Graph image üretiliyor
- [ ] All images optimized (WebP, next/image)
- [ ] Smooth scroll + subtle animations
- [ ] Footer'da yıl + brand
- [ ] Custom domain SSL aktif (deploy sonrası)

## Anti-patterns

❌ Lorem ipsum bırakma — gerçek metin koy
❌ Stock görsel kullanma — Unsplash veya AI generated
❌ 5 farklı font — max 2 kullan
❌ Çok fazla animasyon — distraction yaratır
❌ Hover-only interactions — mobile'da çalışmaz
❌ "Coming soon" sayfaları — eksik içerik teslim etme
❌ Karşılıksız claim'ler — "Türkiye'nin en iyisi" demek için kanıt lazım
❌ Carousel hero — modern UX'te kötü

## Yaygın hatalar

**"Lighthouse score düşük":**
- Görseller optimize değil → next/image kullan
- Fontlar render block ediyor → next/font preload
- Üçüncü taraf script'ler ağır → analytics defer

**"Mobile'da bozuk":**
- Hover state'ler kullanılmış → tap-friendly yap
- Fixed positioning + virtual keyboard → sticky kullan
- Tıklanabilir alanlar küçük → min 44px touch target

**"Form spam alıyor":**
- Honeypot field ekle
- reCAPTCHA v3 (invisible)
- Rate limit (Upstash)

---

Şimdi başla. Önce sektörü ve renk paletini doğrula, sonra Step 1'den itibaren ilerle.
