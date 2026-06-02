---
description: Schedule edilen background job'lar — Vercel Cron, Inngest.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /backend-api:cron-jobs


# Scheduled Jobs / Cron

## Ne zaman
Periyodik task'lar — daily reports, cleanup, sync, billing.

## Stack
Vercel Cron / Inngest / Trigger.dev / GitHub Actions

## Süreç
1. Job tanımla (cron expression)
2. API route handler
3. Auth (cron secret)
4. Idempotency (overlap guard)
5. Monitoring (success/fail tracking)
6. Alert on failure

## Çıktı standardı
- Cron expression doğru (UTC vs local)
- Job runs <50% timeout
- Alert if missed run
- Manual trigger butonu

## Yaygın hatalar
- Vercel Cron 60s timeout (longer için Inngest)
- Overlap (önceki bitmeden yenisi başlar)
- Timezone karışıklığı (always UTC)

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
