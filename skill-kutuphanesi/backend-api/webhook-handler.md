---
name: webhook-handler
description: Webhook receiver — verify, queue, process, retry.
---

# Webhook Handler

## Ne zaman
3rd party event'leri al ve işle (Stripe, Shopify, GitHub).

## Stack
Next.js + Upstash Redis (queue) + signature verification

## Süreç
1. Endpoint hazırla (POST /api/webhooks/[provider])
2. Signature verify (HMAC)
3. Quick 200 response
4. Async queue'ya at
5. Worker'da işle
6. Retry logic (exponential backoff)
7. DLQ (dead letter queue) failed events için

## Çıktı standardı
- Signature verification 100%
- Idempotency (event_id ile dedupe)
- 5 saniye altı 200 response
- Dashboard ile retry/replay

## Yaygın hatalar
- Sync processing (timeout)
- Signature kontrolü skip etmek (security)
- Idempotency yok (duplicate processing)
