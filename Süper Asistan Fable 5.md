---
tags: [rehber, model, yontem, fable5, opus5, playbook]
guncelleme: 2026-08-15
---

# 🧠 Süper Asistan Fable 5 — çalışma yöntemini çıkar, ucuz modele kur

> [[00 HOME|🏠 Ana sayfaya dön]]
> **Kullanım kılavuzu.** Tam referans + kalibrasyon tabloları: [[skill-kutuphanesi/araclar/model-metodu-tasima|⚙️ model-metodu-tasima skill]] · çalıştırılabilir hâli: `/araclar:model-metodu-tasima`

---

## ⚡ Kısa cevap: Fable 5 credit'ine **ihtiyacın yok**

Sorduğun şey — *"Fable 5'in algoritmasını ondan almam lazım ki Opus 5'e vereyim"* — videonun yanlış çerçevesinden geliyor. Düzeltilmiş hâli, senin lehine:

**Bir modelden "algoritma" alamazsın. Alabildiğin şey YÖNTEM — ve yöntemin Fable 5'ten gelmesi şart değil.**

Üç somut gerekçe:

1. **Taşınan şey zekâ değil.** Prompt ağırlıkları değiştirmez. Belgeye geçen şey adım sırası, kontrol listesi, çıktı formatı, karar kuralları. Kaynak modelin "üstünlüğü" belgeye **geçmiyor** — o yüzden belgeyi Opus 5'in kendisi için yazması da aynı işi görür.
2. **Fable kaynaklı belge Opus 5'te ekstra iş + risk.** Bir model için yazılmış talimat başka modelde fazla-buyurgan olup kaliteyi *düşürebilir*. En keskin tuzak: **Opus 5 işini zaten kendi doğruluyor** — Fable'ın yazdığı "her adımda kendini kontrol et" satırı Opus 5'te aşırı-doğrulamaya yol açar; doğru hamle o satırı **silmek**. Yani Fable'dan alınan belgeyi Opus 5'e vermeden önce sökmen gerekir.
3. **Belgenin gerçek değeri modelden değil, senden geliyor.** Alan kuralların, kalite çıtan, hedef kitlen, kırmızı çizgilerin, gerçek örneklerin. Hiçbir model — Fable dahil — bunları veremez. Model sadece yapıyı kurar.

**Sonuç:** kaynak = **Opus 5**. Kendi yöntemini kendisi çıkarsın.

---

## 🎯 Sana uygun asıl rota (Fable→Opus 5 değil)

Opus 5 zaten senin varsayılanın. Tasarruf Fable'dan inmekten değil, **Opus 5'ten inmekten** gelir:

| Kaynak (yöntemi çıkaran) | Hedef (yöntemin kurulduğu) | Ne kazanırsın |
|---|---|---|
| Opus 5 | **Opus 5** (aynı model) | Tutarlılık + hız + daha az elle düzeltme. Maliyet aynı, kalite oturur. **Buradan başla.** |
| Opus 5 | **Sonnet 5** | ~**1.7×** ucuz ($5/$25 → $3/$15). Prosedürel işin çoğu buraya sığar. |
| Opus 5 | **Haiku 4.5** | **5×** ucuz ($1/$5). Yalnız şablonlu, yargı istemeyen yüksek hacimli iş. |

