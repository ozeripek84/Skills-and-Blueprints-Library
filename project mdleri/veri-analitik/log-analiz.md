---
description: Application log aggregation + analysis (errors, performance).
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /veri-analitik:log-analiz


# Log Analysis

## Ne zaman
Production debug, performance issue, security audit.

## Stack
Axiom / Datadog / Logtail + structured logging

## Süreç
1. Structured logging (JSON, levels)
2. Log shipping (Pino → Axiom)
3. Search + filter
4. Saved queries
5. Alert rules
6. Distributed tracing

## Çıktı standardı
- All errors caught
- 30 day retention min
- Sub-second search
- Alert on threshold

## Yaygın hatalar
- console.log production (yapılandırılmış log şart)
- PII logging (GDPR ihlali)
- Cost runaway (sampling şart)

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
