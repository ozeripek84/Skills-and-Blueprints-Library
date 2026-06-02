---
description: E-ticaret sepet + checkout flow — shipping, tax, payment.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /e-ticaret:sepet-checkout


# E-commerce Cart & Checkout

## Ne zaman
Custom e-commerce (Shopify değil).

## Stack
Next.js + Zustand (cart) + Stripe + Supabase

## Süreç
1. Cart state (localStorage + DB sync)
2. Add to cart / quantity
3. Shipping calculator (zone-based)
4. Tax calculation (KDV %20)
5. Promo code system
6. Checkout (one-page ya da multi-step)
7. Order confirmation email

## Çıktı standardı
- Cart persists across session
- Mobile-optimized checkout
- Guest checkout option
- Stock decrement on order

## Yaygın hatalar
- Stock check race condition
- Promo code abuse (rate limit)
- Cart abandonment (recovery email)

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
