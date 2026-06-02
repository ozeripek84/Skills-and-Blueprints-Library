---
name: email-otomasyonu
description: Email sequence + drip campaigns + transactional emails.
---

# Email Automation

## Ne zaman
Welcome series, drip campaign, abandoned cart, re-engagement.

## Stack
Resend / Loops + n8n / cron + React Email

## Süreç
1. Email template'leri (React Email)
2. Trigger event'leri (signup, purchase, inactive)
3. Sequence: day 0 → day 1 → day 3 → day 7
4. Branching (clicked vs not)
5. Unsubscribe handling
6. Deliverability monitoring

## Çıktı standardı
- SPF/DKIM/DMARC setup
- Mobile-first email design
- Plain-text fallback
- Unsubscribe + GDPR compliance

## Yaygın hatalar
- SPF/DKIM atlanması (spam'a düşer)
- Unsubscribe one-click yapmamak (yasal zorunluluk)
- Image-only email (text balance gerek)
