---
tags: [referans, arac, seo, skill, claude-code, acik-kaynak]
guncelleme: 2026-07-12
---

# 🔍 Claude SEO — 25 Skill + 18 Ajanlı SEO Denetimi (referans)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Claude Code için açık kaynak **SEO denetim plugin'i** (AgriciDaniel, MIT, ~11K★, 326 test): `/seo audit <url>` dersin, 15'e kadar uzman ajan **paralel** taranır → önceliklendirilmiş, **test-edilebilir** aksiyon planı. Teknik SEO, E-E-A-T içerik kalitesi, Schema.org, **GEO/AEO (AI aramada görünürlük)**, local SEO, e-ticaret, uluslararası SEO, PDF/Excel rapor.
> Kaynak: github.com/AgriciDaniel/claude-seo · Shorts videosundan (2026-07-12).

## ✅⚠️ Dürüst değerlendirme
Videonun dili abartı ("SEO şirketlerinin $15.000'a sattığı hizmeti 12 dakikada", "yorumlara yaz linki atayım" engagement-bait; transkriptteki "CEO" = otomatik altyazının "SEO"yu yanlış yazması). Ama araç **sahiden ciddi** — iddiaları tek tek doğruladım:

| Video iddiası | Gerçek |
|---|---|
| "18 ajan aynı anda" | ✅ 18 sub-agent + 25 sub-skill; audit'te 15'e kadar paralel |
| "Ücretsiz, açık kaynak, MIT" | ✅ Çekirdek MIT + ücretsiz; **uzantılar opsiyonel/paralı** (aşağıda) |
| "Verilerin bilgisayardan çıkmıyor" | ✅ Çekirdek **sıfır-ağ** ("free tier does not call any external API") — ama Claude Code'un kendisi Anthropic'le konuşur, mutlak değil |
| "Boş vaat yok, test edilebilir" | ✅ Metodolojisi gerçekten falsifiability-temelli: her öneri "bu neyin üstüne kurulu + başarısız olduğunu nasıl anlarız" kontrolü taşır |
| "$15K ajans hizmeti yerine" | ⚠️ Abartı — derin bir denetim aracı, ajansın strateji/uygulama emeğini vermez. Denetim+plan kısmını ciddi ölçüde otomatikler |

**Dürüst sınırlar (README'nin kendisi de söylüyor):** ağır client-side hydration'lı SPA'larda gürültülü bulgu olabilir; Google API bağlanmadan Core Web Vitals **lab tahmini** (gerçek saha verisi değil), indexlenme durumu çıkarımsal.

## Kurulum (ücretsiz çekirdek)
Gereksinim: Python 3.10+ · Claude Code. (Playwright Chromium opsiyonel, install.sh kendisi kurar — ücretsiz.)
```bash
# Plugin yolu (Claude Code 1.0.33+, en hızlı):
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo

# ya da manuel:
git clone --depth 1 https://github.com/AgriciDaniel/claude-seo.git
bash claude-seo/install.sh
```
> İki sürüm var: **public** (`AgriciDaniel/claude-seo`, MIT, üyeliksiz — bunu kullan) · private community mirror (Skool üyeliği ister — gerekmez).

## Ana komutlar
- `/seo audit <url>` — tam site denetimi (paralel ajanlar → önceliklendirilmiş plan)
- `/seo page <url>` — tek sayfa derin analiz · `/seo technical <url>` — 9 kategori teknik
- `/seo content <url>` — E-E-A-T · `/seo content-brief <konu>` — içerik brief'i
- `/seo schema <url>` — Schema.org tespit/doğrula/üret
- `/seo geo <url>` — **AI aramada görünürlük** (citability, llms.txt) — 2026'nın konusu
- `/seo sitemap generate` · tam liste: `docs/COMMANDS.md`

## 💰 Opsiyonel uzantılar (paralı/hesap ister — çekirdek bunlarsız tam çalışır)
DataForSEO (canlı SERP/backlink — paralı) · Ahrefs / SE Ranking / Profound (paralı) · Firecrawl (freemium) · Banana görsel üretimi (Gemini API key) · Google API'leri (ücretsiz credential; gerçek CWV/GSC/GA4 verisi açar — **ücretsiz zenginleştirme olarak ilk bunu bağla**). [[ucretsiz-arac-tercihi|Kural]]: paralı uzantıları varsayılan sayma.

## Ne zaman kullan + akraba
- Kendi/müşteri sitesi yayına girerken ve sonrasında düzenli denetim; [[Web Sitesi Yapımı — MOC]] iş akışının doğal "denetim" adımı.
- Müşteriye kanıt: 15 dakikalık audit + 0-100 skor → teklif öncesi değer gösterimi (freelance açısı).
- TR hafif muadil: [[Yetenekler MOC|icerik-pazarlama/seo-optimizasyon]] (tek-iş) · EN strateji: Dış Kütüphaneler → marketing-skills SEO grubu (ai-seo, seo-audit, programmatic-seo) — **bu araç onların denetim/uygulama motoru** olur.
- Aynı yazarın ekosistemi (ileride gerekirse): claude-ads (reklam denetimi), claude-obsidian (Karpathy LLM-wiki patternı — bizim vault zaten öyle), banana-claude, codex-seo.
