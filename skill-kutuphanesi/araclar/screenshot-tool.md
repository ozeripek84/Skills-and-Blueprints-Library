---
name: screenshot-tool
description: Web screenshot service — full-page, custom viewport, scheduled.
---

# Screenshot Service

## Ne zaman
Site monitoring, content thumbnail, archive.

## Stack
Puppeteer / Playwright + Cloudflare R2

## Süreç
1. URL input
2. Viewport options (mobile, desktop)
3. Full-page vs viewport
4. Wait for selectors
5. Image upload + URL
6. API endpoint (3rd party use)
7. Scheduled screenshots (monitoring)

## Çıktı standardı
- 5sn altı render
- Multiple sizes
- WebP + PNG
- API authentication

## Yaygın hatalar
- Lazy load wait yok
- Cookie consent banner
- Memory leak (browser instance reuse)
