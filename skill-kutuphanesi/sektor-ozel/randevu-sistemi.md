---
name: randevu-sistemi
description: Randevu booking — kuaför, klinik, danışman, salon.
---

# Appointment Booking

## Ne zaman
Hizmet veren işletmeler için online randevu.

## Stack
Next.js + Supabase + Calendly-vari custom

## Süreç
1. Service catalog (süre, fiyat)
2. Provider scheduling (kim hangi saatte)
3. Public booking page
4. Customer info form
5. Confirmation (email + SMS)
6. Reminder (24h öncesi)
7. Cancel/reschedule
8. No-show tracking

## Çıktı standardı
- Mobile-first booking
- Buffer time (randevular arası)
- Multi-provider support
- Recurring appointments

## Yaygın hatalar
- Çift booking (race condition)
- Timezone hatası
- Reminder göndermemek
