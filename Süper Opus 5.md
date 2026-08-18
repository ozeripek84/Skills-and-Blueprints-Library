---
tags: [rehber, claude-code, opus5, claude-md, system-prompt, playbook, dürüst]
guncelleme: 2026-08-18
---

# ⚡ Süper Opus 5 — Fable 5 prompt'undan damıtılmış Claude Code standardı

> [[00 HOME|🏠 Ana sayfaya dön]]
> **Canlı dosya:** `~/.claude/CLAUDE.md` — Claude Code her oturumda, her projede otomatik yükler.
> Bu not o dosyanın **kaynağı + yedeği + gerekçesi**. (`~/.claude/` git'te değil; kaybolursa buradan geri koy.)
> İlgili: [[skill-kutuphanesi/araclar/model-metodu-tasima|⚙️ model-metodu-tasima]]

---

## Ne yapıldı

Fable 5'in sızdırılan system prompt'u (`elder-plinius/CL4R1T4S` · 122 KB · 1.597 satır · ~17.500 kelime)
**Claude Code + Opus 5** için tarandı, işe yarayan bloklar damıtıldı, gerisi atıldı.

**1.597 satırdan ~35 satır alındı. %98 atıldı** — çünkü ya Opus 5'te zaten var, ya claude.ai'ye özel, ya da eskimiş.

---

## Alınanlar — hangi bölüm, neden

| Fable bölümü | Ne verdi | Neden Claude Code'da işe yarıyor |
|---|---|---|
| **`skills`** | "Kod yazmadan/dosya üretmeden önce ilgili SKILL.md'yi oku; bir işe birden fazla skill uyabilir, tek biriyle yetinme" | Sende **158 vault skill + ~80 yüklü skill** var. Okumadan başlamak en pahalı hata. |
| **`file_creation_advice`** | "Bağımsız artefakt mı, sohbet cevabı mı" ayrımı + 10 satırdan uzun kod → dosya | Üslup/uzunluk aldatıcı: *"kısacık blog yazıver"* yine dosya, *"resmî analiz"* yine sohbet içi. |
| **`producing_outputs`** | <100 satır tek seferde · >100 satır iskelet → bölüm bölüm → gözden geçir | Uzun çıktıda Opus 5'in dağılmasını engelliyor. + "dosyayı gerçekten oluştur, ekrana basıp geçme" |
| **`core_search_behaviors`** | **Tanımadığın şeyi arat** kuralı + araç çağrısını zorluğa ölçekle (1 / 3-5 / 5-10) | "Kısmî tanıma güncel bilgi değildir." Sürüm/ürün adlarında halüsinasyonu kesiyor. |
| **`tone_and_formatting`** + `lists_and_bullets` | Aşırı biçimlendirme yasağı, nesir tercihi, "reddederken madde kullanma" | Opus 5'in **belgelenmiş zaafı**: uzun ve aşırı biçimli yazmak. |
| **`responding_to_mistakes`** | "Sahiplen ama kendini yerin dibine sokma" | Opus 5 öz-düzeltmelerini fazla anlatıyor. |
| Soru sorma kuralı | "Yanıt başına en fazla 1 soru; önce ele al, sonra sor" | Gereksiz durup sormayı azaltıyor. |

## Atılanlar — ve neden

| Bölüm | Satır | Neden atıldı |
|---|---|---|
| 18 araç şeması (`weather_fetch`, `places_map`, `recipe_display`, `fetch_sports_data`…) | **969** | claude.ai ürün araçları. Claude Code'un kendi araçları zaten tanımlı — kopyası çakışma üretir. |
| `product_information` | 23 | **Yanlış bilgi:** Opus 5 ve Sonnet 5 hiç geçmiyor, "en güncel" olarak Opus 4.8 / Sonnet 4.6 yazıyor. |
| `knowledge_cutoff` | 9 | İçinde sabit tarih: *"Tuesday, June 09, 2026"*. |
| `file_handling_rules`, `package_management` | 17 | `/mnt/user-data/outputs`, `/home/claude`, `pip --break-system-packages` — **sandbox yolları**. Claude Code gerçek repo'da çalışıyor; kopyalamak zararlı. |
| `refusal_handling`, `child_safety`, `copyright` | 72 | Anthropic bunları Opus 5'e zaten uyguluyor. Tekrarı yalnızca bağlam yakar. |
| `artifact_usage_criteria`, `memory_system`, `persistent_storage`, `mcp_app_suggestions`, `image_search`, "Claudeception", `citation_instructions`, network/filesystem config | ~430 | claude.ai ürün tesisatı; Claude Code'da karşılığı yok ya da farklı. |

## Fable'da olmayan, Opus 5 için EKLENEN

Fable prompt'u Fable için yazıldı. Opus 5'in farklı belgelenmiş eğilimleri var:

- **Kapsam disiplini** — Opus 5 istenmeyeni ekleyip kapsamı büyütüyor.
- **Alt-ajan tavanı** — Opus 5 fazla deleger ediyor (Opus 4.8'in tam tersi; 4.8 için yazılmış "daha çok deleger et" talimatları **çıkarılmalı**).
- **Doğrulama bölümü kasten BOŞ** — ve neden boş olduğu dosyaya yazıldı. Opus 5 işini zaten kendiliğinden doğruluyor; "kendini kontrol et" talimatı aşırı-doğrulama üretiyor. Bu, "modele self-check yaptır" genel tavsiyesini **tersine çeviriyor**.
- **Önce kütüphaneye bak** — senin duran ilken; artık her oturumda geçerli.
- **Sadelik (Karpathy)** — [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] notundan.
- **Dürüstlük** — kanıtsız ilerleme iddiası yasağı.

---

## ⚠️ Beklenti ayarı (dürüst)

Bu dosya Opus 5'i **akıllandırmaz.** Yaptığı şey davranış ayarı: daha kısa ve az madde-yığınlı çıktı, skill'i okumadan koda girmemek, tanımadığını uydurmak yerine aratmak, gereksiz öz-eleştiri anlatmamak, kapsamı kendiliğinden büyütmemek. Bunlar gerçek kazanç — ama "Fable 5'in zekâsı" değil. Zekâ ağırlıklarda; prompt yalnızca davranışı ayarlar.

**Claude Code'da performansın asıl kaynağı sırayla:**
1. `effortLevel: xhigh` (sende **zaten kurulu** ✅)
2. İşi tek turda baştan tam tarif etmek (hedef + kısıt + "bitmiş" tanımı)
3. Bağlam hijyeni — alakasız işe geçerken **`/clear`** (maliyeti sıfır, etkisi bu dosyadan büyük olabilir)
4. Kullanılmayan skill/plugin'i indirmek (şu an ~80 skill açıklaması her oturumda yükleniyor; 31'i SEO)
5. ← **bu dosya**

---

## Kurulum / geri yükleme

Canlı dosya: `~/.claude/CLAUDE.md` (90 satır). Kaybolursa ya da yeni makinede:
```bash
# içeriği bu nottan değil, git geçmişinden al:
cd "/Users/ozeripek/Desktop/Obsidian/skills and  blueprints library"
# ya da doğrudan yeniden yaz — kaynak bölümler yukarıdaki tablolarda
```
Proje bazında ezmek istersen: repo köküne kendi `CLAUDE.md`'ni koy, global olanla birleşir.

**Bakım kuralı:** yeni Claude modeli çıkınca bu dosyayı **yeniden kalibre et**. Fable prompt'u 10 haftada eskidi (kendi model listesi bile yanlış) — seninki de eskiyecek. Başlıktaki tarih bunun için var.

---

## 🔗 İlişkili
[[skill-kutuphanesi/araclar/model-metodu-tasima|⚙️ model-metodu-tasima]] (yöntem çıkarma + hedef-model kalibrasyon tabloları) · [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] · [[Kendini Geliştiren Skill — 4 Katman (Jarvis-Karpathy yöntemi)]] · gstack `model-overlays/` (aynı fikrin olgun hâli) → [[Dış Kütüphaneler MOC]]
