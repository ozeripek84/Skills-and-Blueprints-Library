---
description: Diş kliniği yönetim — hasta dosyası, randevu, faturalama.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:dis-klinigi


# Dental Practice Management

## Ne zaman
Diş hekimi / klinik yönetimi.

## Stack
Next.js + Supabase + HIPAA-compliant storage

## Süreç
1. Hasta dosyası (anamnez, alerji, ilaç)
2. Tedavi planı + maliyet
3. Randevu sistemi
4. SGK/özel sigorta entegre
5. X-ray / foto upload
6. Reçete üretimi
7. Faturalama

## Çıktı standardı
- KVKK uyumlu (sağlık verisi)
- Hasta portal (kendi randevuları görsün)
- Treatment history kronolojik
- E-imza (recete)

## Yaygın hatalar
- Sağlık verisi public bucket
- KVKK rıza alınmamış
- Backup eksik (kritik veri)

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
