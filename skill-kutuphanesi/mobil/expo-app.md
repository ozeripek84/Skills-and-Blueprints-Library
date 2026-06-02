---
name: expo-app
description: React Native + Expo ile mobile app — iOS + Android tek codebase.
---

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
