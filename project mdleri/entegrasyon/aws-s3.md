---
description: AWS S3 / Cloudflare R2 — file storage, presigned URLs.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /entegrasyon:aws-s3


# S3 / R2 Storage

## Ne zaman
File upload/storage at scale, CDN.

## Stack
AWS SDK v3 ya da R2 (S3 compatible)

## Süreç
1. Bucket create + policy
2. CORS config
3. Presigned URL (PUT)
4. Direct browser upload
5. Lifecycle rules (cleanup, archive)
6. CDN (CloudFront / R2 custom domain)
7. Encryption at rest

## Çıktı standardı
- Direct upload (server bypass)
- Versioning (gerekirse)
- Public URLs unguessable
- CDN cache TTL

## Yaygın hatalar
- Public bucket policy yanlış
- Presigned URL süresi çok uzun
- Egress cost (R2 ücretsiz, S3 pahalı)

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
