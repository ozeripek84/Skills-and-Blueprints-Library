---
name: test-kalite
description: Uygulama test & kalite doğrulama (yalnız ücretsiz/açık araçlar) — unit · e2e · otonom QA · load · accessibility · security. Önce hangi test ne zaman, sonra uygula.
---

# 🧪 Test & Kalite — Uygulama Doğrulama

Tüm test türleri tek yerde, **yalnız ücretsiz/açık kaynak araçlarla** (paralı/cloud servis yok). Önce **"neyi test ediyorum?"** sorusuna göre türü seç (aşağıdaki tablo), sonra o bölümü uygula.

## Hangi test, ne zaman? (karar tablosu)
| İhtiyaç | Tür | Araç (ücretsiz/açık) |
|---|---|---|
| Saf mantık, util, kütüphane, hesaplama | **Unit** | Vitest + Testing Library |
| Kritik kullanıcı akışı (login, checkout, CRUD) | **E2E** | Playwright |
| "AI 'bitti' dedi — gerçekten çalışıyor mu?" | **Otonom QA** | gstack `/qa` · Playwright (yerel, gerçek tarayıcı) |
| Launch öncesi yük / performans | **Load** | k6 / Artillery / autocannon |
| Erişilebilirlik / yasal uyum | **Accessibility** | axe-core + Pa11y + Lighthouse |
| Güvenlik / pre-launch / periyodik | **Security** | `npm audit` + Semgrep + OWASP ZAP |

---

## 1. Unit test
**Ne zaman:** Logic-heavy kod, util'ler, kütüphaneler. · **Stack:** Vitest + Testing Library (açık kaynak).
**Süreç:** test altyapısı → util fonksiyonları → React component → external dep mock → coverage → watch (TDD) → CI.
**Çıktı standardı:** kritik path'lerde %80+ coverage · full suite <10sn · snapshot minimal · mock'lar izole.
**Yaygın hata:** snapshot abuse · implementation değil **davranış** test et · her şeyi mock'lama (bazen integration test daha iyi).

## 2. E2E test (Playwright)
**Ne zaman:** Production kritik akışlar (checkout, signup, ana özellikler). · **Stack:** Playwright + GitHub Actions (açık kaynak, ücretsiz).
**Süreç:** kritik journey'leri belirle → auth/db setup → Page Object Model → visual regression (screenshot) → mobile viewport → CI → flaky yönetimi.
**Çıktı standardı:** top ~10 akış test edildi · <5dk toplam · paralel · fail'de trace.
**Yaygın hata:** `waitForTimeout` (locator wait kullan) · flaky test'i retry'la kapatma, **kök neden** bul · her testte yeniden auth (storage state reuse).

## 3. Otonom QA — "gerçekten çalışıyor mu?" (ücretsiz)
**Ne zaman:** AI ajanı bir özelliği "bitti/çalışıyor" dediğinde, özellikle uzun/gece-boyu görevlerden sonra. Sorun: AI'ın bitti dediği her ~5 özellikten 1'i sessizce bozuk (%12-25 regresyon) — gerçek tarayıcıda kullanıcı gibi denenmesi lazım.
**Nasıl (ücretsiz/yerel — kodunu 3. tarafa göndermeden):**
- **gstack `/qa`** — gerçek tarayıcı açan QA lead; zaten kurulu, bedava. Uygulamaya kullanıcı gibi girer, akışları tıklayarak dener.
- **Playwright (MCP/otomasyon)** — Claude'a gerçek tarayıcı verir; akışı tıklat-doğrulat, screenshot/trace ile delil al.
- **Yöntem:** özelliği yaptırdıktan sonra Claude'a de ki: *"bu özelliği gerçek tarayıcıda kullanıcı gibi test et — butonlara bas, akışı (login → aksiyon → onay/iptal) doğrula, edge-case'leri dene, geçene kadar durma."* Sadece yeni özelliği değil önceki akışları da (regresyon) yeniden koştur.
**Çıktı standardı:** kritik akış gerçek tarayıcıda geçti + screenshot/trace delili · regresyon 0 · yeşile kadar fix döngüsü.
**Yaygın hata:** AI "çalışıyor" dedi diye test etmemek (~%20 sessiz bozuk) · canlı prod'da test (branch/staging/preview kullan) · tek özelliğe bakıp regresyonu atlamak.

## 4. Load / performans test
**Ne zaman:** Launch öncesi, scale planlama. · **Stack:** k6 / Artillery / autocannon (açık kaynak).
**Süreç:** kritik endpoint'ler → gerçekçi senaryolar → ramp-up profili → metrikler (p50/p95/p99) → bottleneck analizi → DB yük altında → rapor.
**Çıktı standardı:** p95 <500ms · hedef yükte %0 hata · DB query analizi · aksiyon maddeleri.
**Yaygın hata:** prod'a load test (staging şart) · cold cache (warm-up) · coğrafi gecikmeyi unutmak.

## 5. Accessibility (a11y)
**Ne zaman:** Public site, yasal uyum. · **Stack:** axe-core + Pa11y + Lighthouse (açık kaynak) + manuel test.
**Süreç:** Lighthouse a11y audit → screen reader (VoiceOver/NVDA) → klavye navigasyonu → renk kontrastı → focus yönetimi → ARIA label → form erişilebilirliği.
**Çıktı standardı:** WCAG 2.1 AA · Lighthouse a11y 95+ · tab navigasyonu çalışıyor · skip link'ler.
**Yaygın hata:** div'i buton yapmak (semantic HTML) · sadece-renk göstergesi · auto-play medya.

## 6. Security audit
**Ne zaman:** Pre-launch, periyodik, post-incident. · **Stack:** `npm audit` + Semgrep + OWASP ZAP (hepsi ücretsiz/açık).
**Süreç:** dependency scan (`npm audit`) → SAST (Semgrep) → secret scanning (history) → OWASP Top 10 → auth/authz review → input validation → rate limiting.
**Çıktı standardı:** 0 kritik açık · secret'lar rotate edildi · tüm input validate · her yerde HTTPS.
**Yaygın hata:** "çalışıyor ya" zihniyeti (güvenlik sonradan değil) · prod'da default credential · SQL injection (parameterized query).

---

## Genel kalite kapısı (her teslimden önce)
- [ ] Kritik akışlar E2E/QA ile gerçek tarayıcıda geçti (regresyon dahil)
- [ ] Logic'te unit coverage %80+ · TypeScript hatasız
- [ ] Mobile responsive · loading/error/empty state'ler
- [ ] a11y (WCAG AA) · SEO meta · gerekiyorsa Privacy/Terms
- [ ] Security: `npm audit` temiz · secret sızıntısı yok
- [ ] Launch kritikse: load test p95 <500ms

## Akraba (ücretsiz/açık)
- **gstack `/qa`** — gerçek tarayıcı açan QA lead (kurulu, MIT) · **`/test`**
- [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] — ücretsiz gerçek tarayıcı kontrolü
- İkiz kodlu komut: `/test-kalite:test-kalite`
