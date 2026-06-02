---
name: google-calendar
description: Google Calendar entegrasyon — etkinlik oluştur, davetiye, sync.
---

# Google Calendar API

## Ne zaman
Booking sistemi, otomatik etkinlik.

## Stack
Google Calendar API + OAuth

## Süreç
1. OAuth flow (scope: calendar.events)
2. Create event (title, time, attendees)
3. Send invitations
4. Update / cancel
5. Recurring events
6. Free/busy query
7. Two-way sync

## Çıktı standardı
- Timezone doğru (UTC + display)
- Conference link otomatik (Meet)
- Reminders set
- Recurrence rule (RRULE)

## Yaygın hatalar
- OAuth refresh token expiry
- Recurring events update karmaşık
- Timezone bugs (always UTC store)
