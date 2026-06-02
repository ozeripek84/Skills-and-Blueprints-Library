---
name: multi-tenant
description: Çoklu organizasyon SaaS — workspace/team yapısı, izole data.
---

# Multi-Tenant SaaS

## Ne zaman
B2B SaaS, her müşteri kendi ekibini yönetir.

## Stack
Next.js + Supabase (RLS) + Stripe (per-org billing)

## Süreç
1. Organization model (id, name, slug, plan)
2. Members tablosu (user_id, org_id, role)
3. URL routing: /org/[slug]/dashboard
4. RLS: tüm query'ler org_id ile filtreli
5. Invite flow (email + accept link)
6. Per-org Stripe subscription
7. Org switcher UI

## Çıktı standardı
- 100% data isolation (test edilmiş)
- Sub-domain ya da path-based routing
- Invite + role yönetimi
- Per-seat pricing

## Yaygın hatalar
- RLS'i frontend'de override etmek
- Org switching'de state cache temizlememek
- Cross-org data leak (test için 2 farklı org ile dene)
