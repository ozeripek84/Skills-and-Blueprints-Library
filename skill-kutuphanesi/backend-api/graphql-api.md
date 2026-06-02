---
name: graphql-api
description: GraphQL API — schema-first, resolvers, subscriptions.
---

# GraphQL API

## Ne zaman
Complex client queries, real-time, mobile.

## Stack
Yoga/Apollo Server + Pothos (code-first) + Prisma

## Süreç
1. Schema tasarımı (types, queries, mutations)
2. Resolvers (DataLoader ile N+1 çöz)
3. Auth context
4. Subscriptions (websocket)
5. Federation (gerekirse)
6. Playground/Apollo Studio

## Çıktı standardı
- Type-safe (codegen)
- DataLoader her relationship'te
- Auth her resolver'da
- Subscription stable

## Yaygın hatalar
- N+1 (DataLoader şart)
- Public schema (introspection)
- Mutation'lar idempotent değil
