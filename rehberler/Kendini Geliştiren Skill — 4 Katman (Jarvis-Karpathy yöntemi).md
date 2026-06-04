---
tags: [rehber, skill, kendini-gelistiren, karpathy, jarvis, memory]
guncelleme: 2026-06-04
---

# 🧬 Kendini Geliştiren Skill — 4 Katman (Jarvis / Karpathy yöntemi)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Statik skill yerine, **her kullanımda kendini iyileştiren**, hafızası olan, internette gezen skill'ler kurma yöntemi. (Mert/Digital Academy videosu; Karpathy'nin [[Dış Kütüphaneler MOC|andrej-karpathy-skills]] reposu ve Memory-OS fikriyle.)

## Jarvis nedir?
Digital Academy'nin AI "çalışanı/asistanı" — bir AI ajansını **yalnızca sen** yürütürken: müşteri bulur, satış yapar, mail atar/ikna eder, fiyat/teklif verir, CRM'de müşteri takip eder, seninle strateji belirler, kararları **hafızasına** kaydeder. *Paid bir ürün (eklenmedi)* — değerli olan **nasıl yapıldığı:** aşağıdaki 4 katman. Hafızası "rüya görür gibi" gece konuşmaları tarar, sabah hipotez/içgörü/karar sunar; sen onaylarsın → **kalite skoru artar.**

## Çoğu kişinin hatası
Markdown skill indir → "şunu kullan" de → bitti. Tekrar kullanınca dosyada **değişiklik olmaz**, statik kalır. 50 skill birikir, Claude hangisini ne zaman kullanacağını şaşırır, birbirine bağlanmaz. İstenen bu değil.

## 4 Katman (sırayla kur)
1. **Skill oluştur** — Claude'un kendi **`skill-creator`** skill'iyle ilk skill'i yarat (ör. içerik/sinyal dashboard'u). *"ultrathink" dersen daha detaylı.*
2. **Doğru yapı = Karpathy disiplini** — [[Dış Kütüphaneler MOC|andrej-karpathy-skills]] repo'sunu yükle → skill **4 ilkeye göre** oluşsun: Think Before Coding · Simplicity First · Surgical Changes · Goal-Driven. ([[Karpathy Çalışma İlkeleri (CLAUDE.md)]]) — *en değerli adım.*
3. **Göz ver (web)** — internette arama/scrape: **Firecrawl** (ya da [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans|Playwright]] / [[BrowserAct — Gerçek Tarayıcı Aracı (referans)|BrowserAct]]) + RSS. Skill gerçek-zamanlı veri **görür**, sinyal yakalar.
4. **Hafıza + sürekli gelişim** — RAG/hafıza: **Pinecone** (ücretsiz hesap yeter) ya da Obsidian/[[Blueprints MOC|llm-wiki]]. **3 katmanlı hafıza:** recap · bilgi tabanı · strateji. + **Auto-research döngüsü:** her gün konuşmalardan hipotez/içgörü/sinyal/karar/soru üretir → sen onayla/reddet → kaydedilir → kalite skoru gelişir → skill kendini geliştirir.

## Sonuç
Skill artık statik dosya değil, **bir çalışan**: sen konuştukça senin verinle gelişir, seni+müşterini tanır, taktiklerini öğrenip iyileştirir. Her sektöre uyarlanır. *"Beynini kopyalamak gibi."*

## İlişkili
- 🧭 [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] (Katman 2) · 📚 [[Blueprints MOC|llm-wiki]] (Katman 4 hafıza)
- 🤖 [[Agent Kurma — BLAST Çerçevesi]] (ajan kurma — bu skill'lerin ajan hâli)
- 💼 [[Yetenekler MOC|is-satis/ai-ajans-modeli]] · [[Yetenekler MOC|is-satis/outbound-lead-agent]] (Jarvis'in kullanım alanı)
