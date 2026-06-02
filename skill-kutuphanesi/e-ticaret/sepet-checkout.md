---
name: sepet-checkout
description: E-ticaret sepet + checkout flow — shipping, tax, payment.
---

# E-commerce Cart & Checkout

## Ne zaman
Custom e-commerce (Shopify değil).

## Stack
Next.js + Zustand (cart) + Stripe + Supabase

## Süreç
1. Cart state (localStorage + DB sync)
2. Add to cart / quantity
3. Shipping calculator (zone-based)
4. Tax calculation (KDV %20)
5. Promo code system
6. Checkout (one-page ya da multi-step)
7. Order confirmation email

## Çıktı standardı
- Cart persists across session
- Mobile-optimized checkout
- Guest checkout option
- Stock decrement on order

## Yaygın hatalar
- Stock check race condition
- Promo code abuse (rate limit)
- Cart abandonment (recovery email)
