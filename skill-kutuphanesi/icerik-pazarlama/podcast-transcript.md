---
name: podcast-transcript
description: Podcast → transcript → blog post → social clips otomasyonu.
---

# Podcast Repurposing

## Ne zaman
Podcast içeriği multi-channel content'e çevirme.

## Stack
Whisper API + Anthropic + AssemblyAI (clip detection)

## Süreç
1. Audio upload
2. Whisper transcribe (timestamp'li)
3. Anthropic ile özet + key topics
4. Blog post draft
5. Tweet thread (5-10 tweet)
6. Quote graphics (Canva API)
7. Highlight clips (15-30 sn)

## Çıktı standardı
- 1 saatlik podcast → 5+ asset
- Auto blog post seo-friendly
- Audiogram clips (mobile)
- Speaker diarization

## Yaygın hatalar
- Long audio Whisper limiti (chunk)
- Hallucinated timestamps (verify)
- Brand voice tutturmak (system prompt detaylı)
