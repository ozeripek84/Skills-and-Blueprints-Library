---
name: dark-mode
description: Dark mode toggle — next-themes, system preference.
---

# Dark Mode Implementation

## Ne zaman
Modern UX expectation.

## Stack
next-themes + Tailwind dark: + CSS variables

## Süreç
1. next-themes provider
2. Toggle button (light/dark/system)
3. Tailwind dark: classes
4. CSS variables for colors
5. Image switching (logo light/dark)
6. Flash prevention (FOUC)
7. localStorage persist

## Çıktı standardı
- No flash on load
- System preference respect
- Manual override
- Smooth transition

## Yaygın hatalar
- Flash (suppressHydrationWarning gerek)
- Image not switching
- Hardcoded colors (use vars)
