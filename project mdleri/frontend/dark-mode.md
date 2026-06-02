---
description: Dark mode toggle — next-themes, system preference.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /frontend:dark-mode


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
