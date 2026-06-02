---
description: İş ilan platformu — listing, başvuru, employer dashboard.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:job-board


# Job Board

## Ne zaman
Niche job board, hiring marketplace.

## Stack
Next.js + Supabase + Algolia

## Süreç
1. Employer dashboard (post jobs)
2. Job listing (filtreli arama)
3. Applicant tracking
4. Resume upload
5. Apply flow (form ya da redirect)
6. Email notifications
7. Featured jobs (paid)

## Çıktı standardı
- Search with location radius
- Mobile apply
- Resume parser (PDF text extract)
- Spam filtering

## Yaygın hatalar
- Resume upload spam
- Location distance hesabı
- Job expiry sonrası SEO 404

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
