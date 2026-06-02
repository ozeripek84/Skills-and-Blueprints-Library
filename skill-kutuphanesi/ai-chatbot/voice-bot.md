---
name: voice-bot
description: Sesli chatbot — speech-to-text + LLM + text-to-speech.
---

# Voice Bot

## Ne zaman
Telefon, voice assistant, hands-free uygulama.

## Stack
Next.js + Whisper API (STT) + Anthropic + ElevenLabs/PlayHT (TTS)

## Süreç
1. Audio recording (MediaRecorder API)
2. Whisper API ile transcribe
3. LLM ile cevap
4. ElevenLabs ile sese çevir
5. Audio player ile çal
6. Streaming yap (cevap parça parça gelsin)

## Çıktı standardı
- 2 saniyenin altı response
- Mobile microphone izni doğru istenmiş
- Visual feedback (recording, processing, speaking)
- Conversation history

## Yaygın hatalar
- Latency (her aşama optimize)
- Background noise (Krisp/RNNoise)
- Audio cleanup (memory leak)
