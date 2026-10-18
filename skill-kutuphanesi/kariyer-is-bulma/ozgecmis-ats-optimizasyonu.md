---
name: ozgecmis-ats-optimizasyonu
description: Özgeçmişi (CV) hedef ilana göre 3 adımda güçlendirir — ATS okunabilirlik teşhisi, gerçek ilanlardan anahtar kelime boşluğu, maddeleri Google XYZ formülüyle yeniden yazma. Metrik ve beceri UYDURMAZ.
---

# Özgeçmiş ATS Optimizasyonu (teşhis → anahtar kelime → XYZ)

## Ne zaman
Başvurular sessizlikle dönüyorsa ya da yeni bir rol için CV hazırlanıyorsa. "Şunu daha iyi yap" demek yerine üç ayrı ve ölçülebilir iş yapılır: (1) CV'nin makine tarafından **okunabildiğinden** emin ol, (2) hedef ilanların dilini **gerçek ilanlardan** çıkarıp eksikleri gör, (3) görev listesini **ölçülebilir başarılara** çevir. Mülakat hazırlığı ayrı yetenekte: `kariyer-is-bulma/mulakat-simulasyonu`.

## ⚠️ Dürüst çerçeve (viral "4 skill" videosu vs gerçek)

| Videonun iddiası | Gerçek |
|---|---|
| "CV'ni tam bir ATS gibi tarar" | Claude gerçek bir ATS çalıştıramaz. Workday, Greenhouse, Lever, Taleo, Kariyer.net'in her biri farklı ayrıştırır. Yapılabilen: bilinen ayrıştırma tuzaklarını (sütun, tablo, metin kutusu, başlık/altbilgi, ikon, Türkçe karakter bozulması) **tahmin etmek** ve metni düz metne çevirip **bakmak**. En gerçek sinyal: başvuru formunun CV'den otomatik doldurduğu alanlar. Yanlış dolduruyorsa ayrıştırma bozuk. |
| "ATS seni insan görmeden eler" | Kısmen mit. ATS'lerin çoğu CV'yi puanlayıp otomatik reddetmez; işe alımcı **anahtar kelimeyle arar ve filtreler**. Otomatik eleme çoğunlukla **eleme sorularından** gelir (vize, deneyim yılı, lokasyon). Yani asıl hedef: aranınca **bulunmak** ve okununca **ikna etmek**. |
| "Binlerce ilanla karşılaştırır" | Claude'un canlı bir ilan veritabanı yok; "sektörün istediği" diye bir liste verirse **uydurur**. Doğrusu: hedef rol için **3–10 gerçek ilanı** sen yapıştırırsın, terimler bunlardan sayılır. |
| "Google XYZ formülü" | Gerçek: Google'ın eski İK başkanı Laszlo Bock'un formülü — "Y ile ölçülen X'i, Z yaparak başardım". Ama formül **sayı uydurmaya** davet eder; uydurma metrik mülakatta ilk soruda çöker. |
| "İşe alımcılar seni kapmak için yarışacak" | Hype. Bu adımlar seni bulunur ve okunur kılar; işi alıp almamak deneyimine, ilana uygunluğuna ve mülakata bağlı. |

## Altın kural
**CV'ye yalnız gerçek olan girer.** Sahip olmadığın beceri ilanda geçiyor diye eklenmez, öğrenme listesine yazılır. Metrik yoksa kullanıcıya sorulur; tahminse "~" ile ve mülakatta savunulabilecek şekilde yazılır.

## Süreç

**0 — Girdi topla.** CV'nin metni ve mümkünse **orijinal dosyası** (PDF/DOCX). Hedef rol ve pazar (Türkiye mi, yurt dışı mı). **3–10 gerçek ilan metni.** Her rol için kullanıcının bildiği sayılar: kaç kişi, ne sıklıkta, ne kadar zaman/para, önce/sonra.

**1 — Teşhis: ATS okunabilirlik.**
- **Metin çıkarma testi:** PDF'i düz metne çevir (Claude Code'da `pdftotext`) ve bak. Sıra karışıyor mu (iki sütun)? Bölümler kayboluyor mu? **Türkçe karakterler bozuluyor mu** (ş, ğ, ı → ?, kutu)? Bozuluyorsa font gömme/dışa aktarma sorunu var.
- **Yapı kontrolü:** tek sütun · standart başlıklar (Deneyim/Experience, Eğitim, Beceriler) · bilgi tablo, metin kutusu, başlık/altbilgi içinde değil · yetenek çubukları/ikonlar yok · iletişim bilgisi gövdede · tutarlı tarih biçimi (AA/YYYY) · ilanın istediği dosya türü.
- **Çıktı:** bulgu tablosu → bölüm · sorun · neden önemli · düzeltme · öncelik (kritik/orta/düşük).

