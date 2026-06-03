---
tags: [moc, referans, dis-kaynak]
guncelleme: 2026-06-02
---

# 🌍 Dış Kütüphaneler — İngilizce Referans Repo'ları

> [[00 HOME|🏠 Ana sayfaya dön]]
> Bunlar dışarıdan indirilmiş GitHub repo'ları; **referans** olarak duruyor (olduğu gibi korundu). Çoğu mühendislik/agent odaklı ve İngilizce. Kendi TR kütüphanen ([[Yetenekler MOC]]) iş/ürün tarafında; bunlar derin teknik + agent tarafında.

---

## ⭐ `gstack` — Garry Tan'ın (YC CEO) Claude Code ekibi (MIT, ~64K★)
**Diğerlerinden farkı: bu sadece referans değil, KURULUP ÇALIŞAN bir araç takımı.** Y Combinator Başkanı & CEO Garry Tan'ın birebir kurulumu — Claude'u sanal bir mühendislik ekibine çevirir: ürünü yeniden düşünen **CEO**, mimariyi kilitleyen **eng manager**, AI-slop yakalayan **designer**, prod bug'ı bulan **reviewer**, gerçek tarayıcı açan **QA lead**, OWASP+STRIDE denetimi yapan **güvenlik (CSO)**, PR'ı ship eden **release engineer**. 23 uzman + 8 güç aracı, hepsi slash command, hepsi Markdown.

→ Genel bakış: [[gstack/README|repo README]] · Mimari: [[gstack/ARCHITECTURE|ARCHITECTURE]] · Felsefe: [[gstack/ETHOS|ETHOS]]

**Akış:** Think → Plan → Build → Review → Test → Ship → Reflect. Her skill bir sonrakini besler.
- `/office-hours` — YC tarzı 6 zorlayıcı soruyla ürünü yeniden çerçevele (buradan başla)
- `/plan-ceo-review` · `/plan-eng-review` · `/plan-design-review` — planı CEO/mühendis/tasarımcı gözünden
- `/review` (staff eng — prod bug) · `/cso` (güvenlik) · `/qa` (gerçek tarayıcı testi)
- `/autoplan` → uygula → `/ship` → `/land-and-deploy`
- `/browse` (kendi tarayıcı skill'i), `/design-html`, `/investigate`, `/retro` …

**Kurulum (kütüphanedeki kopya yerine resmîden, setup gerekiyor):**
```bash
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack \
  && cd ~/.claude/skills/gstack && ./setup
```
> Yerel kopya `gstack/` referans/okuma için (bun + `./setup` ister; gerçek kullanım için yukarıdaki gibi `~/.claude/skills/`'e kurup `./setup` çalıştır). Bizim `lead-gen`/etik çizgimizle: `/browse`, `/scrape` ToS-uyumlu kullanılmalı.

---

## 🎨 `ui-ux-pro-max-skill` — tasarım zekası skill'i (MIT, v2.5)
Büyük tasarım müdahalesinde `/ui-ux-pro-max` ile çağrılan skill: **67 UI stili, 161 renk paleti, 57 font çifti, 99 UX kuralı, 25 grafik tipi, 15+ stack.** Jenerik AI tasarımından kurtarır. ([[$10K Web Sitesi — Claude Code Tasarım İş Akışı]] bunu kullanıyor.)
- Kur: `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill` · ya da `npm i -g uipro-cli && uipro init --ai claude`
- → [[ui-ux-pro-max-skill/README|repo]] · [[ui-ux-pro-max-skill/CLAUDE|CLAUDE.md]]
- İkizi: **frontend-design** (Anthropic) — bende built-in skill olarak zaten var; arka planda çalışır.

## 1. `claude-skills-main` — 250+ skill · agent · command (MIT)
En kapsamlı kaynak. 11 farklı coding agent ile çalışır (Claude Code, Codex, Gemini CLI, Cursor…). Her skill `SKILL.md` + bazen Python araçları içerir.
→ Genel bakış: [[claude-skills-main/README|repo README]] · Standart: [[claude-skills-main/SKILL-AUTHORING-STANDARD|skill yazım standardı]]

**Öne çıkan gruplar:**
- 🛠️ **engineering/** — api-design-reviewer, ci-cd-pipeline-builder, browser-automation, agent-designer, changelog-generator… (derin teknik)
- 👥 **engineering-team/ · product-team/ · ra-qm-team/** — rol bazlı takım skill'leri
- 🤖 **agents/** — hazır agent tanımları (örn. security audit, research)
- 💼 **business-growth/ · finance/ · marketing-skill/ · c-level-advisor/** — iş tarafı
- 🧩 **orchestration/** — skill + agent + persona birlikte nasıl kullanılır
- 🇹🇷 Kök dizinde birkaç TR parça da var: `saas-iskelet.md`, `cold-email.md`, `teklif.md`, `rakip-analizi.md`

## 2. `awesome-claude-skills-master` — küratörlü liste (Apache)
Pratik, tek-iş skill'leri + 1000+ skill'e işaret eden küratörlü liste.
→ Genel bakış: [[awesome-claude-skills-master/README|repo README]]

**Kullanışlı tekil skill'ler:**
- ✍️ content-research-writer · brand-guidelines · twitter-algorithm-optimizer
- 📄 document-skills · invoice-organizer · tailored-resume-generator
- 🎨 canvas-design · theme-factory · image-enhancer · slack-gif-creator
- 🧪 webapp-testing · mcp-builder · skill-creator (yeni skill yazmak için)
- 🔌 connect / connect-apps — Composio ile 1000+ uygulamaya aksiyon

---

## Ne zaman buraya bakılır?
- TR kütüphanede ([[Yetenekler MOC]]) **olmayan** derin bir teknik ihtiyaç (örn. agent tasarımı, CI/CD pipeline, MCP server) çıktığında.
- Yeni bir skill **yazmak** gerektiğinde → `skill-creator` veya `SKILL-AUTHORING-STANDARD` örnek alınır.
- Kopyalama mantığı yine aynı: [[Claude için kullanım]].
