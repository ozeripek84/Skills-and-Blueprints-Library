---
description: Email sequence + drip campaigns + transactional emails.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /otomasyon:email-otomasyonu


# Email Automation

## Ne zaman
Welcome series, drip campaign, abandoned cart, re-engagement.

## Stack
Resend / Loops + n8n / cron + React Email

## Süreç
1. Email template'leri (React Email)
2. Trigger event'leri (signup, purchase, inactive)
3. Sequence: day 0 → day 1 → day 3 → day 7
4. Branching (clicked vs not)
5. Unsubscribe handling
6. Deliverability monitoring

## Çıktı standardı
- SPF/DKIM/DMARC setup
- Mobile-first email design
- Plain-text fallback
- Unsubscribe + GDPR compliance

## Yaygın hatalar
- SPF/DKIM atlanması (spam'a düşer)
- Unsubscribe one-click yapmamak (yasal zorunluluk)
- Image-only email (text balance gerek)

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
