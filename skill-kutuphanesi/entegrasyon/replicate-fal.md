---
name: replicate-fal
description: Replicate / fal.ai — open source AI model hosting (Flux, Stable Diffusion).
---

# Replicate / fal.ai

## Ne zaman
AI image/video/audio generation, custom models.

## Stack
Replicate SDK / fal.ai client

## Süreç
1. API token
2. Model seç (Flux, SDXL, Whisper)
3. Run prediction (async polling ya da streaming)
4. Result download
5. Webhook on complete (long jobs)
6. Cost tracking

## Çıktı standardı
- Async handling (uzun jobs)
- Webhook signature verify
- Cost per generation tracked
- NSFW filter

## Yaygın hatalar
- Sync poll (timeout)
- Cost runaway (limit set yok)
- Model version pin yok (breaking change)
