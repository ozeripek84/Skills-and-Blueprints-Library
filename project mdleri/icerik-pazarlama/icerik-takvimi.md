---
description: Content calendar + planning — Notion ya da custom dashboard.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /icerik-pazarlama:icerik-takvimi


# Content Calendar

## Ne zaman
Düzenli content production planlama.

## Stack
Notion API / Airtable + custom dashboard

## Süreç
1. DB schema (title, status, date, channels, author)
2. Calendar view
3. Status workflow (draft → review → ready → published)
4. Channel assignment (blog, IG, X, LinkedIn)
5. Topic clustering
6. Performance tracking post-publish

## Çıktı standardı
- 1 ay önceden plan görünür
- Multi-channel cross-post
- Owner accountability
- Performance metrics

## Yaygın hatalar
- Sadece bir kişiye bağlı (bottleneck)
- Status workflow uygulanmıyor
- Performance tracking yok

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
