---
name: openai-api
description: OpenAI API entegrasyon — GPT, embeddings, function calling.
---

# OpenAI API

## Ne zaman
LLM features, embeddings, function calling, transcription.

## Stack
openai SDK

## Süreç
1. API key (Org account)
2. Chat completions (streaming)
3. Function calling (tools)
4. Embeddings (text-embedding-3)
5. Whisper (audio transcribe)
6. DALL-E (image generation)
7. Cost tracking (token counting)

## Çıktı standardı
- Streaming smooth
- Function call schema clean
- Cost monitor (per request)
- Fallback (rate limit)

## Yaygın hatalar
- API key client-side
- Token counting yanlış (tiktoken kullan)
- Cost runaway
