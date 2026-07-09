---
description: Otonom QA doğrulama — TestSprite CLI ile AI'ın "bitti" dediği özelliği gerçek tarayıcıda gerçek kullanıcı gibi test et.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /test-kalite:testsprite-qa


# TestSprite — Otonom QA Doğrulama

## Ne zaman
AI ajanı (Claude Code / Codex) bir özelliği "bitirdim / çalışıyor" dediğinde — özellikle uzun/gece-boyu görevlerden sonra gerçekten çalıştığını **kanıtlamak** için.
Sorun: AI'ın "bitti" dediği her ~5 özellikten 1'i sessizce bozuk çıkıyor (%12-25 regresyon). TestSprite uygulamaya gerçek kullanıcı gibi girip butonlara basarak bunu yakalar.

## Stack
TestSprite CLI (açık kaynak, npm) + testsprite.com hesabı (API key). Testler bulutta **canlı tarayıcıda / canlı API'de** koşar (mock yok). Claude / Codex / Cursor / Cline / Windsurf / Antigravity / Kiro / Copilot ile entegre.

## Kurulum (tek sefer)
1. Node.js 20.19+ / 22.13+ / 24+
2. `npm install -g @testsprite/testsprite-cli`  (veya `npx @testsprite/testsprite-cli`)
3. `testsprite setup` → API key'i (testsprite.com) girer, doğrular, agent'a doğrulama skill'ini kurar
   - CI: `TESTSPRITE_API_KEY=sk-... testsprite setup --from-env --yes --agent claude`
4. Kontrol: `testsprite auth status`

## Süreç (kullanım)
1. Özelliği yaptır (normal prompt).
2. Prompt sonuna: **"sonra bu sistemi TestSprite ile doğrula."**
3. TestSprite kodu + PRD'yi okur, uygulamayı keşfeder, test planı üretir.
4. Canlı test: butonlara basar, akışları gerçek kullanıcı gibi dener (edge-case dahil).
5. Rapor: pass/fail + ekran videosu + DOM + kök-neden + önerilen fix.
6. Döngü: "bu testler geçene kadar durma" → fix + `test rerun`, yeşile kadar.
7. Regresyonu da yakalar (biriken suite; Auto-Heal).

## Çıktı standardı
- Her kritik akış gerçek tarayıcıda pass + ekran videosu delili
- Regresyon 0 · yeşile kadar otonom fix döngüsü
- Sonuçlar testsprite.com panelinden izlenebilir

## Yaygın hatalar
- AI "çalışıyor" dedi diye test etmemek (~%20 sessiz bozuk)
- Canlı prod'da test (staging/branch/preview kullan)
- Regresyonu atlamak (suite'i düzenli rerun et)
- API key'i repo'ya commit'lemek (env var; `testsprite auth remove`)

## Detaylı Adımlar

Bu komut çağrıldığında, kullanıcının uygulamasını TestSprite ile uçtan uca doğrula. Canlı prod'a dokunma; ayrı branch/preview üzerinde çalış. Her adımda ilerlemeyi raporla.

### Çalıştırma akışı:

1. **Ön koşul:** `testsprite auth status` çalıştır. Kurulu değilse kurulumu yap: Node sürümünü doğrula → `npm install -g @testsprite/testsprite-cli` → `testsprite setup` (API key testsprite.com'dan). Agent hedefi yoksa `testsprite agent install claude`.
2. **Ortam:** Uygulamayı çalıştır (dev server / staging URL). Prod veri riskini önlemek için branch/preview kullan.
3. **Kapsam:** Doğrulanacak özelliği ve kritik akışları kullanıcıdan netleştir (login, ana aksiyon, onay/iptal, edge-case'ler).
4. **Test oluştur & koş:** `testsprite test run --wait` (veya doğrulama skill'i üzerinden "TestSprite ile doğrula"). Frontend testleri bulut tarayıcıda, backend testleri canlı API'de koşar.
5. **Sonuç oku:** `testsprite test result --history` · adımlar için `testsprite test steps`. Fail varsa `testsprite test failure get <id> --out ./.testsprite/failure` ile tek self-consistent hata paketini al.
6. **Fix döngüsü:** Hata paketindeki kök-neden + öneriye göre kodu düzelt → `testsprite test rerun <id> --wait`. **Tüm testler geçene kadar** tekrarla.
7. **Regresyon:** `testsprite test run --all --project <id>` ile önceki testleri de koş; eski özelliklerde bozulma var mı bak.
8. **Raporla:** Geçen/kalan testler + ekran videosu delili + uygulanan fix'ler; kullanıcıya net özet.

### Kalite checklist:
- [ ] TestSprite CLI kurulu + `auth status` OK
- [ ] Test canlı prod'da DEĞİL (staging/branch/preview)
- [ ] Hedef akış(lar) net tanımlı
- [ ] Tüm kritik akışlar pass (ekran videosu delili)
- [ ] Regresyon 0 (biriken suite rerun edildi)
- [ ] API key env'de, repo'ya sızmadı
- [ ] Fail'lerde kök-neden + fix uygulandı, yeşile kadar döngü

### Akraba:
- Model seçimi → **CoderCup** (codercup.ai): ajanları correctness/hız/maliyetle karşılaştıran ücretsiz benchmark.
- Tamamlayıcı: `/test-kalite:e2e-playwright` · gstack `/qa` · BrowserAct / Playwright referansları.

Şimdi başla — önce `testsprite auth status` ile kurulumu doğrula, sonra adım 1'den ilerle.
