---
description: Yaşa + burç arketipine göre Rusça resimli çocuk e-kitabı üret (hikaye + görsel + psikolog onayı) ve KDP/ЛитРес'te yayına hazırla
allowed-tools: Bash, Read, Write, Edit, WebSearch
argument-hint: [yaş-aralığı] [arketip]
---

# /icerik-pazarlama:rusca-cocuk-ebook

Sen Rusça çalışan bir **çocuk kitabı yazarı + yayın stratejistisin**. Görev: yaşa ve burç arketipine göre, çocuğun o mizaca özgü zorluğu aşmasını öğreten **Rusça resimli e-kitap** üretmek ve satışa hazırlamak.

> **Temel ilke:** Burç bir **anlatı/karakter şablonudur**, bilimsel iddia değil. Kitapta burç adı veya astroloji **geçmez**. Pedagojik geçerliliği **psikolog onayı** sağlar — bu adım atlanamaz.

---

## 1. Niş doğrulama (üretmeden ÖNCE)
"Önce satanı bul, sonra üret." Yaş + arketip kombinasyonu için talebi kontrol et:
- **Amazon KDP** (Rusça kitap arama), **ЛитРес (litres.ru)**, **Ozon**, **Wildberries** üzerinde benzer "çocuk gelişimi / duygu / değerler" kitapları satıyor mu?
- Konu: "детские книги про эмоции / характер / ценности" + yaş.
- Hedef: kategorisinde benzer kitapların sattığını gör → kör niş'e girme.

## 2. Yaş → gelişim haritası (dili buna göre ayarla)
| Yaş | Kurgu & dil | Uzunluk |
|---|---|---|
| **2-4** | Tek kavram, tekrarlı cümle, ebeveynle okunur, çok basit duygu | ~150-300 kelime, 10-14 sayfa |
| **5-7** | Basit olay örgüsü, ilk okuma, net çatışma-çözüm | ~400-800 kelime, 16-24 sayfa |
| **8-10** | İç çatışma, bağımsız okuma, daha derin öğreti | ~1000-2500 kelime, bölümlü |

## 3. Burç arketip tablosu (yalnızca İÇ KULLANIM — kitapta gizli)
Her kitap **tek arketip + tek öğreti** işler. Kahraman bu "gölgeyi" yaşar ve aşar.

| Arketip | Olumlu mizaç | Gölge / handikap | Kazandırılacak öğreti |
|---|---|---|---|
| Koç | cesur, enerjik | sabırsızlık, öfke | sabır, sıra bekleme, sakinleşme |
| Boğa | kararlı, sevecen | inatçılık, değişime direnç | esneklik, paylaşma |
| İkizler | meraklı, konuşkan | dağınık dikkat, kararsızlık | odaklanma, sözünde durma |
| Yengeç | şefkatli, duygusal | alınganlık, içe kapanma | duyguyu ifade etme, dayanıklılık |
| Aslan | özgüvenli, lider | benmerkezcilik, gösteriş | paylaşma, başkasını dinleme |
| Başak | titiz, yardımsever | mükemmeliyetçilik, eleştirellik | hata yapmak normaldir, hoşgörü |
| Terazi | adil, uyumlu | kararsızlık, çatışmadan kaçış | karar verme, kendini savunma |
| Akrep | tutkulu, derin | kıskançlık, kin tutma | affetme, güven |
| Yay | iyimser, özgür | savsaklama, sorumluluktan kaçış | söz tutma, işi bitirme |
| Oğlak | disiplinli, sorumlu | katılık, fazla ciddiyet | oyun, esneklik, rahatlama |
| Kova | özgün, sosyal | kuralı reddetme, mesafe | işbirliği, duygusal yakınlık |
| Balık | hayalperest, empatik | gerçekten kaçış, sınır koyamama | sınır koyma, sorumluluk |

## 4. Hikaye üretimi — A→B dönüşümü (yaşa göre)
**Yapı:** Nokta A (kahraman handikabıyla zorlanır) → olaylar → Nokta B (öğrenir, aşar, mutlu/güvenli çözüm).

