---
description: Zapier üzerinde Zap tasarımı (müşteri zaten Zapier kullanıyorsa).
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /otomasyon:zapier-workflow


# Zapier Workflow

## Ne zaman
Müşteri zaten Zapier kullanıyor, n8n'e geçemiyorlar.

## Stack
Zapier (Starter / Pro / Team plan)

## Süreç
1. Trigger app + event seç
2. Action steps
3. Filter steps
4. Path (branching) gerekirse
5. Formatter steps (data transform)
6. Test her step
7. Turn on

## Çıktı standardı
- Çalıştığı doğrulanmış (3 farklı senaryo)
- Naming convention temiz
- Error notification (Slack/email)

## Yaygın hatalar
- Tasks usage'ı (Pro 750/ay limit)
- Trigger polling delay'i (15 dakika)
- Multi-step Pro+ gerektirir

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
