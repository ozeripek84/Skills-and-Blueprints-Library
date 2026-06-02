---
name: sosyal-icerik-uretici
description: AI ile sosyal medya içeriği üretici — Twitter thread, LinkedIn post, IG carousel.
---

# AI Social Content Generator

## Ne zaman
İçerik üretiyor olan kullanıcılara araç.

## Stack
Next.js + Anthropic + Image gen

## Süreç
1. Topic / link input
2. Platform seç (Twitter/LinkedIn/IG)
3. AI ile draft üret (platforma adapte)
4. Edit (kullanıcı düzenler)
5. Schedule / direct post
6. Görsel (DALL-E / Midjourney / Canva)
7. Hashtag suggestion

## Çıktı standardı
- Platform-specific tone
- Char limit per platform
- Carousel için multi-image
- Schedule reliable

## Yaygın hatalar
- Aynı içerik tüm platformlara (adapt et)
- Hashtag overuse
- Scheduling timezone yanlış
