---
name: etkinlik-yonetimi
description: Event management — bilet, check-in, sponsor, networking.
---

# Event Management

## Ne zaman
Konferans, workshop, meetup.

## Stack
Next.js + Stripe + QR code + Supabase

## Süreç
1. Event detay sayfası
2. Bilet tipleri (early bird, VIP, group)
3. Stripe checkout
4. QR code üretimi (her ticket için)
5. Check-in (mobile scanner)
6. Speaker / agenda yönetimi
7. Networking (attendee list)

## Çıktı standardı
- Mobile check-in app
- Real-time attendee dashboard
- Refund policy
- GDPR compliant

## Yaygın hatalar
- QR duplicate scan handling
- Network kesintisi check-in kaybı
- Privacy (attendee list public)
