---
description: End-to-end test — Playwright ile critical flow testing.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /test-kalite:e2e-playwright


# E2E Testing (Playwright)

## Ne zaman
Production critical flows (checkout, signup, key features).

## Stack
Playwright + GitHub Actions

## Süreç
1. Critical user journeys belirle
2. Test setup (auth, db state)
3. Page Object Model
4. Visual regression (screenshots)
5. Mobile viewports
6. CI integration
7. Flaky test handling

## Çıktı standardı
- Top 10 flow tested
- <5dk total runtime
- Parallel execution
- Trace on failure

## Yaygın hatalar
- waitForTimeout (kötü pratik, locator wait kullan)
- Flaky tests (retry değil, kök neden bul)
- Auth her test'te (storage state reuse)

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
