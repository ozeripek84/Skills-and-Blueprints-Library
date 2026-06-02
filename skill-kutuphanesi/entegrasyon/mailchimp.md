---
name: mailchimp
description: Mailchimp/Resend/Loops — newsletter, segments, campaigns.
---

# Email Marketing API

## Ne zaman
Newsletter, segmentation, marketing automation.

## Stack
Mailchimp / Resend Audiences / Loops API

## Süreç
1. API key + audience ID
2. Subscriber CRUD
3. Tags + segments
4. Campaign create + send
5. Tracking (open, click)
6. Webhooks (unsubscribe, bounce)
7. A/B test

## Çıktı standardı
- Double opt-in
- Unsubscribe one-click
- Segment-based personalization
- GDPR consent

## Yaygın hatalar
- Cold list import (spam)
- Hard bounce ignore (sender reputation düşer)
- Personalization token boş (göründüğü gibi)
