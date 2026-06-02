---
name: ai-agent
description: Tool-calling AI agent — autonom görev yapan, dış sistemlerle konuşan.
---

# AI Agent (Tool-Calling)

## Ne zaman
Otomatik araştırma, kod yazma, dış API çağırma.

## Stack
Next.js + Anthropic SDK (tools API) + Custom tool implementations

## Süreç
1. Tools tanımla (her birinin schema'sı: name, description, input_schema)
2. Agent loop: LLM → tool call → execute → result → LLM ...
3. Max iteration (sonsuz döngü guard)
4. Tool error handling (continue agent)
5. Streaming progress UI
6. Tool result caching
7. Audit log (her tool call'u kayıt)

## Çıktı standardı
- 3+ tool tanımlı (search, write_file, run_code vb)
- Step-by-step UI
- Cancel mid-execution
- Cost tracking

## Yaygın hatalar
- Tool schema'sı net değil (LLM yanlış kullanır)
- Infinite loop (max_iterations koy)
- Sensitive tools güvenliksiz (whitelist + sanitization)
