---
tags: [rehber, is-satis, lead-gen, lokal-isletme, routing, referans, dürüst]
guncelleme: 2026-08-16
---

# 🏪 Lokal İşletmeye AI Hizmet Satışı — dürüst değerlendirme

> [[00 HOME|🏠 Ana sayfaya dön]]
> Kaynak: YouTube `0e7C9fzX4pc` — "Google Maps'ten lokal işletmeleri kazı → fotoğraflarını AI ile iyileştir → reklam videosu + site üret → demo olarak yolla → günde 50-100 işletmeye ölçekle."

## 🎯 Karar: **yeni skill açılmadı**

Videonun iş modeli kütüphanede **zaten var, hem de daha derin**. Yeni bir skill eklemek duplikasyon olurdu. Bu not = dürüst gerçeklik kontrolü + yönlendirme haritası + kaynakta hiç geçmeyen risk uyarıları.

## 🗺️ Routing — videodaki her adım nereye düşüyor

| Videodaki adım | Kütüphanedeki karşılığı | Not |
|---|---|---|
| Lokal işletmeleri bul, sinyale göre önceliklendir (yeni açılan, sitesi yok, yorumu artıyor) | [[Yetenekler MOC\|is-satis/ai-ajans-modeli]] **Adım 3** — "sinyal bazlı müşteri yakalama (yeni açılan işletme, **GBP analizi**, iş ilanı, sosyal sinyal)" | Birebir aynı fikir, zaten yazılı |
| Listeyi kazı / otomatik takip | [[Yetenekler MOC\|is-satis/outbound-lead-agent]] · `otomasyon/web-scraping` · `blueprints/lead-scraper-panel` | Ajan hâli + ToS korumaları dahil |
| Ajans kurma, niş, teklif, fiyat, birim ekonomisi | [[Yetenekler MOC\|is-satis/lead-gen-ajansi]] · `is-satis/ai-ajans-modeli` | Videoda yok denecek kadar az; kütüphanede tam |
| Önce demo yap, sonra yolla ("spec" açılış) | [[Yetenekler MOC\|is-satis/cozum-sat-website-degil]] **Adım 4** — "gerekirse demo/dummy versiyon önce yap, paylaş" | Zaten var |
| Sitesi olmayana site yap | `web-sitesi-yapimi/` MOC · `icerik-pazarlama/donusum-landing` · `premium-site-metni` | ⚠️ ama aşağıdaki "asıl itiraz"a bak |
| Görsel iyileştirme, reklam videosu, UGC | [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]] · [[İçerik Fabrikası — Referans Sistem]] · [[AI UGC-Reklam Video Üretici (open-source, self-host) — referans]] · `topview` | Araç katmanı zaten bağlı |
| Outreach mesajı, takip | `is-satis/video-outreach-basvuru` · `marketing-skills/skills/{prospecting,cold-email}` | Etik/limit kuralları kütüphane tarafında daha sıkı |

**Özet:** video = `ai-ajans-modeli` Adım 3 + `cozum-sat-website-degil` Adım 4 + Higgsfield. Üçü de yerinde duruyor.

## ✅ Videonun gerçekten iyi olan tek fikri
**Sinyalden ihtiyaç okumak.** "Sitesi yok" + "yorum sayısı artıyor" + "fotoğrafları kötü" = *hem bütçesi var hem ihtiyacı var* demek. Bu, kör listeye soğuk mesaj atmaktan ölçülebilir şekilde iyi. Zaten `ai-ajans-modeli` Adım 3'ün söylediği şey; video bunu somut sinyallerle örneklendiriyor — o kadar.

## ⚠️ Kaynakta hiç geçmeyen 6 risk (asıl katkı bu)

