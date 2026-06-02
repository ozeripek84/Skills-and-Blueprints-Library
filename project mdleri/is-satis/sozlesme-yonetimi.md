---
description: Contract management — template, e-imza, repository.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /is-satis:sozlesme-yonetimi


# Contract Management

## Ne zaman
Çok sözleşme imzalayan ekipler.

## Stack
DocuSign API ya da custom + DB

## Süreç
1. Template kütüphanesi
2. Variable fill (müşteri, tutar)
3. Send for signature
4. Status tracking
5. Storage (long-term)
6. Renewal alerts
7. Audit trail

## Çıktı standardı
- Multi-party sign
- Mobile signing
- Search across contracts
- Compliance audit ready

## Yaygın hatalar
- Storage encrypted değil
- Renewal alert eksik
- Version history kayıp

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
