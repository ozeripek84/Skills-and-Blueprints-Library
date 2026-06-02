---
name: responsive-mobile
description: Web app'i mobile için optimize et — touch, breakpoint, performance.
---

# Mobile-Optimized Web

## Ne zaman
Mevcut web app'in mobile UX'ini iyileştirme.

## Stack
Tailwind + react-use-gesture + virtualized lists

## Süreç
1. Audit mobile (Chrome DevTools)
2. Touch targets 44px+ (Apple HIG)
3. Bottom navigation (mobile için top nav yerine)
4. Sticky CTA buttons
5. Image lazy load + WebP
6. Skeleton loading
7. Pull-to-refresh

## Çıktı standardı
- Lighthouse mobile 90+
- Touch test edilmiş (gerçek device)
- iOS Safari quirks handled
- Bundle <200kb initial

## Yaygın hatalar
- Hover states (mobile'da yok)
- 100vh iOS bug (svh kullan)
- Position fixed + virtual keyboard
