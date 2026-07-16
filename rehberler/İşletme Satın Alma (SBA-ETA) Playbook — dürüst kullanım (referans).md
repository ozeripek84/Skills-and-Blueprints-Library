---
tags: [rehber, is, satin-alma, acquisition, eta, sba, finans, claude, uyari]
guncelleme: 2026-07-16
---

# 💼 İşletme Satın Alma (SBA / ETA) Playbook — dürüst kullanım

> [[00 HOME|🏠 Ana sayfaya dön]]
> "İşimi kaybetsem 12 ayda maaşımı nasıl geri kazanırım" başlığıyla X'te dolaşan 17 adımlı **işletme satın alma** playbook'u (ETA — Entrepreneurship Through Acquisition; "sıkıcı, nakit basan işleri satın al"). **Bu bir prompt paketi DEĞİL:** 17 adımın yalnız **1'i** Claude promptu; gerisi bir finans/M&A stratejisi. Kütüphaneye referans olarak, gerçeği ayıklayarak eklendi.
> **Önce iki şeyi bil:** (1) Strateji **gerçek** ama X'te **fazla romantize** edilmiş. (2) Finansman motoru (SBA, SMBmarket, lender'lar) **tümüyle ABD'ye özel** — Türkiye'ye olduğu gibi transfer olmaz.

