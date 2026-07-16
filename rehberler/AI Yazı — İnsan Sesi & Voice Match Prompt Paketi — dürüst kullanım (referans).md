---
tags: [rehber, prompt, yazi, copywriting, ses, voice, humanize, icerik, claude, uyari]
guncelleme: 2026-07-16
---

# ✍️ AI Yazı — İnsan Sesi & Voice Match Prompt Paketi (7 prompt) — dürüst kullanım

> [[00 HOME|🏠 Ana sayfaya dön]]
> AI metnini "yapay zeka gibi" olmaktan çıkarıp insan/senin sesine çevirmek için sosyal medyada (X) dolaşan 7 düzenleme promptu (TR). Voice match, hook, kişisel hikâye, kontra görüş, spesifiklik, AI-kelime avcısı, etkileşim sorusu. **Skill değil**, pasif referans (sen yapıştırırsın — kasıtlı).
> **Dürüst ön-not:** Bu, kütüphandeki viral paketlerin **en iyilerinden**. Saf düzenleme/yazma → Claude'un çekirdek gücü, **veri uydurma riski neredeyse yok**. Gerçek copywriting ilkeleri (soyutu somuta çevir, AI-tell'i kes, kanca yaz) içeriyor. Yine de kaynağın çerçevesi biraz **kendiyle çelişik** — aşağıda düzeltiyorum.

## ✅⚠️ Dürüst değerlendirme (önce oku)
Kaynağın çengeli: *"Claude'a 'daha yaratıcı ol' / 'benim sesimle yaz' / 'AI gibi olmasın' demeyi BIRAK."* — sonra **Prompt 1 tam da bir ses talimatı**, **Prompt 6 tam da "AI gibi olmasın"**. Yani çengel kendini çürütüyor. **Gerçek ders bu değil.**

**🎯 Doğru ders:** "Ses iste" demeyi bırakma — **belirsiz** istemeyi bırak. "Daha yaratıcı ol" işe yaramaz çünkü ölçülemez; "12 kelimeyi geçme, soru sorma, sayıyla başla" işe yarar çünkü **spesifik kısıt**. Bu 7 prompt işe yarıyorsa sebebi sesi *reddetmeleri* değil, **somut kısıt** vermeleri. İlke: muğlak sıfat değil, sayılabilir kural.

**✅ Neden güvenli:** Fiyat/istatistik/canlı veri istemiyor; senin verdiğin metni yeniden yazıyor. Trading/YouTube'daki "canlı veri yok → uydurur" riski **burada yok** — tek istisna Prompt 5 (aşağıda).

**⚠️ Gerçek tuzaklar:**
1. **Voice Match (P1) senin sesini değil, jenerik bir persona verir.** "22 yaşında arkadaşıyla konuşan biri" bir *stok* ses, senin sesin değil. Gerçekten **kendi sesin** için: 3-5 gerçek yazı örneğini yapıştır → *"bu ritmi, kelime dağarcığını, cümle uzunluğunu eşle"* de. Örnek vermezsen çıktı jenerik-samimi olur. **En büyük eksik bu.**
2. **⚠️ Spesifiklik Booster (P5) — tek fabrikasyon tuzağı.** *"'Daha çok takipçi' → '7 günde 10.000 takipçi'"* harika bir **düzenleme** ilkesi; ama o sayı **gerçek olmalı**. Claude'un daha vurucu dursun diye rakamı **uydurmasına** izin verirsen, uydurma istatistik yayımlıyorsun. **Spesifik ≠ uydurma.** Rakamı sen ver / doğrula.
3. **AI-Kelime Avcısı (P6) — kelime listesi başlangıç, asıl tell ritim.** "leverage, crucial, delve, it's important to note" gerçek AI-tell ama liste minik. Asıl ele veren **yapı:** tekdüze cümle uzunluğu, aşırı temkin/hedge, "sadece X değil Y de", derli toplu üçlemeler, "Sonuç olarak", em-dash bolluğu, gereksiz açıklama. Ayrıca körü körüne silme — bazen "crucial" doğru kelimedir. Ve **"AI dedektörü"nü kandırma peşine düşme**: o araçlar güvenilmez; hedef dedektörü atlatmak değil, **iyi yazı**.
4. **Hook / Kontra / Etkileşim (P2, P4, P7) — güçlü ama muhakeme ister.** Aşırıya kaçınca clickbait / rage-bait / imal edilmiş "hot take" olur. "Sadece iddiayı yaz, açıklama" (P4) kontra-görüşü, **kendinden emin ama yanlış** savları yayabilir. Önce öz/doğruluk, sonra kanca.

**İşaretler:** ✅ güvenli/güçlü (saf düzenleme) · ⚠️ muhakeme/fabrikasyon notu · 🎯 asıl ders.

