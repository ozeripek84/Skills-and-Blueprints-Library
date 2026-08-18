---
name: model-metodu-tasima
description: Güçlü bir modelin (Fable 5) bir işteki çalışma yöntemini çıkarılabilir bir talimat belgesine (MD) dönüştürür, hedef modele göre kalibre eder ve Claude Projesi/CLAUDE.md talimatı olarak kurar. Taşınan şey zekâ değil YÖNTEM — fark ve sınırları dahil.
---

# Model Metodu Taşıma (güçlü model → uygun maliyetli model)

## Ne zaman
Bir işi (kod review, rapor yazımı, analiz, içerik, müşteri yanıtı…) **pahalı/üst-segment bir modelde** iyi sonuç alarak yapıyorsun ve aynı işi **daha ucuz bir modelde tutarlı** yapmak istiyorsun. Bu skill: güçlü modelin o işteki **çalışma standardını** çıkarır → hedef modele göre kalibre eder → proje talimatı olarak kurar → A/B ile doğrular.

Üç yüzeyde aynı teknik: **claude.ai Projesi** (proje talimatları) · **Claude Code** (`CLAUDE.md`) · **API** (system prompt).

## ⚠️ Dürüst çerçeve (kaynak videonun iddiası vs gerçek)

Kaynak iddia: *"Fable 5'in zekâsını uygun maliyetli bir modele taşı."* Bu **yanlış çerçeve**. Doğrusu:

