---
tags: [rehber, model, yontem, fable5, opus5, system-prompt, playbook, dürüst]
guncelleme: 2026-08-17
---

# 🧠 Süper Asistan Fable 5 — "güçlü modelin beynini ucuz modele taşıma" iddiası

> [[00 HOME|🏠 Ana sayfaya dön]]
> Tam referans + kalibrasyon tabloları: [[skill-kutuphanesi/araclar/model-metodu-tasima|⚙️ model-metodu-tasima skill]] · çalıştırılabilir hâli: `/araclar:model-metodu-tasima`

---

## ⚡ İki video, aynı iddia, aynı hata

| Kaynak | Önerdiği yöntem | Ortak iddia |
|---|---|---|
| `VR2EdVZ4-s0` | Fable 5'e **kendi çalışma yöntemini yazdır** → Opus 5 projesine yapıştır | "Fable 5'in zekâsını ucuz modele taşırsın" |
| `C5J5VAng7TI` | Fable 5'in **sızdırılmış system prompt'unu** al → GLM 5.2 / Kimi K3'e yapıştır | "Küçük modelden çok daha güçlü yanıt alırsın" |

**İkisi de aynı yanlış varsayıma dayanıyor: zekânın prompt'ta olduğu.** Zekâ ağırlıklardadır; prompt yalnızca **davranış** ayarlar. Bir prompt zayıf modeli daha *düzenli* yapar, daha *akıllı* yapmaz.

İkinci video ayrıca **kendi kaynağıyla çelişiyor** — aşağıda dosyanın içine bakıp ölçtüm.

---

## 🔬 Sızdırılan dosyada gerçekte ne var (ölçüm)

Kaynak: `github.com/elder-plinius/CL4R1T4S/ANTHROPIC/CLAUDE-FABLE-5.md` · 122 KB · 1.597 satır · ~17.500 kelime

| Bulgu | Ölçüm | Anlamı |
|---|---|---|
| **%60'ı araç tanımı** | 1.597 satırın **969'u** (satır 629+) | 18 adet **claude.ai'ye özel** araç şeması: `weather_fetch`, `recipe_display_v0`, `places_map_display_v0`, `fetch_sports_data`, `recommend_claude_apps`, `search_mcp_registry`, `web_search`, `bash_tool`… Bu araçlar GLM'de de Kimi'de de **yok**. |
| **"Nasıl düşünür/plan yapar" bölümü YOK** | Başlıkların hiçbiri reasoning/planning değil | Bölümler: ürün bilgisi · refusal politikası · çocuk güvenliği · hukuki-finansal · ton & biçim · kullanıcı esenliği · tarafsızlık · hafıza · artifact depolama · MCP önerileri · arama talimatları · telif uyumu · araç şemaları · "Claudeception" · atıf kuralları. **Videonun "düşünme, planlama, araç kullanma kurallarının hepsi" iddiası dosyada karşılanmıyor.** |
| **Zaten eskimiş** | Dosya kendi içinde tarihini veriyor: *"the actual current date, Tuesday, June 09, 2026"* | ~10 haftalık snapshot. |
| **Ürün bilgisi de eski** | **Opus 5 ve Sonnet 5 hiç geçmiyor** (0 eşleşme) | "En güncel modeller" olarak Fable 5, Opus 4.8, Sonnet 4.6, Haiku 4.5 sayılıyor. Bugün Opus 5 ve Sonnet 5 çıktı → dosya **kendi konusunda yanlış bilgi** taşıyor. |
| **claude.ai prompt'u, Claude Code değil** | *"accessible via this web-based, mobile, or desktop chat interface"* | Kodlama/ajan işi için değil, **sohbet ürünü** konfigürasyonu. |

**Özet:** dosya bir "düşünme sistemi" değil; **ürün konfigürasyonu + güvenlik politikası + araç kataloğu.**

### Kaynağın güvenilirliği
CL4R1T4S (elder-plinius) topluluk derlemesi; içerik **modele söyleterek** çıkarılıyor, Anthropic tarafından doğrulanmıyor. Model kendi system prompt'unu kısmen **uydurabilir**. Bu dosya iç tutarlılığı yüksek (model string'leri, ürün adları doğru) ama yine de **kanıtlanmış bir sızıntı değil, iddia.** Not: Anthropic claude.ai system prompt'larını zaten **resmen yayımlıyor** — doğrulamak istersen resmî sürümle karşılaştır.

---

## ❌ GLM 5.2 / Kimi K3'e yapıştırmak neden işe yaramaz

