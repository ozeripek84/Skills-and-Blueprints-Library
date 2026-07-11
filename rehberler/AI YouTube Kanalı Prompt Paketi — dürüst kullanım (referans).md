---
tags: [rehber, prompt, youtube, icerik, pazarlama, claude, uyari]
guncelleme: 2026-07-11
---

# 🎬 AI YouTube Kanalı — Prompt Paketi (dürüst kullanım)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Sıfırdan monetize YouTube kanalı için sosyal medyada dolaşan iki viral prompt seti (7 + 12) tek yerde, tekilleştirilmiş ve işleve göre dizilmiş: niş → kimlik → faceless video → başlık → script → thumbnail → SEO/algoritma → Shorts → rakip → monetizasyon → otomasyon → plan. **Skill değil**, pasif referans.
> **En büyük değeri:** bunlar **strateji/yazma ön-yüzü**; üretim & yayın araçları zaten kütüphanende (aşağıda).

## ✅⚠️ Dürüst değerlendirme (önce oku)
İki setin başlık dili abartı pazarlama ("Claude + YouTube = $$$$", "para basar", "15 yaşında bile yapar", "$2670/ay ajans, bedava, 90 günde monetize"). Gerçekçi ayrım:

**✅ Claude'un GERÇEKTEN güçlü olduğu (bunlar için kullan):** script yazımı, retention/hook, viral başlık üretimi, thumbnail konsepti/psikolojisi, Shorts fikri+script, ilk-10-video, repurposing. Bunlar saf yazma/yaratıcılık — Claude'un en iyi yanı, güvenli.

**⚠️⚠️ Canlı veri yok → UYDURUR (bunlara güvenme):**
- **Rakip analizi** ("en hızlı büyüyen 5 kanal, views/subs oranları"): Claude'un canlı YouTube verisi yok → **kanal adı ve istatistik uydurur**. Web erişimi bağla ya da verileri sen yapıştır.
- **CPM / gelir tahminleri** ("1K/10K/100K'da gelir", "$100/$500/$1000 milestone tarihleri"): spekülatif, çoğu iyimser. Nişe/coğrafyaya göre çok değişir — güncel kaynakla doğrula.
- **"Algoritma hack" / "2025'te çalışan tag stratejisi"**: YouTube algoritması opak ve sürekli değişir; Claude'un canlı bilgisi yok. Taktikler makul görünür ama doğrulanmamış; tag'ler artık neredeyse önemsiz.

**⚠️ Model riski — "faceless içerik değirmeni":** Bu setler faceless / "3 kanalı aynı anda çalıştır" / batch mill modeline sert biniyor. YouTube'un 2025 politikası tam da **kitlesel üretilen / tekrarlayan / özgün-olmayan** içeriği demonetize ediyor. Düşük-emek AI yığını = demonetize riski. Kaliteyi ve özgün katkıyı koru.

**Gerçek:** Prompt **plan** verir, **sonuç** değil. Monetizasyon eşiği (1000 abone + 4000 saat izlenme / Shorts eşdeğeri) + tutarlı üretim + gerçek talep ister. İşin zoru plan değil, **uygulama**. Gelir garantisi değil.

## 🔗 Senin araçlarınla birleştir (kütüphanenin gücü)
Bu promptlar planı üretir; **üretim & yayın** için zaten sende olanlar:
- **Script → video:** [[İçerik Fabrikası — Referans Sistem]] · topview-skill (video/TTS/avatar) · [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]]
- **Thumbnail:** [[blueprints/thumbnail-olusturucu/CLAUDE|thumbnail-olusturucu]] · [[Claude + Canva Connector — Tasarım (referans)]]
- **Repurposing → çok-platform yayın:** [[İçerik Fabrikası — Referans Sistem]] · marketing-skills (social/emails/video)
- **Genel içerik:** [[Yetenekler MOC|icerik-pazarlama]]

**İşaretler:** ✅ Claude güçlü/güvenli · ⚠️ tahmini, doğrula · ⚠️⚠️ canlı veri yok, uydurur.

---

## Promptlar (işleve göre, TR)

