---
name: url-kisalt
description: URL shortener — bit.ly alternatifi, custom domain, analytics.
---

# URL Shortener

## Ne zaman
Custom branded short links, analytics.

## Stack
Next.js + Vercel KV / Cloudflare KV + custom domain

## Süreç
1. Custom domain (gtq.cc, dao.la)
2. Slug generation (short, unique)
3. Redirect handler (KV lookup)
4. Analytics (clicks, geo, referrer)
5. QR code + link
6. Bulk import (CSV)
7. UTM builder

## Çıktı standardı
- <10ms redirect (Edge)
- Click analytics
- Custom domain SSL
- Expiration support

## Yaygın hatalar
- Slug collision (length artır)
- Spam links (rate limit)
- Open redirect (phishing risk)
