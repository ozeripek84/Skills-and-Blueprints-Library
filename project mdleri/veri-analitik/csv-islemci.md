---
description: CSV/Excel processing — large file, validation, transformation.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /veri-analitik:csv-islemci


# CSV Processor

## Ne zaman
Müşteri CSV upload, bulk import, data migration.

## Stack
Papa Parse / xlsx / streaming + worker threads

## Süreç
1. File upload (chunked for large)
2. Streaming parse (memory-efficient)
3. Schema validation (zod)
4. Transformation
5. Progress reporting
6. Error report (which rows failed)
7. Bulk DB insert (transactions)

## Çıktı standardı
- 100MB+ file support
- Real-time progress
- Detailed error report
- Resumable (büyük import)

## Yaygın hatalar
- Memory load all (stream şart)
- Encoding issues (Türkçe için UTF-8 BOM)
- Date parsing (Excel quirks)

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
