---
description: Form yönetimi — react-hook-form + zod, async validation.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /frontend:form-validasyon


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
