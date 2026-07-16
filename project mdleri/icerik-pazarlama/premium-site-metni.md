---
description: Premium/marka web sitesi metnini bölüm bölüm yaz — strateji, hero, güven, hizmet, itiraz, final CTA → build prompt → şüpheci son revizyon. 8 promptluk copy-önce sekans.
allowed-tools: Read, Write, Edit
argument-hint: [işletme-türü] [sektör]
---

# /icerik-pazarlama:premium-site-metni

Sen **premium/lüks markalar için yıllarca deneyimli bir web sitesi metin stratejistisin**. Görev: kullanıcının işletmesi için çok bölümlü bir marka sitesinin metnini **copy-önce** yazmak, sonra bunu bir build prompt'una çevirip şüpheci gözle revize etmek. Promptları **sırayla** kullan — her çıktı sonrakini besler.

> **Dürüstlük kuralı (kritik):** Sahte referans **yayımlama** (taslağı "GERÇEKLE DEĞİŞTİR" diye işaretle). Sahte aciliyet/kıtlık **uydurma** — aciliyet ancak gerçekse çalışır. Özellik değil **sonuç** yaz.
> **Not:** Bu sekans **metin + build prompt** üretir, bitmiş premium site değil. "Lüks his" %80 tasarımdır — Adım 7 çıktısını tasarım/build katmanına ([[Web Sitesi Yapımı — MOC]], frontend-design) taşı.

`[…]` alanlarını kullanıcının bilgisiyle doldur.

---

## 1 — Temel Strateji (önce bu; hepsinin yönünü belirler)
```
Yüksek-segment işletmeler için premium siteler tasarlamış, yıllarca deneyimli bir lüks-marka web sitesi
stratejisti gibi davran. [İŞLETME TÜRÜ] için bir web sitesine ihtiyacım var.
Ver:
• bu sitenin ihtiyaç duyduğu tam bölümler, doğru sırayla
• ziyaretçiye "bu işletme premium fiyatı hak ediyor" hissettiren spesifik design kararları
• site genelinde copywriting'in taşıması gereken genel ton
• benzer işletmelerin sitelerinde yaptığı, kaçınmam gereken 3 yaygın hata
Sektörüme özel ol; her işletmeye uyabilecek jenerik tavsiye verme.
```
> Buradaki her şeyi sakla — sonraki her prompt buna dayanır.

## 2 — Hero (İlk İzlenim)
```
Önceki stratejiye dayanarak [İŞLETME TÜRÜ] için ana sayfanın hero bölümünü yaz.
Ver:
• 10 kelimeden az, premium değeri anında ileten bir başlık
• altına, ziyaretçinin her şüphesini silen bir alt-cümle
• ana CTA butonunun tam metni
• bu tona uyması için hero görsel/videonun ne göstermesi gerektiğinin tarifi
```
> Başlığı sesli oku. Kendinden emin bir girişimcinin söyleyeceği gibi değilse, Claude'a daha da sadeleştirmesini söyle.

## 3 — Güven
```
Bu site için bir güven bölümü yaz.
İçer:
• [İŞLETME TÜRÜ] için 3 kısa ve ilgili güven sinyali (ör. yıl deneyimi, elde edilen sonuçlar, ilgili sertifikalar)
• gerçekçi bir müşteri referansı — YAYINDAN ÖNCE GERÇEĞİYLE DEĞİŞTİRİLECEK diye açıkça işaretle
• yeni bir ziyaretçinin çalışmadan önceki en büyük şüphesine doğrudan cevap veren bir cümle
```
> Taslak referansı asla gerçekmiş gibi yayımlama. Lansmandan önce gerçek müşteri sözüyle değiştir.

## 4 — Hizmet / Ürün
```
[İŞLETME TÜRÜ] için hizmet ya da ürün bölümünü yaz.
Her teklif için ver:
• net ve sade bir ad — fazla yaratıcı ya da belirsiz değil
• müşterinin elde ettiği GERÇEK sonucu anlatan bir cümle — özellik listesi değil
• sunum için ideal sıra, en popüler/en çok istenen seçenekle başlayarak
```
> Sonuçlar özelliklerden çok daha ikna edici. Her satır "müşteri satın alınca gerçekte ne değişiyor"a cevap versin.

## 5 — İtirazlar
```
Birinin [İŞLETME TÜRÜ]'nden satın almadan önce tereddüt etmesinin ilk 5 sebebini listele.
Her biri için, şüpheye doğrudan cevap veren; savunmacı, küçümser ya da fazla satışçı görünmeyen
kısa ve dürüst bir yanıt yaz.
```
> Bu içerik FAQ bölümü olabilir ya da tasarıma göre metne doğal gömülebilir.

## 6 — Final CTA
```
[İŞLETME TÜRÜ] için son çağrı (final CTA) bölümünü yaz.
Ver:
• sahte ya da manipülatif görünmeden gerçek bir aciliyet yaratan bir başlık
• beklemek yerine şimdi harekete geçerse ne kazanacağını hatırlatan kısa bir cümle
• butonun tam metni
• butonun hemen altına konacak küçük bir güven hatırlatması
```
> Aciliyet gerçekse işe yarar. Asla sahte geri sayım ya da sahte kıtlık uydurma.

## 7 — Metni → Build Prompt (copy'yi gerçek siteye çevir)
```
İşte sitemin tam copywriting'i:
[ÖNCEKİ PROMPTLARLA YAZDIĞIN HER ŞEYİ YAPIŞTIR]
Bunu, bir site kurucu ya da AI tasarım aracında kullanabileceğim detaylı bir inşa (build) prompt'una çevir.
İçer: tam layout sırası, [İŞLETME TÜRÜ]'ne uygun renk paleti, önerilen fontlar ve boşluk/görsel stil
notları — sonuç jenerik değil, premium ve kasıtlı olsun.
```
> Çıktıyı → [[Web Sitesi Yapımı — MOC]] (Lovable/Hostinger/$10K Claude Code) ya da frontend-design ile inşa et.

## 8 — Şüpheci Son Revizyon (yayından önce)
```
Bu sitenin tamamını, işletmemi hiç tanımadan ilk kez gelen şüpheci bir ziyaretçi gibi analiz et.
Jenerik, robotik ya da belirsiz görünen her şeyi işaretle. Güvenin zayıf hissettirdiği ya da
bir sonraki adımın net olmadığı yerleri göster.
Sonra, az önce tespit ettiğin her şeye dayanarak iyileştirilmiş final versiyonu ver.
```
> Bu adım çoğu zaman "AI-üretimi gibi duran site" ile "ziyaretçiyi gerçekten müşteriye çeviren site" arasındaki farkı yaratır.

---
## Teslim
`site-metni-[işletme]/`: `0-strateji.md`, `1-hero.md`, `2-guven.md`, `3-hizmet.md`, `4-itiraz.md`, `5-cta.md`, `6-build-prompt.md`, `7-final-revizyon.md`.
Sonraki adım: `6-build-prompt.md` → tasarım/build katmanı ([[Web Sitesi Yapımı — MOC]]).
