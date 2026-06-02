---
description: Discord sunucu için AI bot — moderation, command, AI yardımcı.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /ai-chatbot:discord-bot


# Discord AI Bot

## Ne zaman
Topluluk yönetimi, AI komut, sosyal yardımcı.

## Stack
Node.js + discord.js v14 + Anthropic

## Süreç
1. Discord application oluştur, bot user
2. Slash commands register
3. Event listeners (messageCreate, interactionCreate)
4. AI komutlar (`/ask`, `/summarize`, `/moderate`)
5. Auto-moderation (filter, warning system)
6. Database for warnings/users
7. Voice channel support (opsiyonel)

## Çıktı standardı
- Slash commands smooth
- Embed messages (rich format)
- Permission checks (her komut için)
- Cooldown (spam önleme)

## Yaygın hatalar
- Intents'i yanlış set etmek
- Cooldown sistemi yok (spam)
- Long-running command (defer reply kullan)

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
