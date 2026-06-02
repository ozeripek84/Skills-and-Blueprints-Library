---
name: membership-site
description: İçerik kilitli üyelik sitesi — Skool/Patreon/Substack tarzı.
---

# Membership Site

## Ne zaman
Üyelere özel içerik, kurs, topluluk.

## Stack
Next.js + Supabase + Stripe Subscriptions + Mux (video)

## Süreç
1. Auth + subscription tier (free/paid/premium)
2. İçerik tipleri: video, makale, indirilebilir
3. Content gating (subscription'a göre)
4. Member feed/community
5. Comment + reaction sistemi
6. Email notifications
7. Member directory

## Çıktı standardı
- Tier-based access kontrol
- Video player (Mux ile, drm opsiyonel)
- Mobile-friendly
- Email digest (haftalık)

## Yaygın hatalar
- Free preview'i unutmak (SEO + conversion için kritik)
- Cancel flow'unu zorlamak (legal sorun)
- Üye kaybında geçmişe erişim hakkı vermek