1. **⚖️ Gerçek bir mekânın fotoğrafını AI ile değiştirip pazarlamada kullanmak yanıltıcı reklam riski.** Videoda ışık değiştiriliyor, gökyüzü değişiyor, **sokaktaki direk siliniyor**. Müşteri o görselle geliyor, mekân öyle değil. AB'de haksız ticari uygulamalar mevzuatı, TR'de Ticari Reklam yönetmeliği bu alanı düzenliyor — ve **sorumluluk görseli yayınlayan işletmede**. Sen aracı olsan da teslim ettiğin şey onu riske atıyor. Sınır: **ışık/renk/keskinlik düzeltmesi makul; nesne silmek, mekânı olmadığı gibi göstermek değil.**
2. **📸 Google Reviews'taki müşteri fotoğrafları işletmenin değil, çeken kişinin.** Video açıkça "müşterilerin paylaştığı fotoğraflardan" diyor. Bu fotoğrafların telifi yorumu yazanda. Onları kazıyıp AI ile işleyip işletmeye satmak **üçüncü şahsın telifini** kullanmak. İşletmenin **kendi** verdiği görselle çalış.
3. **🚫 Google Maps/Reviews kazıma Google ToS'a aykırı.** Meşru yol: resmî **Places API** (kotalı/ücretli). Üstüne iş kuracaksan bu fark önemli — hesap/IP banı iş modelini bir günde durdurur.
4. **📧 Günde 50-100 talep edilmemiş mesaj.** Video Madrid örneği veriyor: AB'de talep edilmemiş ticari e-posta kuralları katı (GDPR + İspanya'da LSSI-CE), TR'de KVKK + İYS. Ayrıca teslimat (deliverability) tarafında bu hacim domain'ini yakar. Kütüphane çizgisi net: `lead-gen-ajansi` **"az ama isabetli > çok ama spam"** diyor — video bunun tersini öneriyor.
5. **🏗️ Higgsfield'ın barındırdığı demo site teslim edilebilir varlık değil.** Satış artefaktı olarak iyi; müşteri "tamam" dediğinde gerçek siteyi yeniden kuracaksın (domain, hosting, sahiplik, düzenlenebilirlik). Video bu ayrımı bulanıklaştırıyor. Gerçek teslimat → `web-sitesi-yapimi/` MOC.
6. **💸 Spec iş ekonomisi.** Her aday için önceden site + video + UGC üretmek = ödeme almadan üretim maliyeti. Video **bir** demo gösteriyor, **dönüşüm oranı** göstermiyor. 50-100/gün ölçeğinde bu ciddi hesaplanması gereken bir maliyet. Altın kural: **demo ≠ satış.**

Ayrıca: video Higgsfield'ı ("24 saat ücretsiz deneme", "MCP'yi ilk kullananlara sınırsız") epey tanıtımsal anlatıyor. Araç iyi ama **paralı/bulut** — kütüphane kuralı gereği önce ücretsiz rota değerlendirilir ([[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] toplama tarafı, [[AI UGC-Reklam Video Üretici (open-source, self-host) — referans]] üretim tarafı).

## 🧭 Bu işi gerçekten yapacaksan sıra
1. `is-satis/ai-ajans-modeli` — niş, paket, fiyat, birim ekonomisi. **Önce burası**; araç değil model.
2. `is-satis/cozum-sat-website-degil` — "kimse website istemiyor" içgörüsü. Videonun *site sat* önerisinin doğrudan eleştirisi: lokal esnafa asıl satan şey **rezervasyon/hatırlatma/müşteri getiren sistem**, güzel site değil.
3. `is-satis/lead-gen-ajansi` — ToS-uyumlu liste + etik outreach çizgisi.
4. `is-satis/outbound-lead-agent` — bunu Claude Code'da otomatikleştir.
5. Üretim katmanı: İçerik Fabrikası · Higgsfield/UGC üretici · `web-sitesi-yapimi/`.
6. Demoyu **işletmenin kendi verdiği** görselle yap; nesne silme, mekânı değiştirme.

## 🔮 Gelecek-not
Aynı konudaki başka bir video/paket gelirse: **yeni skill açma**, buraya bak. Eklenecek yeni bir şey varsa yukarıdaki mevcut skill'lerden birini zenginleştir.

> İlişkili: [[Yetenekler MOC]] (is-satis ailesi) · [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]] · [[Web Sitesi Yapımı — MOC]] · [[Pasif Gelir OS Prompt Paketi — dürüst değerlendirme + kütüphane haritası (referans)]] (aynı desen: duplike paket → routing notu)
