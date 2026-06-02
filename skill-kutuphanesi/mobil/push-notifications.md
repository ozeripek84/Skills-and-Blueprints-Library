---
name: push-notifications
description: Push notification — web ve mobile için gönderim sistemi.
---

# Push Notifications

## Ne zaman
User re-engagement, real-time alert.

## Stack
OneSignal / Expo Push / Web Push API + cron

## Süreç
1. Permission isteme (UX'te akıllı timing)
2. Token kaydı (DB)
3. Segmentation (audience filter)
4. Schedule + send
5. Click tracking
6. Unsubscribe handling

## Çıktı standardı
- Permission rate %30+ (smart prompt)
- Open rate %15+
- Personalized content
- Quiet hours respect

## Yaygın hatalar
- İlk girişte permission istemek (kabul oranı düşer)
- Çok sık bildirim (uninstall sebep)
- Time zone yanlış (kullanıcı 03:00'te alarm)
