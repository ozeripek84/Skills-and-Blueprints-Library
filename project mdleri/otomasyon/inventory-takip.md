---
description: Stok/envanter takip otomasyonu — alert, reorder, multi-warehouse.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /otomasyon:inventory-takip


# Inventory Tracking

## Ne zaman
E-ticaret/üretim, stok yönetimi gerekli.

## Stack
n8n + Shopify/custom DB + Slack/Email alerts

## Süreç
1. Stok seviyesi DB
2. Trigger: order placed → stock decrement
3. Threshold check (low stock alert)
4. Auto-reorder PO (supplier'a email)
5. Multi-warehouse routing
6. Daily summary (top movers, dead stock)

## Çıktı standardı
- Real-time accuracy
- Multi-channel sync (Shopify + offline)
- Reorder suggestion (sales velocity'ye göre)

## Yaygın hatalar
- Race condition (2 sipariş aynı anda)
- Negative stock allow (oversold)
- Supplier lead time hesaplanmamış

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
