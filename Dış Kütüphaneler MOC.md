---
tags: [moc, referans, dis-kaynak]
guncelleme: 2026-06-02
---

# 🌍 Dış Kütüphaneler — İngilizce Referans Repo'ları

> [[00 HOME|🏠 Ana sayfaya dön]]
> Bunlar dışarıdan indirilmiş GitHub repo'ları; **referans** olarak duruyor (olduğu gibi korundu). Çoğu mühendislik/agent odaklı ve İngilizce. Kendi TR kütüphanen ([[Yetenekler MOC]]) iş/ürün tarafında; bunlar derin teknik + agent tarafında.

---

## 🏛️ `anthropics-skills` — RESMÎ Anthropic skill deposu
Kaynağın kendisi (Anthropic). Kanonik **document skill'leri** + araçlar: `pptx` (PowerPoint), `xlsx` (Excel), `docx` (Word), `pdf`, `doc-coauthoring`, `web-artifacts-builder`, `mcp-builder` (API→MCP server), `skill-creator` (kendi skill'ini yarat), `webapp-testing`, `frontend-design`, `brand-guidelines`, `canvas-design`, `claude-api`, `algorithmic-art`, `theme-factory`, `slack-gif-creator`, `internal-comms`.
→ [[anthropics-skills/README|repo README]]
- "Bu startup için sunum hazırla / bu veriden Excel modeli / API için MCP server kur" → bu skill'ler.
- Not: `frontend-design` bende **built-in** zaten. Aşağıdaki küratörlü listeler (claude-skills-main, awesome) bunların bir kısmını + topluluk skill'lerini içerir; bu **resmî/kanonik** olanı.

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

