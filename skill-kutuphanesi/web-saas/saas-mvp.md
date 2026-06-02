---
name: saas-mvp
description: Sıfırdan 7 günde MVP SaaS uygulaması kurar (auth + payment + dashboard).
---

# SaaS MVP Builder

## Ne zaman
Yeni bir SaaS ürünü hızlıca prototip → satılabilir hâle getirmek için.

## Stack
Next.js 14 + Supabase (Auth+DB) + Stripe + Resend + Vercel

## Süreç (7 gün)
1. **Day 1:** Setup + Auth (Supabase Auth, login/signup)
2. **Day 2:** Database schema + RLS policies
3. **Day 3:** Core feature CRUD
4. **Day 4:** Stripe checkout + webhooks
5. **Day 5:** Dashboard UI + settings
6. **Day 6:** Email sequences (Resend)
7. **Day 7:** Deploy + custom domain + Stripe live mode

## Çıktı standardı
- Login/signup çalışıyor (3 farklı user test)
- Stripe test card 4242... ile checkout başarılı
- Webhook subscription oluşturuyor
- Mobile responsive
- Privacy + Terms sayfaları var

## Yaygın hatalar
- Authentication'ı kendin yazmak (Supabase Auth kullan)
- Webhook idempotency unutmak
- Refund flow düşünmemek
