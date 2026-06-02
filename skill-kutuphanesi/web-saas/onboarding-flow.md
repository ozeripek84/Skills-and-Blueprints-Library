---
name: onboarding-flow
description: Yeni kullanıcı onboarding wizard — multi-step form, progress.
---

# Onboarding Flow

## Ne zaman
Signup sonrası kullanıcıya yön gösterme, ilk değer.

## Stack
React Hook Form + Framer Motion + Supabase

## Süreç
1. Adım sayısını planla (3-5 ideal)
2. Her adım: bir karar / bir bilgi
3. Progress bar üstte
4. Skip butonu (opsiyonel adımlarda)
5. Save & continue (kapatınca kaybolmasın)
6. Final: "Hadi başla" CTA → main dashboard

## Çıktı standardı
- Tüm adımlar 30 saniyeden kısa
- Mobile'da rahat
- Progress kaydediliyor (browser refresh sonrası devam)
- A/B testable

## Yaygın hatalar
- 10 adımlık onboarding (kullanıcı bırakır)
- Zorunlu form (tek seferde tüm bilgi)
- Skip seçeneği vermemek
