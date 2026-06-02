---
description: Randevu booking — kuaför, klinik, danışman, salon.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:randevu-sistemi


# Appointment Booking

## Ne zaman
Hizmet veren işletmeler için online randevu.

## Stack
Next.js + Supabase + Calendly-vari custom

## Süreç
1. Service catalog (süre, fiyat)
2. Provider scheduling (kim hangi saatte)
3. Public booking page
4. Customer info form
5. Confirmation (email + SMS)
6. Reminder (24h öncesi)
7. Cancel/reschedule
8. No-show tracking

## Çıktı standardı
- Mobile-first booking
- Buffer time (randevular arası)
- Multi-provider support
- Recurring appointments

## Yaygın hatalar
- Çift booking (race condition)
- Timezone hatası
- Reminder göndermemek

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
