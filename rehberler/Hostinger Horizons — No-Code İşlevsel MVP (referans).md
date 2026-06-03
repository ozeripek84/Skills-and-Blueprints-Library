---
tags: [referans, arac, no-code, mvp, backend, hosting]
guncelleme: 2026-06-03
---

# 🏗️ Hostinger Horizons — No-Code İşlevsel MVP (referans)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Kod yazmadan, prompt vererek **işlem yapabilen** web uygulaması (sadece landing değil): login, kullanıcı kaydı, dashboard, rezervasyon, **otomatik mail**. (Yıldız Dikme videosu — *iş birliği/sponsorlu*.)

## En kritik fark: entegre backend
Claude Code ile site yaparken **backend/DB'yi sen kurarsın** (Supabase bağla vb. — "elini kirletmen" gerekir). Horizons'ta **backend hazır (Hostinger'in kendi backend'i)** — ayrı hesap/DB bağlamadan, sadece prompt vererek login + veri + mail çalışır. İşlevsel MVP'yi en hızlı kuran yol.

## Ne üretir
- React tabanlı, temiz komponent yapılı uygulama (kodu görebilirsin).
- Login/kayıt, dashboard, rezervasyon akışı, otomatik mail bildirimi.
- Ödeme (iyzico/Stripe) bağlanabilir. WordPress/Node/PHP seçenekleri de var.
- Yayınla → geçici random URL ya da kendi domain'in.

## Fiyat (kabaca, videodan)
Kredi bazlı (~70 kredilik plan; örnek site **6 kredi**). 1 aylık veya 12 aylık. "yıldızdikme" kupon = indirim (⚠️ **affiliate** — sponsorlu video).

## Ne zaman Horizons, ne zaman Claude Code?
| İhtiyaç | Seç |
|---|---|
| Hızlı işlevsel MVP, backend kurmak istemiyorum | **Horizons** |
| Kod sahipliği, taşınabilirlik, özel backend, full kontrol | **Claude Code + Supabase** ([[AI Uygulaması — Teknoloji Seçimi Handbook]]) |
| Sürekli marka içerik hattı | [[İçerik Fabrikası — Referans Sistem]] |

## ⚠️ Dürüst notlar
- **Sponsorlu/iş birliği** video — coşkuyu fiyatla.
- **Platform lock-in:** backend Hostinger'da; kodu Claude Code'daki gibi tam "sahiplenip" başka yere taşımak aynı kolaylıkta değil.
- Yorumlarda haklı sorular: **admin panel** (siteyi sonradan yönetme) ve **SEO** tarafı ayrı kurulmalı.
- Prompt ipuçları aynı: detaylı **İngilizce** ilk prompt, **"yaptığın tasarımı değiştirme"**, **kısa promptlar** (uzun = halüsinasyon). → [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]].

## Kullanım fikirleri
Spor salonu rezervasyon, danışmanlık sayfası, küçük işletme rezervasyon/iletişim formları, login'li küçük portallar.
