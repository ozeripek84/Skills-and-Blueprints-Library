---
name: iyzico
description: iyzico ödeme entegrasyonu (Türkiye için yerel alternatif).
---

# iyzico Payment

## Ne zaman
Türkiye, taksit, BKM Express, kart saklama.

## Stack
iyzico SDK + Next.js

## Süreç
1. iyzico merchant hesabı (canlı + test)
2. SDK kurulumu
3. Checkout Form / Direct Payment
4. Taksit seçenekleri
5. 3DS callback
6. Iade flow
7. Webhooks (IPN)

## Çıktı standardı
- TR taksit support (3-9-12 ay)
- BKM Express ekli
- 3DS güvenli
- Refund automatic

## Yaygın hatalar
- Test merchant production'a kullanmak
- Iade için merchant onayı (manuel)
- Currency hatalı (TRY zorunlu)