**2 — Anahtar kelime boşluğu (gerçek ilanlardan).**
- İlanlardan beceri, araç, sertifika, yöntem ve unvan terimlerini çıkar; **kaç ilanda geçtiğini say**; "zorunlu" ile "tercih sebebi"ni ayır.
- Her terim için CV durumu: **var** · **eşanlamlısı var** (ilanın kelimesine çevir) · **yok ama deneyimin var** (ekle, kanıtıyla) · **yok** (öğrenme listesi, CV'ye girmez).
- Kısaltma + açık hâl birlikte ("SEO (Search Engine Optimization)"). Terimi beceriler listesine yığma, deneyim maddelerinin içine **kanıtıyla** yerleştir.
- Unvanını değiştirme. Resmî unvan ilandakinden farklıysa yanına karşılığını parantezle verebilirsin, yalan unvan yazamazsın.

**3 — XYZ ile yeniden yazım.**
- Kalıp: **X** (ne başardın) + **Y** (nasıl ölçüldü) + **Z** (nasıl yaptın). Türkçe doğal hâli: "Z yaparak, Y ile ölçülen X'i sağladım" → "Sipariş sürecini otomatikleştirerek (Z) aylık 40 saatlik manuel işi (Y) ortadan kaldırdım (X)."
- Sayı yoksa önce **sor**: kaç müşteri/kullanıcı, ne kadar sürede, yüzde kaç, hangi bütçe? Hâlâ yoksa ölçeği ya da kapsamı yaz ("12 kişilik ekipte", "3 ülkede"), sayı icat etme.
- Rol başına 3–6 madde (en yeni rol en fazla), her biri güçlü fiil + sonuç. Görev ("…'dan sorumluydum") değil etki.
- Her maddenin altına not: "Bu sayıyı mülakatta nasıl açıklarsın?" Açıklayamıyorsan madde değişir.

**4 — Son kontrol + ilana uyarlama.** Uzunluk (0–10 yıl: 1 sayfa · daha fazla: 2), tutarlılık, yazım, dosya adı (`Ad-Soyad-Rol-CV.pdf`). Her ilan için **ana CV'den uyarlanmış** bir sürüm: özet ve beceri sırası ilana göre değişir, gerçekler değişmez.

## Pazar notu (Türkiye ↔ yurt dışı)
- ABD, UK, Kanada başvurularında **fotoğraf, doğum tarihi, medeni durum, TC kimlik no konmaz** (ayrımcılık mevzuatı nedeniyle işverenler istemez). Türkiye'de ve bazı Avrupa ülkelerinde fotoğraf yaygın, hedef pazara göre karar ver.
- İngilizce başvuruda CV'yi çevirmek yetmez: ilanların İngilizce terimleriyle 2. adımı yeniden yap.
- Kişisel veri: CV'yi paylaşırken adres, kimlik no gibi gereksiz bilgileri çıkar.

## Çıktı standardı
- Teşhis tablosu (öncelikli) + metin çıkarma testinin sonucu
- Anahtar kelime tablosu: terim · kaç ilanda · zorunlu/tercih · CV durumu · aksiyon + ayrı **öğrenme listesi**
- Yeniden yazılmış deneyim maddeleri (önce/sonra) + her biri için "mülakatta savunma" notu
- Uyarlanmış CV taslağı + "göndermeden önce kontrol et" listesi

## Yaygın hatalar
- Sahip olunmayan becerileri anahtar kelime diye eklemek (ilk teknik soruda çöker).
- Sayı uydurmak; "%300 artış" gibi savunulamayan metrikler.
- İki sütunlu, ikonlu "şık" şablon: insan için güzel, ayrıştırıcı için kâbus.
- Anahtar kelimeleri beyaz yazıyla gizlemek (eski hile; işe alımcı görünce aday elenir).
- Tek CV'yi her ilana göndermek.
- Claude'a "sektördeki ilanlara göre" dedirtmek (gerçek ilan yoksa liste uydurmadır).

## 🔗 Bununla birleştir
- Önce **hangi ilana** başvuracağını seç: `kariyer-is-bulma/is-basvuru-analizi` (ilanları 100'lük puanla).
- Aynı XYZ maddelerini LinkedIn'e taşı: `kariyer-is-bulma/linkedin-profil-optimizasyon` (adım 4–5).
- Sonra mülakat: `kariyer-is-bulma/mulakat-simulasyonu`. Mülakatta CV'deki her madde sorulacak.
- Metin robotik kokuyorsa: [[AI Yazı — İnsan Sesi & Voice Match Prompt Paketi — dürüst kullanım (referans)]].
- İngilizce dış kaynak: `awesome-claude-skills-master/tailored-resume-generator`.

> Çalıştırılabilir hâli: `/kariyer-is-bulma:ozgecmis-ats-optimizasyonu`
