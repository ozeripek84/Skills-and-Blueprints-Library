---
description: File converter — PDF↔Word, image format, audio.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /araclar:dosya-donusturucu


# File Converter

## Ne zaman
Müşterilere dosya format dönüştürme.

## Stack
LibreOffice headless / Sharp / FFmpeg

## Süreç
1. Upload (drag-drop)
2. Detect format
3. Conversion engine seç
4. Process (server worker)
5. Download
6. Bulk batch
7. History (24h)

## Çıktı standardı
- Multi-format (10+)
- Server worker (memory bounded)
- Privacy (auto-delete)
- Watermark-free

## Yaygın hatalar
- LibreOffice memory leak
- Large file timeout
- Privacy not communicated (auto-delete)

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
