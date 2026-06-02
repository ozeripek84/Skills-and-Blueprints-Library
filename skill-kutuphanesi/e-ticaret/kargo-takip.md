---
name: kargo-takip
description: Kargo entegrasyonu (Türkiye) — Yurtiçi, MNG, Aras, vb.
---

# Shipping Integration (TR)

## Ne zaman
TR e-commerce, otomatik kargo etiketi + takip.

## Stack
Yurtiçi/MNG/Aras API + Shippo (uluslararası)

## Süreç
1. Kargo şirketi entegrasyon (her birinin SOAP/REST farklı)
2. Etiket üretimi (PDF)
3. Takip kodu kaydı
4. Müşteriye email + SMS
5. Status updates webhook
6. Iade etiketi
7. Çoklu şirket karşılaştırması (rate)

## Çıktı standardı
- Otomatik etiket
- Tracking link working
- SMS notify (Türkiye için kritik)
- Iade kolayı

## Yaygın hatalar
- Adres format farklı her API
- Test/canlı mode karıştırma
- Tracking webhook gelmiyor (polling fallback)
