---
name: rest-api
description: REST API tasarımı — Next.js Route Handlers, validation, auth.
---

# REST API Builder

## Ne zaman
Mobile/3rd party için backend API.

## Stack
Next.js Route Handlers + zod (validation) + Supabase

## Süreç
1. OpenAPI spec yaz (planning)
2. Route'lar: GET /resource, POST, PATCH, DELETE
3. zod schema her endpoint için
4. Auth middleware (JWT/API key)
5. Rate limiting (Upstash)
6. Error handling (consistent format)
7. API docs (Scalar/Swagger UI)

## Çıktı standardı
- RESTful conventions (status codes doğru)
- API key authentication
- Rate limit per key
- API docs auto-generated

## Yaygın hatalar
- 200 her şey için (404, 401, 422 kullan)
- API versioning unutmak (/v1/)
- N+1 query (Supabase select with relations)