*(Fiyatlar API liste fiyatı, 1M token giriş/çıkış. claude.ai'da token faturası yok — kazanç kotanın daha yavaş bitmesi.)*

---

## 📋 3 adımda uygula (yalnız Opus 5 ile)

### Adım 1 — İşi gerçekten yaptır (introspection yok)
Opus 5'te o işten **2–3 gerçek örnek** yaptır — kendi gerçek girdinle, uydurma örnekle değil. Çıktıları beğenene kadar düzelt. **Yöntem bu çıktılardan türetilecek.**

> Neden: "Nasıl düşünüyorsun?" diye sorarsan makul bir **öz-anlatı** alırsın, iç izin dökümü değil — model kendi düşünce zincirini okuyamaz (Fable 5'te ham chain of thought zaten hiç döndürülmez, sadece özet). Gözlenebilir çıktıdan türetmek uydurma payını düşürür.

### Adım 2 — Standardı çıkart
Aynı sohbette:

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
Şimdi bu belgeyi acımasızca buda. Her satır için sor: "Bu satır olmasaydı çıktı farklı
olur muydu?" — Hayır ise SİL.

SİL: modelin zaten varsayılan yaptığı davranışın tarifi · genel erdem cümleleri · tekrar ·
CAPS/"MUTLAKA" yığını.
KORU: alan kuralları · kalite çıtası · hedef kitle · yasaklar · bir kuralın ARDINDAKİ NEDEN ·
somut format zorunlulukları. Bunlar eksikse bana sor, uydurma.

Budanmış belgeyi tam hâliyle yeniden yaz, sonuna 1 gerçek örnek çıktı ekle.
```

### Adım 3 — Kalibre et + kur
Hedef **Opus 5** ise Fable-sökümü gerekmez, ama şunları **ekle**: kısalık talimatı (varsayılanı uzun), kapsam disiplini ("istenen işi istenen kapsamda; kendiliğinden büyütme"), alt-ajan tavanı. Hedef Sonnet 5 / Haiku 4.5 ise tam tablo → [[skill-kutuphanesi/araclar/model-metodu-tasima|skill]].

Kurulum — **claude.ai** (kaynağın tarif ettiği yol, doğru):
1. Sol menü → **Projects** → **Create Project** → isim ver (ör. *Süper Asistan*).
2. Proje içi → **Project Instructions** (Proje Talimatları) → budanmış belgeyi **yapıştır**.
3. Projenin varsayılan modeli = **hedef model** (Opus 5 / Sonnet 5).
4. Artık o projede açtığın **her yeni sohbet** bu standardı izler.

**Claude Code** → repo köküne `CLAUDE.md`. **API** → system prompt (uzun ve sabitse prompt caching ile önekte tut).
Belge başlığına **hedef model + tarih** yaz — kalibrasyon model-bağımlı ve eskiyor.

### Adım 4 — A/B (atlanamaz)
3–5 temsili işi üç kolda karşılaştır: **(a)** Opus 5 belgesiz-en-iyi hâli · **(b)** hedef + belge · **(c)** hedef belgesiz.
(b) ≫ (c) → belge işini yapıyor. (b) ≈ (a) → o iş türü hedefe **taşınır**. (b) ≪ (a) → o iş **Opus 5'te kalır**.
Ölçmediysen "taşındı" deme; "kuruldu, doğrulanmadı" de.

---

## 💳 Yine de Fable 5 kaynaklı istiyorsan — 3 yol

| Yol | Gerçek maliyet / şart | Not |
|---|---|---|
| **Tek seferlik API tokeni** | Bu iş **tek oturum**: 2–3 örnek + 1 çıkarma promptu ≈ 50K giriş / 20K çıkış → $10/1M ve $50/1M üzerinden kabaca **$1–3**. | Abonelik değil, bir kerelik. En temiz yol. claude.ai kredi mekaniği API'den farklı — orada değil, API'de yap. |
| **Ödünç tek oturum** | Erişimi olan bir tanıdıkta **bir** oturum yeter. | Belgeyi o üretsin, kalibrasyonu sen yap. Sürekli erişim gerekmiyor. |
| **Bulut sağlayıcı kredisi** | Fable 5 Bedrock / Vertex / Foundry'de de sunuluyor; yeni hesap deneme kredisi olabilir. | ⚠️ **Doğrula:** Fable 5 **30 gün veri saklama** şartlı — zero-data-retention yapılandırmasında hiç çalışmaz, her istek 400 döner. Kurumsal/ZDR hesapta bu yol kapalı. |

> **Önce şunu yap:** A/B'nin (a) kolunu Fable yerine **"Opus 5, belgesiz, en iyi hâli"** koy. Fark kapanıyorsa Fable'a hiç para harcaman gerekmez — prosedürel işlerde genelde kapanır. Harcama kararını ölçümden sonra ver.

---

## 📄 Orijinal kaynak promptu — ve neden değiştirdim

Notion rehberinin tek promptu, aynen:

```
Lütfen kendi düşünme sistemini, problem çözme mantığını, iş planlama stratejini ve
yanıt hazırlama algoritmalarını detaylıca analiz et. Bu çalışma yöntemini, başka bir
yapay zeka modeline "Sistem Talimatı" (System Prompt) olarak verebileceğim eksiksiz,
yapılandırılmış bir markdown (.md) dosyası haline getir.
```

Bu prompt **etkileyici okunan ama zayıf** bir belge üretir. Dört sorunu var:

| Sorun | Neden önemli | Bu notta düzeltmesi |
|---|---|---|
| **Saf introspection** — "kendi düşünme sistemini analiz et" | Model kendi düşünce izini okuyamaz; aldığın şey makul bir **öz-anlatı**. (Fable 5'te ham chain of thought zaten hiç döndürülmez.) Belge doğru *görünür*, davranışı doğrulanmamıştır. | Adım 1–2: yöntem **gerçek çıktıdan** türetilir |
| **Alan kapsamı yok** — "düşünme sistemin" genel | Genel belge her işte biraz işe yarar, hiçbirinde çok. Asıl kazanç **dar kapsamdan** gelir (tek iş türü). | Adım 0: tek ve dar iş türü seçilir |
| **Karar kuralı istemiyor** | "Analiz et" → erdem cümleleri ("bütünsel yaklaşırım", "bağlamı değerlendiririm"). Bunlar davranış değiştirmez, sadece bağlam yakar. | Adım 2: adım sırası + karar kuralı + şablon + yasak + durma noktası; budama testi |
| **Kalibrasyon ve doğrulama yok** — çıktı doğrudan Opus 5'e yapıştırılıyor | Bir model için yazılmış talimat başkasında kaliteyi *düşürebilir*. Klasik tuzak: Fable'ın yazacağı "kendini doğrula" satırı Opus 5'te aşırı-doğrulama üretir. | Adım 3 kalibrasyon + Adım 4 A/B |

**Doğru olan kısım:** Adım 3'ün kurulum mekaniği (Projects → Project Instructions → model seçimi) doğru ve yukarıda aynen korundu. Sorun promptta, kurulumda değil.

## ⚠️ Kaçınılacaklar
- **"Zekâ taşıdım" sanmak** — taşınan yöntem; akıl yürütme tavanı yerinde kalır.
- **Kopyala-yapıştır** — kalibre edilmemiş belge hedef modelde kaliteyi düşürebilir.
- **Her işi ucuz modele yıkmak** — derin akıl yürütme (yeni bug avı, mimari trade-off, uzun-soluklu ajan) boşluğu kapanmaz; A/B ile ayır.
- **Belgeyi şişirmek** — modelin zaten yaptığını tarif etmek bağlam yakar, bazen davranışı bozar.
- **Sürümsüz bırakmak** — yeni model çıkınca kalibrasyon ölü ağırlığa döner.

## 🔗 İlişkili
[[skill-kutuphanesi/araclar/model-metodu-tasima|⚙️ model-metodu-tasima]] (tam referans + kalibrasyon tabloları) · [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] (elle yazılmış muadili — belgeyi bununla birleştir) · gstack `model-overlays/` (aynı fikrin olgun hâli: taban + model-özel katman) → [[Dış Kütüphaneler MOC]]
