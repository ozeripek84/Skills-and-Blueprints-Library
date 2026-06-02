---
description: Podcast → transcript → blog post → social clips otomasyonu.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /icerik-pazarlama:podcast-transcript


# Podcast Repurposing

## Ne zaman
Podcast içeriği multi-channel content'e çevirme.

## Stack
Whisper API + Anthropic + AssemblyAI (clip detection)

## Süreç
1. Audio upload
2. Whisper transcribe (timestamp'li)
3. Anthropic ile özet + key topics
4. Blog post draft
5. Tweet thread (5-10 tweet)
6. Quote graphics (Canva API)
7. Highlight clips (15-30 sn)

## Çıktı standardı
- 1 saatlik podcast → 5+ asset
- Auto blog post seo-friendly
- Audiogram clips (mobile)
- Speaker diarization

## Yaygın hatalar
- Long audio Whisper limiti (chunk)
- Hallucinated timestamps (verify)
- Brand voice tutturmak (system prompt detaylı)

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
