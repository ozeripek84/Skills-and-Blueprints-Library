---
name: twilio-sms
description: SMS gönderme (Twilio) — OTP, notification, marketing.
---

# Twilio SMS

## Ne zaman
OTP, transactional SMS, alert.

## Stack
Twilio SDK

## Süreç
1. Twilio account + phone number
2. SMS send API
3. Country routing (TR alpha sender)
4. Status webhook
5. Bulk send (Messaging Service)
6. STOP keyword handling

## Çıktı standardı
- Türkiye için alpha sender ID approved
- Failed delivery retry
- Compliance (KVKK)
- Cost per country tracked

## Yaygın hatalar
- TR alpha sender approval delay (1-2 hafta)
- E.164 format zorunlu (+905...)
- Marketing SMS opt-in zorunlu
