---
name: abone-yonetimi
description: Subscription management portal — upgrade, cancel, billing history.
---

# Subscription Management

## Ne zaman
SaaS — kullanıcı kendi abonesini yönetsin.

## Stack
Stripe Customer Portal / custom + webhooks

## Süreç
1. Current plan görüntüle
2. Upgrade/downgrade flow
3. Add payment method
4. View invoices
5. Cancel (with reason)
6. Pause subscription
7. Reactivate

## Çıktı standardı
- 1 click upgrade
- Cancel friction (retention offer)
- Proration transparent
- Cancel reason capture

## Yaygın hatalar
- Cancel butonu zor (legal)
- Proration confusing
- Reactivate sonrası setup state
