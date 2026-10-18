---
name: mulakat-simulasyonu
description: Claude'u hedef rolün işe alım yöneticisine çevirip gerçekçi mülakat provası yapar — ilan ve CV'den türetilmiş sorular, takip soruları, açık rubrikle puan, kullanıcının kendi hikâyesinden güçlü cevap, STAR hikâye bankası.
---

# Mülakat Simülasyonu (işe alım yöneticisi provası)

## Ne zaman
Bir mülakata davet geldiğinde ya da başvurulara başlamadan önce. Claude belirli bir rol ve şirket için işe alım yöneticisini oynar: soruları **tek tek** sorar, cevabı bekler, gerçek mülakatlar gibi **takip sorusuyla derinleşir**, her cevabı açık bir rubrikle puanlar ve senin kendi deneyiminden daha güçlü bir versiyon önerir.

## ⚠️ Dürüst çerçeve (viral video vs gerçek)

| Videonun iddiası | Gerçek |
|---|---|
| "Gerçek işe alım yöneticisine dönüşür" | Rol yapar, şirketi tanımaz. Şirkete özgü süreç ve sorular için gerçek kaynak gerekir: ilan metni, şirketin sitesi, kullanıcının bulduğu mülakat deneyimleri (Glassdoor vb.). Bunlar verilmezse sorular **genel** olur. |
| "Alanındaki en zor soruları sorar" | Genel zor soruları bilir (davranışsal, vaka, "neden ayrılıyorsun"). Asıl zor sorular **senin CV'ndeki zayıf noktalardan** gelir (boşluk, kısa süreli iş, ilanla uyumsuzluk). Bu yetenek soruları oradan türetir. |
| "Her cevabı 10 üzerinden puanlar" | Puanlar, ama rubrik yoksa puan **öznel ve tutarsız** olur (aynı cevaba başka turda başka puan). Bu yüzden her puan 4 eksene bağlanır ve gerekçesi yazılır. Puanı kovalama, gerekçeyi oku. |
| "Hayatında yapacağın en iyi hazırlık, tamamen bedava" | Güçlü bir prova aracı, gerçek insanla yapılan provanın yerini tutmaz (beden dili, ses, stres). Ücretsiz değil, Claude aboneliğinle çalışır. |

## Altın kural
**Önerilen "güçlü cevap" senin gerçek deneyiminden kurulur.** Claude hikâye uydurmaz; eksik detayı sana sorar. Ezberlenmiş, başkasının hikâyesi gibi duran cevap mülakatta ilk takip sorusunda çöker.

## Süreç

**0 — Kurulum.** İlan metni · CV · şirket hakkında bildiklerin (site, ürün, haberler, varsa mülakat deneyimleri) · mülakat türü (İK ön görüşme · işe alım yöneticisi · teknik · vaka · davranışsal · panel) · dil (Türkçe/İngilizce) · süre (ör. 30 dk ≈ 8–10 soru).

**1 — Soru planı (kullanıcıya göstermeden hazırla).** Üç kaynaktan: (a) ilandaki gereksinimlerin her biri için bir kanıt sorusu, (b) CV'deki riskler (boşluk, kısa süreli iş, kariyer değişimi, eksik beceri), (c) standart açılış/kapanış ("kendinden bahset", "neden biz", "maaş beklentin", "sorun var mı?").

**2 — Rol yap.** Tek soru sor, cevabı bekle. Cevap genelse **takip sorusu** sor ("Tam olarak senin rolün neydi?", "Sonuç nasıl ölçüldü?", "Tekrar yapsan neyi değiştirirdin?"). Soru başına en fazla 2 takip. Puanı **tur bitene kadar söyleme** (gerçek mülakatta geri bildirim yok); kullanıcı isterse "anlık mod"a geç.

**3 — Puanlama rubriği (her cevap, 10 üzerinden).**
- **Soruya cevap** (0–2): sorulan şeye mi cevap verdi?
- **Somutluk** (0–3): belirli bir durum, senin rolün, STAR yapısı (Durum, Görev, Eylem, Sonuç)
- **Sonuç/ölçü** (0–3): ne değişti, nasıl bilindi
- **İlanla bağ** (0–2): bu rolün ihtiyacına bağlandı mı
Her puanın yanına tek cümle gerekçe + "daha güçlü versiyon" (yalnız kullanıcının verdiği gerçeklerle; eksik detay varsa soru olarak).

**4 — Tur sonu raporu.**
- Puan tablosu + en zayıf 3 alan ve her biri için tek somut çalışma.
- **Hikâye bankası:** 6–8 STAR hikâyesi (liderlik, çatışma, başarısızlık, baskı altında teslim, inisiyatif, öğrenme). Her biri birden çok soruya cevap olur.
- **Senin soracağın sorular:** şirkete sorulacak 5 iyi soru (rol, ekip, başarı ölçütü, ilk 90 gün).
- **Maaş sorusu hazırlığı:** bir aralık, bu aralığın gerekçesi; rakam verilmeden önce rolün kapsamını netleştirme cümlesi. (Piyasa verisini Claude uydurmasın; kullanıcı gerçek kaynaktan getirsin.)

**5 — Tekrar.** Zayıf alanlarda kısa ikinci tur. Sesli prova için Claude uygulamasının sesli modu (varsa) ya da cevapları sesli söyleyip yazıya dökerek pratik yap. Yazılı cevap ile konuşma farklıdır.

## Çıktı standardı
- Soru soru transkript: soru · cevap özeti · puan (4 eksen) · gerekçe · güçlü versiyon
- Tur özeti: ortalama puan, en zayıf 3 alan, sonraki çalışma
- Hikâye bankası (STAR) + şirkete sorulacak sorular + maaş hazırlığı

## Yaygın hatalar
- Bütün soruları tek mesajda sormak (prova değil anket olur).
- Cevapları ezberlemek; hikâyeyi değil cümleyi ezberlemek.
- Hep "biz" demek; senin rolün görünmez.
- Eski işveren hakkında olumsuz konuşmak.
- Puanı yükseltmek için Claude'un önerdiği ama yaşamadığın detayları benimsemek.
- Şirket bilgisi vermeden "şirkete özel" prova beklemek.

## 🔗 Bununla birleştir
- Önce CV'yi hazırla: `kariyer-is-bulma/ozgecmis-ats-optimizasyonu`. CV'deki her madde mülakatta sorulur, XYZ maddeleri hikâye bankasının hammaddesi.
- Hangi ilan: `kariyer-is-bulma/is-basvuru-analizi`.
- İşveren tarafının bakışı (İngilizce dış kaynak): `claude-skills-main/engineering/interview-system-designer`. İşe alanların yetkinlik matrisi ve puanlama rubriği nasıl kurduğunu görmek, soru planını gerçekçi yapar.

> Çalıştırılabilir hâli: `/kariyer-is-bulma:mulakat-simulasyonu`
