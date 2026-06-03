---
tags: [referans, arac, browser, playwright, otomasyon, test, scraping]
guncelleme: 2026-06-03
---

# 🎭 Playwright Tarayıcı Otomasyonu (Claude Code) — referans

> [[00 HOME|🏠 Ana sayfaya dön]]
> Claude Code'a **izole bir tarayıcı** verip web'de gerçek aksiyon aldırma (test, veri çekme, hesaba login olup iş yaptırma). Ücretsiz/açık (Playwright). Senin Chrome'una dokunmaz, kendi izole tarayıcısını kullanır.

## Nasıl çalışır (4 adımlı döngü)
Tarayıcı aç → ekran görüntüsü al (gören göz) → düşün ("buraya tıklamalıyım") → uygula. Hata olursa yeniden açıp dener (geri bildirim döngüsü). Senin tarayıcıdan yapabildiğin her şeyi yapar: form doldur, checkbox, metin, uçtan uca.

## Kurulum — 2 yol
**A) Video yöntemi (config'siz, DIY):** Claude Code'da **plan modu** (Shift+Tab) → şu prompt'u yapıştır:
```
Bu klasörde Playwright ile tarayıcı otomasyonu yapmak istiyorum.
Kurulum yap. Basit bir ekran görüntüsü testiyle her şeyin çalıştığından emin ol.
```
→ "hangi tarayıcı?" sorunca **Chromium** indirsin → planı onayla. Kuramazsa kendi hatasını düzeltir.

**B) Resmî Playwright MCP (daha temiz):**
```bash
claude mcp add playwright npx @playwright/mcp@latest
```
(Microsoft; accessibility-tree kullanır, vision modeli gerekmez.)

**Ön koşul:** Node.js 18+, Claude Code (Pro+ plan).

## 3 senaryo
1. **Kendi siteni test et:** "12 sayfalık form sitesi yap, sunucuda başlat, Playwright ile kendin test et, bulduğun bug'ları sıfırlanana kadar düzelt." → açar, tıklar, hata bulursa kodu düzeltip yeniden test eder.
2. **Public siteden veri çek:** "Bursa Nilüfer, 2+1, eşyalı, ≤40.000 kiralık daireleri bul; başlık/fiyat/m²/mahalle/bina yaşı/tarih çek; en mantıklıdan sıraya koy." (sahibinden vb. login gerektirmeyen public siteler). ~1-3 saatlik iş ~10 dk.
3. **Hesabına login olup iş yaptır:** YouTube Studio'ya izole profil + manuel login → analitik incele, niş'teki son 2 hafta viral İngilizce içerikleri ara, Watch Later'a ekle, **MD analiz raporu** üret. (Instagram/LinkedIn/CRM/banka paneli… aynı mantık.)

## Login gereken siteler — cookie yöntemi
Login isteyen sitelerde: kendi **Chrome profilinin oturumunu/çerezlerini** kullanır (site sana zaten güveniyor, önceden giriş yapmışsın). İzole profil + manuel giriş yaparsın, gerisini o sürdürür. Anti-bot korumasını da çoğunlukla bu cookie'lerle aşar.

## Kalıcı hale getir
Akışı bir **skill** olarak kaydet → `/schedule` ile rutini otomatikleştir → remote kontrol kurarsan telefondan görev ver, bilgisayar açık kalsın, o halletsin.

## ⚠️ Güvenlik / etik (kütüphane çizgisi)
- ✅ Public veri, kendi hesabın, kendi siten; tarayıcıda zaten yapabildiğin şeyler.
- ⛔ **Riskli/kritik login'leri verme** (banka, önemli işlem yapılan paneller). Yanlış işlem riskinde kontrolü sen al.
- Anti-bot/ToS'a dikkat; izinsiz kazıma yapma. → [[Yetenekler MOC|is-satis/lead-gen-ajansi]] etik çizgisi.

## BrowserAct mı, Playwright mı?
| | **Playwright (bu not)** | **[[BrowserAct — Gerçek Tarayıcı Aracı (referans)|BrowserAct]]** |
|---|---|---|
| Tür | Açık/ücretsiz, DIY veya resmî MCP | Ürün (CLI, ücretli katmanlar) |
| Güçlü yan | Bedava, şeffaf, test/scrape/login | Stealth + captcha çözme, hazır skill'ler |
| Ne zaman | Kendi site testi, public veri, kendi hesapların | Ağır bot/captcha korumalı siteler |

## İlişkili
- [[Agent Kurma — BLAST Çerçevesi]] (araçlar katmanı) · [[Yetenekler MOC|is-satis/outbound-lead-agent]] (tarayıcı + lead).
- Built-in `/verify`, `/run` skill'leri — uygulama testini doğrulama.

## Kaynaklar
- [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · [@playwright/mcp (npm)](https://www.npmjs.com/package/@playwright/mcp) · [Playwright MCP docs](https://playwright.dev/docs/getting-started-mcp)
