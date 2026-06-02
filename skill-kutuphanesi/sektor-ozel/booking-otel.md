---
name: booking-otel
description: Otel/pansiyon booking — oda, fiyat, müsaitlik, kanal yönetim.
---

# Hotel Booking System

## Ne zaman
Butik otel, pansiyon, Airbnb tarzı.

## Stack
Next.js + Supabase + iCal sync

## Süreç
1. Oda tipleri + fiyat (sezona göre)
2. Müsaitlik takvimi
3. Booking flow (date picker → check)
4. Stripe payment
5. iCal sync (Booking.com, Airbnb)
6. Misafir bilgi (KVKK + bildirim sistemi TR için)
7. Review system

## Çıktı standardı
- Müsaitlik real-time
- Channel sync (overbooking yok)
- Multi-language
- TR Polis bildirim entegre

## Yaygın hatalar
- Channel conflict (overbook)
- Date timezone karışıklığı
- TR misafir bildirim sistemi unutmak
