---
name: form-validasyon
description: Form yönetimi — react-hook-form + zod, async validation.
---

# Form Validation

## Ne zaman
Tüm form'lar (signup, checkout, settings).

## Stack
react-hook-form + zod + shadcn Form

## Süreç
1. Zod schema (single source of truth)
2. useForm hook
3. Field validation (real-time + submit)
4. Async validation (email check)
5. Error display (inline)
6. Form persistence (refresh recovery)
7. Submit handling

## Çıktı standardı
- Zod schema reusable (frontend + backend)
- Optimistic UI
- Accessible errors (aria-describedby)
- Disabled state during submit

## Yaygın hatalar
- Frontend-only validation (backend de et)
- Error message generic
- Submit double-click (button disable)
