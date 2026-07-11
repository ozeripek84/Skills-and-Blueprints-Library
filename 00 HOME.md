---
tags: [moc, home]
guncelleme: 2026-06-02
---

# 🏠 Skills & Blueprints Kütüphanesi — Ana Sayfa

> İkinci beynin **kaynak kütüphanesi**. Yeni bir proje yaparken **önce buraya bakılır**: hazır kullanılabilecek bir skill, command veya blueprint var mı? Varsa kopyalanır, yoksa kendi yolumuza gideriz.
> Bu kütüphane hem **senin** hem **Claude'un** ortak kaynağı. → Claude bu vault'tan nasıl yararlanır: [[Claude için kullanım]]

## 🗺️ Haritalar (buradan gez)

| Harita | İçerik | Adet |
|---|---|---|
| [[Yetenekler MOC]] | TR skill + slash command çiftleri (kategori kategori) | **154** |
| [[Blueprints MOC]] | Hazır uygulama iskeletleri — tek-dosya + çok-dosyalı/klonlanabilir (`/kur` ile kurulur) | **24** |
| [[Dış Kütüphaneler MOC]] | İngilizce GitHub repo'ları — 🏛️ **anthropics/skills** + ⭐ **gstack** + 🧭 **Karpathy** + tasarım (ui-ux-pro-max · impeccable · taste · emilkowalski) + 📣 **marketing-skills** (45) + 🎬 **topview** + 250+ skill | **11 repo** |
| [[Web Sitesi Yapımı — MOC]] | 🌐 Site/web yapımı — yöntem + no-code üreticiler + tasarım, tek çatı | **6 rehber** |

## 📚 Rehberler
- 🌱 [[Sıfırdan Başlangıç — Bu Sistem Nedir]] — **hiç bilgisi olmayan için**. Benzetmelerle, baştan sona, basit. (Buradan başla.)
- [[AI Uygulaması — Teknoloji Seçimi Handbook]] — bir AI uygulamasının her katmanı (frontend, DB, auth, sunucu, VPS, LLM…), farkları, ne zaman hangisi, ve maliyetleri. Şemalı.
- 🧭 [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] — LLM kodlama tuzaklarına karşı 4 ilke (düşün-önce, sadelik, cerrahi, hedef-odaklı). Claude'un çalışma davranışı. (İlk mesajdaki "Karpathy prompt'u")
- 🧬 [[Kendini Geliştiren Skill — 4 Katman (Jarvis-Karpathy yöntemi)]] — statik değil, kendini iyileştiren skill kurma: oluştur → Karpathy disiplini → göz (web) → hafıza+auto-research. (Jarvis nedir + yöntemi)
- 🤖 [[Agent Kurma — BLAST Çerçevesi]] — Claude Code'da kod yazmadan ajan kurma: 4 parça, BLAST, 5 kural, araç bağlama. (Mert videosu)
- 📈 [[Borsa & Trading Prompt Paketi — dürüst kullanım (referans)]] — Claude ile piyasa analizi için 7 prompt + **dürüst uyarı**: canlı veri olmadan fiyat/backtest isteyen promptlar sayı uydurur. Güvenli olanlar senin verinle çalışanlar (portföy, işlem günlüğü). Yatırım tavsiyesi değil.

> 🌐 **Web sitesi mi yapacaksın?** Tüm site/web rehberleri (Yıldız Dikme, $10K, Lovable, Hostinger, Brila, Claude Design) artık tek çatıda: **[[Web Sitesi Yapımı — MOC]]**.

## 📦 Örnekler
- [[ornekler/rusca-cocuk-ebook — Vmeste-veseleye (2-4 yas)|Örnek e-book: «Вместе — веселее!»]] — 2-4 yaş, RU + UA + kafiyeli, sayfa sayfa + görsel promptları.

## 🔌 Bağlı Sistemler (dış projeler — referans)
- 🏭 [[İçerik Fabrikası — Referans Sistem]] — uçtan uca içerik üretim & otomatik yayın hattı (Claude Code + Higgsfield + Upload-Post). Marka bazlı sürekli içerik için. *Konum: `~/Desktop/SaaS Projects/İçerik Fabrikası`*

## 🧰 Araçlar & Entegrasyonlar (referans)
- 🦾 [[Superpowers — Plan-Önce Geliştirme Plugin'i (referans)]] — Claude'u disiplinli çalıştırır: önce planla, test yaz, kendini gözden geçir (`/brainstorm → /write-plan → /execute-plan`). 127K★. gstack'i tamamlar.
- 🎭 [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] — **ücretsiz/açık** tarayıcı kontrolü: kendi siteni test et, public siteden veri çek, hesabına login olup iş yaptır. `claude mcp add playwright …`.
- 🌐 [[BrowserAct — Gerçek Tarayıcı Aracı (referans)]] — Claude'a gerçek tarayıcı verir (ürün): bot/captcha'lı scrape, stealth. (Playwright vs BrowserAct karşılaştırması iki notta da var.)
- 🎬 [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]] — herhangi bir ajana (Claude/Hermes) görsel & video üretimi: Marketing Studio (tek link→video), Soul karakter, viral klip, virality prediction. İçerik Fabrikası'nın bağımlılığı.
- 🎨 [[Claude + Canva Connector — Tasarım (referans)]] — Claude'a Canva bağla, sohbetten tasarla (form/sunum/kapak); düzenlemeyi Canva'da yap (ekonomik). *Bende canlı kullanılabilir.*
- 🎞️ [[AI UGC-Reklam Video Üretici (open-source, self-host) — referans]] — klonlanan açık-kaynak app ile AI reklam/UGC videosu (Fal AI / ücretsiz LTX-2, text/image-to-video, 30 sahne). Müşteriye satılabilir.

> 🏗️ No-code site/app üreticileri (**Hostinger Horizons**, **Lovable**, **Brila**) ve **Claude Design** → [[Web Sitesi Yapımı — MOC]] altına taşındı.

## 🧭 Hızlı karar
- **"Sıfırdan çalışan bir mini-uygulama lazım"** (QR menü, fatura, dashboard…) → [[Blueprints MOC]]
- **"Bir projeye belirli bir yetenek eklemeliyim"** (admin panel, Stripe, RAG, SEO…) → [[Yetenekler MOC]]
- **"Mühendislik/agent/uzman referansı"** (security audit, CI/CD, agent tasarımı…) → [[Dış Kütüphaneler MOC]]

## 📂 Klasör düzeni (olduğu gibi korundu)
```
skill-kutuphanesi/   → 154 TR skill   (kısa öz · Claude otomatik seçer)
project mdleri/      → 154 TR command (kodlu · /... ile sen çağırırsın)  [skill ile ikiz]
blueprints/          → 24 hazır uygulama (CLAUDE.md spec + kur.md)
web-sitesi-yapimi/   → 🌐 site yapımı rehber+yöntem+araç (tek çatı) + MOC
awesome-claude-skills-master/  → EN repo (Apache) — referans
claude-skills-main/            → EN repo (MIT, 250+ skill/agent) — referans
```

## 🔄 Bakım
İndeks notları (`Yetenekler MOC`, `Blueprints MOC`) `.gen_index.py` ile **otomatik üretilir**. Kütüphaneye yeni skill/blueprint eklediğinde Claude'a "indeksi yenile" de, ya da `python3 .gen_index.py` çalıştır. Bu script mevcut dosyalara dokunmaz, sadece MOC'leri yeniden yazar.
