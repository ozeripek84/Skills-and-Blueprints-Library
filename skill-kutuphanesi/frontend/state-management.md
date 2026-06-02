---
name: state-management
description: State yönetimi — Zustand, Context, server state.
---

# State Management

## Ne zaman
Complex client state.

## Stack
Zustand (client) + TanStack Query (server)

## Süreç
1. Server state vs client state ayır
2. TanStack Query: server state
3. Zustand: client-only state
4. URL state (search params)
5. Form state (react-hook-form)
6. Persist (localStorage)
7. Devtools

## Çıktı standardı
- Server state cached + invalidated
- Optimistic updates
- Loading + error states
- Store split by domain

## Yaygın hatalar
- Redux for everything (overkill)
- Server data in Zustand (cache invalidation hell)
- Provider hell (Zustand fixes)
