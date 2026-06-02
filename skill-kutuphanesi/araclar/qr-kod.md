---
name: qr-kod
description: QR code üretici — link, vCard, WiFi, ödeme.
---

# QR Code Generator

## Ne zaman
Restaurant menü, business card, etkinlik bileti, ödeme.

## Stack
qrcode npm + Next.js

## Süreç
1. Input form (text, URL, vCard, WiFi)
2. Custom design (color, logo)
3. Error correction level
4. Download (PNG, SVG, PDF)
5. Bulk generation (CSV input)
6. Tracking (link redirect + analytics)

## Çıktı standardı
- High contrast (scannable)
- Logo embed (max %30 area)
- Multi-format export
- Tracked URL (clicks, location)

## Yaygın hatalar
- Logo çok büyük (scan fail)
- Low error correction
- Long URL (use shortener)
