---
description: Postgres database schema tasarımı — normalize, index, relations.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /backend-api:database-design


# Database Schema Design

## Ne zaman
Yeni proje DB design ya da mevcut'u optimize etme.

## Stack
Postgres + Supabase + Drizzle/Prisma

## Süreç
1. Entity-relationship diagram
2. Tablolar + columns + types
3. Foreign keys + cascade rules
4. Index'ler (query pattern'a göre)
5. RLS policies (Supabase)
6. Migrations (sequential, reversible)
7. Seed data (dev/test)

## Çıktı standardı
- 3NF (gerektikçe denormalize)
- All FK indexed
- Composite index'ler optimize
- Migration history clean

## Yaygın hatalar
- Tüm column'a index (yazma yavaş)
- UUID primary key (büyük tablolarda BIGINT)
- Cascade delete tehlikeli (soft delete kullan)

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
