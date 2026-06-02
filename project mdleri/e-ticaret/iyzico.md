---
description: iyzico ödeme entegrasyonu (Türkiye için yerel alternatif).
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /e-ticaret:iyzico


# iyzico Payment

## Ne zaman
Türkiye, taksit, BKM Express, kart saklama.

## Stack
iyzico SDK + Next.js

## Süreç
1. iyzico merchant hesabı (canlı + test)
2. SDK kurulumu
3. Checkout Form / Direct Payment
4. Taksit seçenekleri
5. 3DS callback
6. Iade flow
7. Webhooks (IPN)

## Çıktı standardı
- TR taksit support (3-9-12 ay)
- BKM Express ekli
- 3DS güvenli
- Refund automatic

## Yaygın hatalar
- Test merchant production'a kullanmak
- Iade için merchant onayı (manuel)
- Currency hatalı (TRY zorunlu)

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
