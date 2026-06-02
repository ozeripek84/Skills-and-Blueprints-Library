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
| [[Dış Kütüphaneler MOC]] | İngilizce GitHub repo'ları (referans: 250+ skill, agent'lar) | **2 repo** |

## 📚 Rehberler
- 🌱 [[Sıfırdan Başlangıç — Bu Sistem Nedir]] — **hiç bilgisi olmayan için**. Benzetmelerle, baştan sona, basit. (Buradan başla.)
- [[AI Uygulaması — Teknoloji Seçimi Handbook]] — bir AI uygulamasının her katmanı (frontend, DB, auth, sunucu, VPS, LLM…), farkları, ne zaman hangisi, ve maliyetleri. Şemalı.

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
