---
name: discount-coupon
description: Indirim kupon sistemi — code, percentage, fixed, BOGO.
---

# Discount/Coupon System

## Ne zaman
Promo campaigns, customer retention.

## Stack
Stripe Coupons / custom + DB

## Süreç
1. Coupon types (% off, fixed, BOGO)
2. Validity (date range, usage count)
3. Conditions (min order, specific products)
4. Stacking rules (1 kupon mi, kombine mi)
5. Code generator (custom + auto)
6. Tracking (kim kullandı, conversion)

## Çıktı standardı
- Atomic apply (race condition yok)
- Validation real-time
- Analytics per campaign
- Abuse prevention

## Yaygın hatalar
- Stacking allow (margin yok)
- Public code abuse
- Expiry timezone yanlış
