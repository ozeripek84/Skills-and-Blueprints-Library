---
description: Sıfırdan e-ticaret site (Shopify değil) — custom build.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /is-akislari:sifirdan-eticaret


# Custom E-commerce Build

## Ne zaman
Niche e-commerce, Shopify limitations.

## Stack
Next.js + Stripe + Supabase + Algolia

## Süreç (2 hafta)
1. Week 1:
   - Product catalog
   - Cart + checkout
   - Stripe integration
   - Order management
2. Week 2:
   - Customer accounts
   - Search + filters
   - SEO
   - Marketing pages
   - Email automation
   - Analytics

## Çıktı standardı
- 100+ products supported
- <2s page load
- PCI compliant (Stripe handles)
- Mobile checkout 60%+ conversion

## Yaygın hatalar
- Shopify daha hızlı kurulurdu (custom seçim için iyi sebep gerek)
- SEO unutmak
- Mobile checkout test edilmemiş

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
