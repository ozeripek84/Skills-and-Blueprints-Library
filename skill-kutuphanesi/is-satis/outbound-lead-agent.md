---
name: outbound-lead-agent
description: Claude Code'da BLAST çerçevesiyle kurulan etik outbound ajan — her gün ideal müşteri bulur, bilgi zenginleştirir, kişisel mesaj taslağı yazar, takvime işler, HTML dashboard sunar.
---

# Outbound Lead Ajanı (etik, otomatik)

## Ne zaman
Lead-gen sürecini elle değil, Claude Code'da **proaktif bir ajanla** yürütmek gerektiğinde. `lead-gen-ajansi` (strateji) işin "ne/neden"i; bu skill onun **otomatik teknik uygulaması**.

## Konsept
Her çalıştığında (ya da `/schedule` ile her gün): ICP'ye uygun N firma bul → iletişim bilgisi zenginleştir → her biri için araştır → **kişiselleştirilmiş** mail/LinkedIn taslağı yaz → takvime/CRM'e işle → tek HTML dashboard'da sun. Mesajlar **taslak**; gönderim insan onayıyla.

## BLAST haritası
- **B (sonuç):** günde N ideal müşteri + kişisel taslak mesaj + dashboard
- **L (araçlar):** Apify/Firecrawl (ToS-uyumlu), Gmail (taslak), Calendar/CRM
- **A (yapı):** `CLAUDE.md` (anayasa+ICP+etik) · `memory/` (ulaşılanlar, kararlar) · `leads/` · `dashboard.html`
- **S (durum):** HTML dashboard (firma, iletişim, mesaj, durum) + memory'de ilerleme
- **T (tetik):** manuel ya da `/schedule` günlük

## ⚠️ Etik korumalar (zorunlu — kütüphane çizgisi)
- Liste **public/izinli** kaynaktan; kişisel veri kazımada KVKK/GDPR + platform ToS + rate-limit.
- Mesaj **kişiye özel + alaka + opt-out**; toplu spam/otomatik gönderim **yok** (taslak üret, insan gönderir).
- Karşılığında: az ama isabetli > çok ama spam. → [[lead-gen-ajansi]] etik outreach.

## Çıktı standardı
- Her lead: kaynak notlu, iletişim doğrulanmış, kişiselleştirme için ≥1 gerçek gözlem.
- Dashboard: aranabilir/filtrelenebilir; durum (taslak/onaylı/gönderildi).
- Ajan idempotent: aynı leadi iki kez işlemez (memory kontrolü).

## Yaygın hatalar
- ToS ihlali toplu scrape/DM (ban + hukuk + itibar).
- API key'i chat'e yapıştırmak (dosyaya koy, `.gitignore`).
- Sonsuz döngü / maliyet kaçağı (max iterasyon + limit).
- Genel/şablon mesaj (kişiselleştirme yoksa değersiz).

> Çalıştırılabilir kurulum (BLAST master prompt + araç bağlama + dashboard spec + etik checklist): `/is-satis:outbound-lead-agent`
> Çerçeve: [[Agent Kurma — BLAST Çerçevesi]] · Strateji: `lead-gen-ajansi` · Tarayıcı: BrowserAct.
