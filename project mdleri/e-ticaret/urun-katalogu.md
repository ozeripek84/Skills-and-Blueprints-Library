---
description: Product catalog — search, filter, variations, inventory.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /e-ticaret:urun-katalogu


# Product Catalog

## Ne zaman
E-ticaret site, marketplace.

## Stack
Next.js + Algolia / Typesense + Supabase

## Süreç
1. Product schema (variants, options, images)
2. Category tree
3. Search (Algolia/Typesense)
4. Faceted filter (price, color, size)
5. Variant selector (size + color combo)
6. Image gallery + zoom
7. Related products

## Çıktı standardı
- Search <100ms
- Faceted filter smooth
- Image optimize (multiple sizes)
- Mobile gallery

## Yaygın hatalar
- Variant SKU yönetimi karışık
- Search index stale (sync gerekli)
- Image file size (CDN + optimize)

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
