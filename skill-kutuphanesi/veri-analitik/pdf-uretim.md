---
name: pdf-uretim
description: HTML → PDF — fatura, rapor, sertifika.
---

# PDF Generation

## Ne zaman
Fatura, rapor, sertifika, belge.

## Stack
React PDF (renderer) / Puppeteer / @react-pdf/renderer

## Süreç
1. Template tasarla (HTML/CSS ya da React PDF)
2. Data injection
3. Server-side render
4. Save / email / download
5. Page numbering
6. Header/footer

## Çıktı standardı
- A4 print-ready
- Türkçe karakter sorunsuz
- Embedded fonts
- Vector graphics

## Yaygın hatalar
- Font embedding atlanması (alien glyph)
- Page break ortasında (CSS page-break-inside)
- Puppeteer Vercel'de fail (lambda layer gerek)
