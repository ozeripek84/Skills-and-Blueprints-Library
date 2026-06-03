---
tags: [referans, arac, claude-design, tasarim, performans, workflow]
guncelleme: 2026-06-03
---

# 🖌️ Claude Design — Tasarım Çıkar → Claude Code'da Optimize Et (referans)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Claude Design = Claude Code'dan **ayrı**, tasarım-odaklı ürün. Prompt'tan premium UI üretir. **Güçlü: tasarım. Zayıf: performans.** En değerli kısım: Claude Design ile tasarla → **export → Claude Code'da optimize et**. (Yıldız Dikme videosu.)

## Güçlü (tasarım)
- Premium, markayı hissettiren arayüz; renk geçişleri, fontlar.
- **UI kit çıkarır:** logo (dark + light + alt versiyon), renk paleti, butonlar, form input'ları, tag'ler, display ölçekleri.
- Temiz **komponent ayrımı**; `assets / components / uploads` klasör yapısı.
- Stil/font/renk paletini hızlı çıkarır; görsel referans + video verebilirsin.

## Zayıf (teknik)
- **Performans düşük** (örnekte Lighthouse **%71**) — optimizasyon yok: loading ekranı yok, görsel optimize edilmemiş, açılış yavaş.
- **Animasyon yok** (varsayılan).
- **Responsive varsayılan değil** — açıkça "tüm cihazlara uyumlu/responsive yap" demen gerekir.
- Accessibility / best-practice / SEO skorları yüksek; sadece **performans** geride.

## ⭐ Asıl iş akışı (Yıldız'ın yöntemi)
1. **Claude Design**'da ana tasarımı çıkar: stil, font, renk paleti, UI kit, komponentler.
2. **Share → download** ile projeyi dosya olarak indir.
3. **Claude Code**'a at → performansı düzelt: **loading ekranı, görsel optimizasyonu, animasyon, responsive cila.**
> "Tasarım Claude Design'da, mühendislik/optimizasyon Claude Code'da." Çıktıyı doğrudan canlıya **alma**; önce bu dönüşümü yap.

## Arka plan videosu (asset)
- Tam ekran, sürekli oynayan video → premium his (Rolex de aynısını yapıyor).
- Üretim: **Adobe Firefly** (VO modeli) — **ilk kare + son kare → ~8sn** (frame-pair tekniği). İngilizce prompt. İlham: AI video prompt paylaşım siteleri (telif için promptu değiştir).
- Alternatif video/görsel üreticiler: [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)|Higgsfield]], ElevenLabs. (Aynı frame-pair mantığı: [[Blueprints MOC|scroll-narrative-site]].)

## Prompt ipuçları (Yıldız çizgisi)
Detaylı **İngilizce** ilk prompt · görselleri (AI üretimi saat foto vb.) ver · "premium, dark theme" · CTA (Shop Now) · küçük düzeltmeleri Türkçe ("ortadaki yazıyı kaldır, butonları köşeye al") · **responsive'i açıkça iste**. → [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]].

## İlişkili
- 📐 [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]] · 🧱 [[Blueprints MOC|scroll-narrative-site]] (video-arka-plan) · 🎨 [[Claude + Canva Connector — Tasarım (referans)]] (alternatif tasarım yolu).
- 📄 Bu vault'un ana sayfası için hazırlanan [[Tasarım Brief — Vault Ana Sayfa]] — aynı "Claude Design'a brief ver" mantığı.
