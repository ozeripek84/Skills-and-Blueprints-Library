---
name: ses-yazi
description: Audio dosyalarını metne çevirme + AI özet (toplantı, podcast, video).
---

# Speech-to-Text + Summarization

## Ne zaman
Toplantı kaydı → notlar, video → transcript, podcast → blog.

## Stack
Next.js + Whisper API + Anthropic (özetleme)

## Süreç
1. Audio/video upload (max 25MB Whisper)
2. Whisper transcription (timestamp'lerle)
3. Anthropic ile özet + action items + key topics
4. SRT/VTT export (subtitle)
5. Searchable transcript
6. Speaker diarization (Pyannote opsiyonel)

## Çıktı standardı
- 1 saatlik audio için 5 dakika işlem
- Timestamp'li transcript
- Auto-generated özet + bullets
- Multi-language support

## Yaygın hatalar
- 25MB üzeri Whisper failure (chunk'la)
- Türkçe için detect_language true bırak
- Long-form audio için Whisper Large model gerekli
