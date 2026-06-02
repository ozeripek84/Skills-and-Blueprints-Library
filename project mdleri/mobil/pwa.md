---
description: Progressive Web App — install, offline, push notifications, browser tabanlı.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /mobil:pwa


# Progressive Web App

## Ne zaman
Native app yerine hızlı, ucuz alternatif.

## Stack
Next.js + next-pwa + Workbox

## Süreç
1. manifest.json
2. Service worker (Workbox)
3. Offline fallback page
4. Add to Home Screen prompt
5. Push notifications (Web Push API)
6. Background sync

## Çıktı standardı
- Lighthouse PWA score 100
- Offline ana sayfa açılıyor
- "Install app" prompt
- iOS Safari uyumlu

## Yaygın hatalar
- iOS PWA limitations (push notif iOS 16.4+)
- Service worker cache stale
- Manifest icon sizes (512x512 zorunlu)

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
