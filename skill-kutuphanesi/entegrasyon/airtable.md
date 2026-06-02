---
name: airtable
description: Airtable entegrasyon — CRUD, formula fields, automation.
---

# Airtable Integration

## Ne zaman
Müşteri Airtable kullanıyor, otomatize sync.

## Stack
Airtable.js / REST API

## Süreç
1. Personal access token
2. Base + table seç
3. List records (filter, sort)
4. Create + update + delete
5. Formula field okuma
6. Linked records
7. Attachments

## Çıktı standardı
- Bulk update (10 record/req)
- Filter formula syntax
- Type-safe
- Pagination automatic

## Yaygın hatalar
- 5 req/sn rate limit
- Linked record by name (ID kullan)
- Formula field write attempt (read-only)
