---
name: fatura-jenerator
description: Fatura jeneratörü — TR e-Arşiv uyumlu, KDV.
---

# Invoice Generator (TR)

## Ne zaman
Türkiye'de freelance / küçük şirket faturalama.

## Stack
Next.js + PDF + Paraşüt API (e-Arşiv)

## Süreç
1. Müşteri bilgi
2. Hizmet kalemleri (KDV %20)
3. Stopaj (gerekirse)
4. PDF üret
5. Email gönder
6. e-Arşiv'e kayıt (zorunlu seviye varsa)
7. Recurring (aylık otomatik)

## Çıktı standardı
- e-Arşiv format uyumlu
- IBAN + ödeme link
- Stopaj hesabı doğru
- Multi-currency

## Yaygın hatalar
- KDV oranı hatalı (gıda %1, hizmet %20)
- Stopaj %20 unutmak (serbest meslek)
- e-Arşiv eşik aşıldığında kayıt zorunlu
