---
name: raporlama
description: Otomatik haftalık/aylık raporlar (revenue, kullanım, KPI).
---

# Automated Reporting

## Ne zaman
Müşteri ya da iç ekip için periyodik rapor.

## Stack
n8n + Google Sheets + PDF generator + Email

## Süreç
1. Data sources (DB, Stripe, Analytics, Sheets)
2. Aggregation queries
3. Chart generation (QuickChart API ya da Puppeteer)
4. PDF render (HTML template)
5. Email distribution
6. Slack #reports kanalına özet

## Çıktı standardı
- Branded PDF (logo, renk)
- Charts net + okunabilir
- Comparison (önceki dönem)
- Action items section

## Yaygın hatalar
- Tarih timezone karışıklığı
- Long PDF (özet + detay yapısı)
- Email size limit (10MB üzeri reject)
