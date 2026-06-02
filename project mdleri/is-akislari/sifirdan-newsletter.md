---
description: Newsletter business — Substack alternatifi self-hosted.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /is-akislari:sifirdan-newsletter


# Newsletter Business

## Ne zaman
Substack/Beehiiv'den çıkış, kendi platform.

## Stack
Next.js + Resend Audiences + Stripe Subscriptions

## Süreç (1 hafta)
1. Day 1-2: Subscriber + paid tier
2. Day 3: Editor (rich text)
3. Day 4: Email send + archive
4. Day 5: Paywall (paid post)
5. Day 6: Stripe + portal
6. Day 7: Migration (Substack import)

## Çıktı standardı
- 99%+ inbox placement
- Paywall smooth
- Subscriber management portal
- Sender reputation kuruldu

## Yaygın hatalar
- Sender reputation cold-start
- Paywall preview eksik
- Migration data loss

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
