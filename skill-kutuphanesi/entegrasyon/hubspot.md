---
name: hubspot
description: HubSpot CRM entegrasyon — contacts, deals, companies.
---

# HubSpot CRM

## Ne zaman
Müşteri HubSpot kullanıyor, lead/deal sync.

## Stack
@hubspot/api-client

## Süreç
1. Private app + token
2. Contact CRUD
3. Deal pipeline yönetimi
4. Custom properties
5. Webhooks (event subscriptions)
6. Workflows trigger
7. Email send

## Çıktı standardı
- Contact deduplication
- Deal stage automation
- Activity log
- Custom property sync

## Yaygın hatalar
- API limit per app (100 req/10sn)
- Property internal name vs label
- Pipeline stage ID hardcode
