---
description: Google Sheets API entegrasyon — read/write, formula, format.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /entegrasyon:google-sheets


# Google Sheets Integration

## Ne zaman
Müşteri Excel/Sheets kullanıyor, oraya sync gerekiyor.

## Stack
Google Sheets API v4 + Service Account

## Süreç
1. GCP project + Sheets API enable
2. Service account + JSON key
3. Sheet'i service account email'iyle paylaş
4. Read: get range
5. Write: append/update
6. Format (color, font, formula)
7. Multiple sheet/tab

## Çıktı standardı
- Bulk operations (single API call)
- Formula support
- Conditional formatting
- Real-time sync

## Yaygın hatalar
- Per-cell write (rate limit)
- Service account permission unutmak
- Quota: 60 req/dakika per user

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