1. **Zekâ taşınmaz.** Ağırlıklar değişmez; prompt davranış ayarlar.
2. **%60'ı olmayan araçları tarif ediyor.** Hedef modele "sende bulunmayan 18 aleti şu kurallarla kullan" demiş olursun → uydurma araç çağrısı, kafa karışıklığı, bozuk çıktı.
3. **İçerik "yöntem" değil, politika.** Anthropic'in refusal/çocuk güvenliği/telif politikası başka bir modelde ne uygular ne de anlamlıdır.
4. **~17.500 kelime bağlam yakar.** Ucuz modelin en büyük avantajı (maliyet + bağlam) her istekte bu yükle eriyor.
5. **Zaten eski.** 9 Haziran 2026 snapshot'ı; kendi model listesi bile güncel değil.
6. **Hukuki soru.** Bir sağlayıcının system prompt'unu alıp rakip modele koymak ToS/IP tarafında temiz değil.

> Videonun "yoruma **Claude** yaz, linki DM'den göndereyim" kapanışı da not: içerik zaten **halka açık bir GitHub reposunda** — DM'e yönlendirme etkileşim/takipçi hunisi.

---

## ✅ Peki bu dosya gerçekten ne işe yarar?

**Kopyalanacak değil, incelenecek bir belge.** Dünya çapında bir ürünün system prompt'u nasıl yazılmış görüyorsun. Kendi `CLAUDE.md` / proje talimatını yazarken örnek alınacak yanları:

- **Bölümlendirme** — konu başına ayrı, adlandırılmış blok (`tone_and_formatting`, `refusal_handling`…)
- **Kural dili** — 3. şahıs, pozitif ifade: *"Claude uses a warm tone…"* (yasak listesi değil, davranış tarifi)
- **Politikanın katmanlanması** — genel kural → istisna → istisnanın istisnası
- **Araç tanımı yazımı** — aracın ne yaptığı değil, **ne zaman çağrılacağı / çağrılmayacağı**
- **Somutluk** — "iyi ol" yok; her satır bir kararı değiştiriyor

Bu, [[skill-kutuphanesi/araclar/model-metodu-tasima|model-metodu-tasima]] skill'indeki "her satır bir davranışı değiştirmeli" kuralının canlı örneği.

---

## 🎯 Sana uygun asıl rota (Fable 5 credit'i gerekmiyor)

Zekâ taşınmadığına göre belgenin Fable 5'ten çıkması **şart değil**. Üstelik Fable kaynaklı belge Opus 5'te **söküm** ister: Fable'ın yazacağı "her adımda kendini doğrula" satırı Opus 5'te aşırı-doğrulama üretir — Opus 5 işini zaten kendi doğruluyor; doğru hamle o satırı **silmek**.

**Kaynak = hedef yap.** Opus 5'e kendi yöntemini kendisi yazdırsın. Tasarruf da Fable'dan inmekten değil, **Opus 5'ten inmekten** gelir:

| Kaynak | Hedef | Kazanç |
|---|---|---|
| Opus 5 | **Opus 5** (aynı) | Tutarlılık + daha az elle düzeltme. **Buradan başla.** |
| Opus 5 | **Sonnet 5** | ~**1.7×** ucuz ($5/$25 → $3/$15) |
| Opus 5 | **Haiku 4.5** | **5×** ucuz ($1/$5) — yalnız şablonlu, yargı istemeyen iş |

