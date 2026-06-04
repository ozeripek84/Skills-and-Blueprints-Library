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
| [[Yetenekler MOC]] | TR skill + slash command çiftleri (kategori kategori) | **145** |
| [[Blueprints MOC]] | Tek-dosya hazır uygulama iskeletleri (`/kur` ile derlenir) | **17** |
| [[Dış Kütüphaneler MOC]] | İngilizce GitHub repo'ları — 🏛️ **anthropics/skills** + ⭐ **gstack** + 🧭 **Karpathy ilkeleri** + ui-ux-pro-max + 250+ skill | **6 repo** |

## 📚 Rehberler
- 🌱 [[Sıfırdan Başlangıç — Bu Sistem Nedir]] — **hiç bilgisi olmayan için**. Benzetmelerle, baştan sona, basit. (Buradan başla.)
- [[AI Uygulaması — Teknoloji Seçimi Handbook]] — bir AI uygulamasının her katmanı (frontend, DB, auth, sunucu, VPS, LLM…), farkları, ne zaman hangisi, ve maliyetleri. Şemalı.
- 🧭 [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] — LLM kodlama tuzaklarına karşı 4 ilke (düşün-önce, sadelik, cerrahi, hedef-odaklı). Claude'un çalışma davranışı. (İlk mesajdaki "Karpathy prompt'u")
- 🤖 [[Agent Kurma — BLAST Çerçevesi]] — Claude Code'da kod yazmadan ajan kurma: 4 parça, BLAST, 5 kural, araç bağlama. (Mert videosu)
- 📐 [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]] — ödül seviyesinde dinamik site prompt'lama: önce tech seç, İngilizce detay, ilham al, 3D'de manuel pozisyon, kısa promptlar. (blueprint'lerine bağlı)
- 💎 [[$10K Web Sitesi — Claude Code Tasarım İş Akışı]] — frontend-design + ui-ux-pro-max skill'leri, 8 maddelik "$10K çıta" checklist'i, 21st.dev, görsel hattı, "pahalı hissettir" cilası, deploy.

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
- 🏗️ [[Hostinger Horizons — No-Code İşlevsel MVP (referans)]] — kod yazmadan **işlem yapabilen** uygulama (login/rezervasyon/mail), **entegre backend**. Hızlı MVP için; kod sahipliği istersen Claude Code+Supabase.
- 🏪 [[Brila — Google Maps'ten Yerel İşletme Sitesi (referans)]] — bir Google Maps linki → gerçek yorum/foto/saat ile tek-sayfa yerel işletme sitesi. Yerel işletmelere hizmet olarak satılabilir.
- 🖌️ [[Claude Design — Tasarım Çıkar, Claude Code'da Optimize Et (referans)]] — tasarım-odaklı Claude ürünü. Güçlü tasarım/UI kit, zayıf performans → Claude Design'da tasarla, **Claude Code'da optimize et**.

## 🧭 Hızlı karar
- **"Sıfırdan çalışan bir mini-uygulama lazım"** (QR menü, fatura, dashboard…) → [[Blueprints MOC]]
- **"Bir projeye belirli bir yetenek eklemeliyim"** (admin panel, Stripe, RAG, SEO…) → [[Yetenekler MOC]]
- **"Mühendislik/agent/uzman referansı"** (security audit, CI/CD, agent tasarımı…) → [[Dış Kütüphaneler MOC]]

## 📂 Klasör düzeni (olduğu gibi korundu)
```
skill-kutuphanesi/   → 145 TR skill   (kısa öz · Claude otomatik seçer)
project mdleri/      → 145 TR command (kodlu · /... ile sen çağırırsın)  [skill ile ikiz]
blueprints/          → 17 hazır uygulama (CLAUDE.md spec + kur.md)
awesome-claude-skills-master/  → EN repo (Apache) — referans
claude-skills-main/            → EN repo (MIT, 250+ skill/agent) — referans
```

## 🔄 Bakım
İndeks notları (`Yetenekler MOC`, `Blueprints MOC`) `.gen_index.py` ile **otomatik üretilir**. Kütüphaneye yeni skill/blueprint eklediğinde Claude'a "indeksi yenile" de, ya da `python3 .gen_index.py` çalıştır. Bu script mevcut dosyalara dokunmaz, sadece MOC'leri yeniden yazar.
