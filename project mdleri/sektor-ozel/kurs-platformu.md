---
description: Online kurs platformu — video, quiz, sertifika, drip content.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:kurs-platformu


# Course Platform (LMS)

## Ne zaman
Eğitmen, kendi kursunu satıyor.

## Stack
Next.js + Mux (video) + Stripe + Supabase

## Süreç
1. Course → modules → lessons
2. Video hosting (Mux ya da Cloudflare Stream)
3. Drip content (zaman bazlı kilit)
4. Quiz/assignment
5. Progress tracking
6. Sertifika PDF
7. Discussion forum

## Çıktı standardı
- Mobile video playback
- Adaptive bitrate
- Transcript/subtitle
- Course completion certificate

## Yaygın hatalar
- Direct video file (CDN cost)
- DRM yok (piracy)
- Drip content date timezone

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
