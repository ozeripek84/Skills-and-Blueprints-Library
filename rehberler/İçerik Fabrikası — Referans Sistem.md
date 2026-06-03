---
tags: [referans, sistem, icerik-otomasyon, baglı-proje]
guncelleme: 2026-06-03
---

# 🏭 İçerik Fabrikası — Referans Sistem (dış proje)

> [[00 HOME|🏠 Ana sayfaya dön]] · Ayrıca [[Blueprints MOC|🏭 Sistem Blueprint'leri]]'nde klonlanabilir başlangıç olarak listeli.
> Bu, kütüphanenin içinde değil — **ayrı, tam bir Claude Code projesi**. Buraya not düşülme sebebi: içerik üretim/yayın otomasyonu gerektiğinde "önce buraya bak" prensibiyle bulunabilsin.

## 📍 Konum
```
/Users/ozeripek/Desktop/SaaS Projects/İçerik Fabrikası
```
Kullanım: klasöre `cd` et → `claude` başlat → sistem CLAUDE.md + memory + brand + reference dosyalarını otomatik yükler.

## Ne işe yarar (tek cümle)
Tek markaya hizmet eden uçtan uca içerik hattı: **fikir → görsel/video → caption → takvim → otomatik paylaşım**, tamamen sohbetten.

## Mimari özet
- **Beyin:** `CLAUDE.md` (12 bölümlük "System Constitution") — routing, workflow'lar, Upload-Post API entegrasyonu (§5.6).
- **Otomatik bağlam:** `brand/`, `reference/`, `memory/` → `@-import` ile her oturum yüklenir.
- **Durum makinesi = klasörler:** `library/drafts → approved → scheduled → published` (+ `rejected`). **Onaysız asla yayın yok** (hard rule §4).
- **Üretim:** Higgsfield MCP (image/video). **Yayın:** Upload-Post API (11+ platform, `scheduled_date` ile).
- **Öğrenme:** `memory/feedback-log.md`'de 3+ benzer geri bildirimde "kalıcı kural yapayım mı?" diye sorar.
- **Sürdürülebilirlik:** memory dosyaları 120 satır tavanı + compaction + aylık arşiv.

## Durum
⚠️ **Boş şablon — bir markaya bağlanmamış.** Tüm `brand/` ve `config/` dosyaları `[FILL:]` placeholder dolu. Kullanmak için: `markamı kuralım` → Higgsfield MCP bağla → (yayın için) Upload-Post + API key.

## Bağımlılıklar (dikkat)
- **Higgsfield** (credit; video ~10× pahalı) — görsel/video üretimi.
- **Upload-Post** (abonelik; Free'de **TikTok yok**, limit düşük) — otomatik yayın.
- Upload-Post olmadan da %80 çalışır (üretim + takvim olur, yayını manuel yaparsın).
- 🔐 API key düz metin `config/upload-post-config.md`'de — zip'leyip paylaşırken **sil**.

## Ne zaman buraya başvur?
- Bir marka için **düzenli, otomatik** sosyal medya içerik hattı kurulacaksa.
- Eşinin Rusça e-book markası için sosyal tanıtım otomasyonu gerekirse (VK/Telegram dışı platformlar).
- Tek seferlik içerik için **gerek yok** — onun için aşağıdaki hafif yetenekler yeter.

## Kütüphanedeki ilişkili (hafif) muadiller
- [[Yetenekler MOC|⚙️/▶️]] `sosyal-icerik-uretici` — tek seferlik sosyal içerik.
- [[Yetenekler MOC|⚙️/▶️]] `youtube-kanal-kurucu` — kanal stratejisi + script.
- [[Blueprints MOC]] `video-icerik-uretici`, `thumbnail-olusturucu` — tekil üretim araçları.

> Özet: **İçerik Fabrikası = bu yeteneklerin endüstriyel/otomatik, bir markaya bağlanmış hâli.** Tekil iş için yetenekler, sürekli hat için bu sistem.
