---
name: llm-chatbot
description: ChatGPT-vari özel chatbot — Anthropic API, streaming, conversation history.
---

# LLM Chatbot

## Ne zaman
Müşteri için ya da kendi ürünün için custom chat arayüzü.

## Stack
Next.js + Anthropic SDK + Vercel AI SDK + Supabase

## Süreç
1. API route (`/api/chat`) — streaming response
2. Frontend: useChat hook (Vercel AI SDK)
3. Conversation history (Supabase'de kaydet)
4. System prompt customization
5. Markdown rendering (code blocks, lists)
6. Token counting + rate limit
7. Export conversation

## Çıktı standardı
- Streaming smooth (token-by-token)
- Conversation history sidebar
- Mobile responsive
- Stop generation butonu

## Yaygın hatalar
- API key client-side (server-only kullan)
- Rate limit unutmak
- System prompt'u user'a göstermek
