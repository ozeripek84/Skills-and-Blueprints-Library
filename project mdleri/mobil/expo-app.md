---
description: React Native + Expo ile mobile app — iOS + Android tek codebase.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /mobil:expo-app


# Expo Mobile App

## Ne zaman
iOS + Android için native app ihtiyacı.

## Stack
Expo SDK 50+ + React Native + Tamagui/NativeWind + Expo Router

## Süreç
1. `npx create-expo-app`
2. Expo Router (file-based routing)
3. Auth (Supabase / Clerk Expo)
4. Native features (Camera, Location, Notifications)
5. Build (EAS Build)
6. Submit (App Store / Play Store)

## Çıktı standardı
- iOS + Android paralel test
- Push notifications
- Offline mode (Tanstack Query persistent cache)
- Deep linking

## Yaygın hatalar
- Expo Go limitations (custom native modules için Dev Client)
- iOS submission (TestFlight + review delay)
- Bundle size (assets optimize)

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
