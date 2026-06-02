---
tags: [rehber, tasarim-brief]
guncelleme: 2026-06-02
---

# 🎨 Claude Design'a Verilecek Brief — Vault Ana Sayfası

> Bunu claude.ai'da (artifact) kullan. **Aşağıdaki prompt'u kopyala**, ve yanına **şu 3 dosyayı ekle/yapıştır:**
> 1. `00 HOME.md` (yapı)
> 2. `Yetenekler MOC.md` (145 yeteneğin gerçek listesi)
> 3. `Blueprints MOC.md` (17 blueprint)
>
> (Handbook'u da gösterecekse `rehberler/AI Uygulaması — Teknoloji Seçimi Handbook.md`'yi de ekle.)

---

## 📋 KOPYALANACAK PROMPT (buradan aşağısını yapıştır)

Sana bir Obsidian "ikinci beyin" vault'unun içerik dosyalarını veriyorum. Bunlardan **tek dosyalık, çalışan bir `index.html`** (inline CSS + JS, framework yok) tasarla — bu vault'un görsel **ana sayfası / dashboard'u** olacak.

**İçerik kaynağı:** Eklediğim markdown dosyalarındaki tablolardan **gerçek verileri** kullan (uydurma). `Yetenekler MOC` dosyasında 145 yetenek 16 kategoride; `Blueprints MOC` dosyasında 17 blueprint var. Her satırın adını ve açıklamasını koru.

**Sayfa yapısı:**
1. Üstte hero: başlık "Skills & Blueprints Kütüphanesi", alt başlık, ve 3 büyük istatistik kartı (145 Yetenek · 17 Blueprint · 2 Referans Repo).
2. Global **arama kutusu** — yazdıkça tüm yetenek/blueprint kartlarını canlı filtrelesin (ada + açıklamaya göre).
3. **Kategori sekmeleri / filtre çipleri** (Web/SaaS, AI/Chatbot, Backend, E-ticaret… 16 kategori). Tıklayınca o kategori kartları gösterilsin.
4. Yetenekler **kart grid'i**: her kartta ad (kalın), açıklama, ve iki küçük rozet: "⚙️ skill" ve "▶️ command".
5. Ayrı bir bölüm: **Blueprint'ler** (kart grid, her birinde ad + amaç).
6. Küçük bir "Rehberler" bölümü: AI Uygulaması Handbook'a işaret eden bir kart.

**Tasarım yönü:**
- Koyu tema. Arka plan `#0a0a0a`/`#111`, kartlar `#1a1a1a`, ince border `#262626`.
- Tek aksent renk (amber `#f59e0b` veya mor `#8b5cf6` — sen seç), hover'da parlasın.
- Font: Inter veya DM Sans (Google Fonts).
- Modern SaaS estetiği: yuvarlak köşeler (12px), yumuşak gölge, kartlarda hover lift animasyonu. Generic/şablon görünme; ferah boşluk, net hiyerarşi.
- Responsive (mobilde tek kolon).
- Kategori çiplerinde ve rozetlerde ince renk kodlaması.

**Teknik:**
- Tek `index.html`, harici JS kütüphanesi yok (vanilla). Veriyi `<script>` içinde bir JS dizisine göm.
- Arama + filtre tamamen client-side, anlık.
- Türkçe arayüz.

Önce kısa bir plan ver, sonra tam `index.html` kodunu üret.
