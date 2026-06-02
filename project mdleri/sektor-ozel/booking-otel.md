---
description: Otel/pansiyon booking — oda, fiyat, müsaitlik, kanal yönetim.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:booking-otel


# Hotel Booking System

## Ne zaman
Butik otel, pansiyon, Airbnb tarzı.

## Stack
Next.js + Supabase + iCal sync

## Süreç
1. Oda tipleri + fiyat (sezona göre)
2. Müsaitlik takvimi
3. Booking flow (date picker → check)
4. Stripe payment
5. iCal sync (Booking.com, Airbnb)
6. Misafir bilgi (KVKK + bildirim sistemi TR için)
7. Review system

## Çıktı standardı
- Müsaitlik real-time
- Channel sync (overbooking yok)
- Multi-language
- TR Polis bildirim entegre

## Yaygın hatalar
- Channel conflict (overbook)
- Date timezone karışıklığı
- TR misafir bildirim sistemi unutmak

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
