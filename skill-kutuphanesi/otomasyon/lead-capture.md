---
name: lead-capture
description: Lead capture pipeline — form → CRM → notify → automate.
---

# Lead Capture Pipeline

## Ne zaman
Web form'dan gelen lead'leri organize edip takip.

## Stack
Tally/custom form + n8n + HubSpot/Pipedrive + Slack

## Süreç
1. Form → webhook
2. Email validate
3. Duplicate check (CRM'de var mı)
4. CRM'e contact ekle / güncelle
5. Atama (round-robin sales rep)
6. Welcome email
7. Slack notification (#leads)
8. 24h sonra hatırlatma (henüz yanıt yoksa)

## Çıktı standardı
- 30 saniyenin altı lead → CRM
- Slack format zengin (claim button)
- Lead scoring (basit qualifying)

## Yaygın hatalar
- Spam form gönderimleri (honeypot + reCAPTCHA)
- CRM duplicate (email primary key)
- Atama dengesiz (round-robin algoritma)
