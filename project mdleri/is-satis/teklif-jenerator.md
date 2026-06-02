---
description: Profesyonel teklif jeneratörü — şablon, fiyat, e-imza.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /is-satis:teklif-jenerator


# Proposal Generator

## Ne zaman
Müşteriye fiyat teklifi göndermek.

## Stack
Next.js + PDF gen (Puppeteer) + DocuSign / HelloSign

## Süreç
1. Template kütüphanesi
2. Variable substitution (müşteri adı, fiyat)
3. Pricing table builder
4. Terms + conditions
5. PDF preview
6. E-signature (e-imza ya da basic)
7. Tracking (açıldı, imzalandı)

## Çıktı standardı
- Branded PDF
- E-imza legal
- Send tracking (open notification)
- Version history

## Yaygın hatalar
- Brand inconsistent
- Pricing math hatası (otomatik kontrol)
- E-imza fallback yok

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
