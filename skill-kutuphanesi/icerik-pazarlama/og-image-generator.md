---
name: og-image-generator
description: Dinamik Open Graph image generator — sosyal paylaşım için.
---

# Dynamic OG Images

## Ne zaman
Her sayfanın kendi OG image'ı, blog post için custom.

## Stack
Next.js OG (Vercel) / Satori

## Süreç
1. /api/og route
2. JSX-based template (Satori)
3. Dynamic params (title, author, image)
4. Custom font loading
5. Image (1200x630)
6. Cache (Vercel KV ya da edge cache)

## Çıktı standardı
- <500ms generation
- Custom branding
- Multiple templates
- Cache hit >90%

## Yaygın hatalar
- Font loading slow (preload)
- Edge runtime limit (max 4MB)
- CSS limited (Satori subset)
