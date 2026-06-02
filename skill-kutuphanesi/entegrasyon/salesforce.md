---
name: salesforce
description: Salesforce entegrasyon — Lead, Opportunity, Account.
---

# Salesforce Integration

## Ne zaman
Enterprise müşteri, Salesforce kullanan şirket.

## Stack
jsforce / REST API + OAuth

## Süreç
1. Connected App setup
2. OAuth (refresh token flow)
3. SOQL queries
4. Record CRUD
5. Composite API (multiple ops)
6. Streaming API (real-time)
7. Apex callouts (gerekirse)

## Çıktı standardı
- SOQL injection koruma
- Bulk API (10K+ records)
- Field history tracking
- API version pinned

## Yaygın hatalar
- API limit (org başına 24h)
- SOQL string concat (parameterized kullan)
- Custom field __c suffix unutmak
