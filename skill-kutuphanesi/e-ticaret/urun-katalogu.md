---
name: urun-katalogu
description: Product catalog — search, filter, variations, inventory.
---

# Product Catalog

## Ne zaman
E-ticaret site, marketplace.

## Stack
Next.js + Algolia / Typesense + Supabase

## Süreç
1. Product schema (variants, options, images)
2. Category tree
3. Search (Algolia/Typesense)
4. Faceted filter (price, color, size)
5. Variant selector (size + color combo)
6. Image gallery + zoom
7. Related products

## Çıktı standardı
- Search <100ms
- Faceted filter smooth
- Image optimize (multiple sizes)
- Mobile gallery

## Yaygın hatalar
- Variant SKU yönetimi karışık
- Search index stale (sync gerekli)
- Image file size (CDN + optimize)
