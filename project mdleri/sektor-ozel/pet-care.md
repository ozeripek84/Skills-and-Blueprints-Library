---
description: Veteriner / pet sitter / pansion — randevu, hasta dosyası.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:pet-care


# Pet Care Management

## Ne zaman
Veteriner, pet sitter, pansion.

## Stack
Next.js + Supabase

## Süreç
1. Pet profile (cins, yaş, alerji)
2. Sahip bilgisi
3. Randevu sistemi
4. Aşı takibi (otomatik hatırlatma)
5. Reçete + ilaç
6. Foto galeri (boarding için)
7. Owner mobile app

## Çıktı standardı
- Aşı reminder (1 ay öncesi)
- Vaccine record export (seyahat için)
- Multi-pet per owner
- Photo updates (sitter)

## Yaygın hatalar
- Aşı takvim hesabı yanlış
- Türkçe pet cinsi taxonomy
- Owner notification spam

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
