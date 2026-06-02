---
description: Slack workspace'ine entegre AI bot — komutlar, mention, DM.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /ai-chatbot:slack-bot


# Slack AI Bot

## Ne zaman
Şirket içi otomasyon, takım sorularına cevap, summary.

## Stack
Next.js + Slack Bolt SDK + Anthropic

## Süreç
1. Slack App oluştur (api.slack.com)
2. Bot scopes: chat:write, im:history, app_mentions:read
3. Event subscription endpoint
4. Slash command (`/ask`, `/summarize`)
5. Mention handler (`@bot`)
6. DM support
7. Thread context (önceki mesajları okusun)

## Çıktı standardı
- Mention'a 3sn altı response
- Markdown → Slack mrkdwn dönüşüm
- Threaded reply
- Modal forms (gerektiğinde)

## Yaygın hatalar
- Event endpoint timeout (3sn limit, async kullan)
- Bot kendi mesajına cevap vermek (loop)
- Rate limit (workspace başına)

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
