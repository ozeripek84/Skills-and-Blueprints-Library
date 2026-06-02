---
name: web-scraping
description: Web scraping — Playwright ile veri çekme.
---

# Web Scraper

## Ne zaman
Public web sitesinden düzenli data çekmek (fiyat, listing, haberler).

## Stack
Node.js + Playwright + Cheerio (HTML parsing)

## Süreç
1. Target site analiz (DOM structure, pagination)
2. Playwright headless browser
3. Data extraction selectors
4. Pagination handling
5. Anti-bot bypass (user agent, delay, proxy)
6. Data → CSV/DB
7. Schedule (cron)

## Çıktı standardı
- Robust selectors (sınıf adı değişikliklerine dayanıklı)
- Rate limiting (saygılı scraping)
- Error retry logic
- Data validation

## Yaygın hatalar
- robots.txt'e bakmamak (legal)
- IP ban (proxy rotation gerekli)
- Selector kırılması (visual regression test)
