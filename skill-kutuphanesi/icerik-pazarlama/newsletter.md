---
name: newsletter
description: Newsletter platformu (Substack alternatifi) — yazar dashboard, abone.
---

# Newsletter Platform

## Ne zaman
Self-hosted newsletter (Substack ücretten kaçınmak).

## Stack
Next.js + Resend Audiences + Stripe (paid sub)

## Süreç
1. Subscriber model (free / paid tiers)
2. Editor (Tiptap / Plate.js)
3. Email send (Resend)
4. Archive page (web view)
5. Paywall (paid post)
6. Analytics (open, click, growth)
7. Discovery page

## Çıktı standardı
- Mobile reading optimal
- Plain-text fallback
- 99% inbox placement
- Subscription management

## Yaygın hatalar
- HTML-only email (plain text şart)
- Sender reputation kuruluş eksik (warm-up)
- Paid → free downgrade flow
