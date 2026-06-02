---
description: State yönetimi — Zustand, Context, server state.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /frontend:state-management


# State Management

## Ne zaman
Complex client state.

## Stack
Zustand (client) + TanStack Query (server)

## Süreç
1. Server state vs client state ayır
2. TanStack Query: server state
3. Zustand: client-only state
4. URL state (search params)
5. Form state (react-hook-form)
6. Persist (localStorage)
7. Devtools

## Çıktı standardı
- Server state cached + invalidated
- Optimistic updates
- Loading + error states
- Store split by domain

## Yaygın hatalar
- Redux for everything (overkill)
- Server data in Zustand (cache invalidation hell)
- Provider hell (Zustand fixes)

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
