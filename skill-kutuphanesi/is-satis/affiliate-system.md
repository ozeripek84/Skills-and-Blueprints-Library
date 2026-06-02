---
name: affiliate-system
description: Affiliate/referral program — link, tracking, commission.
---

# Affiliate Program

## Ne zaman
SaaS growth via referrals.

## Stack
Next.js + Stripe Connect / Paddle + Supabase

## Süreç
1. Affiliate signup
2. Unique link (utm + cookie)
3. Click tracking (30 day cookie)
4. Conversion attribution
5. Commission calculation
6. Payout (Stripe Connect ya da manual)
7. Dashboard (clicks, conversions, earnings)

## Çıktı standardı
- Cookie 30+ gün
- Real-time dashboard
- Auto payout >$X threshold
- Anti-fraud (self-referral block)

## Yaygın hatalar
- Last-click attribution adil değil
- Self-referral abuse
- Payout schedule belirsiz
