---
name: dosya-donusturucu
description: File converter — PDF↔Word, image format, audio.
---

# File Converter

## Ne zaman
Müşterilere dosya format dönüştürme.

## Stack
LibreOffice headless / Sharp / FFmpeg

## Süreç
1. Upload (drag-drop)
2. Detect format
3. Conversion engine seç
4. Process (server worker)
5. Download
6. Bulk batch
7. History (24h)

## Çıktı standardı
- Multi-format (10+)
- Server worker (memory bounded)
- Privacy (auto-delete)
- Watermark-free

## Yaygın hatalar
- LibreOffice memory leak
- Large file timeout
- Privacy not communicated (auto-delete)
