---
name: rate-limiting
description: API rate limiting — Upstash Redis ile sliding window.
---

# Rate Limiting

## Ne zaman
Public API, login attempts, expensive endpoints.

## Stack
Upstash Redis + Vercel Edge

## Süreç
1. Strategy seç (sliding window / token bucket)
2. Identifier (IP / user_id / API key)
3. Limit per endpoint
4. Headers: X-RateLimit-Limit, Remaining, Reset
5. 429 response with Retry-After
6. Tier-based limits (free vs paid)

## Çıktı standardı
- 1ms altı check (Edge)
- Headers RFC compliant
- Burst tolerance
- Whitelist (internal services)

## Yaygın hatalar
- DB-based rate limit (yavaş)
- IP-only (proxy/CDN sorun)
- 429'da Retry-After yok
