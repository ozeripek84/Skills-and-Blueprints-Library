---
name: google-sheets
description: Google Sheets API entegrasyon — read/write, formula, format.
---

# Google Sheets Integration

## Ne zaman
Müşteri Excel/Sheets kullanıyor, oraya sync gerekiyor.

## Stack
Google Sheets API v4 + Service Account

## Süreç
1. GCP project + Sheets API enable
2. Service account + JSON key
3. Sheet'i service account email'iyle paylaş
4. Read: get range
5. Write: append/update
6. Format (color, font, formula)
7. Multiple sheet/tab

## Çıktı standardı
- Bulk operations (single API call)
- Formula support
- Conditional formatting
- Real-time sync

## Yaygın hatalar
- Per-cell write (rate limit)
- Service account permission unutmak
- Quota: 60 req/dakika per user