## 🔗 Senin araçlarınla birleştir (kütüphanenin gücü)
Bu 7 prompt bir **düzenleme/ses katmanı** — üretilen taslağın *üstüne* uygulanır:
- **Taslak üretimi:** [[Yetenekler MOC|icerik-pazarlama]] (blog, newsletter, sosyal, carousel) · marketing-skills (`copywriting`, `copy-editing`, `social`, `emails`) · [[skill-kutuphanesi/araclar/yazi-uretici|yazi-uretici]].
- **Uçtan uca içerik + yayın:** [[İçerik Fabrikası — Referans Sistem]] — üret → bu promptlarla insanlaştır → çok-platform yayınla.
- **Video/Shorts script'i insanlaştırma:** [[AI YouTube Kanalı Prompt Paketi — dürüst kullanım (referans)]] (retention script) çıktısına P1/P3/P6 uygula.
- **Not:** Bu 7 prompt o kadar tekrar-kullanılabilir ki istersen `yazi-uretici` skill'ine "insanlaştır/voice-match" adımı olarak gömülebilir — Claude'un otomatik uygulaması için. (Şimdilik referans; istersen skill'e çeviririm.)

---

## 7 Prompt (TR)

### 1) Voice Match (Ses Eşleme) — ✅ / ⚠️ kendi örneğini yapıştır
> Bunu birinci tekil şahısla, sanki dün bizzat yaşamışım gibi yeniden yaz. Kısa cümleler. Her cümlede tek fikir. Bir danışmanın rapor yazması gibi değil, 22 yaşında birinin arkadaşıyla konuşması gibi konuş.
> *⚠️ Kendi sesin için ekle: "Şu 3-5 örneğim benim gerçek yazımım — ritmini, kelime dağarcığımı ve cümle uzunluğumu bunlara eşle: [örnekleri yapıştır]."*

### 2) Hook (Kanca) Üreticisi — ✅ (aşırıya kaçma → clickbait)
> Bu konu için 5 hook seçeneği yaz: [konu]. Her biri somut bir sayı, istatistik veya kişisel anla başlasın. Soru yok. "İşte nasıl…" yok. Her biri en fazla 12 kelime.

### 3) Kişisel Hikâye — ✅
> Bu fikri 3 cümlelik bir hikâyeye çevir. Bunu fark ettiğim anda ne yaptığımla başla. Gerçek hissettiren tek bir somut detay ekle — metafor değil.

### 4) Kontra Görüş — ✅ (⚠️ "sadece iddia" = doğrulanmamış hot-take riski)
> [Konu] hakkındaki yaygın tavsiyenin tam tersi ne? Bunu, birini kaydırmayı durduracak tek cesur bir cümle olarak yaz. Açıklama. Sadece iddia.
> *⚠️ Kontra olsun diye yanlış olmasın — öz/doğruluğu koru, sonra vurucu yap.*

### 5) Spesifiklik Booster — ✅ / ⚠️ rakamı UYDURMA
> Bu metindeki her muğlak ifadeyi ölçülebilir bir şeyle değiştir. "Daha çok takipçi" → "7 günde 10.000 takipçi". "Daha iyi içerik" → "50+ kez paylaşılan içerik". Soyutlama yok.
> *⚠️ Somutlaştır ama **rakamı uydurma** — gerçek/senin verinle doldur; yoksa hangi sayıya ihtiyaç olduğunu belirt. Spesifik ≠ uydurma.*

### 6) AI-Kelime Avcısı — ✅ (kelime + ⚠️ asıl tell ritim)
> Bu metinde AI tarafından yazılmış gibi duran her kelimeyi bul — leverage, crucial, delve, "şunu belirtmek önemli", "sadece … değil …", "sonuç olarak". Her birini gerçek bir insanın nasıl söyleyeceğiyle değiştir.
> *⚠️ Kelimeyi kör silme (bazen doğru kelimedir). Asıl AI-tell **yapı**: tekdüze cümle uzunluğu, hedge, derli toplu üçlemeler, aşırı açıklama. "AI dedektörünü" kandırma peşine düşme — hedef iyi yazı.*

### 7) Etkileşim Tetikleyici — ✅
> Bu gönderiyi, okuyucunun kendi deneyimini paylaşmak isteyeceği bir soruyla bitir — evet/hayır'lık değil. Soru, okuyucuya anlaşıldığını hissettirsin.

---

## Bağlam
Sosyal medyada (X) dolaşan viral "7 prompt ile AI yazısını insanlaştır / kendi sesinle yaz" paketi (orijinali EN). Kütüphaneye **rehber** olarak, dürüst uyarılarla eklendi (2026-07-16; [[skills-blueprints-library]] anti-duplikasyon — kütüphanede "ses/insanlaştırma düzenleme katmanı" boşluğunu dolduruyor; mevcut içerik hep *üretim*, bu *düzenleme*). Diğer viral X prompt paketleri: [[Life OS — Kişisel Verimlilik Prompt Paketi — dürüst kullanım (referans)]] · [[AI YouTube Kanalı Prompt Paketi — dürüst kullanım (referans)]] · [[Borsa & Trading Prompt Paketi — dürüst kullanım (referans)]] · [[Goldman Sachs AI Trading — Kant Prompt Paketi (referans)]]. Bu set (Life OS gibi) **veri uydurmaz** (saf düzenleme) — tek istisna P5'te "somut sayı" tuzağı. Üretim tarafı: [[İçerik Fabrikası — Referans Sistem]], [[Yetenekler MOC|icerik-pazarlama]], marketing-skills.
