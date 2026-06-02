---
description: Web scraping — Playwright ile veri çekme.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /otomasyon:web-scraping


# Web Scraper

## Ne zaman
Public web sitesinden düzenli data çekmek (fiyat, listing, haberler).

## Stack
Node.js + Playwright + Cheerio (HTML parsing)

## Süreç
1. Target site analiz (DOM structure, pagination)
2. Playwright headless browser
3. Data extraction selectors
4. Pagination handling
5. Anti-bot bypass (user agent, delay, proxy)
6. Data → CSV/DB
7. Schedule (cron)

## Çıktı standardı
- Robust selectors (sınıf adı değişikliklerine dayanıklı)
- Rate limiting (saygılı scraping)
- Error retry logic
- Data validation

## Yaygın hatalar
- robots.txt'e bakmamak (legal)
- IP ban (proxy rotation gerekli)
- Selector kırılması (visual regression test)

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
