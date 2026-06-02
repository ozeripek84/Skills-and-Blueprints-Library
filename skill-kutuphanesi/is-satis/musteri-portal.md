---
name: musteri-portal
description: Müşteri portal — fatura, dosya, support, billing.
---

# Customer Portal

## Ne zaman
B2B müşteriler için self-service.

## Stack
Next.js + Supabase + Stripe Customer Portal

## Süreç
1. Login (müşteriye özel)
2. Dashboard (status, current plan)
3. Invoice history
4. Document/asset access
5. Support ticket
6. Billing portal (Stripe)
7. Notifications

## Çıktı standardı
- White-label brandable
- Mobile responsive
- SSO support (gerekirse)
- Audit log

## Yaygın hatalar
- Müşteri ID switching (multi-tenant)
- Permission scope yetersiz
- Document version ler karışık
