---
name: react-native
description: Bare React Native (Expo değil) — custom native module gerekirse.
---

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
