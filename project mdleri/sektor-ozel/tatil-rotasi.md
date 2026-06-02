---
description: Tour/seyahat planlayıcı — rota, otel, aktivite.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:tatil-rotasi


# Travel Planner

## Ne zaman
Travel agency, seyahat planlama, tur operatör.

## Stack
Next.js + Mapbox + booking APIs

## Süreç
1. Destinations DB
2. Tour package (multi-day itinerary)
3. Hotel options
4. Activities + booking
5. Map visualization
6. PDF itinerary export
7. Customer journey share

## Çıktı standardı
- Visual map itinerary
- Day-by-day plan
- Cost breakdown
- Mobile-friendly

## Yaygın hatalar
- Hotel API entegrasyonu (her birinin formatı farklı)
- Currency conversion timing
- Tour image bandwidth

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
