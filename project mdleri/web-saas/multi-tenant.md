---
description: Multi-tenant SaaS — workspace/team yapısı, izole data
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /web-saas:multi-tenant

Sen B2B SaaS architect'ısın. Multi-tenant SaaS kuracaksın — her müşteri kendi ekibini yönetir.

## Stack
Next.js + Supabase (RLS for isolation) + Stripe per-org subscriptions

## Süreç

### 1. Organization model

```sql
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  owner_id UUID REFERENCES profiles(id),
  plan TEXT DEFAULT 'free',
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE organization_members (
  id UUID PRIMARY KEY,
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(organization_id, user_id)
);

-- All resources have organization_id
ALTER TABLE projects ADD COLUMN organization_id UUID REFERENCES organizations(id);
```

### 2. RLS policies (kritik!)

```sql
CREATE POLICY "Members can view their org's projects"
  ON projects FOR SELECT
  USING (
    organization_id IN (
      SELECT organization_id FROM organization_members 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can update org projects"
  ON projects FOR UPDATE
  USING (
    organization_id IN (
      SELECT organization_id FROM organization_members
      WHERE user_id = auth.uid()
      AND role IN ('owner', 'admin')
    )
  );
```

### 3. URL routing

`/[orgSlug]/dashboard` — path-based:
- `/acme/dashboard`
- `/acme/projects`
- `/acme/settings`

Middleware'de `orgSlug` extract + access check.

Alternatif: subdomain (`acme.yourapp.com`) — daha "premium" hisseder ama setup zor.

### 4. Org switcher UI

Header'da dropdown:
- "Şu an: Acme Inc."
- Tıkla → kullanıcının üyesi olduğu tüm org'lar listelenir
- Switch → URL değişir, cache temizlenir

### 5. Invite flow

```typescript
async function inviteMember(orgId: string, email: string, role: string) {
  const { data: invite } = await supabase.from('invites').insert({
    organization_id: orgId,
    email,
    role,
    token: crypto.randomUUID(),
    expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  }).select().single()
  
  await sendEmail({
    to: email,
    subject: 'Sizi [Org]'a davet etti',
    react: InviteEmail({ inviteUrl: `${url}/invites/${invite.token}` })
  })
}
```

Davet linki tıklanınca:
- Eğer login değilse → signup/login → invite accept
- Login ise → invite accept → org_member kaydı oluştur

### 6. Per-org Stripe billing

Each org has own Stripe customer + subscription:
- Pricing: per-seat ($10/user/ay)
- Webhook events: org-level update
- Customer Portal: org admin'lere açık

### 7. Settings (org level)

`/[orgSlug]/settings`:
- General (name, slug, logo)
- Members (invite, role change, remove)
- Billing (plan, payment method, invoices)
- Integrations (her org kendi entegrasyonları)
- Audit log

## Çıktı standardı

- [ ] Data isolation 100% (test edilmiş)
- [ ] Path ya da subdomain routing
- [ ] Invite flow + email
- [ ] Role-based permissions (owner/admin/member/viewer)
- [ ] Per-org Stripe subscription
- [ ] Org switcher
- [ ] Per-seat pricing

## Anti-patterns

❌ RLS'i frontend'de override (backend zorunlu)
❌ Org switching cache temizlememek
❌ Cross-org data leak (test için 2 farklı org ile dene)
❌ Org delete cascade unutmak

Başla.
