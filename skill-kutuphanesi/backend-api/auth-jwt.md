---
name: auth-jwt
description: JWT-based authentication — login, refresh, role-based access.
---

# JWT Authentication

## Ne zaman
Custom auth (Supabase/Clerk istemeden).

## Stack
Next.js + jose (JWT) + bcrypt + Supabase (DB)

## Süreç
1. Login: email+pass → JWT (access 15dk + refresh 30gün)
2. Refresh endpoint
3. Logout (refresh token blacklist)
4. Middleware: token verify
5. Role checks
6. Password reset flow

## Çıktı standardı
- HttpOnly cookie storage
- Refresh token rotation
- Brute force protection
- 2FA optional

## Yaygın hatalar
- localStorage'da JWT (XSS riski)
- Refresh token expiry yok
- Symmetric key public repo'da
