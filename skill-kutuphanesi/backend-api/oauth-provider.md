---
name: oauth-provider
description: OAuth 2.0 provider — kendi ürünün için "Sign in with X" hosting.
---

# OAuth Provider

## Ne zaman
Diğer uygulamaların senin servisin üzerinden auth yapması.

## Stack
node-oidc-provider / custom + Postgres

## Süreç
1. Client registration (client_id, secret)
2. Authorize endpoint (consent screen)
3. Token endpoint (code → access_token)
4. UserInfo endpoint
5. Revocation endpoint
6. Refresh token flow

## Çıktı standardı
- OIDC compliant
- PKCE support
- Scope-based permission
- Audit log

## Yaygın hatalar
- PKCE skip (mobile için zorunlu)
- Refresh rotation yok
- Scope kontrolü API'da unutulmuş
