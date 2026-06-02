---
description: Web screenshot service — full-page, custom viewport, scheduled.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /araclar:screenshot-tool


# Screenshot Service

## Ne zaman
Site monitoring, content thumbnail, archive.

## Stack
Puppeteer / Playwright + Cloudflare R2

## Süreç
1. URL input
2. Viewport options (mobile, desktop)
3. Full-page vs viewport
4. Wait for selectors
5. Image upload + URL
6. API endpoint (3rd party use)
7. Scheduled screenshots (monitoring)

## Çıktı standardı
- 5sn altı render
- Multiple sizes
- WebP + PNG
- API authentication

## Yaygın hatalar
- Lazy load wait yok
- Cookie consent banner
- Memory leak (browser instance reuse)

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
