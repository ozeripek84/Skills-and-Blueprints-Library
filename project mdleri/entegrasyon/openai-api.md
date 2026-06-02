---
description: OpenAI API entegrasyon — GPT, embeddings, function calling.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /entegrasyon:openai-api


# OpenAI API

## Ne zaman
LLM features, embeddings, function calling, transcription.

## Stack
openai SDK

## Süreç
1. API key (Org account)
2. Chat completions (streaming)
3. Function calling (tools)
4. Embeddings (text-embedding-3)
5. Whisper (audio transcribe)
6. DALL-E (image generation)
7. Cost tracking (token counting)

## Çıktı standardı
- Streaming smooth
- Function call schema clean
- Cost monitor (per request)
- Fallback (rate limit)

## Yaygın hatalar
- API key client-side
- Token counting yanlış (tiktoken kullan)
- Cost runaway

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
