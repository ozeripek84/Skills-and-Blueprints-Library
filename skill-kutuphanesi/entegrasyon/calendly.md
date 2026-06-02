---
name: calendly
description: Calendly entegrasyon — booking webhook, scheduling, availability.
---

# Calendly Integration

## Ne zaman
Toplantı booking otomasyonu.

## Stack
Calendly API v2

## Süreç
1. OAuth ya da API key
2. Event types listele
3. Webhook (invitee.created)
4. Booking → CRM/Slack/calendar
5. Cancellation handling
6. Availability check
7. Group events

## Çıktı standardı
- Webhook signature verify
- Reschedule support
- Custom field capture
- No-show tracking

## Yaygın hatalar
- Webhook signature skip
- Scope yetersiz (event_types.read şart)
- Cancel sebebi capture yok
