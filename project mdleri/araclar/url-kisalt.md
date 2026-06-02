---
description: URL shortener — bit.ly alternatifi, custom domain, analytics.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /araclar:url-kisalt


# URL Shortener

## Ne zaman
Custom branded short links, analytics.

## Stack
Next.js + Vercel KV / Cloudflare KV + custom domain

## Süreç
1. Custom domain (gtq.cc, dao.la)
2. Slug generation (short, unique)
3. Redirect handler (KV lookup)
4. Analytics (clicks, geo, referrer)
5. QR code + link
6. Bulk import (CSV)
7. UTM builder

## Çıktı standardı
- <10ms redirect (Edge)
- Click analytics
- Custom domain SSL
- Expiration support

## Yaygın hatalar
- Slug collision (length artır)
- Spam links (rate limit)
- Open redirect (phishing risk)

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
