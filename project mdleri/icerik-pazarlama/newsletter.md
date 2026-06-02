---
description: Newsletter platformu (Substack alternatifi) — yazar dashboard, abone.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /icerik-pazarlama:newsletter


# Newsletter Platform

## Ne zaman
Self-hosted newsletter (Substack ücretten kaçınmak).

## Stack
Next.js + Resend Audiences + Stripe (paid sub)

## Süreç
1. Subscriber model (free / paid tiers)
2. Editor (Tiptap / Plate.js)
3. Email send (Resend)
4. Archive page (web view)
5. Paywall (paid post)
6. Analytics (open, click, growth)
7. Discovery page

## Çıktı standardı
- Mobile reading optimal
- Plain-text fallback
- 99% inbox placement
- Subscription management

## Yaygın hatalar
- HTML-only email (plain text şart)
- Sender reputation kuruluş eksik (warm-up)
- Paid → free downgrade flow

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
