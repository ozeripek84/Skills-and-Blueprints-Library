---
name: stripe-subscriptions
description: Subscription billing — trial, upgrade, cancel, dunning.
---

# Stripe Subscriptions

## Ne zaman
SaaS recurring billing.

## Stack
Stripe Subscriptions + webhooks

## Süreç
1. Pricing tiers (monthly + yearly)
2. Trial period
3. Upgrade/downgrade (proration)
4. Cancel + at_period_end
5. Failed payment retry (Smart Retries)
6. Dunning email (recovery)
7. Grace period

## Çıktı standardı
- Webhook events handled (10+ event)
- Tax calculation (Stripe Tax)
- Invoice email
- Cancellation flow

## Yaygın hatalar
- Subscription state DB'de yok (Stripe SoT)
- Proration hesaplanmamış
- Cancel'i hard (legal cancel hakkı)
