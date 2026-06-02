---
description: Notion API — database CRUD, sayfa üretimi, embed.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /entegrasyon:notion


# Notion Integration

## Ne zaman
Müşteri Notion'da çalışıyor, sync gerekli.

## Stack
@notionhq/client

## Süreç
1. Internal integration token
2. Database query/create
3. Page create
4. Block manipulation (heading, bullet, code)
5. Property types (text, select, date, relation)
6. Pagination handling

## Çıktı standardı
- Type-safe properties
- Rich text doğru (annotations)
- Bulk operations
- Markdown ↔ Notion blocks

## Yaygın hatalar
- Rate limit 3 req/sn
- Pagination cursor yönetimi
- Property type mismatch (silent fail)

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
