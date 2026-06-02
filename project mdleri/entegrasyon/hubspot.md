---
description: HubSpot CRM entegrasyon — contacts, deals, companies.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /entegrasyon:hubspot


# HubSpot CRM

## Ne zaman
Müşteri HubSpot kullanıyor, lead/deal sync.

## Stack
@hubspot/api-client

## Süreç
1. Private app + token
2. Contact CRUD
3. Deal pipeline yönetimi
4. Custom properties
5. Webhooks (event subscriptions)
6. Workflows trigger
7. Email send

## Çıktı standardı
- Contact deduplication
- Deal stage automation
- Activity log
- Custom property sync

## Yaygın hatalar
- API limit per app (100 req/10sn)
- Property internal name vs label
- Pipeline stage ID hardcode

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