## 🪄 `impeccable` — AI ajanları için tasarım sistemi (Paul Bakaus, Apache-2.0)
Tek `/impeccable` komutu + alt komutlar (`craft`, `shape`, `critique`, `audit`, **`polish`**, `extract`, `document`…) ve 41 **deterministik** detektör kuralı (LLM'siz çalışan anti-pattern tarayıcı). `/impeccable init` projeye `PRODUCT.md` + `DESIGN.md` yazar; sonraki komutlar bunu okur. frontend-design'dan türeyip onu genişletir.
- Kur: `npx impeccable skills install` → AI aracında `/impeccable init`
- → [[impeccable/README|repo README]] · [[impeccable/CLAUDE|CLAUDE.md]] · [[impeccable/DESIGN|DESIGN.md]]
- Not: vault kopyasında tanıtım sitesi (`site/`, 45M) ve yalnızca-Claude harici agent kopyaları temizlendi; skill içeriği (`.claude/skills/impeccable`, `cli/`, `plugin/`) tam.

## ✨ `emilkowalski-skill` — Emil Kowalski'nin design-eng skill'i (minimal)
Emil Kowalski'nin (Sonner, Vaul, animations.dev) UI polish / komponent tasarımı / animasyon kararları felsefesi. Tek skill: `emil-design-eng`. "Tereyağı gibi" gerçekçi hareket ve görünmez detaylar.
- Kur: `npx skills add https://github.com/emilkowalski/skill`
- → [[emilkowalski-skill/skills/emil-design-eng/SKILL|SKILL.md]] · kaynak: emilkowal.ski/skill

## 🎯 `taste-skill` — "taste" agent skill paketi (Leonxlnx, MIT)
Jenerik "AI slop" UI yerine güçlü layout/tipografi/motion/spacing. Çok sayıda alt-skill: `design-taste-frontend` (varsayılan, v2), `minimalist`, `brutalist`, `soft`, `redesign`, `brandkit` + imagegen (web/mobil referans board'ları). Codex/Cursor/Claude ile çalışır.
- Kur (hepsi): `npx skills add https://github.com/Leonxlnx/taste-skill` · tek skill: `--skill "design-taste-frontend"`
- → [[taste-skill/README|repo README]]

## 🧭 `andrej-karpathy-skills` — davranış rehberi (MIT)
Karpathy'nin LLM kodlama tuzaklarından türetilmiş **4-ilkeli `CLAUDE.md`**: Think Before Coding · Simplicity First · Surgical Changes · Goal-Driven Execution. Claude'un varsayım/aşırı-karmaşıklık/alakasız-değişiklik hatalarını azaltır. Plugin olarak kurulur ya da global CLAUDE.md'ye birleştirilir.
→ Detay + kurulum: [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] · [[andrej-karpathy-skills/CLAUDE|ham CLAUDE.md]]
> **İlk konuşmadaki "Karpathy prompt'u" budur.** Ben artık bu ilkelerle çalışıyorum. [[Agent Kurma — BLAST Çerçevesi|BLAST]] + [[Superpowers — Plan-Önce Geliştirme Plugin'i (referans)|Superpowers]] ile aynı felsefe.

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

## 3. `marketing-skills` — 45 pazarlama skill'i (Corey Haines, MIT)
Teknik pazarlamacılar/kurucular için pazarlama odaklı skill koleksiyonu (Claude Code, Codex, Cursor, Windsurf… Agent Skills spec). Her skill bir `SKILL.md`. **Temel: `product-marketing`** — `.agents/product-marketing.md` bağlam dosyasını yazar; diğer tüm skill'ler önce onu okur (ürün/hedef kitle/konumlandırma).
→ Genel bakış: [[marketing-skills/README|repo README]] · araç registry'si: [[marketing-skills/tools/REGISTRY|tools/REGISTRY]]

**Gruplar (45 skill):**
- 🔍 **SEO:** ai-seo, programmatic-seo, seo-audit, schema, site-architecture, aso
- 🎯 **CRO/Dönüşüm:** cro, ab-testing, landing (offers, paywalls, popups, signup, onboarding, pricing)
- ✍️ **İçerik/Copy:** copywriting, copy-editing, content-strategy, emails, cold-email, sms, social, video, image, ad-creative
- 📣 **Büyüme/Satış:** ads, prospecting, sales-enablement, lead-magnets, referrals, launch, public-relations, co-marketing, community-marketing
- 📊 **Strateji/Veri:** product-marketing (temel), marketing-plan, marketing-ideas, marketing-psychology, analytics, revops, competitor-profiling, customer-research, churn-prevention
- 🔌 **tools/:** GA4 · Mixpanel · Amplitude · PostHog entegrasyonları (API/MCP/CLI/SDK)
> Bizim TR [[Yetenekler MOC|icerik-pazarlama]] yeteneklerini İngilizce derin pazarlama framework'leriyle tamamlar.

## 🎬 `topview-skill` — TopView AI resmî video/görsel/ses toolkit (Apache-2.0)
TopView AI'nin resmî Python skill'i: tek API'den **video** (Seedance/Sora/Kling/Veo/Vidu), **görsel** (GPT Image, Nano Banana, Seedream…), **konuşan avatar** (avatar4), **TTS/ses klonlama**, **arka plan kaldırma**, **ürün-model görseli**. Yerel dosyaları otomatik yükler, task'ları poll'lar. `TOPVIEW_API_KEY` + `TOPVIEW_UID` ister (`scripts/auth.py login` ile alınır).
→ [[topview-skill/SKILL|SKILL.md]] · referanslar: [[topview-skill/references/video_gen|video_gen]] · [[topview-skill/references/avatar4|avatar4]]
- **Kur (gerçek kullanım için):** `cp -R topview-skill ~/.claude/skills/topview-skill` → `pip install -r ~/.claude/skills/topview-skill/scripts/requirements.txt` → `python3 ~/.claude/skills/topview-skill/scripts/auth.py login` (link ile giriş, kredi ister).
- Akraba: [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]] (alternatif görsel/video aracı) · [[İçerik Fabrikası — Referans Sistem]] (içerik hattında kullanılabilir).

---

## Ne zaman buraya bakılır?
- TR kütüphanede ([[Yetenekler MOC]]) **olmayan** derin bir teknik ihtiyaç (örn. agent tasarımı, CI/CD pipeline, MCP server) çıktığında.
- Yeni bir skill **yazmak** gerektiğinde → `skill-creator` veya `SKILL-AUTHORING-STANDARD` örnek alınır.
- Kopyalama mantığı yine aynı: [[Claude için kullanım]].
