---
description: Uygulama test & kalite doğrulama (yalnız ücretsiz/açık araçlar) — unit · e2e · otonom QA · load · accessibility · security. Önce hangi test ne zaman, sonra uygula.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /test-kalite:test-kalite


# 🧪 Test & Kalite — Uygulama Doğrulama

Tüm test türleri tek yerde, **yalnız ücretsiz/açık kaynak araçlarla** (paralı/cloud servis yok). Önce **"neyi test ediyorum?"** sorusuna göre türü seç, sonra o bölümü uygula.

## Hangi test, ne zaman? (karar tablosu)
| İhtiyaç | Tür | Araç (ücretsiz/açık) |
|---|---|---|
| Saf mantık, util, kütüphane, hesaplama | **Unit** | Vitest + Testing Library |
| Kritik kullanıcı akışı (login, checkout, CRUD) | **E2E** | Playwright |
| "AI 'bitti' dedi — gerçekten çalışıyor mu?" | **Otonom QA** | gstack `/qa` · Playwright (yerel, gerçek tarayıcı) |
| Launch öncesi yük / performans | **Load** | k6 / Artillery / autocannon |
| Erişilebilirlik / yasal uyum | **Accessibility** | axe-core + Pa11y + Lighthouse |
| Güvenlik / pre-launch / periyodik | **Security** | `npm audit` + Semgrep + OWASP ZAP |

## 1. Unit test
Vitest + Testing Library. Kritik path %80+ coverage, full suite <10sn, davranış test et (implementation değil), mock'ları izole tut.

## 2. E2E test (Playwright)
Kritik journey → auth/db setup → Page Object Model → visual regression → mobile → CI. Locator wait kullan (`waitForTimeout` değil), flaky'de kök neden bul.

## 3. Otonom QA (ücretsiz)
AI "bitti" dediğinde gerçekten çalışıyor mu (~%20 sessiz bozuk). **gstack `/qa`** (gerçek tarayıcı QA lead, kurulu) veya **Playwright** ile yerelde, kodunu göndermeden. Claude'a: "gerçek tarayıcıda kullanıcı gibi test et — butonlara bas, akışı doğrula, edge-case dene, geçene kadar durma"; regresyonu da koştur.

## 4. Load / performans
k6 / Artillery / autocannon. p95 <500ms, hedef yükte %0 hata, DB yük altında, **staging'de** (prod'da değil).

## 5. Accessibility (a11y)
axe-core + Pa11y + Lighthouse. WCAG 2.1 AA, a11y 95+, klavye+screen reader, renk kontrastı, ARIA. Semantic HTML (div'i buton yapma).

## 6. Security audit
`npm audit` + Semgrep + OWASP ZAP. OWASP Top 10, secret scanning, input validation, rate limiting, parameterized query.

## Detaylı Adımlar

Bu komut çağrıldığında, kullanıcının uygulamasını yukarıdaki karar tablosuna göre **ücretsiz/açık araçlarla** test et. Gerçek kullanıcı akışı için yerel araç (Playwright · gstack `/qa`) kullan; canlı prod'a dokunma (branch/staging/preview). Her adımda ilerlemeyi raporla.

### Çalıştırma akışı:
1. **Türü seç:** Kullanıcının ihtiyacını karar tablosuyla eşle (birden çok tür gerekebilir: örn. e2e + a11y + security).
2. **Kapsam:** Test edilecek akış/modülleri netleştir (kritik journey'ler, riskli alanlar).
3. **Ortam:** Uygulamayı çalıştır (dev/staging URL). Prod veri riskini önle.
4. **Uygula (ücretsiz/açık):**
   - Gerçek akış / "çalışıyor mu" doğrulaması → **Playwright** yaz-koş veya **gstack `/qa`** (gerçek tarayıcıda kullanıcı gibi).
   - Logic → **Vitest** unit + coverage. Launch kritikse → **k6** load (staging). Public site → **Lighthouse/axe** a11y. Pre-launch → `npm audit` + Semgrep security.
5. **Sonuç oku:** pass/fail + delil (screenshot/trace/video). Fail'de kök-nedeni çıkar.
6. **Fix döngüsü:** hataları düzelt → ilgili testi **tekrar koş**. Tüm kritik testler geçene kadar tekrarla.
7. **Regresyon:** yeni özellik eskiyi bozmuş mu — mevcut suite'i baştan koş.
8. **Raporla:** geçen/kalan + uygulanan fix'ler + kalite kapısı checklist'i.

### Genel kalite kapısı (checklist):
- [ ] Kritik akışlar gerçek tarayıcıda geçti (regresyon dahil)
- [ ] Unit coverage %80+ (logic) · TypeScript hatasız
- [ ] Mobile responsive · loading/error/empty state
- [ ] a11y WCAG AA · SEO meta · (gerekiyorsa) Privacy/Terms
- [ ] `npm audit` temiz · secret sızıntısı yok
- [ ] Launch kritikse: load p95 <500ms

### Akraba (ücretsiz/açık):
gstack `/qa` · `/test` · Playwright referansı.

Şimdi başla — karar tablosundan türü seç, yalnız ücretsiz/açık araçlarla adım 1'den ilerle.
