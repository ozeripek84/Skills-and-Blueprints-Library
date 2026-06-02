---
name: anthropic-api
description: Anthropic Claude API — messages, tool use, prompt caching.
---

# Anthropic API

## Ne zaman
Claude'la entegrasyon (chat, tool use, agentic).

## Stack
@anthropic-ai/sdk

## Süreç
1. API key
2. Messages API (streaming)
3. Tool use (function calling)
4. Prompt caching (90% cost reduction)
5. Vision (image input)
6. Computer use (screenshot, click)

## Çıktı standardı
- Streaming smooth
- Tool schemas type-safe
- Prompt cache hit rate >50%
- Multi-modal (text + image)

## Yaygın hatalar
- system param vs message role
- Cache breakpoint yanlış (mutable content cache yok)
- Tool result format yanlış
