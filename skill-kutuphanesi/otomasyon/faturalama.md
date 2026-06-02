---
name: faturalama
description: Faturalama otomasyonu — Stripe → Quickbooks/Excel → email.
---

# Billing Automation

## Ne zaman
Müşterilere otomatik fatura, muhasebeye sync.

## Stack
Stripe webhooks + n8n + Quickbooks/Paraşüt + PDF

## Süreç
1. Stripe webhook (invoice.payment_succeeded)
2. Quickbooks/Paraşüt'a fatura kaydı
3. PDF fatura üret (HTML template + Puppeteer)
4. Müşteriye email (PDF eki ile)
5. Sheets'e revenue log
6. KDV hesabı (TR muhasebe için)

## Çıktı standardı
- e-Fatura uyumlu format (TR için)
- KDV doğru
- Müşteri email + portal'dan indirebilsin
- Refund flow da otomatik

## Yaygın hatalar
- KDV hesaplama yanlış (yurtdışı ihracat istisnası)
- Webhook idempotency (aynı fatura 2 kere)
- e-Fatura mzaif format gerektirir