*(API liste fiyatı, 1M token giriş/çıkış. claude.ai'da token faturası yok — kazanç kotanın yavaş bitmesi.)*

---

## 📋 3 adımda uygula (yalnız Opus 5 ile)

### Adım 1 — İşi gerçekten yaptır (introspection yok)
Opus 5'te o işten **2–3 gerçek örnek** yaptır (kendi gerçek girdinle). Beğenene kadar düzelt. Yöntem **bu çıktılardan** türetilecek.

> Neden: "Nasıl düşünüyorsun?" sorusu **öz-anlatı** üretir, iç iz dökümü değil — model kendi düşünce zincirini okuyamaz (Fable 5'te ham chain of thought zaten hiç döndürülmez). Sızdırılan dosya da bunu doğruluyor: içinde "nasıl düşünürüm" diye bir bölüm **yok**.

### Adım 2 — Standardı çıkart
```
Az önce [İŞ TÜRÜ] için 3 iş yaptın. Şimdi bu çıktıları üreten OPERASYONEL STANDARDI yaz.

Nasıl düşündüğünü anlatma — gözlenebilir davranışı tarif et: yukarıdaki çıktıları
yeniden üretmek için hangi adımlar hangi sırada izlendi.

Ver:
• Adım sırası — numaralı, her adım tek bir eylem
• Her adımda karar kuralı — ikircikli durumda hangi kritere göre seçildi
• Çıktı şablonu — her çıktıda bulunmak ZORUNDA olan bölümler
• Kalite kontrol listesi — teslimden önce doğrulanan somut maddeler
• Yasaklar — bu işte asla yapılmayanlar ve nedeni
• Durma noktaları — hangi durumda durup bana sorulacak

Kural: her satır bir davranışı DEĞİŞTİRMELİ. "Kapsamlı ol", "dikkatli ol" gibi genel
erdem cümleleri yazma. Sadece kararı değiştiren kuralı yaz. Markdown ver.
```

Sonra buda:
```
Bu belgeyi buda. Her satır için sor: "Bu satır olmasaydı çıktı farklı olur muydu?"
Hayır ise SİL.

SİL: modelin zaten varsayılan yaptığı davranışın tarifi · genel erdem cümleleri · tekrar.
KORU: alan kuralları · kalite çıtası · hedef kitle · yasaklar · bir kuralın ARDINDAKİ NEDEN ·
somut format zorunlulukları. Bunlar eksikse bana sor, uydurma.

Budanmış belgeyi tam hâliyle yeniden yaz, sonuna 1 gerçek örnek çıktı ekle.
```

### Adım 3 — Kalibre et + kur
Hedef **Opus 5** ise şunları **ekle**: kısalık talimatı (varsayılanı uzun) · kapsam disiplini ("istenen işi istenen kapsamda; kendiliğinden büyütme") · alt-ajan tavanı. Hedef Sonnet 5 / Haiku 4.5 ise tam tablo → [[skill-kutuphanesi/araclar/model-metodu-tasima|skill]].

Kurulum — **claude.ai**: Projects → Create Project → **Project Instructions**'a yapıştır → varsayılan model = hedef model. Artık o projedeki her yeni sohbet standardı izler.
**Claude Code** → repo köküne `CLAUDE.md`. **API** → system prompt (uzun ve sabitse prompt caching ile önekte tut).
Belge başlığına **hedef model + tarih** yaz — kalibrasyon eskiyor (sızdırılan dosya bunun canlı kanıtı: 10 haftada eskimiş).

### Adım 4 — A/B (atlanamaz)
3–5 temsili işi üç kolda karşılaştır: **(a)** Opus 5 belgesiz-en-iyi hâli · **(b)** hedef + belge · **(c)** hedef belgesiz.
(b) ≫ (c) → belge işini yapıyor. (b) ≈ (a) → o iş türü hedefe **taşınır**. (b) ≪ (a) → o iş **Opus 5'te kalır**.
Ölçmediysen "taşındı" deme; "kuruldu, doğrulanmadı" de.

---

## 💳 Yine de Fable 5 kaynaklı istiyorsan

| Yol | Gerçek maliyet / şart |
|---|---|
| **Tek seferlik API tokeni** | Bu iş **tek oturum**: 2–3 örnek + 1 çıkarma promptu ≈ 50K giriş / 20K çıkış → kabaca **$1–3**. Abonelik değil. |
| **Ödünç tek oturum** | Erişimi olan bir tanıdıkta **bir** oturum yeter; kalibrasyonu sen yap. |
| **Bulut kredisi** | Fable 5 Bedrock/Vertex/Foundry'de de sunuluyor. ⚠️ **30 gün veri saklama şartlı** — zero-data-retention hesapta hiç çalışmaz, her istek 400 döner. |

> Önce A/B'nin (a) kolunu **"Opus 5, belgesiz, en iyi hâli"** yap. Fark kapanıyorsa Fable'a hiç para harcamana gerek yok — prosedürel işlerde genelde kapanır.

---

## ⚠️ Kaçınılacaklar
- **"Zekâ taşıdım" sanmak** — taşınan yöntem; akıl yürütme tavanı yerinde kalır.
- **Sızdırılan system prompt'u başka modele yapıştırmak** — %60'ı olmayan araçların tarifi; içerik yöntem değil politika.
- **Kopyala-yapıştır** — kalibre edilmemiş belge hedef modelde kaliteyi düşürebilir (Opus 5 + "kendini doğrula" tuzağı).
- **Introspection'a güvenmek** — "nasıl düşünüyorsun" öz-anlatı üretir; yöntemi gerçek çıktıdan türet.
- **A/B atlamak** — ölçülmeyen geçiş sessiz kalite kaybıdır.
- **Sürümsüz bırakmak** — 10 haftada eskiyen bir belge gördün; seninki de eskiyecek.

## 🔗 İlişkili
[[skill-kutuphanesi/araclar/model-metodu-tasima|⚙️ model-metodu-tasima]] (tam referans + kalibrasyon tabloları) · [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] (elle yazılmış muadili — belgeyi bununla birleştir) · gstack `model-overlays/` (aynı fikrin olgun hâli: taban + model-özel katman) → [[Dış Kütüphaneler MOC]]
