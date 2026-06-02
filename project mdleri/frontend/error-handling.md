---
description: Frontend error handling — boundary, toast, retry.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /frontend:error-handling


# Error Handling

## Ne zaman
Production app — errors happen.

## Stack
React Error Boundary + sonner toast + Sentry

## Süreç
1. Error boundary (root + per-route)
2. Try-catch async ops
3. Toast notifications (sonner)
4. Form errors (inline)
5. Network errors (offline detect)
6. Retry mechanism
7. Sentry capture

## Çıktı standardı
- No white screen
- User-friendly messages (Türkçe)
- Retry options
- Error tracked in Sentry

## Yaygın hatalar
- Generic "error" message
- No retry option
- Silent failures

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
