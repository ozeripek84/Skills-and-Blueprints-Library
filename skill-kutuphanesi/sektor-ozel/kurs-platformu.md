---
name: kurs-platformu
description: Online kurs platformu — video, quiz, sertifika, drip content.
---

# Course Platform (LMS)

## Ne zaman
Eğitmen, kendi kursunu satıyor.

## Stack
Next.js + Mux (video) + Stripe + Supabase

## Süreç
1. Course → modules → lessons
2. Video hosting (Mux ya da Cloudflare Stream)
3. Drip content (zaman bazlı kilit)
4. Quiz/assignment
5. Progress tracking
6. Sertifika PDF
7. Discussion forum

## Çıktı standardı
- Mobile video playback
- Adaptive bitrate
- Transcript/subtitle
- Course completion certificate

## Yaygın hatalar
- Direct video file (CDN cost)
- DRM yok (piracy)
- Drip content date timezone
