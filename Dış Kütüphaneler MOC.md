---
tags: [moc, referans, dis-kaynak]
guncelleme: 2026-10-18
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
Tek `/impeccable` komutu + **24 alt komut** (`craft`, `shape`, `critique`, `audit`, **`polish`**, `extract`, `document`, **`live`**, `generate`…) ve **61 deterministik** detektör kuralı (LLM'siz çalışan anti-pattern tarayıcı). `/impeccable init` projeye `PRODUCT.md` + `DESIGN.md` yazar; sonraki komutlar bunu okur. Temel fikir: *iyi tasarım özneldir, kötü tasarım değildir* — AI'ın bıraktığı kötü-tasarım izlerini siler, iyi tasarım kararını sana bırakır. frontend-design'dan türeyip onu genişletir.

**Sürüm (2026-10-18 güncellendi):** npm paketi ve skill artık **aynı numarada: 4.6.0** (`skill-v4.6.0`). Detektör motoru Rust'a taşındı (`crates/`, engine 0.1.15). *(Önceki vault kopyası: CLI 3.6.0 / skill 4.1.1 / 59 detektör; ondan önce 2.3.2 / 41.)*

**3.6 → 4.6 ne değişti:**
- ⚙️ **Node artık skill için şart değil.** Skill, yanında gelen başlatıcıyla kendi kendine yeten bir motor ikilisini çalıştırıyor (ilk kullanımda `~/.impeccable/bin/`'e bir kez indirilir). Node yalnız `npx impeccable install` kurucusu için gerekli (≥ 22.18.0).
- 🪝 **Düzenleme hook'u varsayılan olarak kuruluyor.** Claude Code'da UI dosyası her düzenlendiğinde detektör koşup bulguları ajana geri veriyor. ⚠️ Hook'lar model araç onayından **bağımsız** çalışır; ilk düzenlemede motor indirilebilir. İstemiyorsan `npx impeccable install --no-hooks`; tek oturum için `--settings '{"disableAllHooks": true}'`.
- 📱 **Native ekranlar:** iOS ve Android ekranları için ayrı referanslar (`ios.md`, `android.md`, `*.native.md`).
- ✨ Yeni komut `generate` (canlı tarayıcıda adlandırılmış bir elementin varyantlarını elle seçmeden üretir). Komut 23 → 24, detektör 59 → 61.
- 🧩 VS Code eklentisi (Copilot Chat) ve `/impeccable pin <komut>` ile kısayol (ör. `pin polish` → `/polish`).

**v2.3 → 3.6 ne değişmişti:**
- 🖥️ **`/impeccable live` — canlı tarayıcı modu (en önemli yenilik).** Terminale inip-çıkmadan sayfada elementi seçip ("pick") isteğini yazıyorsun; ajan 3'e kadar varyant üretiyor, beğendiğini kabul edip devam ediyorsun. `init` sırasında yapılandırılıyor.
- 🌍 **Worlds — tasarım dünyaları.** `craft`/`shape` akışı sana birkaç farklı **tasarım dili** üretip seçtiriyor (`WORLD` / `STORY` / `FIRST VIEWPORT` / `FORM` blokları). Herkesin çıktısının aynı görünmemesinin sebebi bu: dünyayı sen seçiyorsun.
- 🔍 Detektör 41 → **59** kural.
- 🎨 **Görsel üretim opsiyonel katman.** `impeccable-asset-producer` ajanı var; araç yüzeyinde bir görsel-üretim MCP'si varsa şablonları gerçek görselle dolduruyor, yoksa comp/placeholder ile ilerliyor. → [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]] ya da fal/KieAI.

**Kurulum (komut değişti):**
- `npx impeccable install` → AI aracında `/impeccable init` *(eski `npx impeccable skills install` artık geçerli değil)*
- ⚠️ **Kurucu için Node ≥ 22.18.0** (`npx impeccable install`). Skill ve hook artık Node'suz çalışır. Önce `node -v`.
- Alternatif: Claude Code'a repo adresini verip "bunu kur, önce node sürümünü kontrol et, mevcut skill'lerimi bozma" demek yeterli.
- Detektörü tek başına çalıştır: `npx impeccable detect <path|url>`

- → [[impeccable/README|repo README]] · [[impeccable/CLAUDE|CLAUDE.md]] · [[impeccable/DESIGN|DESIGN.md]] · site: `impeccable.style` · repo: `github.com/pbakaus/impeccable`
- Not: vault kopyasında `.git` geçmişi ve **Claude harici ajan kopyaları** (`.cursor`, `.codex`, `.gemini`, `.grok`, `.hermes`, `.trae`, `.opencode`, `cursor-plugin/`, `.github/skills`…) temizlendi (96M → 45M). Skill içeriği (`.claude/skills/impeccable`, `skill/`, `plugin/`, `crates/`, `docs/`, `tests/`) tam.

## ✨ `emilkowalski-skill` — Emil Kowalski'nin skill paketi (15 skill, MIT)
Emil Kowalski (Sonner, Vaul, animations.dev; Vercel ve Linear deneyimi). Haziran'da tek skill'di (`emil-design-eng`), 2026-10'da **15 skill**'lik pakete büyüdü. Viral videolardaki "Emil'in motion skill'i" bu paket. Değeri kurallarda: ajanların tipik hatalarını (giriş animasyonunda `ease-in`, gölge yerine düz kenarlık…) adıyla listeleyip düzeltiyor.
- **Animasyon:** `animate` (sıfırdan animasyon: animasyon gerekli mi → amaç → araç → özellik → eğri/süre) · `animate-expo` (React Native/Expo) · `review-animations` (katı inceleme, "onay kazanılır") · `improve-animations` (kod tabanı denetimi + başka ajanın uygulayacağı planlar) · `find-animation-opportunities` (nereye hareket gerekir, nereye **gerekmez**) · `animation-performance` (kare düşmesi) · `animation-vocabulary` ("şu zıplayan şey" → doğru terim) · `apple-design` (WWDC ilkeleri web'e çevrilmiş).
- **UI kalitesi:** `emil-design-eng` (ana felsefe) · `break-ui` (uzun isim, boş liste, emoji gibi en kötü veriyle kırmayı dene) · `mobile-native` (100vh, tap highlight, input zoom, safe area) · `prototype` (birkaç farklı versiyon + seçici) · `pick-ui-library` (elle toast yazdırmak yerine güvenilir kütüphane) · `ask-sonner`.
- **Alakasız ama içinde:** `write-swift` (Swift 6).
- ⚠️ `improve-animations` ve `find-animation-opportunities` **salt okur**, kod yazmaz; uygulayan `animate`.
- Kur: `npx skills@latest add emilkowalski/skills` (tek skill için `--skill <ad>`).
- → [[emilkowalski-skill/README|README]] · [[emilkowalski-skill/skills/emil-design-eng/SKILL|emil-design-eng]] · [[emilkowalski-skill/skills/animate/SKILL|animate]] · kaynak: emilkowal.ski · aiforui.dev

## 🎯 `taste-skill` — "taste" agent skill paketi (Leonxlnx, MIT)
Jenerik "AI slop" UI yerine güçlü layout/tipografi/motion/spacing. Alt-skill'ler: `design-taste-frontend` (varsayılan), `minimalist`, `brutalist`, `soft`, `redesign`, `brandkit`, `image-to-code`, `stitch` + imagegen (web/mobil referans board'ları). Codex/Cursor/Claude ile çalışır.

**v2.0.0 (2026-10-13) — varsayılan skill baştan yazıldı.** 247 küratörlü siteden (One Page Love, Awwwards) türetilmiş bir klasör: talimat + 9 referans + kütüphane (48 hero, 172 bölüm kompozisyonu, 44 ücretsiz font sistemi, 56 palet) + 4 betik. Akış: **envanter** (yalnız bu müşteriye ait olan: ad, sokak, sayılar) → **çekiliş** (`draw.mjs` 20 yönden 3'ünü dağıtır) → fikir + sayfada bir canlı etkileşim → **inşa** → **kapı** (`lint.mjs` + `inspect.mjs` gerçek tarayıcıda 1440/768/390 ölçer; gradient, eyebrow etiket, 01/02/03 numaralama, krem-terrakota/mor palet, 13px altı yazı, taşma… → fail) → kendi ekran görüntülerini eleştirip 3 tura kadar düzelt.
- ✅ **Gerçekten faydalı:** `assets.mjs` API anahtarsız açık koleksiyonlardan (Openverse, Wikimedia Commons, Met, Art Institute of Chicago) **ticari kullanıma uygun lisanslı** gerçek görsel/video bulur, indirir, kredisini `assets/credits.json`'a yazar.
- ⚠️ **Kendi kör testi:** son turda v2 **7.7**, hiç skill kullanmayan ajan **7.8**, başka bir tasarım skill'i 7.2 (3 brief'in 2'sinde v2 birinci). Yani jüri puanında skill'siz Claude'u **geçemedi**; büyük fark yalnız kendi inspector'ının kurallarında (v2: 0 hata, skill'siz: 8–13), o kuralları da kendisi koyuyor. Yazar sınırları dürüstçe yazmış: brief başına tek jüri, model jüri, ~0,5 puan gürültü.
- 💸 **Maliyet:** tam koşum 30–45 dk ve birkaç yüz bin token (çoğu görsel arama/çizim).
- Gereksinim: Node 22+ ve kurulu Chrome/Edge/Chromium (inspector için).
- Eski davranış lazımsa: `design-taste-frontend-v2-experimental` (eski tek-dosya v2) ve `design-taste-frontend-v1` korunuyor.
- Kur (hepsi): `npx skills add https://github.com/Leonxlnx/taste-skill` · tek skill: `--skill "design-taste-frontend"` · Claude Code plugin: `/plugin install taste-skill@taste-skill`
- → [[taste-skill/README|repo README]] · [[taste-skill/CHANGELOG|CHANGELOG (test sonuçları)]]

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
