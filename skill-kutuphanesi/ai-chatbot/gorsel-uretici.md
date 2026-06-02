---
name: gorsel-uretici
description: Text-to-image AI uygulama — Midjourney/DALL-E API ile görsel üret.
---

# AI Image Generator

## Ne zaman
İçerik üreten kullanıcılar (sosyal medya, blog, ürün görseli).

## Stack
Next.js + Replicate / fal.ai / OpenAI DALL-E + Supabase Storage

## Süreç
1. Prompt input UI
2. API call (Flux Pro / DALL-E 3 / Stable Diffusion)
3. Polling/streaming (uzun süren task'lar)
4. Generated image → Supabase Storage upload
5. Gallery (kullanıcının önceki üretimleri)
6. Variations / edits
7. Credit system (usage tracking)

## Çıktı standardı
- 30 saniye altı generation
- Image gallery sortable
- Download + share
- Credit balance görünür

## Yaygın hatalar
- API cost izlememek (kullanıcı 1000 image üretir)
- NSFW filter unutmak
- Image storage maliyeti hesaplanmamış
