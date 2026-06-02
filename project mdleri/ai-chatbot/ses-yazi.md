---
description: Audio → transcript → AI özet (toplantı, podcast, video)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /ai-chatbot:ses-yazi

Audio dosyalarını metne çevirip AI ile özet/insight çıkar.

## Stack
Next.js + Whisper API + Anthropic + Mux/R2 (audio storage)

## Süreç

### 1. Upload + transcribe

```typescript
import OpenAI from 'openai'
const openai = new OpenAI()

async function transcribe(audioUrl: string) {
  // Whisper 25MB limit — chunk'la
  const file = await fetch(audioUrl).then(r => r.blob())
  
  const transcription = await openai.audio.transcriptions.create({
    file,
    model: 'whisper-1',
    language: 'tr',
    response_format: 'verbose_json',
    timestamp_granularities: ['segment']
  })
  
  return transcription
}
```

### 2. Long audio chunking

```bash
npm install fluent-ffmpeg
```

```typescript
// 10 dakikalık chunk'lara böl
import ffmpeg from 'fluent-ffmpeg'

async function chunkAudio(input: string, chunkDuration = 600): Promise<string[]> {
  // ffmpeg -i input.mp3 -f segment -segment_time 600 chunk%03d.mp3
}
```

### 3. AI özet + action items

```typescript
const summary = await anthropic.messages.create({
  model: 'claude-opus-4-7',
  max_tokens: 2000,
  system: `Sen bir toplantı özetleyicisin. Verilen transcript için:
1. Genel özet (3-5 cümle)
2. Konuşulan ana konular (bullet list)
3. Alınan kararlar
4. Action items (kim - ne - ne zaman)
5. Açık sorular`,
  messages: [{ role: 'user', content: transcript }]
})
```

### 4. Speaker diarization (kim ne dedi)

```bash
# Pyannote ya da AssemblyAI ile
npm install assemblyai
```

```typescript
const transcript = await assemblyai.transcripts.transcribe({
  audio: audioUrl,
  speaker_labels: true,
  language_code: 'tr'
})
```

### 5. SRT/VTT export

```typescript
function toSRT(segments: Segment[]): string {
  return segments.map((s, i) => 
    `${i + 1}\n${formatTime(s.start)} --> ${formatTime(s.end)}\n${s.text}\n`
  ).join('\n')
}
```

### 6. Searchable transcript UI

- Full-text search
- Click on word → audio jumps to that timestamp
- Speaker filter

## Çıktı standardı

- [ ] 1 saatlik audio için 5dk işlem
- [ ] Timestamp'li transcript
- [ ] Auto özet + action items
- [ ] SRT/VTT export
- [ ] Multi-speaker (diarization)
- [ ] Searchable

## Anti-patterns

❌ 25MB üstü Whisper fail (chunk şart)
❌ Türkçe için language detect bırakma (explicit 'tr')
❌ Long audio için Whisper Turbo Large

Başla.
