---
description: n8n üzerinde tekrar eden iş akışlarını otomatize eder.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /otomasyon:n8n-workflow


# n8n Workflow Builder

## Ne zaman
Müşterinin manuel tekrarlayan işlerini otomatize etmek.

## Stack
n8n Cloud / Self-hosted

## Süreç
1. Tetikleyici seç (webhook, schedule, app event)
2. Akış adımları (transform, filter, branch)
3. Hata yönetimi (on error: continue)
4. Credentials güvenli saklama
5. Test data ile test
6. Production'a alma + monitoring

## Çıktı standardı
- JSON export edilmiş
- README ile teslim
- Credential listesi (env values)
- Monitoring dashboard linki

## Yaygın hatalar
- Hard-coded credentials
- 50 node'luk dev workflow (5 küçüğe böl)
- Rate limit unutmak

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
