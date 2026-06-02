---
description: Anthropic Claude API — messages, tool use, prompt caching.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /entegrasyon:anthropic-api


# Anthropic API

## Ne zaman
Claude'la entegrasyon (chat, tool use, agentic).

## Stack
@anthropic-ai/sdk

## Süreç
1. API key
2. Messages API (streaming)
3. Tool use (function calling)
4. Prompt caching (90% cost reduction)
5. Vision (image input)
6. Computer use (screenshot, click)

## Çıktı standardı
- Streaming smooth
- Tool schemas type-safe
- Prompt cache hit rate >50%
- Multi-modal (text + image)

## Yaygın hatalar
- system param vs message role
- Cache breakpoint yanlış (mutable content cache yok)
- Tool result format yanlış

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
