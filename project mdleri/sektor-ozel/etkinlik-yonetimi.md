---
description: Event management — bilet, check-in, sponsor, networking.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:etkinlik-yonetimi


# Event Management

## Ne zaman
Konferans, workshop, meetup.

## Stack
Next.js + Stripe + QR code + Supabase

## Süreç
1. Event detay sayfası
2. Bilet tipleri (early bird, VIP, group)
3. Stripe checkout
4. QR code üretimi (her ticket için)
5. Check-in (mobile scanner)
6. Speaker / agenda yönetimi
7. Networking (attendee list)

## Çıktı standardı
- Mobile check-in app
- Real-time attendee dashboard
- Refund policy
- GDPR compliant

## Yaygın hatalar
- QR duplicate scan handling
- Network kesintisi check-in kaybı
- Privacy (attendee list public)

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
