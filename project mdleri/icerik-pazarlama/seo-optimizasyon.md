---
description: Site SEO audit + iyileştirme — meta, schema, performance.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /icerik-pazarlama:seo-optimizasyon


# SEO Optimization

## Ne zaman
Existing site Google'da yok ya da yavaş.

## Stack
Next.js metadata API + Schema.org JSON-LD

## Süreç
1. Audit (Lighthouse + Search Console)
2. Meta tags (title, description, OG)
3. Schema.org structured data
4. robots.txt + sitemap.xml
5. Internal linking
6. Page speed (Lighthouse)
7. Mobile-friendliness

## Çıktı standardı
- Lighthouse SEO 95+
- Core Web Vitals green
- Sitemap submitted
- Schema validates (Rich Results test)

## Yaygın hatalar
- Duplicate title/meta
- Image alt text yok
- robots.txt'de production URL block

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
