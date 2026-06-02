# SaaS Uygulama Iskeleti Olusturucu

Bu komut, verilen bilgilere gore calisan bir SaaS uygulama iskeleti olusturur.
Kullanici su bilgileri saglar: uygulama adi, cozdugu problem, hedef kullanicilar.
Kullanim: /saas-iskelet [uygulama adi, cozdugu problem, hedef kullanicilar]

---

Asagidaki bilgilere dayanarak tam calisan bir SaaS uygulama iskeleti olustur:

**Kullanici girdisi:** $ARGUMENTS

## Talimatlar

Tek bir HTML dosyasi olustur. Icinde tum CSS ve JavaScript inline olsun. Disaridan hicbir framework kullanma (sadece Google Fonts ve istegin olursa bir ikon kutuphanesi CDN'i kullanabilirsin, ornegin Lucide Icons).

### Uygulama Yapisi

Asagidaki ekranlarin HEPSINI tek sayfa icinde, JavaScript ile tab/route degisimi yaparak olustur:

#### 1. Giris Ekrani (Auth UI)
- Giris formu: e-posta + sifre + "Giris Yap" butonu
- Kayit formu: isim + e-posta + sifre + "Kayit Ol" butonu
- Giris/kayit arasi gecis linki
- "Google ile Giris Yap" butonu (sadece UI, islevsel olmasi gerekmiyor)
- Form submit edilince basit bir client-side validasyon yap, sonra dashboard'a gecis yap
- Gercek auth sistemi GEREKMIYOR — sadece UI mockup ve localStorage'da basit bir flag tut

#### 2. Dashboard Layout
- **Sol sidebar (240px):** Uygulama logosu/adi, navigasyon menüsu (ikon + metin), alt kisimda kullanici avatari + isim + cikis butonu
- **Ust bar:** Sayfa basligi, arama cubuğu, bildirim ikonu (badge ile), kullanici profil dropdown
- **Ana icerik alani:** Secilen menuye gore degisen icerik

#### 3. Dashboard Ana Sayfa
- 4 adet istatistik karti (rakam + degisim yüzdesi + kucuk grafik placeholder)
- Bir grafik alani (CSS ile basit bar chart veya placeholder)
- Son aktiviteler listesi (5-6 satir, tarih + islem + durum badge'i)

#### 4. Liste Sayfasi
Uygulamanin ana varligi icin (ornegin musteriler, projeler, siparisler — uygulamaya gore sec):
- Ust kisimda arama + filtre butonlari + "Yeni Ekle" butonu
- Tablo gorunumu: en az 5 sutun, 8-10 satir ornek veri
- Her satir sonunda islem butonlari (duzenle, sil)
- Sayfalama kontrolleri
- "Yeni Ekle" butonuna tiklaninca modal form acilsin

#### 5. Detay/Duzenle Sayfasi
- Secilen ogeyenin detay gorunumu
- Duzenlenebilir form alanlari
- Kaydet ve Iptal butonlari
- Iliskili veri bolumu (ornegin bir musterinin siparisleri)

#### 6. Ayarlar Sayfasi
- Profil bilgileri formu
- Bildirim tercihleri (toggle switch'ler)
- Plan/abonelik bilgisi
- Tehlikeli bolge: Hesabi sil butonu (kirmizi, onay dialog'u ile)

### Ornek Veri

- Uygulamanin amacina uygun **gercekci Turkce ornek veriler** olustur
- Isimler, e-postalar, tarihler, tutarlar hep Turkce ve mantikli olsun
- En az 8-10 satir tablo verisi, 5-6 aktivite kaydi olustur
- Verileri JavaScript'te bir array/object olarak tut, DOM'u dinamik olustur

### Tasarim Kurallari

- **Koyu tema:** Sidebar `#0a0a0a`, ana icerik arka plan `#111`, kartlar `#1a1a1a`
- **Vurgu rengi:** Uygulamaya uygun bir renk sec, CSS custom property ile tanimla
- **Font:** "Inter" veya "DM Sans" (Google Fonts)
- **Border-radius:** Kartlar 12px, butonlar 8px, input'lar 8px
- **Sidebar:** Fixed pozisyon, tam yukseklik, aktif menu item vurgulu
- **Responsive:** 1024px alti icin sidebar gizlensin, hamburger menu gosterilsin
- **Transition:** Tum hover ve state degisimlerinde 200ms transition
- **Tablolar:** Hover'da satir arka plani degissin, zebra striping opsiyonel
- **Modal:** Overlay + ortalanmis beyaz kutu, ESC ile kapansin
- **Toast/Snackbar:** Islemlerden sonra (kaydet, sil) basarili mesaji gostersin

### Islevsellik (JavaScript)

- Sidebar navigasyonunda sayfa gecisleri (SPA tarzinda, gercek routing gerekmiyor)
- Tablo siralama (basliga tikla)
- Arama/filtreleme (client-side)
- Modal ac/kapa
- Form validasyon
- localStorage'da basit state tutma (giris durumu, tema tercihi)
- Toast bildirim sistemi
- Toggle switch'ler calismali
- Silme isleminde onay dialog'u

### Teknik Gereksinimler

- Tek HTML dosyasi, tum CSS ve JS inline
- Semantik HTML5
- CSS custom properties ile tema degiskenleri
- ES6+ JavaScript (const/let, arrow functions, template literals)
- `meta viewport` ve `charset` tanimlari
- Console'da hata olmamali

Dosyayi olustur ve kullaniciya nereye kaydedildigini, nasil calistiracagini (tarayicida acmasi yeterli) bildir.
