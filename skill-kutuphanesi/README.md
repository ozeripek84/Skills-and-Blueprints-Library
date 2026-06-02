# Skill Kütüphanesi — 145+ Claude Code Skill

Her skill, Claude Code'a yüklenebilen "uzmanlık" dosyası. Belirli bir görev için Claude'a yapılandırılmış talimat verir.

3 günlük webinar boyunca canlı olarak göstereceğimiz tüm use case'ler bu kütüphanede.

---

## Kategoriler

| Klasör | Sayı | İçerik |
|---|---:|---|
| **web-saas** | 10 | SaaS MVP, admin panel, dashboard, marketplace, membership, multi-tenant, landing, CMS, onboarding, pricing |
| **ai-chatbot** | 10 | LLM chatbot, RAG, AI agent, voice bot, görsel üretici, ses-yazı, WhatsApp/Slack/Discord/Telegram bot |
| **otomasyon** | 10 | n8n, Zapier, web scraping, email, sosyal medya, lead capture, onboarding, raporlama, faturalama, inventory |
| **backend-api** | 10 | REST API, GraphQL, webhook, cron, JWT, OAuth, DB design, rate limit, file upload, realtime |
| **mobil** | 5 | Expo app, PWA, React Native, responsive, push notifications |
| **veri-analitik** | 8 | Data pipeline, BI dashboard, CSV, PDF, tablo, log, A/B test, kullanıcı takip |
| **devops** | 5 | Docker, CI/CD, Vercel, monitoring, DB migration |
| **e-ticaret** | 8 | Stripe checkout, subscriptions, sepet, iyzico, Shopify, ürün, kargo (TR), kupon |
| **entegrasyon** | 15 | Google Sheets/Calendar, Notion, Airtable, HubSpot, Salesforce, Mailchimp, WhatsApp, Calendly, Twilio, OpenAI, Anthropic, Replicate, GitHub, S3 |
| **icerik-pazarlama** | 8 | Blog, SEO, content calendar, newsletter, sosyal içerik, A/B test, OG image, podcast |
| **sektor-ozel** | 15 | Restoran POS, randevu, diş kliniği, emlak, kurs, etkinlik, fitness, yemek tarif, hukuk, kuaför, oto servis, job board, otel, pet care, seyahat |
| **araclar** | 8 | QR, URL kısalt, form builder, dosya dönüştürücü, screenshot, yazı üretici, API test, markdown editor |
| **is-satis** | 10 | CRM, teklif, fatura, müşteri portal, lead magnet, affiliate, abone yönetim, refer-friend, pricing calc, sözleşme |
| **test-kalite** | 5 | E2E (Playwright), unit test, load test, security audit, accessibility |
| **frontend** | 8 | Animasyon, form validasyon, state, component lib, dark mode, i18n, skeleton, error handling |
| **is-akislari** | 10 | Sıfırdan SaaS / e-ticaret / marketplace / mobile / blog / portfolio / agent / kurs / AI tool / newsletter |

**Toplam: 145+ skill**

---

## Skill nasıl yüklenir?

### Tek skill

```bash
mkdir -p .claude/skills/[skill-adi]
cp /path/to/skill-kutuphanesi/[kategori]/[skill].md .claude/skills/[skill-adi]/SKILL.md
```

Sonra Claude Code başlat — skill yüklü.

### Kategori yükle

```bash
# Örnek: tüm AI/chatbot skill'leri
mkdir -p .claude/skills
for skill in ai-chatbot/*.md; do
  name=$(basename "$skill" .md)
  mkdir -p ".claude/skills/$name"
  cp "$skill" ".claude/skills/$name/SKILL.md"
done
```

### Hepsini yükle (135+ skill aynı anda — overkill ama mümkün)

```bash
mkdir -p .claude/skills
for category in */; do
  for skill in "$category"*.md; do
    if [[ -f "$skill" && "$(basename "$skill")" != "README.md" ]]; then
      name=$(basename "$skill" .md)
      mkdir -p ".claude/skills/$name"
      cp "$skill" ".claude/skills/$name/SKILL.md"
    fi
  done
done
```

---

## Skill formatı

Her skill aynı yapıyı izler:

```markdown
---
name: skill-adi
description: Ne yaptığını 1 cümlede açıklayan kısa metin (Claude bu yazıya göre skill'i seçer)
---

# Skill Adı

## Ne zaman
[Hangi durumda kullanılır]

## Stack
[Hangi teknolojiler]

## Süreç
[Adım adım işleyiş]

## Çıktı standardı
[Bittiğinde nasıl görünmeli]

## Yaygın hatalar
[Kaçınılması gerekenler]
```

---

## Skill'i tetikleme

Skill yüklü ve Claude Code'a şöyle bir prompt yazdığında:

> "Bana bir SaaS MVP kur"

Claude `saas-mvp` skill'ini otomatik tanır ve onun adımlarını izler. Özel olarak "şu skill'i kullan" demene gerek yok — açıklamadaki keyword'lerle eşleşir.

---

## Kendi skill'lerini ekleme

Kendi sektörüne/işine özel skill yazmak istersen:

1. Yeni klasör aç (örn `kendi-sektor/`)
2. SKILL.md dosyası oluştur (yukarıdaki formatta)
3. `.claude/skills/[adi]/SKILL.md` olarak kopyala

Kendi skill'in profesyonel + müşteri-spesifik olabilir — örn:
- `[müşteri-adi]-brand-stil`
- `[sektör]-fiyat-stratejisi`

---

## Webinar canlı demo için

3 günlük webinar boyunca aşağıdaki skill'leri özellikle göstereceğiz:

**Gün 1:**
- `web-saas/landing-page` — sıfırdan landing
- `is-akislari/sifirdan-portfolio` — freelance portfolio

**Gün 2:**
- `web-saas/saas-mvp` — 7 günlük SaaS plan
- `is-akislari/sifirdan-saas` — full SaaS build
- `ai-chatbot/llm-chatbot` — custom chatbot

**Gün 3:**
- `otomasyon/lead-capture` — full lead pipeline
- `otomasyon/musteri-onboarding` — onboarding flow
- `is-satis/teklif-jenerator` — proposal automation

---

## Pro tip

145 skill yüklemen zorunlu değil — **işine en uygun 10-20 tanesini seç ve onları derinleştir.**

Sektörel öneri:
- **Web tasarım odaklı:** web-saas/* + frontend/* + sektor-ozel ilgili olan
- **Otomasyon odaklı:** otomasyon/* + entegrasyon/* + araclar/*
- **SaaS kuruyor:** is-akislari/sifirdan-saas + web-saas/* + backend-api/*
- **AI ürün:** ai-chatbot/* + entegrasyon/openai-api + entegrasyon/anthropic-api

---

Bu kütüphane **canlı demo için** + **kendi referansın için** + **müşteriye satarken pitch için** kullanılır.

— Esad & Burhan
Goatstarter Ventures
