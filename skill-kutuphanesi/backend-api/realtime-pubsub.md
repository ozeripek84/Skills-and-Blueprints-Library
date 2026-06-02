---
name: realtime-pubsub
description: Real-time subscription/pub-sub — chat, notifications, live data.
---

# Real-time / Pub-Sub

## Ne zaman
Chat, live updates, collaborative editing, notifications.

## Stack
Supabase Realtime / Pusher / Ably / WebSocket

## Süreç
1. Channel/topic structure
2. Auth (kim hangi channel'a abone)
3. Presence (kim online)
4. Message history (DB)
5. Reconnection logic
6. Optimistic updates (local-first)

## Çıktı standardı
- <100ms latency
- Reconnect handling
- Presence indicators
- Mobile background reconnect

## Yaygın hatalar
- Supabase Realtime sadece DB değişimi (custom event için Pusher)
- Auth bypass (channel auth check)
- Battery drain (mobile için throttle)
