---
name: rakip-reklam-istihbarati
description: Rakiplerin Meta Ad Library'deki reklamlarını haftalık anlık görüntüyle çeker, önceki haftayla FARKINI alır (hangisi açık kaldı / kapandı) ve hayatta kalan reklamlardan kreatif brief çıkarır. Uzunlamasına takip döngüsü — tek seferlik rakip analizi değil.
---

# Rakip Reklam İstihbaratı (Ad Library — haftalık fark takibi)

## Ne zaman
Bir rakip grubunun **hangi reklamlarının çalıştığını** dışarıdan anlamak; kendi kreatiflerini boşluğa değil, hayatta kalmış açılara göre üretmek. Uygulama/SaaS/e-ticaret için ödemeli reklam başlatırken ya da ölçeklerken.

## 🎯 Kapsam — bu skill NE DEĞİL (tekrar eklemeyi önlemek için)
Videonun/konunun büyük kısmı **kütüphanede zaten var**. Bu skill yalnızca eksik parçayı doldurur:

| İhtiyaç | Nereye git |
|---|---|
| Kampanya stratejisi, hedefleme, teklif, ROAS/CPA optimizasyonu | `marketing-skills/skills/ads` |
| Toplu reklam metni/kreatif varyantı üretimi | `marketing-skills/skills/ad-creative` |
| Rakibin **sitesini/konumlandırmasını** profilleme | `marketing-skills/skills/competitor-profiling` |
| Meta Marketing API ile **kendi hesabının** verisini çekme | `marketing-skills/tools/integrations/meta-ads.md` |
| Landing/varyant testi · genel A/B altyapısı | `icerik-pazarlama/landing-ab-test` · `veri-analitik/a-b-test` |
| Kreatif üretimi (görsel/video) | [[İçerik Fabrikası — Referans Sistem]] · `topview` · Higgsfield · [[AI UGC-Reklam Video Üretici (open-source, self-host) — referans]] |
| **✅ Rakibin YAYINDAKİ reklamları + haftalık hayatta-kalma farkı** | **bu skill** |

Fark şu: `competitor-profiling` rakibin **sitesine** bakar, bu skill rakibin **yayındaki reklamlarına** ve zaman içindeki değişimine bakar.

## ⚠️ Dürüst çerçeve
- **⚠️⚠️ Claude senin reklam hesabını göremez.** Kendi kampanya verini CSV export ya da Meta Marketing API ile **sen vereceksin**. Vermezsen CPC/ROAS **uydurur**. Kaynak videodaki panel görüntüleri kişinin kendi hesabı — Claude'un erişimi değil.
- **⚠️ "1 hafta açık kaldı = kazanıyor" bir ÇIKARIM, veri değil.** Rakip bütçesi, sezon, marka testi, ajans sözleşmesi, always-on marka reklamı — hepsi karıştırıcı. Sinyal olarak kullan, kanıt sanma. Ne kadar çok rakip × ne kadar çok hafta, o kadar güvenilir.
- **⚠️ Küçük bütçede fark çoğunlukla gürültüdür.** Günlük €10 harcamayla gelen 3 satın alma istatistiksel sinyal değildir. Kaynak bu uyarıyı atlıyor. Erken aşamada **karar verme**, eleme yap; kesin karar için hacim biriktir.
- **⚠️ Kreatif kopyalama ≠ yapı kopyalama.** Rakibin görselini/metnini birebir kopyalamak telif ve marka riski. Kopyalanacak olan **açı, format, hook yapısı, CTA deseni** — varlığın kendisi değil.
- **⚠️ Rakip verisi rakibin kitlesini vermez.** Kaynak da kabul ediyor: "onların kitlesi ve pikselleri daha iyi." Aynı kreatif sende aynı sonucu vermez; başlangıç noktası verir, garanti vermez.
- **⚠️ Apify paralı (freemium bulut).** Kütüphane kuralı gereği ücretsiz rota önceliklidir: resmî **Ad Library API** + [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans|Playwright]] (zaten kurulu). Apify hız/kolaylık satın alır, yetenek değil.
- **⚠️ ToS ve hız.** Ad Library şeffaflık için **kamuya açık**, ama otomatik çekimde makul hız sınırı uygula ve mümkün olan yerde API'yi tercih et. Ticari reklamlarda API kapsamı bölgeye göre değişir — kapsam dışında kalan yerde public arayüz kalır.
- **Altın kural: analiz ≠ satış.** Bu skill sana hipotez üretir, gelir üretmez. Bütçe yakma riski gerçek.

