---
description: OAuth 2.0 provider — kendi ürünün için "Sign in with X" hosting.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /backend-api:oauth-provider


# OAuth Provider

## Ne zaman
Diğer uygulamaların senin servisin üzerinden auth yapması.

## Stack
node-oidc-provider / custom + Postgres

## Süreç
1. Client registration (client_id, secret)
2. Authorize endpoint (consent screen)
3. Token endpoint (code → access_token)
4. UserInfo endpoint
5. Revocation endpoint
6. Refresh token flow

## Çıktı standardı
- OIDC compliant
- PKCE support
- Scope-based permission
- Audit log

## Yaygın hatalar
- PKCE skip (mobile için zorunlu)
- Refresh rotation yok
- Scope kontrolü API'da unutulmuş

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
