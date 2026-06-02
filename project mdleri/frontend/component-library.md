---
description: Component library — shadcn customize, design system.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /frontend:component-library


# Component Library

## Ne zaman
Multi-project consistency, brand system.

## Stack
shadcn/ui + Tailwind + Storybook

## Süreç
1. shadcn init (kopyala-yapıştır)
2. Theme customization (colors, radius, font)
3. Component variants
4. Storybook stories
5. Usage docs
6. Distribution (npm package opsiyonel)

## Çıktı standardı
- Storybook hosted
- All variants documented
- Dark mode tested
- Accessibility tested

## Yaygın hatalar
- shadcn'i fork (own it = customize)
- Variants explosion
- Storybook update etmemek

## Detaylı Adımlar

Bu komut çağrıldığında, kullanıcının ihtiyacına özel olarak yukarıdaki süreci uygula. Adım adım ilerle, her adımda kullanıcıdan onay al.

### Çalıştırma akışı:

1. **Anla:** Kullanıcının spesifik ihtiyacını öğren (sektör, hedef, kısıtlar)
2. **Plan:** Yukarıdaki süreçten hangi adımları kullanacağını belirle
3. **Setup:** Gerekli dependency'leri yükle, klasör yapısını oluştur
4. **Implement:** Adım adım kod yaz, her adım çalışır halde olsun
5. **Test:** Her özelliği gerçek senaryoyla doğrula
6. **Polish:** Mobile, error states, loading states, edge cases
7. **Deploy:** Production'a al, custom domain, SSL
8. **Document:** README + kullanım rehberi

### Müşteriye teslim paketi (uygulanabilirse):
- Live URL + admin login
- GitHub repo erişimi
- README + kullanım rehberi
- 5 dakikalık Loom tour videosu
- 7 gün post-launch destek

### Kalite checklist:
- [ ] TypeScript hatasız
- [ ] Mobile responsive (gerçek device test)
- [ ] Lighthouse 85+ (mobile)
- [ ] Loading + error states
- [ ] Empty states
- [ ] Türkçe UI dili
- [ ] SEO meta tags
- [ ] Accessibility (a11y)
- [ ] Privacy + Terms (gerekirse)

Şimdi başla — kullanıcının verdiği detaylara göre adım 1'den ilerle.
