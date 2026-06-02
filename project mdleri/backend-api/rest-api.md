---
description: REST API tasarımı — Next.js Route Handlers, validation, auth.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /backend-api:rest-api


# REST API Builder

## Ne zaman
Mobile/3rd party için backend API.

## Stack
Next.js Route Handlers + zod (validation) + Supabase

## Süreç
1. OpenAPI spec yaz (planning)
2. Route'lar: GET /resource, POST, PATCH, DELETE
3. zod schema her endpoint için
4. Auth middleware (JWT/API key)
5. Rate limiting (Upstash)
6. Error handling (consistent format)
7. API docs (Scalar/Swagger UI)

## Çıktı standardı
- RESTful conventions (status codes doğru)
- API key authentication
- Rate limit per key
- API docs auto-generated

## Yaygın hatalar
- 200 her şey için (404, 401, 422 kullan)
- API versioning unutmak (/v1/)
- N+1 query (Supabase select with relations)

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
