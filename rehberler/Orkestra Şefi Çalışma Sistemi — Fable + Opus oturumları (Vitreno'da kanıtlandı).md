---
tur: rehber
etiketler: [calisma-sistemi, claude-code, orkestra, dogrulama]
olusturuldu: 2026-09-14
kaynak: Vitreno projesi 2026-09-10 → 09-14 (blueprint §25.27, HANDOFF dosyaları, ~40 kart)
---
# Orkestra Şefi Çalışma Sistemi — Fable + Opus oturumları

> Kullanıcı 2026-09-14: "Bu çok güzel bir çalışma sistemi, ileriki projelerde de yapmamız gerekli."
> Vitreno'da 5 günde ~40 kart bu düzenle kapandı; tek oturumda altı kez yanlış raporu önledi.

## Roller
- **Kullanıcı:** karar verir, promptları oturumlar arasında taşır, yalnız kendisinin yapabileceğini yapar (anahtar, panel, telefon denemesi). Cevabın sonunda tek satır "SİZDE: … / ne zaman" görür.
- **Fable (şef):** KOD YAZMAZ. Ölçer, sıralar, karar verir, kural koyar, blueprint'i tutar. Her rapor için aynı ölçüm zinciri (aşağıda). Pahalı → kısa cevap, gerekli ölçüm.
- **Opus oturumları (A/B/C…):** her biri ayrı git worktree + ayrı dal + ayrı port; kesin **dosya sahipliği** (ör. B: stüdyo/editör/telegram; C: içerik/ops/çakışmayan kod; A: landing). Başkasının dosyasına dokunmaz; gereken satırı HANDOFF'a "şu 3 satır" diye bırakır.

## Bir kartın ömrü
1. Kullanıcı fikri → Fable ölçülebilir **kart** yazar (kapsam, kanıt: pozitif + negatif + kaynak + ARTIK, tur tahmini, $ tavanı) → blueprint'e commit.
2. Fable oturuma **TEK PARÇA prompt** verir (ek karar gelince öncekiyle birleştirir; "ek olarak" yok).
3. Oturum yapar, **kanıt betiği** yazar (`scripts/qa/kanit-<kart>.mjs`), TEK koşum, rapor: commit sha + KANIT BLOĞU + ölçülmeyenler + kendi hataları.
4. **Fable ölçüm zinciri:** geçici dalda `git rebase main` (oturumun dalına dokunmadan) → `tsc` 0 → **yasak diff** (`git diff main...dal --name-only`: başkasının alanı, landing) → eslint önce/sonra aynı dosyalarda (taban sayı büyümez) → **kanıt betiğini kendisi koşar** (oturumun sunucusu kapalıysa kendi sunucusunu kaldırır) → `merge --ff-only` → blueprint'e ölçüm bloğu commit → hafıza devir satırı.
5. Deploy: paket halinde (b, b2, b3…), ön kontrol salt okur → kapılar geçerse çık; son iyi sha not; geri alma = o sha'yı yeniden deploy.

## Kanıt bloğu (zorunlu biçim)
```
KANIT · <kart> (<koşum komutu> — N/N, TEK koşum, $X)
├ POZİTİF   : …
├ EYLEM     : gerçekten yapıldı (elle çağrı sayılmaz)
├ NEGATİF   : yanlış girdi/yetkisiz/kapalı kapı → red, satır DEĞİŞMEDİ
├ BASİTLİK  : dokunuş ≤3 · soru ≤1 · teknik kelime 0 · "Nasıl çalışır" var
├ KAYNAK    : DB / canlı API / diskteki dosya (arayüz değil)
├ ARTIK     : bağımsız tarama (2 dk eşiği) 0; gerçek satır ödünç alındı ve GERİ KONDU
└ ÖLÇÜLMEDİ : dürüst liste
```

## Kurallar (hepsi bir olaydan çıktı)
- "Düştü" ≠ "kod bozuk": 6 düşüşün 4'ü test kusuru, 1'i ortam farkı, 1'i gerçek hata. **Pozitif + negatif kontrol** olmadan iddia yok; "koşmadı" ≠ "geçti" ≠ "düştü".
- Kanıt betiği **üretim satırını silmez**; ödünç alır, `finally`'de geri koyar, ARTIK "geri kondu"yu ayrıca ölçer.
- Aynı kanıt betiğini art arda iki kez koşma (ikincinin ARTIK'ı birincinin temizliğini yakalar). Ortam-bağımlı kanıt **sunucunun ağacından** koşulur.
- Bağımlı kanıtı ff sonrası **yeniden koş** (K5'ten sonra 14/5'in bir kontrolü sessizce düşmüştü).
- Migration numarası **iki ağaçta** kontrol edilir (çakıştı: iki 0074).
- Deploy: `--prebuilt` YASAK (gizli env `[SENSITIVE]` gömüldü, 4-5 dk 500); rollback CLI'de olmayabilir → son iyi sha'yı yeniden çık.
- Her karta genel kurallar: **sektör tarafsızlığı**, **basitlik/user-friendly**, **sıfır sorumluluk**, 13 dil, 320 px, 44 px düğme.
- Fable'ın kendi teşhisi de yanlış çıkabilir (L1'de çıktı); oturum ölçümle çürütürse ölçüm kazanır.

## Dosyalar
- `VITRENO-MASTER-BLUEPRINT.md` (kartlar + ölçüm blokları, yalnız Fable commit'ler: `git commit -- <dosya>`)
- `HANDOFF-<oturum>.md` (oturumun raporları, devir), `scripts/qa/kanit-*.mjs`, `scripts/verify/harness.mjs` (tempUser/tempStore + cleanup loglu)
- Hafıza: `sonraki-tur-*.md` en alttaki DEVİR bloğu = yeni sohbetin başlangıcı.

## Yeni projede kurulum (30 dk)
1. Repo + `main`; oturum başına `git worktree add ../proj-<X> <dal>`; port ve dosya sahipliği tablosu blueprint §1'e.
2. `scripts/verify/harness.mjs` kopyala-uyarla (db, tempUser, guard, cleanup `{error}` loglu).
3. Blueprint şablonu: kart başlığı = (kim, ne zaman, tur, $), kapsam, kanıt maddeleri, "ölçülmeyen" beklentisi.
4. İlk prompt: rol + sahiplik + kanıt bloğu biçimi + "tek rapor: sha, kanıt, ölçülmeyenler".
5. Fable'a: her raporda ölçüm zinciri, blueprint commit, hafıza devir; kullanıcıya "SİZDE" satırı.