### 1) Niş & Gelir Potansiyeli — ⚠️ CPM/gelir tahminidir, doğrula
> [YAŞ] yaşındayım, ilgi alanlarım: [KONULAR]. AI ile YouTube'da para kazanmak istiyorum. Analiz et: en yüksek CPM'li ilk 5 niş; yaşıma/ilgilerime uyanı; her niş için rakip boşluğu analizi; 1K/10K/100K abonede gerçekçi gelir potansiyeli; bugün sıfır bütçeyle başlayabileceğim niş. **En hızlı monetize olandan** başlayarak sırala. *(CPM/gelir verisine erişimin yoksa uydurma; aralık ver + doğrulanması gerektiğini söyle.)*

### 2) Kanal Kimliği — ✅
> [NİŞ] hakkında bir YouTube kanalı açıyorum. Komple kimlik oluştur: kanal adı (5 seçenek), slogan, hedef kitle personası, içerik sütunları (4) ve beni rakiplerden ayıran bir "benzersiz mekanizma".

### 3) Faceless Video Sistemi — ⚠️ (mill riski: özgünlüğü koru)
> [NİŞ] kanalı, [KİTLE] hedefli komple bir faceless YouTube video konsepti oluştur. Dahil: SEO başlık, tam script (kamera yok), seslendirme talimatları, aranacak stock footage anahtar kelimeleri, arka plan müziği havası, thumbnail konsepti (metin+renk+duygu), bu konu için tahmini CPM, AdSense ötesi monetizasyon açısı.

### 4) Viral Başlık Makinesi — ✅ (CTR skoru tahmini)
> [KONU] hakkında video yapıyorum. Viral olacak 20 başlık üret: 5 merak-boşluğu, 5 sayı-temelli, 5 korku/aciliyet, 5 dönüşüm. Her biri için: tahmini CTR skoru (1-10), tetiklenen duygu, uyan thumbnail stili, SEO anahtar kelime gücü. 20'sini **en viralden en aza** sırala.

### 5) Yüksek-Retention Script — ✅
> [KONU] hakkında YÜKSEK-RETENTION bir YouTube script'i yaz: ilk 3 saniyede hook, merakı diri tutan açık döngüler (open loop), her 10-15 saniyede pattern interrupt, hikaye + gerilim, düşüş beklenen yerlerde yeniden-bağlama cümleleri, doğal hissettiren güçlü CTA. Ayrıca **izleyicinin en çok nerede düşeceğini** işaretle ve nasıl düzeltileceğini söyle.

### 6) Thumbnail Psikolojisi — ✅
> "[BAŞLIK]" videosu için CTR'yi maksimize eden 5 thumbnail konsepti tasarla. Her biri için: thumbnail üzerindeki tam metin (3-5 kelime), kullanılacak yüz ifadesi/duygu, öne çıkan renk kombinasyonu, görsel kontrast stratejisi, merak-boşluğu açıklaması, insanların neden tıklayacağı. **En yüksek CTR'den en düşüğe** sırala.

### 7) SEO & Açıklama — ✅
> "[BAŞLIK]" videosu için: SEO-optimize başlık (60 karakter altı), açıklama (zaman damgaları + anahtar kelimeler + linkler) ve 10 etiket ver. Thumbnail için A/B test varyasyonları öner.

