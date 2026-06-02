---
description: User behavior analytics — events, funnels, cohorts.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /veri-analitik:kullanici-takip


# User Analytics

## Ne zaman
Product analytics, conversion funnel, user journey.

## Stack
PostHog / Mixpanel / Plausible

## Süreç
1. Event tracking plan
2. Implementation (autocapture + custom events)
3. Funnels (signup → activate → pay)
4. Cohort analysis (retention)
5. User flow diagram
6. Heatmaps + session recording

## Çıktı standardı
- Events documented
- PII redaction
- GDPR consent
- Insights dashboard

## Yaygın hatalar
- Tracking everything (noise)
- Inconsistent naming (event_name vs eventName)
- Privacy compliance unutmak

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
