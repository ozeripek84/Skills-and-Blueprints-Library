---
name: teklif-jenerator
description: Profesyonel teklif jeneratörü — şablon, fiyat, e-imza.
---

# Proposal Generator

## Ne zaman
Müşteriye fiyat teklifi göndermek.

## Stack
Next.js + PDF gen (Puppeteer) + DocuSign / HelloSign

## Süreç
1. Template kütüphanesi
2. Variable substitution (müşteri adı, fiyat)
3. Pricing table builder
4. Terms + conditions
5. PDF preview
6. E-signature (e-imza ya da basic)
7. Tracking (açıldı, imzalandı)

## Çıktı standardı
- Branded PDF
- E-imza legal
- Send tracking (open notification)
- Version history

## Yaygın hatalar
- Brand inconsistent
- Pricing math hatası (otomatik kontrol)
- E-imza fallback yok
