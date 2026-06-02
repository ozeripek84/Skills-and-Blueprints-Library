---
description: Subscription billing — trial, upgrade, cancel, dunning.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /e-ticaret:stripe-subscriptions


# Stripe Subscriptions

## Ne zaman
SaaS recurring billing.

## Stack
Stripe Subscriptions + webhooks

## Süreç
1. Pricing tiers (monthly + yearly)
2. Trial period
3. Upgrade/downgrade (proration)
4. Cancel + at_period_end
5. Failed payment retry (Smart Retries)
6. Dunning email (recovery)
7. Grace period

## Çıktı standardı
- Webhook events handled (10+ event)
- Tax calculation (Stripe Tax)
- Invoice email
- Cancellation flow

## Yaygın hatalar
- Subscription state DB'de yok (Stripe SoT)
- Proration hesaplanmamış
- Cancel'i hard (legal cancel hakkı)

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
