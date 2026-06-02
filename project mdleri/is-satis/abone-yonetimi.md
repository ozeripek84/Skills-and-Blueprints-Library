---
description: Subscription management portal — upgrade, cancel, billing history.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /is-satis:abone-yonetimi


# Subscription Management

## Ne zaman
SaaS — kullanıcı kendi abonesini yönetsin.

## Stack
Stripe Customer Portal / custom + webhooks

## Süreç
1. Current plan görüntüle
2. Upgrade/downgrade flow
3. Add payment method
4. View invoices
5. Cancel (with reason)
6. Pause subscription
7. Reactivate

## Çıktı standardı
- 1 click upgrade
- Cancel friction (retention offer)
- Proration transparent
- Cancel reason capture

## Yaygın hatalar
- Cancel butonu zor (legal)
- Proration confusing
- Reactivate sonrası setup state

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
