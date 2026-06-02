---
name: emlak-listesi
description: Emlak listing platformu — ilan, harita, filtre, iletişim.
---

# Real Estate Listing

## Ne zaman
Emlak ofisi, ilan portalı.

## Stack
Next.js + Mapbox/Google Maps + Supabase

## Süreç
1. İlan CRUD (foto galerisi 15-20)
2. Adres + harita
3. Filtreler (fiyat, oda, alan, semt)
4. Sahibinden import (varsa)
5. İlanı paylaş (URL, sosyal)
6. Lead capture form
7. Mortgage calculator

## Çıktı standardı
- Map clusters
- Image lazy load
- Saved searches
- Mobile gallery swipe

## Yaygın hatalar
- 20 görsel = page size devasa (lazy + WebP)
- Map performans (cluster + viewport bounded)
- SEO her ilan için unique slug
