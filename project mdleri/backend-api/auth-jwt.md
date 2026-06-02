---
description: JWT-based authentication — login, refresh, role-based access.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /backend-api:auth-jwt


# JWT Authentication

## Ne zaman
Custom auth (Supabase/Clerk istemeden).

## Stack
Next.js + jose (JWT) + bcrypt + Supabase (DB)

## Süreç
1. Login: email+pass → JWT (access 15dk + refresh 30gün)
2. Refresh endpoint
3. Logout (refresh token blacklist)
4. Middleware: token verify
5. Role checks
6. Password reset flow

## Çıktı standardı
- HttpOnly cookie storage
- Refresh token rotation
- Brute force protection
- 2FA optional

## Yaygın hatalar
- localStorage'da JWT (XSS riski)
- Refresh token expiry yok
- Symmetric key public repo'da

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
