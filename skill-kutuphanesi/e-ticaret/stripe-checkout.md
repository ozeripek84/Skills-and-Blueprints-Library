---
name: stripe-checkout
description: Stripe Checkout entegrasyon — one-time + subscription.
---

# Stripe Checkout

## Ne zaman
Hızlı, güvenli ödeme alımı.

## Stack
Stripe + Next.js + Supabase webhooks

## Süreç
1. Stripe products + prices
2. Checkout Session API
3. Success/cancel URL'ler
4. Webhook handler (payment_intent.succeeded)
5. Customer portal link
6. Test mode → live mode

## Çıktı standardı
- Multi-currency (TR için TRY)
- 3D Secure
- Mobile-friendly
- Webhook signed verify

## Yaygın hatalar
- Webhook idempotency
- Test card ile production'a gitmek
- Refund flow eksik
