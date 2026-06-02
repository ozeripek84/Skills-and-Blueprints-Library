---
name: marketplace
description: İki taraflı marketplace (alıcı/satıcı) — listeleme + arama + payment.
---

# Marketplace Builder

## Ne zaman
Etsy/Fiverr tarzı marketplace, iki taraflı kullanıcı.

## Stack
Next.js + Supabase + Stripe Connect + Algolia (search)

## Süreç
1. User types: buyer / seller / admin
2. Listing CRUD (seller'a özel)
3. Search + filter (Algolia)
4. Listing detail + iletişim
5. Stripe Connect ile satıcı onboarding
6. Order flow (cart → checkout → fulfillment)
7. Review/rating sistemi

## Çıktı standardı
- Search 200ms altı response
- Mobile-first listing card
- Stripe Connect Express onboarding
- Two-sided rating

## Yaygın hatalar
- Stripe Connect'i normal Stripe ile karıştırmak
- Search index'i async güncellemeye dikkat
- Dispute flow'u unutmak
