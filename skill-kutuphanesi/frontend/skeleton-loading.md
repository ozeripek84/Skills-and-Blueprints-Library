---
name: skeleton-loading
description: Loading states — skeleton, spinners, optimistic UI.
---

# Loading States

## Ne zaman
Async data fetching, UX polish.

## Stack
Tailwind + Framer Motion (optional)

## Süreç
1. Skeleton placeholders (matches layout)
2. Spinner alternatif (small, button)
3. Optimistic UI (instant feedback)
4. Empty states
5. Error states
6. Stale-while-revalidate (TanStack Query)
7. Suspense + Loading.tsx

## Çıktı standardı
- No blank screens
- Skeleton matches actual layout
- <300ms perceived loading
- Error retry option

## Yaygın hatalar
- Spinner everywhere (skeleton better)
- Layout shift (skeleton boyut farklı)
- Empty state generic
