---
description: Landing page A/B test — variant assignment, statistical analysis.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /icerik-pazarlama:landing-ab-test


# Landing Page A/B Test

## Ne zaman
Conversion optimization.

## Stack
Next.js + PostHog / Statsig + Vercel Edge

## Süreç
1. Hypothesis (örn "yeni headline %15 conversion artırır")
2. Variant A (control) + B (treatment)
3. Edge function ile assignment (50/50, sticky)
4. Conversion event tracking
5. 2 hafta veri topla
6. Statistical significance (p < 0.05)
7. Winner deploy

## Çıktı standardı
- Sticky variant (kullanıcı her seferinde aynı)
- Sample size hesaplanmış
- Conversion event tek
- Decision document

## Yaygın hatalar
- Erken karar (peeking)
- Sample size yetersiz
- Multiple variant aynı anda (multi-arm bandit)

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
