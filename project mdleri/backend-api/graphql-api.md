---
description: GraphQL API — schema-first, resolvers, subscriptions.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /backend-api:graphql-api


# GraphQL API

## Ne zaman
Complex client queries, real-time, mobile.

## Stack
Yoga/Apollo Server + Pothos (code-first) + Prisma

## Süreç
1. Schema tasarımı (types, queries, mutations)
2. Resolvers (DataLoader ile N+1 çöz)
3. Auth context
4. Subscriptions (websocket)
5. Federation (gerekirse)
6. Playground/Apollo Studio

## Çıktı standardı
- Type-safe (codegen)
- DataLoader her relationship'te
- Auth her resolver'da
- Subscription stable

## Yaygın hatalar
- N+1 (DataLoader şart)
- Public schema (introspection)
- Mutation'lar idempotent değil

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
