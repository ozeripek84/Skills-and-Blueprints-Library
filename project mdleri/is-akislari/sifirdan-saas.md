---
description: Sıfırdan tam SaaS launch — auth, billing, dashboard, marketing, deploy
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /is-akislari:sifirdan-saas

Sen full-stack engineer + product builder'sın. 2 hafta içinde launch'a hazır SaaS kuracaksın.

## Stack
Next.js 14 + Supabase + Stripe + Resend + Vercel

## 2 Hafta Plan

### Hafta 1 — Core Product

**Gün 1-2:** Auth + DB schema (saas-mvp komutu kullan)
**Gün 3-4:** Core feature CRUD + dashboard
**Gün 5:** Stripe entegrasyonu (subscriptions, webhook)
**Gün 6:** Settings + Customer Portal
**Gün 7:** Deploy + custom domain

### Hafta 2 — Launch Prep

**Gün 8:** Marketing landing page
**Gün 9:** Onboarding flow (3-5 step wizard)
**Gün 10:** Email sequences (welcome, drip, win-back)
**Gün 11:** Analytics + error tracking
**Gün 12:** Support (Crisp/Intercom embed)
**Gün 13:** Pre-launch (50 beta user)
**Gün 14:** Public launch (DOA, X, LinkedIn, Product Hunt)

## Detaylı süreç

### Hafta 1, Day 1 — Setup ve Auth

```bash
npx create-next-app@latest $1 --typescript --tailwind --app --src-dir
cd $1
npm install @supabase/supabase-js @supabase/ssr stripe resend lucide-react next-themes zod react-hook-form @hookform/resolvers zustand sonner
npx shadcn-ui@latest init -d
npx shadcn-ui@latest add button input label card form dialog dropdown-menu
```

(Detay için `/web-saas:saas-mvp` çalıştır)

### Hafta 2, Day 8 — Marketing Landing

Marketing landing'i ANA app'ten ayır:
- App: `app.yourdomain.com`
- Marketing: `yourdomain.com`

Yapı:
```
landing/
├── app/
│   ├── page.tsx              # Hero
│   ├── pricing/page.tsx
│   ├── about/page.tsx
│   ├── blog/[...slug]/page.tsx
│   └── docs/[...slug]/page.tsx
└── content/                  # MDX blog posts
```

Bölümler:
- Hero (clear value prop)
- Social proof (logos + testimonials)
- Features (4-6 ana özellik)
- How it works (3 adım)
- Pricing (3 tier)
- FAQ
- CTA

### Hafta 2, Day 9 — Onboarding wizard

(Detay için `/web-saas:onboarding-flow`)

3-5 adım:
1. Welcome (isim + foto)
2. Use case (multi-choice)
3. Workspace setup (eğer multi-tenant)
4. Invite team (opsiyonel)
5. First action

### Hafta 2, Day 10 — Email sequences

Onboarding sequence (Resend + cron):
- Day 0: Welcome
- Day 1: Quick start guide (3 video link)
- Day 3: Use case spotlight
- Day 7: Personal check-in
- Day 14: Trial bitiyor (paid'e geç)

Re-engagement (inactive 14+ gün):
- Day 14: "Sorun mu var?"
- Day 30: "Eksik olan ne?"
- Day 60: "Bay bay" + offer

### Hafta 2, Day 11 — Analytics + Error tracking

```bash
npm install @vercel/analytics @vercel/speed-insights @sentry/nextjs posthog-js
```

- **Vercel Analytics:** Production traffic
- **Speed Insights:** Core Web Vitals
- **Sentry:** Error tracking (frontend + backend)
- **PostHog:** Product analytics (events, funnels, cohorts, replays)

### Hafta 2, Day 12 — Support

Crisp ya da Intercom embed:
```tsx
<Script>
  {`window.$crisp=[];window.CRISP_WEBSITE_ID="${CRISP_ID}";`}
</Script>
<Script src="https://client.crisp.chat/l.js" async />
```

Knowledge base (Markdown veya Sanity).
SLA: 24 saat response.

### Hafta 2, Day 13 — Beta

50 beta user invite:
- Twitter/LinkedIn'den ilgi gösterene
- DOA topluluğundan
- Mailing list
- Personal network

Beta için: extended trial (60 gün), feedback toplama, testimonial isteme.

### Hafta 2, Day 14 — Launch

**Launch checklist:**

- [ ] Production'da 5+ test user
- [ ] Stripe live mode active
- [ ] Custom domain SSL
- [ ] Privacy + Terms + Cookie consent
- [ ] Email deliverability (SPF/DKIM/DMARC)
- [ ] Mobile experience tested
- [ ] Loading states everywhere
- [ ] Error states everywhere
- [ ] Sentry alerts active
- [ ] Support chat live
- [ ] Onboarding works (3 farklı email ile test)

**Launch posts:**

1. **Twitter:** Thread (5-7 tweet) + screenshots
2. **LinkedIn:** Long-form post + carousel
3. **Product Hunt:** Submit (perşembe sabah ideal)
4. **DOA topluluğunda:** Detaylı post + invite
5. **Hacker News:** "Show HN" post (kalite yüksekse)
6. **Indie Hackers:** Launch post

**24 saat takibi:**
- Her saat metric kontrol (signup, error rate)
- Bug fix ASAP
- Support sorularına 1 saat içinde dön
- Twitter mention'ları yanıtla

## Çıktı standardı

- [ ] Live + custom domain
- [ ] Subscription tiers active
- [ ] Email automation running
- [ ] Analytics tracking
- [ ] Error tracking active
- [ ] Support chat live
- [ ] Privacy/Terms/Cookie sayfaları
- [ ] 50+ beta users
- [ ] Launch day social posts ready

## Anti-patterns

❌ Marketing landing'i SaaS bittikten sonra (paralel yap)
❌ Launch öncesi 50 beta user yok
❌ Pricing test edilmemiş
❌ Email deliverability test yok
❌ "Coming soon" özellikler launch'ta
❌ Mobile experience zayıf

## Yaygın hatalar

**"Stripe live mode'a geçince webhook çalışmıyor":**
- Live mode webhook URL'ini Stripe Dashboard'tan güncelle
- Live mode webhook secret farklı, env'i değiştir

**"Email spam'a düşüyor":**
- SPF/DKIM/DMARC kontrol et (Resend dashboard)
- "From" address noreply@yourdomain.com (gmail değil)
- Sender reputation warm-up (ilk hafta düşük volume)

**"Mobile'da auth çalışmıyor":**
- Cookie SameSite="Lax" değil "None" gerekli
- Domain wildcard yanlış

Hadi başla — 14 günlük plan ile başla, her gün net deliverable.