### 8) Algoritma & Haftalık Checklist — ⚠️⚠️ canlı algoritma bilgisi yok, spekülatif
> [NİŞ] için YouTube algoritmasını analiz et: maksimum izlenme süresi için ideal video uzunluğu, hızlı büyüme için yükleme sıklığı, tag stratejisi, thumbnail A/B testi, önerilen-video algoritmasını tetikleme, community post stratejisi, ana kanalı besleyen Shorts stratejisi, ilk-24-saat stratejisi. Takip edebileceğim **haftalık checklist** ver. *(Algoritma iddialarını doğrulanmamış say; tag'ler artık az etkili.)*

### 9) Shorts Büyüme Motoru — ✅
> [NİŞ] kanalımı büyütmek için Shorts stratejisi kur: 30 viral Shorts fikri, kanıtlanmış hook formatları, Shorts izleyicisini long-form aboneye çevirme, gönderme sıklığı, ideal Shorts uzunluğu, izlenme süresini artıran loop stratejisi, profil tıklaması getiren CTA. Ayrıca bugün paylaşabileceğim **5 Shorts script'i** ver.

### 10) Rakip Analizi — ⚠️⚠️ canlı YouTube verisi yok → kanal/istatistik UYDURUR
> [NİŞ] alanındaki en iyi YouTube kanallarını analiz et: en hızlı büyüyen 5 kanal, büyümelerini sağlayan video türü, ortalama views/subs oranı, kapatmadıkları içerik boşlukları, thumbnail/başlık zayıflıkları, hemen daha iyi yapabileceklerim. Sonra onları geçmek için 10 video fikri ver. *(Web erişimin/verini yapıştırmadıysan Claude kanal adı ve rakam UYDURUR — mutlaka gerçek veriyle besle.)*

### 11) Monetizasyon Yığını — ⚠️ gelir/rate tahminidir
> [NİŞ] alanında [X] aboneli, [X] aylık görüntülemeli kanalım var. Komple gelir planı kur: AdSense tahmini, nişim için ilk 10 affiliate programı, satabileceğim dijital ürün fikirleri, kanal boyutum için sponsorluk rate card'ı, merch potansiyeli, ücretli topluluk modeli, kurs/koçluk fırsatı. 1K/5K/10K/50K abonede toplam gerçekçi aylık geliri göster. *(Rakamlar tahmin; doğrula.)*

### 12) $0 Otomasyon Workflow — ⚠️ (mill riski)
> [NİŞ] kanalı için $0 bütçeli komple YouTube otomasyon sistemi tasarla: her üretim adımı için ücretsiz AI aracı, Script→Seslendirme→Kurgu→Thumbnail akışı, video başına süre (2 saat altı hedef), 1 aylık içerik için batch üretim, algoritma için yükleme takvimi, ilk kazancı ne zaman ücretli araca yatırmalı. *(Not: "3 kanalı aynı anda" mill yaklaşımı demonetize riski taşır.)*

### 13) 90 Günlük Plan & İlk 10 Video — ⚠️ milestone tarihleri spekülatif
> [YAŞ] yaşındayım, [NİŞ] alanında [BÜTÇE] ve haftada [X] saatle başlıyorum. 90 günlük yol haritası: Hafta 1-2 (kurulum + ilk videolar), Hafta 3-4 (büyüme), Ay 2 (monetizasyon hazırlığı), Ay 3 (ilk gelir). Dahil: günlük aksiyon checklist'i, haftalık abone hedefleri, tahmini ilk-monetizasyon tarihi, büyüme durunca ne yapılır, kaçınılacak en büyük hatalar. **Ayrıca ilk 10 videomu** (tıklama-optimize başlık + neden performans göstereceği + thumbnail açısı + hedef kitle niyeti + beklenen görüntüleme aralığı) en hızlı büyüme sırasıyla ver.

### 14) Repurposing Motoru — ✅
> Bu YouTube script'ini/transkriptini şuraya dönüştür: Twitter/X thread'i, LinkedIn gönderisi, 3 YouTube Shorts hook'u, e-posta bülteni, Pinterest açıklaması. Ayrıca nişime göre hangi platformları önceliklendirmem gerektiğini öner.

---

## Bağlam
Sosyal medyada dolaşan **iki** viral YouTube prompt setinin (biri 7 prompt "$2670/ay ajans", biri 12 prompt "para basar") tekilleştirilmiş birleşimi. Kütüphaneye tek **rehber** olarak, dürüst uyarılarla toplandı (2026-07-11; dağıtmadan tek yerde — [[skills-blueprints-library]] anti-duplikasyon ilkesi). Trading prompt paketleri ayrı: [[Borsa & Trading Prompt Paketi — dürüst kullanım (referans)]] · [[Goldman Sachs AI Trading — Kant Prompt Paketi (referans)]]. Üretim tarafı: [[İçerik Fabrikası — Referans Sistem]].
