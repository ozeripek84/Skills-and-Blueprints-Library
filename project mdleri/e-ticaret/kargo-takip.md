---
description: Kargo entegrasyonu (Türkiye) — Yurtiçi, MNG, Aras, vb.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /e-ticaret:kargo-takip


# Shipping Integration (TR)

## Ne zaman
TR e-commerce, otomatik kargo etiketi + takip.

## Stack
Yurtiçi/MNG/Aras API + Shippo (uluslararası)

## Süreç
1. Kargo şirketi entegrasyon (her birinin SOAP/REST farklı)
2. Etiket üretimi (PDF)
3. Takip kodu kaydı
4. Müşteriye email + SMS
5. Status updates webhook
6. Iade etiketi
7. Çoklu şirket karşılaştırması (rate)

## Çıktı standardı
- Otomatik etiket
- Tracking link working
- SMS notify (Türkiye için kritik)
- Iade kolayı

## Yaygın hatalar
- Adres format farklı her API
- Test/canlı mode karıştırma
- Tracking webhook gelmiyor (polling fallback)

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