## 🇹🇷 EN ÖNEMLİ UYARI — bu ABD playbook'u, Türkiye'ye birebir geçmez
Playbook'un kalbi ABD kurumlarına dayanıyor; sende (Türkiye) karşılığı **yok**:
- **SBA loan (%90'a kadar finansman):** ABD devlet-garantili küçük işletme kredisi. Türkiye'de **eşdeğeri yok**. KOSGEB destekleri hibedir/işletme kurmaya yöneliktir, "işletme satın almak için %90 kredi" değildir. Türk bankalarının satın-alma kredisi çok daha muhafazakâr, yüksek faizli (TRY enflasyonu) ve ağır kişisel teminatlı.
- **SMBmarket / BizBuySell:** ABD işletme-satış pazar yerleri. Türkiye'de emlak/işletme ilan siteleri var ama derinlik ve şeffaf finansal veri çok daha zayıf.
- **Live Oak, Byline, Truliant:** ABD SBA lender'ları — Türkiye'de anlamı yok.
- **"3x kazanç altı fiyat, %90 kaldıraç":** ABD SMB normu. Türkiye'de düşük-peşinatlı, devlet-garantili yüksek kaldıraç yolu **yok** → sermayenin çok daha büyük kısmını kendin koyarsın, risk katlanır.

**Sonuç:** Adım 9-11 (SBA lender, %90 finansman, %10 açığı yatırımcıyla kapat) **senin coğrafyanda çalışmaz**. Bu playbook'u ancak (a) ABD'de yapılandırırsan, ya da (b) sadece **mantığını** (sıkıcı-kârlı iş bul, finansmanı ayarla, ekibi tut, GM ata) alıp yerel finansmana uyarlarsan işine yarar. Rakamlar/kurumlar değil, **iskelet** transfer olur.

## ⚠️ Strateji gerçek ama romantize — kaynağın gizlediği frictionlar
ETA meşru, bilinen bir yol (Codie Sanchez, "Buy Then Build"). Ama tweet fantezi versiyonunu satıyor:
1. **Kişisel garanti.** SBA (ve çoğu satın-alma kredisi) **kişisel kefalet** ister — iş batarsa şahsen borçlusun, kişisel varlığın risk altında. "1. günden para basıyor" borç servisini görmezden geliyor.
2. **Sahibe-bağımlılık riski (#1 katil).** "Ekibi tut, dün çalıştıysa yarın da çalışır" küçük işlerde çoğu zaman **YANLIŞ** — satış, ilişkiler, know-how sahibin şahsında olabilir. Sahip gidince iş çöker. ETA anlaşmalarının en sık patlama sebebi budur (QoE + owner-dependency).
3. **"3x altı, ucuz" bir sebeple ucuzdur.** Düşük çarpan genelde sahibe-bağımlılık, müşteri yoğunlaşması veya düşen bir sektör demektir. Ucuzluk bedava değil.
4. **Pasif/hızlı değil.** Anlaşma başına 6-12 ay, LOI'lerin çoğu düşer, due diligence yorucu, kapanış evrak yükü ağır.
5. **"Sahip ol, işletme" + GM ata:** güvenilir bir genel müdür (GM) nadir ve pahalıdır; maaşı, tam da yerine koymak istediğin "maaş" marjını yer.
6. **Yatırım/hukuk tavsiyesi değil.** Gerçek para + borç + sözleşme riski. LOI ve kapanışta **avukat + mali müşavir** şart; Claude taslak verir, imzayı onlar onaylar.

## ✅ Claude GERÇEKTEN nerede kaldıraç verir (kaynak sadece Adım 1'i söylüyor)
İnisiyatif değeri: Claude bu playbook'ta 1 değil **6+ adımda** işe yarar (canlı veri gerektirmeyen, güvenli işler):
- **Adım 1 — Sektör beyin fırtınası (✅ güvenli):** aşağıdaki prompt. Saf ideasyon, veri istemez. *("recession-proof" iddiasını tuzla; Claude yerel/güncel piyasayı bilmez.)*
- **Adım 5 — Outreach (✅):** 20 işletmeye kişiselleştirilmiş ilk-temas e-postası taslakla. → [[blueprints/vize-sponsorlu-is-outreach/CLAUDE|vize-sponsorlu-is-outreach]] · [[blueprints/lead-scraper-panel/CLAUDE|lead-scraper-panel]] · [[Yetenekler MOC|is-satis/outbound-lead-agent]]
- **Adım 6 — Due diligence soru listesi (✅):** "neden satıyorsun" sonrası sorulacak 30 soru; kırmızı bayrak listesi.
- **Adım 7 — Finansal analiz (✅ senin verinle):** 3 yıllık gelir tablosunu **sen yapıştır** → tutarlılık, trend, anomali, add-back/normalizasyon soruları. *(Sayıyı sen ver; Claude uydurmasın.)* → [[Yetenekler MOC|veri-analitik]]
- **Adım 8 — LOI iskeleti (⚠️):** niyet mektubu taslağı — ama **avukat sonlandırır**, bağlayıcı hükümler hukuk işi.
- **Deal memo / değerleme mantığı (⚠️):** çarpan mantığı, senaryo modeli — girdiyi sen ver, çıktıyı doğrula (canlı piyasa verisi yok).

**İşaretler:** ✅ Claude güvenli/güçlü · ⚠️ uzman (avukat/mali müşavir) gerekir · 🇹🇷 ABD'ye özel, sana geçmez.

## Adım 1 — kullanılabilir tek prompt (TR)
> Satın alabileceğim 20+ **sıkıcı, resesyona-dayanıklı** sektör listele. HVAC (iklimlendirme), çamaşırhane, muhasebe, haşere kontrolü gibi. Sessizce nakit basan, cazibesiz işler. Her biri için: tipik kâr marjı, sahibe-bağımlılık riski, devir kolaylığı ve Türkiye'de geçerlilik notu ekle.
> *(Son cümleyi ben ekledim — orijinal ABD odaklı; "Türkiye'de geçerlilik" filtresiyle iste.)*

## 17 adımın özeti (dürüst notlarla)
1. Claude'a sıkıcı-kârlı sektör listesi çıkart (✅). 2. Model olarak anladığın birkaçını seç. 3. Pazar yerini aç (🇹🇷 SMBmarket=ABD; yerel muadili zayıf). 4. Sert filtrele: $100k+ nakit akışı, 3x altı fiyat (🇹🇷 rakamlar ABD normu). 5. 20 işletmeye ulaş — çoğu düşer, biri yeter (✅ Claude taslaklar). 6. İlk soru: "Neden satıyorsun?" (emeklilik ideal) (✅ soru listesi). 7. Son 3 yıl finansalı çek — sıkıcı, tutarlı kâr iste (✅ senin verinle analiz). 8. Finansman aramadan önce LOI ile sözleşmeye bağla (⚠️ avukat). 9. LOI'yi SBA lender'a götür (🇹🇷 **yok**). 10. SBA kredisi fiyatın %90'ını karşılar (🇹🇷 **yok**). 11. %10 açığı yatırımcıya %15 hisseyle kapat (⚠️ hukuk + 🇹🇷 finansman motoru yoksa moot). 12. Kapat — 1. günden para basan iş (⚠️ borç servisi + sahibe-bağımlılık). 13. Mevcut ekibi tut (⚠️ sahibe-bağımlıysa çöker). 14. İlk haftalar sadece izle/öğren. 15. GM ata — işi işlet değil, sahibi ol (⚠️ GM maliyeti marjı yer). 16. Nakit akışı krediyi geri ödesin (+ maaş fazlası). 17. Sensiz dönünce sıradakini al (2. anlaşma daha kolay).

## 🔗 Kütüphanedeki bağlantılar
- **Zıttı (sıfırdan kurma):** [[skill-kutuphanesi/is-satis/sifirdan-is-kurma|sifirdan-is-kurma]] — satın almak yerine kurmak.
- **Adım 5-6 (bul & ulaş):** [[blueprints/lead-scraper-panel/CLAUDE|lead-scraper-panel]] · [[blueprints/vize-sponsorlu-is-outreach/CLAUDE|outreach blueprint]] · [[Yetenekler MOC|is-satis/outbound-lead-agent]]
- **Adım 7 (finansal analiz):** [[Yetenekler MOC|veri-analitik]]
- **Finans ailesi + "tavsiye değil" tonu:** [[Borsa & Trading Prompt Paketi — dürüst kullanım (referans)]]

## Bağlam
X'te dolaşan viral "12 ayda maaşını değiştir → işletme satın al" playbook'u (ETA/SBA, ABD orijinli). Kütüphaneye **rehber** olarak eklendi (2026-07-16; [[skills-blueprints-library]] anti-duplikasyon — "işletme kurma" var ama "işletme **satın alma**" boşluğu yoktu). **Skill/blueprint değil** çünkü Claude yeteneği ya da uygulama iskeleti değil, Claude-destekli bir strateji. Diğer viral X paketleri: [[Life OS — Kişisel Verimlilik Prompt Paketi — dürüst kullanım (referans)]] · [[AI Yazı — İnsan Sesi & Voice Match Prompt Paketi — dürüst kullanım (referans)]] · [[AI YouTube Kanalı Prompt Paketi — dürüst kullanım (referans)]] · [[Borsa & Trading Prompt Paketi — dürüst kullanım (referans)]]. **Kişisel not (kullanıcı Türkiye):** finansman motoru sana geçmez; ancak stratejinin iskeletini yerele uyarlarsan değerli.
