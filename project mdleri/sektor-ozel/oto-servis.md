---
description: Oto servis yönetim — araç, müşteri, iş emri, parça.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:oto-servis


# Auto Service Management

## Ne zaman
Oto servis, lastikçi, yıkamacı.

## Stack
Next.js + Supabase

## Süreç
1. Araç DB (plaka, marka, model)
2. Müşteri (araç sahibi)
3. İş emri (yapılan işler, parça)
4. Parça stoku
5. Servis history
6. Faturalama + KDV
7. Hatırlatma (yağ değişimi 6 ay sonra)

## Çıktı standardı
- VIN/plaka arama hızlı
- Parça katalog (OEM)
- Mobile için tablet UI
- SMS hatırlatma

## Yaygın hatalar
- Parça stok eksik tracking
- Servis history search slow
- KDV hesabı yanlış

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
