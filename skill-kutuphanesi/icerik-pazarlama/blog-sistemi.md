---
name: blog-sistemi
description: Blog platformu — MDX, kategoriler, SEO, RSS.
---

# Blog System

## Ne zaman
Content marketing, kişisel blog, multi-author.

## Stack
Next.js + MDX / Sanity + RSS feed

## Süreç
1. Content source (MDX dosyalar / Sanity)
2. Dynamic routes ([slug])
3. Categories + tags
4. Search (Pagefind static)
5. RSS feed
6. Sitemap.xml
7. Reading time + table of contents

## Çıktı standardı
- Lighthouse SEO 100
- Schema.org Article
- OG image generation
- RSS valid

## Yaygın hatalar
- ISR yok (cache stale)
- Image without alt
- Internal linking strategy yok
