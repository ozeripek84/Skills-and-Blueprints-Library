---
name: musteri-onboarding
description: Yeni müşteri için onboarding sequence (welcome, setup, education).
---

# Customer Onboarding Automation

## Ne zaman
Yeni müşteri kayıt → 30 günlük onboarding journey.

## Stack
n8n + Resend + Notion (account doc) + Slack

## Süreç
1. Day 0: Welcome email + Calendly invite + Slack DM
2. Day 1: Quick start guide (videolar)
3. Day 3: First success story
4. Day 7: Personal check-in
5. Day 14: Advanced features
6. Day 30: NPS survey + testimonial request

## Çıktı standardı
- Her step'in açılma/tıklama tracking
- Inactive olanlara re-engage
- Personalization (isim, plan, kullanım)

## Yaygın hatalar
- Tüm email'leri aynı anda almak (spammy)
- Personalization tokeni boş (placeholder gözüküyor)
- Cancel butonu yok
