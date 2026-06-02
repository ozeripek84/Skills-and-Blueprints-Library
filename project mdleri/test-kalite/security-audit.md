---
description: Security audit — OWASP top 10, dependency scan, secrets.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /test-kalite:security-audit


# Security Audit

## Ne zaman
Pre-launch, periodic, post-incident.

## Stack
Snyk / Semgrep / OWASP ZAP

## Süreç
1. Dependency scan (npm audit)
2. SAST (static analysis)
3. Secret scanning (history)
4. OWASP Top 10 check
5. Auth/authz review
6. Input validation
7. Rate limiting

## Çıktı standardı
- 0 critical vulnerabilities
- Secrets rotated
- All inputs validated
- HTTPS everywhere

## Yaygın hatalar
- "It works" mindset (security afterthought)
- Default credentials production
- SQL injection (parameterized queries)

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
