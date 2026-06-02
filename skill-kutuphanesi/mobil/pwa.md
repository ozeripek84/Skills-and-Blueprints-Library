---
name: pwa
description: Progressive Web App — install, offline, push notifications, browser tabanlı.
---

# Progressive Web App

## Ne zaman
Native app yerine hızlı, ucuz alternatif.

## Stack
Next.js + next-pwa + Workbox

## Süreç
1. manifest.json
2. Service worker (Workbox)
3. Offline fallback page
4. Add to Home Screen prompt
5. Push notifications (Web Push API)
6. Background sync

## Çıktı standardı
- Lighthouse PWA score 100
- Offline ana sayfa açılıyor
- "Install app" prompt
- iOS Safari uyumlu

## Yaygın hatalar
- iOS PWA limitations (push notif iOS 16.4+)
- Service worker cache stale
- Manifest icon sizes (512x512 zorunlu)
