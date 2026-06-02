---
description: WhatsApp üzerinde çalışan AI chatbot (Meta Cloud API).
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /ai-chatbot:whatsapp-bot


# WhatsApp AI Bot

## Ne zaman
Müşteri hizmeti, lead qualification, support otomasyonu.

## Stack
Next.js + Meta WhatsApp Business Cloud API + Anthropic

## Süreç
1. Meta Business hesabı + WhatsApp Business
2. Webhook endpoint (mesaj geldiğinde tetiklenir)
3. Anthropic ile cevap üret
4. Cloud API üzerinden geri gönder
5. Conversation state (Redis/Supabase)
6. Template message (24 saat kuralı için)
7. Handoff to human (operator gerekirse)

## Çıktı standardı
- 5 saniye altı response
- 24-saat conversation window doğru yönetilmiş
- Opt-out komutu
- Human handoff flag

## Yaygın hatalar
- Template message approval'sız broadcast (account ban)
- Webhook signature verify etmemek
- Rate limit (1000 msg/saniye)

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
