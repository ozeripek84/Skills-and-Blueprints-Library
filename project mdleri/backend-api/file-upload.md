---
description: Dosya upload — direkt cloud, virus scan, image processing.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /backend-api:file-upload


# File Upload Handler

## Ne zaman
User upload (avatar, document, video).

## Stack
Supabase Storage / R2 / S3 + Sharp (image) + UploadThing

## Süreç
1. Presigned URL (direct browser upload)
2. File type whitelist + size limit
3. Virus scan (ClamAV ya da ClamCloud)
4. Image processing (Sharp: resize, optimize)
5. Storage (cold storage older files)
6. CDN (Cloudflare R2 + custom domain)
7. Cleanup (orphaned files)

## Çıktı standardı
- Direct-to-cloud (server bypass)
- Image optimization automatic
- Multipart for large files
- Resume support

## Yaygın hatalar
- Server'a yüklemek (memory bloat)
- File type validate sadece extension'a göre
- Public URL'leri tahmin edilebilir

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
