---
tags: [referans, arac, browser, web-otomasyon, scraping, entegrasyon]
guncelleme: 2026-06-03
---

# 🌐 BrowserAct — Claude'a Gerçek Tarayıcı Veren CLI (referans)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Harici bir araç. Buraya not düşülme sebebi: web'de **gerçek aksiyon** (tıkla, form doldur, çok adımlı akış, bot/captcha'lı scrape) gerektiğinde "önce buraya bak" ile hatırlanabilsin.

## Ne işe yarar
Claude Code'un yerleşik fetch'i ya da Playwright'ın **takıldığı** yerde çalışır:
- Butona basma, **form doldurma**, sonraki sayfaya geçme (çok adımlı akış)
- **Bot/captcha** korumalı sitelerden güvenilir veri çekme (Stealth + Real Chrome modları)
- DOM çıkarma, screenshot, tab/session yönetimi
- **Kendi uygulamanı test etme** (butonlar/formlar gerçekten çalışıyor mu)

## Kurulum (doğrulanmış komutlar)
```bash
# 1) CLI'ı kur
uv tool install browser-act-cli --python 3.12

# 2) Kullanım kılavuzunu / core skill'leri yükle (her komuttan önce)
browser-act get-skills core --skill-version 2.0.2

# 3) (opsiyonel) Claude Code skill olarak ekle
npx skills add browser-act/skills --skill browser-act
```
- **İlk kullanım lokal + ücretsiz** — hesap/API key gerekmeden başlar.
- MCP entegrasyonu / yoğun otomasyon / captcha-ağır kullanım → ücretli plan.
- **Confirmation Gate:** tarayıcı açmadan ve hassas işlemden önce kullanıcı onayı ister.

## En değerli pattern: tek seferlik akış → kalıcı skill → schedule
1. Bir akışı bir kez yaptır (ör. "GitHub trending'den repo adı/dil/yıldız/açıklama çek").
2. Claude bunu **tekrar-edilebilir bir skill'e** çevirir (her seferinde aynı yöntem, tutarlı çıktı).
3. `/schedule` ile periyodik çalıştır (ör. haftalık).

**Örnek kullanımlar:**
- GitHub trending → projene faydalı/açık-kaynak repoları ekle (haftalık).
- Rakiplerden 5 site → veri çek → bizim sesimizle blog/taslak.
- Kendi siten → görselleri çek, optimize et, geri yükle.
- Uygulama testi → "robot musun" testleri dahil gerçek tıklama/form akışı.

## ⚠️ Sorumlu kullanım (kütüphane etik çizgisiyle tutarlı)
- ✅ Kendi uygulamanı test et, **public** veri, robots.txt + rate-limit'e saygılı kullanım.
- ❌ Site ToS'unu ihlal eden izinsiz kazıma, korumalı içerik için captcha bypass.
- Bkz. [[Yetenekler MOC|is-satis/lead-gen-ajansi]] — aynı "etik outreach/scrape" çizgisi.

## Ne zaman buna gerek YOK
- Sadece statik bir sayfanın metnini okumak → Claude'un yerleşik fetch'i yeter.
- Tek seferlik basit veri → araç kurmaya değmez.
- Gerçek tıklama/form/çok-adım/bot-koruması varsa → BrowserAct.

## İlişkili
- [[İçerik Fabrikası — Referans Sistem]] — üretim hattına web verisi beslemek için.
- [[Yetenekler MOC]] → `test-kalite/e2e-playwright` (tarayıcı testi), `otomasyon/web-scraping`.

## Kaynaklar
- [browser-act — Agent Skills Library](https://mcpservers.org/agent-skills/browser-act/browser-act)
- [Show IH: browser-act CLI (Indie Hackers)](https://www.indiehackers.com/post/show-ih-we-gave-our-claude-skills-a-real-browser-the-cli-we-built-browser-act-262172aca0)
