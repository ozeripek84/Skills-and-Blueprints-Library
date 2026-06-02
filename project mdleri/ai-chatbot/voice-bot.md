---
description: Sesli chatbot kur (STT + LLM + TTS, real-time conversation)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /ai-chatbot:voice-bot

Sen audio AI engineer'sın. Sesli chatbot kuracaksın — speech-to-text + LLM + text-to-speech.

## Stack
Next.js + OpenAI Whisper API + Anthropic + ElevenLabs / OpenAI TTS

## Süreç

### 1. Setup

```bash
npm install openai @anthropic-ai/sdk @elevenlabs/elevenlabs-node
```

### 2. Audio recording (frontend)

```tsx
'use client'
import { useState, useRef } from 'react'

export function VoiceRecorder() {
  const [recording, setRecording] = useState(false)
  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const chunks = useRef<Blob[]>([])
  
  async function start() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    mediaRecorder.current = new MediaRecorder(stream)
    mediaRecorder.current.ondataavailable = (e) => chunks.current.push(e.data)
    mediaRecorder.current.start()
    setRecording(true)
  }
  
  async function stop() {
    mediaRecorder.current?.stop()
    mediaRecorder.current!.onstop = async () => {
      const blob = new Blob(chunks.current, { type: 'audio/webm' })
      chunks.current = []
      
      // Send to API
      const formData = new FormData()
      formData.append('audio', blob)
      const res = await fetch('/api/voice', { method: 'POST', body: formData })
      const { audioUrl } = await res.json()
      
      // Play response
      new Audio(audioUrl).play()
    }
    setRecording(false)
  }
  
  return (
    <Button onClick={recording ? stop : start} variant={recording ? 'destructive' : 'default'}>
      {recording ? 'Durdur' : 'Konuş'}
    </Button>
  )
}
```

### 3. API route — full pipeline

```typescript
// src/app/api/voice/route.ts
import OpenAI from 'openai'
import Anthropic from '@anthropic-ai/sdk'
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-node'

export async function POST(req: Request) {
  const formData = await req.formData()
  const audio = formData.get('audio') as File
  
  // 1. STT (Whisper)
  const transcription = await openai.audio.transcriptions.create({
    file: audio,
    model: 'whisper-1',
    language: 'tr',
  })
  
  // 2. LLM (Claude)
  const completion = await anthropic.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 500,
    system: 'Sen yardımcı sesli asistansın. Kısa, doğal Türkçe cevap ver.',
    messages: [{ role: 'user', content: transcription.text }]
  })
  const responseText = completion.content[0].text
  
  // 3. TTS (ElevenLabs)
  const audioStream = await elevenlabs.generate({
    voice: 'Rachel',
    text: responseText,
    model_id: 'eleven_multilingual_v2'
  })
  
  // 4. Upload to R2 / serve
  const audioUrl = await uploadAudio(audioStream)
  
  return Response.json({ 
    transcription: transcription.text,
    response: responseText,
    audioUrl 
  })
}
```

### 4. Streaming for low latency

ElevenLabs streaming ile cevap parça parça gelsin:
- Whisper: blokluyor (50-500ms)
- Claude streaming: 100ms TTFB
- ElevenLabs streaming: ilk audio chunk 200-300ms

### 5. Visual feedback

3 state UI:
- 🎤 Recording (red pulse)
- ⏳ Processing (spinner)
- 🔊 Speaking (waveform animation)

### 6. Conversation history

```sql
CREATE TABLE voice_conversations (
  id UUID PRIMARY KEY,
  user_id UUID,
  transcript TEXT,
  response TEXT,
  audio_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 7. Background noise reduction

`@krisp-ai/web-sdk` ya da RNNoise ile real-time noise suppression.

### 8. Multilingual

Whisper auto-detect language, Claude'a `system` prompt'unda belirt, ElevenLabs multilingual model.

## Çıktı standardı

- [ ] 3 saniye altı end-to-end latency
- [ ] Mobile microphone permission flow
- [ ] Visual feedback (recording, processing, speaking)
- [ ] Conversation history
- [ ] Multilingual support

## Anti-patterns

❌ Sync waiting (loading 5sn UI feedback yok)
❌ Background noise (Krisp şart)
❌ Audio cleanup unutmak (memory leak)
❌ Mobile'da test edilmemiş (iOS Safari quirks)

Başla.