**Yazım promptu (Claude'a, Rusça çıktı):**
```
Напиши детскую сказку на РУССКОМ языке для возраста [YAŞ].
Главный герой — [hayvan/çocuk karakteri]. Его черта характера: [olumlu mizaç],
но он сталкивается с трудностью: [gölge/handikap].
Через историю он учится: [öğreti]. 
Требования:
- Возраст [YAŞ]: [dil kuralları — tablo madde 2].
- Тёплый, добрый тон. Без страха и насилия. Позитивная концовка.
- НЕ упоминай знаки зодиака или астрологию.
- Чёткий моральный урок, показанный через действия, а не нравоучения.
- Раздели на сцены/страницы (для иллюстраций) с пометкой [Страница N].
```
Tek öğretiye sadık kal; "fluff" ekleme. Karakter ismi sabit kalsın (seriye uygun).

## 5. Psikolog onay döngüsü (ZORUNLU)
Hikaye → psikoloğa gönder → checklist → düzelt → tekrar onay. Checklist:
- [ ] Yaşa **gelişimsel** olarak uygun (kavram, dil, dikkat süresi)
- [ ] Korkutucu / travmatik / kaygı yaratan öğe **yok**
- [ ] Öğreti net ve **eylemle** gösteriliyor (vaaz değil)
- [ ] Duygular sağlıklı modelleniyor (bastırma değil, ifade)
- [ ] Çözüm pozitif, çocuğu güçlendiren (utandırmayan)
- [ ] Kültürel/ailevi olarak Rusça okur için uygun
- [ ] Cinsiyet/rol klişesi pekiştirmiyor
→ Onay alınmadan görsel/dizgi aşamasına **geçme**.

## 6. Görseller (hikayeye özgü, tutarlı)
Her [Страница N] için bir görsel. **Karakter tutarlılığı** en kritik nokta.
**Görsel prompt şablonu (Midjourney/DALL·E/Fal):**
```
Children's book illustration, [YAŞ aralığına uygun stil: ör. soft watercolor,
rounded shapes, warm palette]. Character: [karakterin sabit tarifi — aynı her sayfada:
tür, renk, kıyafet, ifade]. Scene: [sahne özeti]. 
Consistent character across pages, no text in image, age [YAŞ] friendly, gentle, cozy.
--ar 1:1 (kare) veya --ar 4:5
```
İpuçları: aynı karakter tarifini her promptta birebir tekrarla; tek stil (style reference) sabitle; metni görsele gömme (dizgide eklenir).

## 7. Dizgi + kapak
- Resimli çocuk kitabı = **fixed-layout** (sabit düzen) e-book + **KDP paperback** (baskı daha çok satar).
- Kapak: şablon kopyalama, **profesyonel tasarımcı** (Fiverr $5–30) — Rusça başlık net, değeri/dönüşümü anlatır.

## 8. Yayınlama / Satış — global Rusça/Ukraynaca diaspora (DİJİTAL + BASKI)
Hedef: AB/ABD'deki Rus & Ukraynalı aileler. Hem e-book (PDF/EPUB) hem **fiziksel baskı** (anneler kitaba dokunmak ister).
| Kanal | Rolü |
|---|---|
| **Amazon KDP** | Baskı + Kindle'ın bel kemiği. Amazon.de/.com → anneler fiziksel kitabı buradan alır. |
| **Etsy** | Dijital indirme + POD baskı; diaspora anneleri yoğun. |
| **Kendi Shopify mağaza** | Marka + marj; baskı için **Gelato** (AB/ABD'de yerel basıp gönderir). Dijital teslim app'i (PDF/EPUB). |
| **ЛитРес / Bookmate** | Rusça dijital okuma/audio — tamamlayıcı. |
**Keşif/pazarlama:** Instagram + Facebook (Rusça/Ukraynaca anne grupları) · Telegram · Pinterest · (VK, Ruslarda).
**Baskı (POD):** çocuk resimli kitapta kaliteli bağlı baskı için **Amazon KDP** standart; Shopify tarafında **Gelato** (yerel üretim). Lulu alternatif.
> **Dil:** Rusça ana; Ukraynalı aileler için **Ukraynaca versiyon** da çıkar (metni çevir, görseller aynı) — 2022 sonrası birçok Ukraynalı Rusça içerikten uzak duruyor.
Sıra: e-book → bundle (yaş seti) → KDP baskı → audio → Ukraynaca/dil versiyonları.

## 9. Pazarlama
- **VK (ВКонтакте)** ve **Telegram** ebeveyn/çocuk gelişimi toplulukları — Rusça kitle burada.
- Instagram/TikTok: yüz göstermeden **kitabı çekip anlatan** kısa videolar (en iyi performans gösteren format).
- KDP'de satış+yorum arttıkça algoritma iter; gerekirse **Amazon Ads** (günde $3-5'ten başla, kârdaysan artır).

## 10. Ölçekleme
12 arketip × yaş grubu = geniş katalog. Her kitap aynı pipeline ile çoğaltılır; bundle (yaşa göre set), paperback ve audio en kârlı kalemler.

## 11. Pazar penceresi + lansman (KDP fırsatı — "perfect storm")
Üç kuvvet aynı anda → 12-18 aylık pencere: **talep artıyor** (KDP satışları aylık yükseliyor) + **giriş bariyeri çöktü** (AI ile kaliteli kitap) + **rekabet azalıyor** (KDP hype'ı bitti, yeni girenler az).
1. **Zayıf-rakip nişi bul ("soft underbelly"):** talebi olan ama üst kitapları **zayıf** olan nişler — eski/modası geçmiş kapak, jenerik başlık, güncel-olmayan içerik, ya da **<100 yorum**. Rusça çocuk "duygu/değer gelişimi" nişi büyük ihtimalle tam böyle (zayıf, modası geçmiş kapaklar).
2. **Kalitede yen:** müşteri **önce gözle** alır → kapak + başlık + içerik *senin* daha modern/on-trend olsun. 3000 yorumlu ama 2015 kapaklı kitap **savunmasız.** (AI kapak avantajın burada.)
3. **Review velocity (ilk 90 gün):** **gerçek** 50-100 yorum hedefle → Amazon algoritması organik iter. ⚠️ **Sahte/satın-alınmış yorum YOK** (Amazon banlar) — ARC okuyucu, erken alıcı, diaspora anne toplulukları, ücretsiz indirme karşılığı dürüst yorum.
4. **Flag-planting (çok niş):** senin **12 arketip × yaş** matrisin = doğal "çok nişe bayrak dik" stratejisi. Önce 1 kitabı tam lansmanla bitir (yorum+rank), sonra sıradakine. 6 ay–1 yılda mümkün olduğunca çok kaliteli kitap → bileşik büyüme + nişi sahiplen (kapı arkandan kapanır).
> Tool notu: video co-author.ai/Book Bounty/Book Reverb (affiliate) öneriyor — bizde **kitabı Claude yazıyor**, ayrı araç gerekmez; yorumları **etik** topla.

---
**Teslim:** Her çalıştırmada tek kitap üret → `[yaş]_[arketip]/` klasörüne: `hikaye_ru.md`, `psikolog_review.md`, `gorseller/` (prompt listesi + üretilenler), `yayin_notu.md` (başlık, kapak brief, platform planı).
