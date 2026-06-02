---
name: restoran-pos
description: Restoran POS — sipariş, masa, mutfak, ödeme.
---

# Restaurant POS

## Ne zaman
Restoran/cafe için sipariş yönetimi.

## Stack
Next.js + Supabase + thermal printer (USB/network)

## Süreç
1. Menu management
2. Table layout + orders
3. Kitchen display system
4. Payment (cash, card, hesap)
5. Receipt printer (thermal)
6. Reports (daily, item performance)
7. Loyalty (telefon ile)

## Çıktı standardı
- Tablet-optimized
- Offline mode (sync sonrası)
- Multi-printer
- Z report (gün sonu)

## Yaygın hatalar
- Internet kesintisinde sipariş kaybı
- Yazıcı driver Türkçe karakter
- Multi-table state karışıklığı
