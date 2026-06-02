---
name: error-handling
description: Frontend error handling — boundary, toast, retry.
---

# Error Handling

## Ne zaman
Production app — errors happen.

## Stack
React Error Boundary + sonner toast + Sentry

## Süreç
1. Error boundary (root + per-route)
2. Try-catch async ops
3. Toast notifications (sonner)
4. Form errors (inline)
5. Network errors (offline detect)
6. Retry mechanism
7. Sentry capture

## Çıktı standardı
- No white screen
- User-friendly messages (Türkçe)
- Retry options
- Error tracked in Sentry

## Yaygın hatalar
- Generic "error" message
- No retry option
- Silent failures
