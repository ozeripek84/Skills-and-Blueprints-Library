---
name: testsprite-qa
description: Otonom QA doğrulama — TestSprite CLI ile AI'ın "bitti" dediği özelliği gerçek tarayıcıda gerçek kullanıcı gibi test et.
---

# TestSprite — Otonom QA Doğrulama

## Ne zaman
AI ajanı (Claude Code / Codex) bir özelliği "bitirdim / çalışıyor" dediğinde — özellikle uzun/gece-boyu görevlerden sonra gerçekten çalıştığını **kanıtlamak** için.
Sorun: AI'ın "bitti" dediği her ~5 özellikten 1'i sessizce bozuk çıkıyor (%12-25 regresyon). Sen bilgisayar başında tek tek denemek zorunda kalmadan, TestSprite uygulamaya gerçek kullanıcı gibi girip butonlara basarak bunu yakalar. (TestSprite ile correctness ~%84-92, TestSprite'sız ~%67-71.)

## Stack
TestSprite CLI (açık kaynak, npm) + testsprite.com hesabı (API key). Testler **bulutta canlı tarayıcıda / canlı API'de** koşar — mock yok, kodun varsayımı değil çalışan uygulama test edilir. Claude / Codex / Cursor / Cline / Windsurf / Antigravity / Kiro / Copilot ile entegre (MCP veya CLI).

## Kurulum (tek sefer)
1. Node.js 20.19+ / 22.13+ / 24+
2. `npm install -g @testsprite/testsprite-cli`  (veya tek seferlik: `npx @testsprite/testsprite-cli`)
3. `testsprite setup` → API key'i (testsprite.com'dan al) girer, doğrular ve coding-agent'ına doğrulama skill'ini kurar
   - CI / non-interaktif: `TESTSPRITE_API_KEY=sk-... testsprite setup --from-env --yes --agent claude`
4. Kontrol: `testsprite auth status` · Ek agent: `testsprite agent install claude`

## Süreç (kullanım)
1. Özelliği yaptır (Claude Code'a normal prompt — örn. "toplantı silme + onay diyaloğu ekle").
2. Prompt'un sonuna ekle: **"sonra bu sistemi TestSprite ile doğrula."**
3. TestSprite kodu + PRD'yi okur, uygulamayı keşfeder, gerçek tarayıcı için test planı üretir.
4. Canlı test: butonlara basar, akışları (login → sayfa → aksiyon → onay/iptal) gerçek kullanıcı gibi dener; "sil dedim, hayır dedim, toplantı kalıyor mu" gibi edge-case'leri bile dener.
5. Rapor: her test için pass/fail + **ekran videosu** + DOM snapshot + kök-neden + önerilen fix (self-consistent failure bundle).
6. Döngü: Claude'a **"bu testler geçene kadar durma"** de → ajan fix'ler, `test rerun` ile tekrar koşar, yeşile kadar otonom.
7. Sadece yeni özelliği değil; önceki özelliklerdeki regresyonu da yakalar (test suite biriker; Auto-Heal UI değişince testi onarır).

## Faydalı komutlar
- `testsprite test run --wait` · `testsprite test rerun <id> --wait`
- `testsprite test failure get <id> --out ./.testsprite/failure` — tek self-consistent hata paketi (adım + ekran + DOM + kök-neden)
- `testsprite test result --history` · `testsprite test steps` (ekran görüntülü adımlar)
- `testsprite test run --all --project <id>` — tüm suite'i koş (regresyon)

## Çıktı standardı
- Her kritik akış gerçek tarayıcıda **pass** + ekran videosu delili
- Regresyon 0 (önceki özellikler hâlâ çalışıyor)
- Fail'lerde kök-neden + fix uygulandı, "tüm testler geçene kadar" otonom döngü
- Sonuçlar testsprite.com panelinden de izlenebilir (hangi test geçti/kaldı, adım adım, video)

## Yaygın hatalar
- AI'ın "çalışıyor" demesine güvenip test etmemek (~%20 özellik sessizce bozuk, boşa token/zaman)
- Canlı prod'da test etmek — ayrı branch / staging / preview URL'de doğrulat (videodaki gibi gr0k/preview'de)
- Tek özelliğe bakıp regresyonu atlamak (biriken suite'i düzenli `rerun` et)
- API key'i repo'ya commit'lemek (env var kullan; iş bitince `testsprite auth remove`)

## Akraba
- **Model seçimi → [CoderCup](https://codercup.ai)** — TestSprite'ın ücretsiz benchmark'ı; aynı işi farklı ajanlara yaptırıp correctness (%70) + hız (%15) + maliyet (%15) ile karşılaştırır. "Bu iş için hangi model?" sorusunun gerçek-veri cevabı.
- Tamamlayıcı: [[skill-kutuphanesi/test-kalite/e2e-playwright|e2e-playwright]] (kendi Playwright suite'in) · gstack `/qa` (gerçek tarayıcı QA) · [[BrowserAct — Gerçek Tarayıcı Aracı (referans)]] · [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]].
