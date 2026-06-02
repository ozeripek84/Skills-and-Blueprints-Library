---
description: QR code üretici — link, vCard, WiFi, ödeme.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /araclar:qr-kod


# QR Code Generator

## Ne zaman
Restaurant menü, business card, etkinlik bileti, ödeme.

## Stack
qrcode npm + Next.js

## Süreç
1. Input form (text, URL, vCard, WiFi)
2. Custom design (color, logo)
3. Error correction level
4. Download (PNG, SVG, PDF)
5. Bulk generation (CSV input)
6. Tracking (link redirect + analytics)

## Çıktı standardı
- High contrast (scannable)
- Logo embed (max %30 area)
- Multi-format export
- Tracked URL (clicks, location)

## Yaygın hatalar
- Logo çok büyük (scan fail)
- Low error correction
- Long URL (use shortener)

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
