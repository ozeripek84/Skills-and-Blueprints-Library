---
description: A/B testing infrastructure — variant assignment, tracking, analysis.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /veri-analitik:a-b-test


# A/B Testing

## Ne zaman
Conversion optimization, feature validation.

## Stack
PostHog / Statsig / GrowthBook + custom analytics

## Süreç
1. Hypothesis tanımla
2. Variants oluştur
3. Audience segment
4. Random assignment (sticky)
5. Conversion event tracking
6. Statistical significance
7. Winner deploy

## Çıktı standardı
- Sample size hesaplanmış
- 95% confidence
- 1+ hafta data
- Decision document

## Yaygın hatalar
- Small sample (yanlış sonuç)
- Multiple comparison problem
- Peeking (test bitmeden sonuçlandırmak)

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
