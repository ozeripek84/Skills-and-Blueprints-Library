---
description: Mailchimp/Resend/Loops — newsletter, segments, campaigns.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /entegrasyon:mailchimp


# Email Marketing API

## Ne zaman
Newsletter, segmentation, marketing automation.

## Stack
Mailchimp / Resend Audiences / Loops API

## Süreç
1. API key + audience ID
2. Subscriber CRUD
3. Tags + segments
4. Campaign create + send
5. Tracking (open, click)
6. Webhooks (unsubscribe, bounce)
7. A/B test

## Çıktı standardı
- Double opt-in
- Unsubscribe one-click
- Segment-based personalization
- GDPR consent

## Yaygın hatalar
- Cold list import (spam)
- Hard bounce ignore (sender reputation düşer)
- Personalization token boş (göründüğü gibi)

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
