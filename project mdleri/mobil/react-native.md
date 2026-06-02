---
description: Bare React Native (Expo değil) — custom native module gerekirse.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /mobil:react-native


# React Native (Bare)

## Ne zaman
Custom native module, eski codebase, fine-grained control.

## Stack
React Native CLI + native modules

## Süreç
1. `npx react-native init`
2. CocoaPods (iOS), Gradle (Android)
3. Linking native modules
4. Navigation (React Navigation)
5. State (Redux / Zustand)
6. Native debug (Flipper)
7. Build (Xcode / Android Studio)

## Çıktı standardı
- Hot reload çalışıyor
- iOS simulator + Android emulator
- TypeScript setup
- ESLint + Prettier

## Yaygın hatalar
- Native module link sonrası clean build gerekiyor
- Pod install fail (M1 Mac için arch -x86_64)
- Gradle sürümü compatibility

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
