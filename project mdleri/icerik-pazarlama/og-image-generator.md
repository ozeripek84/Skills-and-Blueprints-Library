---
description: Dinamik Open Graph image generator — sosyal paylaşım için.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /icerik-pazarlama:og-image-generator


# Dynamic OG Images

## Ne zaman
Her sayfanın kendi OG image'ı, blog post için custom.

## Stack
Next.js OG (Vercel) / Satori

## Süreç
1. /api/og route
2. JSX-based template (Satori)
3. Dynamic params (title, author, image)
4. Custom font loading
5. Image (1200x630)
6. Cache (Vercel KV ya da edge cache)

## Çıktı standardı
- <500ms generation
- Custom branding
- Multiple templates
- Cache hit >90%

## Yaygın hatalar
- Font loading slow (preload)
- Edge runtime limit (max 4MB)
- CSS limited (Satori subset)

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
