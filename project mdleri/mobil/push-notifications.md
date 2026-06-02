---
description: Push notification — web ve mobile için gönderim sistemi.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /mobil:push-notifications


# Push Notifications

## Ne zaman
User re-engagement, real-time alert.

## Stack
OneSignal / Expo Push / Web Push API + cron

## Süreç
1. Permission isteme (UX'te akıllı timing)
2. Token kaydı (DB)
3. Segmentation (audience filter)
4. Schedule + send
5. Click tracking
6. Unsubscribe handling

## Çıktı standardı
- Permission rate %30+ (smart prompt)
- Open rate %15+
- Personalized content
- Quiet hours respect

## Yaygın hatalar
- İlk girişte permission istemek (kabul oranı düşer)
- Çok sık bildirim (uninstall sebep)
- Time zone yanlış (kullanıcı 03:00'te alarm)

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
