---
description: Sosyal medya post zamanlama + cross-post + analytics.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /otomasyon:sosyal-medya


# Social Media Scheduler

## Ne zaman
Instagram, Twitter, LinkedIn için içerik takvimi.

## Stack
Buffer/Later API + n8n + custom dashboard

## Süreç
1. Content calendar (Notion/Airtable)
2. Notion'da "Ready to publish" trigger
3. Cross-platform formatting (her platforma adapt)
4. Görsel optimization (her platformun ratio'su)
5. Scheduling
6. Analytics aggregation

## Çıktı standardı
- 1 içerik → 4 platform otomatik
- Platform-specific formatting
- Best time to post (audience'a göre)
- Engagement tracking

## Yaygın hatalar
- Instagram API kısıtlamaları (sadece business account)
- LinkedIn personal vs company API farkı
- Twitter rate limit (yeni API tier'ları pahalı)

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
