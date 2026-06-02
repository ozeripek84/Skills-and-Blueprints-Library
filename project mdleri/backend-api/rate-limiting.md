---
description: API rate limiting — Upstash Redis ile sliding window.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /backend-api:rate-limiting


# Rate Limiting

## Ne zaman
Public API, login attempts, expensive endpoints.

## Stack
Upstash Redis + Vercel Edge

## Süreç
1. Strategy seç (sliding window / token bucket)
2. Identifier (IP / user_id / API key)
3. Limit per endpoint
4. Headers: X-RateLimit-Limit, Remaining, Reset
5. 429 response with Retry-After
6. Tier-based limits (free vs paid)

## Çıktı standardı
- 1ms altı check (Edge)
- Headers RFC compliant
- Burst tolerance
- Whitelist (internal services)

## Yaygın hatalar
- DB-based rate limit (yavaş)
- IP-only (proxy/CDN sorun)
- 429'da Retry-After yok

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
