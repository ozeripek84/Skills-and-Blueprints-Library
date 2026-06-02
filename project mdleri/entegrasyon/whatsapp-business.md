---
description: WhatsApp Business API (Meta Cloud) — broadcast, template, conversation.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /entegrasyon:whatsapp-business


# WhatsApp Business API

## Ne zaman
Müşteri iletişimi, marketing, support.

## Stack
Meta Cloud API + webhook

## Süreç
1. Meta Business + WhatsApp Business
2. Template approval (Meta'dan)
3. Send template (24h dışında)
4. Conversation (24h içinde free-form)
5. Media (image, doc, audio)
6. Buttons + lists (interactive)
7. Webhook for inbound

## Çıktı standardı
- Template approved + multilingual
- Conversation window doğru yönetilmiş
- Opt-out keyword
- Conversation cost optimize

## Yaygın hatalar
- Non-template broadcast (account ban)
- 24h window ihlali
- Test number production'da

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
