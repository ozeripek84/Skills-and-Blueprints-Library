---
name: accessibility
description: Web accessibility (a11y) — WCAG, screen reader, keyboard nav.
---

# Accessibility (a11y)

## Ne zaman
Public-facing site, legal compliance.

## Stack
axe-core + Pa11y + manual testing

## Süreç
1. Lighthouse a11y audit
2. Screen reader test (VoiceOver, NVDA)
3. Keyboard navigation
4. Color contrast
5. Focus management
6. ARIA labels
7. Form accessibility

## Çıktı standardı
- WCAG 2.1 AA compliance
- Lighthouse a11y 95+
- Tab navigation works
- Skip links

## Yaygın hatalar
- Div as button (semantic HTML)
- Color-only indicators
- Auto-play media
