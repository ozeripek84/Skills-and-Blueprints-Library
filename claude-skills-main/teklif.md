# Musteri Teklif Dokumani Olusturucu

Bu komut, verilen bilgilere gore profesyonel bir musteri teklif dokumani olusturur.
Kullanici su bilgileri saglar: musteri adi, proje kapsamı, fiyat.
Kullanim: /teklif [musteri adi, proje kapsami, fiyat]

---

Asagidaki bilgilere dayanarak profesyonel ve ikna edici bir musteri teklif dokumani olustur:

**Kullanici girdisi:** $ARGUMENTS

## Talimatlar

Asagidaki yapida eksiksiz bir teklif dokumani olustur. Dokuman Markdown formatinda olsun ve direkt kullanilabilir/gonderilmeye hazir olmali.

### Dokuman Yapisi

---

# [PROJE ADI] — Proje Teklifi

**Hazirlayan:** [Gonderen sirket/kisi adi — kullanici girdisinden cikar veya placeholder birak]
**Hazirlanan:** [Musteri adi]
**Tarih:** [Bugunku tarih]
**Gecerlilik:** Bu teklif, tarihinden itibaren 15 gun gecerlidir.
**Teklif No:** [YYYY-MM-XXX formatinda]

---

### 1. Yonetici Ozeti

3-4 paragraflik bir ozet yaz:
- Musterinin mevcut durumu ve ihtiyaci (problemi tani)
- Onerilen cozumun ozeti
- Beklenen sonuclar ve faydalar
- Neden bu is icin dogru partner oldugunuz

Bu bolum, teklifi okuyan ust yonetimin sadece burasini okuyup karar verebilecegi kadar net olmali.

### 2. Mevcut Durum Analizi

- Musterinin mevcut durumunu ve karsilastigi zorlulklari tanimla
- Proje kapsamina dayanarak 3-5 adet temel problem/ihtiyac maddesi belirle
- Her problem icin is etkisini acikla (zaman kaybi, gelir kaybi, verimlilik dususu vb.)

### 3. Onerilen Cozum

- Cozumun genel yaklasimini acikla
- Ana bilesenleri/modulleri listele
- Her bilesen icin kisa aciklama (ne yapacak, neden onemli)
- Kullanilacak teknolojiler/araclar (uygunsa)
- Cozumun musteriye saglayacagi somut faydalar (madde madde)

### 4. Proje Kapsami (Scope of Work)

Net bir tablo formatinda:

| No | Is Kalemi | Aciklama | Dahil | Haric |
|----|-----------|----------|-------|-------|
| 1 | | | ✓ | |
| 2 | | | ✓ | |
| ... | | | | |

Proje kapsamina gore en az 6-8 is kalemi tanimla.

**Kapsam Disi (Acikca Belirtilmeli):**
- Bu teklifin icerisine dahil OLMAYAN isleri listele
- Bunlarin neden kapsam disinda oldugunu kisa acikla

### 5. Proje Takvimi

Gantt chart benzeri bir tablo olustur:

| Faz | Is Kalemi | Hafta 1 | Hafta 2 | Hafta 3 | Hafta 4 | ... |
|-----|-----------|---------|---------|---------|---------|-----|
| 1 - Kesfif & Planlama | | ██ | | | | |
| 2 - Tasarim | | | ██ | ██ | | |
| 3 - Gelistirme | | | | ██ | ██ | |
| ... | | | | | | |

Her faz icin:
- Faz adi ve suresi
- Ana teslimatlar
- Musteri tarafindaki gerekli aksiyonlar (onay, icerik saglama vb.)
- Kilometre taslari (milestone)

Toplam proje suresini proje kapsamina gore gercekci belirle.

### 6. Teslimatlar

Numaralandirilmis liste halinde tum teslimatlar:

| No | Teslimat | Format | Teslim Zamani |
|----|----------|--------|---------------|
| 1 | | | Faz 1 sonu |
| 2 | | | Faz 2 sonu |
| ... | | | |

### 7. Fiyatlandirma

Acik ve detayli fiyat tablosu:

| No | Kalem | Birim | Miktar | Birim Fiyat | Toplam |
|----|-------|-------|--------|-------------|--------|
| 1 | | | | | |
| 2 | | | | | |
| | | | | **Ara Toplam** | |
| | | | | **KDV (%20)** | |
| | | | | **Genel Toplam** | |

Kullanicinin verdigi fiyati parcalara ayirarak mantikli bir dagilim yap. KDV'yi ayri goster.

**Odeme Plani:**
- Sozlesme imzasinda: %X
- [Milestone 1] tesliminde: %X
- Proje tesliminde: %X

Odeme planini proje buyuklugune gore mantikli ayarla (genelde 3 taksit: %40-%30-%30 veya %50-%50).

### 8. Calisma Yontemi

- Iletisim: Hangi kanallar uzerinden, ne siklikla (haftalik toplanti, Slack/WhatsApp grubu, vb.)
- Raporlama: Ilerleme raporlari ne siklikla paylasılacak
- Geri bildirim sureci: Revizyon haklari, geri donus suresi
- Proje yonetim araci: (Notion, Trello, Asana vb. onerisi)

### 9. Garanti ve Destek

- Proje teslimi sonrasi garanti suresi ve kapsami
- Hata/bug duzeltme politikasi
- Ek destek/bakim paketleri (opsiyonel, ayri fiyatlandirma ile)

### 10. Kosullar ve Sartlar

Standart maddeler:
- Fikri mulkiyet haklari (proje teslimi ve odeme tamamlaninca musteriye gecer)
- Gizlilik (iki tarafli NDA onerin)
- Iptal kosullari (hangi durumda ne kadar iade yapilir)
- Mücbir sebepler
- Proje kapsaminda degisiklik sureci (Change Request proseduru)
- Gecikme kosullari (her iki taraf icin)

### 11. Neden Biz

- 3-4 adet farklilasilma noktasi
- Varsa referanslar veya benzer projeler (placeholder olarak birak)
- Ekip hakkinda kisa bilgi

### 12. Sonraki Adimlar

1. Bu teklifi incelemeniz (tahmini sure: X gun)
2. Sorulariniz icin gorusme ayarlamamiz
3. Teklif onayi
4. Sozlesme imzalanmasi
5. Proje baslangici

**Iletisim:**
- Isim: [placeholder]
- E-posta: [placeholder]
- Telefon: [placeholder]

---

**Imza Alani:**

| Gonderen | Musteri |
|----------|---------|
| Isim: _________________ | Isim: _________________ |
| Unvan: _________________ | Unvan: _________________ |
| Tarih: _________________ | Tarih: _________________ |
| Imza: _________________ | Imza: _________________ |

---

### Icerik Kurallari

- Tum icerik **Turkce** olmali
- Profesyonel ama sicak bir dil kullan — kurumsal jargondan kacin
- Fiyatlar **Turk Lirasi (₺)** cinsinden olmali (kullanici baska para birimi belirtmediyse)
- Tarihleri gun.ay.yil formatinda yaz
- Kapsami abartma — gercekci ol, fazla soz verme
- Musterinin ismini ve proje detaylarini dokmana dogru yerles
- Placeholder birakilan yerleri acikca `[PLACEHOLDER]` olarak isaretle

Ciktiyi duzgun formatlanmis Markdown olarak ver. Kullanici bunu kopyalayip direkt kullanabilmeli, veya PDF'e donusturebilmeli.