## Süreç (haftalık döngü)
1. **Rakip listesi sabitle** — 5–8 rakip. Az olursa sinyal zayıf, çok olursa gürültü. Listeyi dosyaya yaz; hafta hafta **aynı** liste takip edilecek.
2. **Anlık görüntü al (snapshot).** Her rakip için yayındaki reklamları çek: reklam kimliği, ilk yayın tarihi, format (statik/video/carousel), metin, CTA, hedef URL, varsa görsel/thumb. Tarihli klasöre kaydet (`ads/2026-08-16/<marka>.json`). **Ham veriyi sakla** — fark bu arşivden çıkacak.
3. **Fark al (asıl değer).** Bu haftayı geçen haftayla karşılaştır → üç kova: **hayatta kalanlar** (≥2-3 hafta açık) · **yeni açılanlar** (rakibin bu haftaki testi) · **kapananlar** (elenmiş). Hayatta kalma süresi = kaba başarı vekili.
4. **Hayatta kalanları çöz.** Her biri için: hedef kitle sinyali (kime konuşuyor), vaat/açı, hook'un ilk 3 saniyesi, sosyal kanıt tipi, CTA deseni, teklif mekaniği (indirim/kupon/checklist/karşılaştırma). Videoda ayrıca **transkript** çıkar.
5. **Desen çıkar.** Rakipler arasında **tekrar eden** açıları işaretle — birden fazla markada bağımsız olarak hayatta kalan açı en güçlü sinyaldir. Tek markada kalan açı marka-özel olabilir.
6. **Kreatif brief üret** — kendi ürünün için: 3–5 açı, her açı için hook + gövde + CTA + format önerisi + hangi rakip kanıtından türediği. Üretimi `ad-creative` / İçerik Fabrikası devralır.
7. **Kendi sonucunla kapat.** Yayınladıktan sonra kendi metriklerini (CSV/API) besleyip hangi açının **sende** tuttuğunu kaydet. Döngü ancak bu adımla öğrenir; yoksa sadece rakip izlemiş olursun.

## Metrik merdiveni (aşamaya göre — hangi sayıya bakılır)
| Aşama | Bütçe | Bakılacak metrik | Neden |
|---|---|---|---|
| **1 — Eleme** | Düşük, çok kreatif | **CPC / CPM**, video'da izlenme-tutma | Satın alma hacmi yok; dönüşüme bakmak gürültü okumaktır |
| **2 — Doğrulama** | Orta, az kreatif | Dönüşüm oranı, satın alma başına maliyet | İlk satışlar geldi; artık huni gerçek |
| **3 — Ölçek** | Yüksek, yalnız kanıtlanmış | **ROAS**, geri ödeme süresi | Tek soru: harcanan 1'e karşılık ne dönüyor |

> Kaynaktaki euro rakamları o kişinin ürün fiyatına ve pazarına ait — **kendi fiyatına oranla**, birebir kopyalama. Ayrıca: her uygulamayı tek reklam hesabına bağlama (öğrenme sinyalleri karışır).

## 🔗 Bununla birleştir
- Çekim katmanı: [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] (ücretsiz) · `otomasyon/web-scraping` · alternatif panel: `blueprints/lead-scraper-panel`
- Kreatif üretimi: `marketing-skills/skills/ad-creative` · [[İçerik Fabrikası — Referans Sistem]] · [[AI UGC-Reklam Video Üretici (open-source, self-host) — referans]] · [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]]
- Kampanya yönetimi: `marketing-skills/skills/ads` + `tools/integrations/meta-ads.md`
- Sonuç takibi: `veri-analitik/dashboard-bi` · `veri-analitik/csv-islemci`
- Landing tarafı: `icerik-pazarlama/donusum-landing` · `icerik-pazarlama/landing-ab-test`

## Çıktı standardı
- **Tarihli ham arşiv** (`ads/<tarih>/<marka>.json`) — fark almanın önkoşulu, silinmez.
- **Fark raporu**: hayatta kalanlar / yeni / kapananlar + her rakip için hayatta kalma süresi.
- **Desen tablosu**: açı × kaç markada hayatta kaldı × kaç hafta.
- **Kreatif brief**: 3–5 açı, her biri hook + gövde + CTA + format + dayandığı kanıt.
- Her iddianın yanında **kaynağı** (hangi reklam, hangi tarih). Kaynaksız çıkarım "hipotez" diye işaretlenir.

## Yaygın hatalar
- **Hayatta kalmayı kanıt sanmak** — çıkarımdır; rakip bütçesi/sezon karıştırır.
- **Tek hafta bakmak** — fark almadan bu skill'in değeri yok; değer arşivde birikir.
- **Varlığı kopyalamak** — telif/marka riski; yapıyı kopyala, varlığı değil.
- **Erken ROAS'a bakmak** — düşük bütçede satın alma verisi gürültüdür.
- **Kendi sonucunu döngüye beslememek** — rakip izlemek öğrenme değildir.
- **Claude'a hesap verisi vermeden metrik sormak** — uydurur.
- **Çok rakip / çok az rakip** — 5–8 arası tut.

> Çalıştırılabilir hâli — çekim + fark + brief promptları: `/icerik-pazarlama:rakip-reklam-istihbarati`
> Kaynak: YouTube `2fPKsjMoi8Y` (operasyonel döngü sağlam; istatistiksel anlamlılık ve ücretsiz-araç uyarıları eklendi. Transkriptteki bütçe rakamları tutarsız — alıntılanmadı).
> İlişkili: `marketing-skills/skills/{ads,ad-creative,competitor-profiling}` · [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]]
