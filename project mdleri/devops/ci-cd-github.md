---
description: GitHub Actions CI/CD — test, build, deploy automation.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /devops:ci-cd-github


# GitHub Actions CI/CD

## Ne zaman
Her push'ta test + auto-deploy.

## Stack
GitHub Actions + Vercel/Cloudflare

## Süreç
1. .github/workflows/ci.yml
2. PR: lint + typecheck + test
3. Main push: deploy production
4. Branch push: preview deploy
5. Cache (npm, build artifacts)
6. Notifications (Slack on fail)
7. Secrets management

## Çıktı standardı
- PR check 5 dakikadan kısa
- Cache hit rate >80%
- Status badges README'de
- Branch protection

## Yaygın hatalar
- Cache miss (lockfile değiştiği için)
- Secret leak (echo $SECRET)
- Concurrent run conflict (concurrency group)

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
