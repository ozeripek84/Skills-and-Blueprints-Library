---
tags: [rehber, web-sitesi, tasarim, stitch, claude-code, mcp, ucretsiz, referans]
guncelleme: 2026-07-17
---

# 🧵 Stitch Metodu — Google Stitch + Claude Code (MCP)

> [[00 HOME|🏠 Ana sayfaya dön]] · [[Web Sitesi Yapımı — MOC|🌐 Web Sitesi MOC]]
> **Sorun:** Claude Code kodda güçlü, **tasarımda zayıf** (renk/boşluk/kompozisyonu metinden tahmin eder). **Çözüm:** Tasarımı önce **Google Stitch**'te (ücretsiz, Google'a ait AI UI aracı) görsel olarak netleştir, sonra **MCP** ile Claude Code'a hazır tasarım olarak ver → Claude tahmin etmez, tasarımı birebir koda döker.
> Burhan Kocabıyık'ın "Web Sitesi Kiti v1" + YouTube short'undan; MCP adımı web'den doğrulandı (aşağıda). Ücretsiz tercihe uygun ([[ucretsiz-arac-tercihi]]).

## Dört adım, tek akış
1. **Prompt** — web sitesini net bir promptla tanımla (aşağıda hazır).
2. **Stitch** — promptu [Google Stitch](https://stitch.withgoogle.com)'e yapıştır (Google hesabıyla ücretsiz), istersen rakip/beğendiğin sitenin ekran görüntüsünü ekle, tasarımı final hale getir ("şu bölümü değiştir" ile yinele).
3. **MCP → Claude Code** — Stitch'te MCP çıktısını seç, tamamını kopyala.
4. **Terminal** — Claude Code'a yapıştır → tasarıma erişir, kodlar. Gözden geçir, ince ayar, yayınla.

## ✅ MCP adımı — doğrulandı (kit'in söylemediği detay)
- **Gerçek:** Stitch, Claude Code (+ Cursor, Gemini CLI) için **MCP** destekliyor. Tasarımı bir **`DESIGN.md`** (tasarım-sistemi dosyası) olarak verir; Claude Code onu okuyup ürettiği tüm kodu o kurallara (layout, renk, bileşen, token) göre üretir — oturum boyunca tek doğruluk kaynağı.
- **Yedek yöntem (MCP kurmak istemezsen):** `DESIGN.md`'yi **doğrudan** Claude Code'a dosya olarak ver — canlı senkron olmaz ama tek proje için birebir aynı işi görür. (En basit fallback: tasarımın ekran görüntüsü + kısa tarif.)
- **Framework:** Stitch 7 hedefe export ediyor — HTML/CSS, Tailwind, Vue, Angular, React/JSX, Flutter, SwiftUI.

## Hazır Stitch promptu (TR — köşeli parantezleri doldur)
```
# Rol: profesyonel web sitesi tasarımcısı
Aşağıdaki bilgilerle eksiksiz, tutarlı bir web sitesi tasarımı üret:
## İşletme / proje
- Sektör: [sektör]  · Ne yapıyor: [tek cümle]  · Hedef kitle: [kime]
## Marka
- Ton: [modern/samimi/kurumsal/minimal]  · Ana + vurgu rengi: [2 renk/hex]  · Referans: [rakip/beğenilen site görseli]
## Zorunlu bölümler
- Ana sayfa (hero + tek net CTA) · Hizmetler/Ürünler · Hakkımızda · İletişim
## Kurallar
- Mobil öncelikli (masaüstü + mobil ayrı görünüm) · tutarlı bileşen dili (buton/kart/form aynı stil)
- Her sayfada tek net çağrı butonu · gereksiz süsleme yok, okunabilirlik + boşluk önce
```
> İpucu: Sektör + hedef kitleyi ne kadar net yazarsan ilk tasarım o kadar isabetli; referans görsel eklemek tasarımı hızla istediğin yöne çeker.

## Bu metot ne zaman? (MOC içinde yeri)
- **Bu (Stitch):** ücretsiz görsel araçta tasarla → MCP ile Claude Code'a taşı → kod sahipliği. Görsel referansı olmayan "sıradan AI sitesi" sorununu çözer.
- **Fark → [[Claude Design — Tasarım Çıkar, Claude Code'da Optimize Et (referans)]]:** aynı desen (görsel araç → Claude Code) ama farklı araç; Stitch ücretsiz + Google + MCP handoff. İkisi alternatif.
- **Zincir:** [[skill-kutuphanesi/icerik-pazarlama/premium-site-metni|premium-site-metni]] (copy-önce → build prompt) → **Stitch** (görsel tasarım) → **Claude Code** (kod). Metin katmanı bu metodun 1. adımını besler.
- **Tasarım çıtası:** [[$10K Web Sitesi — Claude Code Tasarım İş Akışı]] · `frontend-design` (built-in) · ui-ux-pro-max ile birlikte kullan.

## Kaynak
Burhan Kocabıyık — "Google Stitch + Claude Code Web Sitesi Kiti v1" (PDF) + YouTube short "Google Stitch + Claude Code: Profesyonel Web Sitesi İş Akışı". MCP/DESIGN.md detayı bağımsız web kaynaklarıyla teyit edildi (2026-07-17).
