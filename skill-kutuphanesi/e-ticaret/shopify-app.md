---
name: shopify-app
description: Shopify app development — public ya da private app.
---

# Shopify App

## Ne zaman
Shopify mağazası için custom feature.

## Stack
Shopify CLI + Remix + Polaris UI

## Süreç
1. Shopify Partner hesabı
2. CLI ile app create (Remix template)
3. App scopes belirle
4. Embed in admin
5. Webhook subscriptions
6. App Bridge for navigation
7. App Store submission

## Çıktı standardı
- Embedded experience
- Polaris design system
- Webhook reliable
- App Store guidelines uyumlu

## Yaygın hatalar
- Scope çok geniş (review reject)
- Session token verify atlanması
- Online vs offline access token karıştırmak
