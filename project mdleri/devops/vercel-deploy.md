---
description: Vercel production deploy — domain, env, optimization.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /devops:vercel-deploy


# Vercel Deployment

## Ne zaman
Next.js / static site / serverless deploy.

## Stack
Vercel + Cloudflare DNS

## Süreç
1. Vercel project link
2. Environment variables
3. Custom domain
4. SSL (otomatik)
5. Edge functions
6. Analytics + Speed Insights
7. Preview deployments

## Çıktı standardı
- Custom domain SSL aktif
- Env per env (production / preview / development)
- Edge function latency <100ms
- Cron jobs (gerekirse)

## Yaygın hatalar
- Build size limit aşımı (50MB free)
- Function timeout (10s hobby, 60s pro)
- DNS propagation 48h (acele etme)

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
