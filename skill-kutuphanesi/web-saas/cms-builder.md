---
name: cms-builder
description: Content management system — blog, sayfa, medya yönetimi.
---

# CMS Builder

## Ne zaman
Müşterinin kendi içeriğini yönetmesi gereken site.

## Stack
Next.js + Sanity / Payload CMS / Strapi (headless)

## Süreç
1. Content types tanımla (post, page, author, category)
2. Admin UI (Sanity Studio embed ya da custom)
3. Frontend: dynamic routes ([slug])
4. Image optimization (next/image)
5. Rich text rendering
6. Preview mode
7. Webhook → revalidate (ISR)

## Çıktı standardı
- WYSIWYG editor müşteri-dostu
- Image upload + crop
- SEO meta her post için
- Draft → preview → publish flow

## Yaygın hatalar
- Markdown vs Rich text karıştırmak (tek standart seç)
- ISR/revalidation unutmak (cache stale kalır)
- Image hosting maliyeti planlanmamış
