---
description: Restoran POS — sipariş, masa, mutfak, ödeme.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:restoran-pos


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
