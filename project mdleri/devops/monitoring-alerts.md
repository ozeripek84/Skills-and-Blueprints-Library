---
description: Production monitoring — uptime, errors, performance, alerts.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /devops:monitoring-alerts


# Monitoring & Alerts

## Ne zaman
Production app — visibility şart.

## Stack
Sentry (errors) + Better Stack (uptime) + Vercel Analytics

## Süreç
1. Sentry SDK install (frontend + backend)
2. Source maps upload
3. Uptime monitor (5dk interval)
4. Synthetic checks (critical flow)
5. Alert channels (Slack, email)
6. Status page (public)

## Çıktı standardı
- Error rate <%0.1
- Uptime 99.9%
- Mean time to detect <5dk
- Alert fatigue düşük (sadece actionable)

## Yaygın hatalar
- Tüm error'a alert (gürültü)
- Source map yok (stack trace okunamıyor)
- Alert kanalları aşırı (sadece 1-2 kişi)

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
