---
description: Kuaför/salon yönetim — randevu, müşteri, stok, hesap.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:kuafor-salon


# Salon Management

## Ne zaman
Kuaför, güzellik salonu.

## Stack
Next.js + Supabase + thermal printer

## Süreç
1. Personel + uzmanlık
2. Hizmet katalog (süre, fiyat)
3. Randevu (online + walk-in)
4. Müşteri history (saç rengi, tercih)
5. Stok yönetimi (boya, kremler)
6. Komisyon hesabı (personel)
7. Loyalty (10 randevu = 1 free)

## Çıktı standardı
- Mobile randevu
- Personel programı görünür
- Müşteri tercihleri saklı
- Performance per personel

## Yaygın hatalar
- Personel programı çakışması
- Stok min seviye uyarı yok
- Komisyon hesap karmaşık

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