- **Zekâ taşınmaz, YÖNTEM taşınır.** Prompt ağırlıkları değiştirmez. Taşınabilen şey: adım sırası, kontrol listesi, çıktı formatı, karar kuralları, alan-özel sezgiler. Bunlar zayıf modelin **tutarlılığını ve çıktı şeklini** ciddi iyileştirir; **akıl yürütme tavanını** yükseltmez. Gerçek "damıtma" (distillation) fine-tuning ister, prompt değil.
- **Model kendi düşüncesini okuyamaz.** "Nasıl düşünüyorsun?" diye sorduğunda aldığın şey **makul bir öz-anlatı**, iç izin dökümü değil. Fable 5'te ham düşünce zinciri (chain of thought) **hiçbir zaman döndürülmez** — sadece özet. Yani çıkan MD, modelin kendi yöntemine dair *yeniden inşası*. İyi yazılmış bir süreç belgesi olarak değerli; ayrıcalıklı erişim değil. **Çözüm:** yöntemi introspection'dan değil, **gerçek çıktıdan** türet (Adım 1).
- **Prompt model-bağımlıdır — kopyala-yapıştır zarar verebilir.** Bir model için yazılmış talimat, başka modelde fazla-buyurgan olup **kaliteyi düşürebilir** (Anthropic'in kendi migration rehberi bunu açıkça söylüyor). En keskin örnek: **Opus 5 işini zaten kendi doğrular** — belgeye "her adımda kendini kontrol et" yazarsan aşırı-doğrulama alırsın; doğru hamle o satırı **silmek**. Bu, "modele self-check yaptır" genel tavsiyesini tersine çevirir. Kalibrasyon tablosu aşağıda.
- **Kazanç işin türüne bağlı.** Yöntem transferi **prosedürel** işlerde (format, yapı, bilinen alan, tekrarlı üretim) çok işe yarar; **derin akıl yürütme** isteyen işlerde (yeni bug avı, mimari trade-off, uzun-soluklu ajan koşusu) boşluğu kapatmaz. Her işi topluca ucuza indirme — **iş türüne göre yönlendir.**
- **Kaynak model elinde olmak zorunda değil.** Zekâ taşınmadığına göre belgenin Fable 5'ten çıkması şart değil — hedef model kendi yöntemini kendisi çıkarabilir, üstelik kalibrasyon sökümü de gerekmez. Erişimin yoksa kaynak = hedef yap. → [[Süper Opus 5]]
- **claude.ai'da "maliyet" ≠ token faturası.** Sohbet arayüzünde token başına ödemiyorsun; **kullanım kotanı** harcıyorsun. Aşağıdaki fiyat tablosu **API** içindir; claude.ai'da kazanç = kotanın daha yavaş bitmesi.

## Süreç (6 adım)

1. **Yöntemi çıktıdan türet (introspection değil).** Güçlü modelde o işten **2–3 gerçek örnek** yaptır (senin gerçek girdinle). Sonra: *"Bu çıktıları üreten operasyonel standardı yaz"* de. Öz-anlatı yerine **gözlenebilir davranıştan** türetilmiş standart alırsın — uydurma payı düşer.
2. **Standardı karara indirgenebilir yaz.** Belge "iyi ol / kapsamlı ol" değil; **sıra + kontrol + format + karar kuralı** içermeli: hangi adım hangi sırada, çıktıda ne bulunmak zorunda, ikircikli durumda hangi kural, ne zaman durup soracak, neyi reddedecek/işaretleyecek. Test: *her satır bir davranışı değiştiriyor mu?* Değiştirmiyorsa çıkar.
3. **Hedef modele kalibre et.** Belgeyi olduğu gibi yapıştırma — aşağıdaki tabloya göre budayıp ekle.
4. **Kur.** claude.ai → yeni Proje → belgeyi **proje talimatlarına** yapıştır, model = hedef model. Claude Code → repo köküne `CLAUDE.md`. API → system prompt (uzun ve sabitse **prompt caching** ile önekte tut).
5. **A/B ile doğrula (atlanamaz).** Aynı 3–5 temsili işi (a) güçlü model, (b) hedef model + belge, (c) hedef model belgesiz üzerinde çalıştır ve karşılaştır. Kazanç ölçülmeden "taşındı" deme. Genelde (b) ≫ (c), ama (a)'ya eşit değil.
6. **Sürüm tut + kırp.** Belgeyi tarihle sürümle. Yeni model çıktığında yeniden kalibre et: eski model için yazılmış satırlar yenisinde ölü ağırlık ya da zararlı olur.

## Hedef modele göre kalibrasyon (kritik adım)

| Hedef | Belgeden **ÇIKAR** | Belgeye **EKLE** |
|---|---|---|
| **Opus 5** | "kendini doğrula / iki kez kontrol et" satırları (zaten yapıyor → aşırı-doğrulama) · "daha çok alt-ajan kullan" (zaten fazla deleger ediyor) | Kısalık talimatı (varsayılanı uzun) · kapsam disiplini ("istenen işi, istenen kapsamda; kendiliğinden büyütme") · alt-ajan tavanı |
| **Sonnet 5** | Belirsiz/temenni üslubu ("mümkünse", "ideal olarak" — talimatı **harfiyen** yorumlar, gevşeklik izni sanır) | Kapsamı açıkça yaz ("her bölüme uygula, sadece ilkine değil") · az-kullanılan araç için tetikleme kuralı |
| **Haiku 4.5** | Uzun gerekçe/felsefe bölümleri (bağlamı yer, faydası düşük) · çok-adımlı yargı gerektiren serbest adımlar | Katı şablon + doldurulacak alanlar · dar kapsam · "emin değilsen işaretle, uydurma" |
| **Genel** | Kaynak modelin sürüm-özel numaraları, aşırı-buyurgan CAPS/"MUTLAKA" yığını, modelin zaten yaptığı davranışın tarifi | Sadece **senin** bildiğin şey: alan kuralları, kalite çıtası, hedef kitle, yasak/kırmızı çizgiler, gerçek örnek |

> Genel kural: **bağlam kalır, davranış tarifi gider.** Modelin zaten bildiği şeyi yazmak token yakar ve bazen davranışı bozar; senden başka kimsenin bilmediği şey (alan, kitle, çıta, kısıt, "neden") her zaman kalır.

## Model rotası ve API fiyatı (1M token, giriş/çıkış — liste fiyatı)

| Model | ID | Fiyat | Nereye |
|---|---|---|---|
| Fable 5 | `claude-fable-5` | $10 / $50 | Kaynak model: en zor akıl yürütme, uzun-soluklu ajan işi. Yöntemi buradan çıkar. |
| Opus 5 | `claude-opus-5` | $5 / $25 | **Videonun hedefi — tam yarı fiyat.** Ajanlı kodlama, karmaşık iş. İlk durak. |
| Sonnet 5 | `claude-sonnet-5` | $3 / $15 (2026-08-31'e dek tanıtım $2 / $10) | Hız/zekâ dengesi; kodlama ve ajan işinde Opus'a yakın. Prosedürel işin çoğu buraya sığar. |
| Haiku 4.5 | `claude-haiku-4-5` | $1 / $5 | Basit, şablonlu, yüksek hacimli iş. Yargı isteyen işe koyma. |

Fable 5 → Opus 5 = **2×** ucuz · → Sonnet 5 = **~3.3×** · → Haiku 4.5 = **10×**. Ama ucuzluk kararı **A/B sonucuyla** verilir, tabloyla değil.

## 🔗 Bununla birleştir
- **Elle yazılmış muadili (çoğu zaman daha iyi):** [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] — insan eliyle küratörlü çalışma standardı. Model-türetilmiş belgeyi bununla **birleştir**, yerine koyma.
- **Profesyonel prior art — model overlay'leri:** `gstack/model-overlays/` (`claude.md`, `opus-4-7.md`, `gpt.md`, `gemini.md`) — aynı fikrin olgun hâli: model-agnostik taban + model-özel ek katman, `{{INHERIT:...}}` ile miras. Kalibrasyon tablonu genişletirken oraya bak. → [[Dış Kütüphaneler MOC]]
- **Belge zamanla gelişsin:** [[Kendini Geliştiren Skill — 4 Katman (Jarvis-Karpathy yöntemi)]] (hafıza katmanı) · `araclar/llm-wiki`.
- **Kurulan belgeyi skill'e çevirmek istersen:** anthropics-skills `skill-creator` → [[Dış Kütüphaneler MOC]].

## Çıktı standardı
- **Bir MD dosyası**: rol/kapsam · adım sırası · her adımda karar kuralı · çıktı şablonu · kalite kontrol listesi · yasaklar/kırmızı çizgiler · 1 gerçek örnek.
- Her satır **davranış değiştiriyor**; jenerik erdem cümlesi ("kapsamlı ol") yok.
- Başlıkta **hedef model + tarih** (kalibrasyon model-bağımlı ve eskiyor).
- Yanında **A/B notu**: hangi 3–5 iş test edildi, hedef model belgeyle/belgesiz nerede ayrıştı, hangi iş hâlâ güçlü modelde kalıyor.

## Yaygın hatalar
- **"Zekâ taşıdım" sanmak** — taşınan yöntem; akıl yürütme tavanı yerinde.
- **Introspection'a güvenmek** — "nasıl düşünüyorsun" öz-anlatı üretir; yöntemi gerçek çıktıdan türet.
- **Kopyala-yapıştır** — kalibrasyonsuz belge hedef modelde kaliteyi *düşürebilir* (Opus 5 + doğrulama talimatı klasik tuzak).
- **A/B atlamak** — kazanç ölçülmeden yapılan geçiş, sessiz kalite kaybıdır.
- **Her işi ucuz modele yıkmak** — derin akıl yürütme işini yönlendirme tablosuyla güçlü modelde tut.
- **Belgeyi şişirmek** — modelin zaten yaptığı şeyi tarif etmek bağlam yakar, bazen davranışı bozar.
- **Sürümsüz bırakmak** — yeni model çıkınca eski kalibrasyon ölü ağırlığa döner.

> Çalıştırılabilir hâli — 4 prompt + kalibrasyon + A/B protokolü: `/araclar:model-metodu-tasima`
> 🧠 Kullanım kılavuzu + orijinal kaynak promptu + "kaynak modelim yok" rotası: [[Süper Opus 5]]
> Kaynak: YouTube `VR2EdVZ4-s0` + Notion rehberi (teknik doğru, çerçeve abartılı; orijinal tek-prompt saf introspection — düzeltmeler yukarıda ve kılavuzda).
> İlişkili: [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] · `araclar/llm-wiki` · gstack `model-overlays/`
