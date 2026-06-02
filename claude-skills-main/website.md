# Landing Page Olusturucu

Bu komut, verilen bilgilere gore profesyonel bir landing page olusturur.
Kullanici su bilgileri saglar: isletme adi, ne sattiklari, hedef kitle.
Kullanim: /website [isletme adi, ne satiyorlar, hedef kitle]

---

Asagidaki bilgilere dayanarak eksiksiz, uretimde kullanilabilir bir landing page olustur:

**Kullanici girdisi:** $ARGUMENTS

## Talimatlar

Tek bir HTML dosyasi olustur. Icinde tum CSS ve JavaScript inline olsun. Disaridan hicbir framework veya kutuphane kullanma (sadece Google Fonts kullanabilirsin).

### Sayfa Yapisi

Sayfada su bolumler MUTLAKA olmali:

1. **Navbar** — Sol tarafta logo/isletme adi, sag tarafta navigasyon linkleri (Ozellikler, Hakkimizda, Iletisim) ve bir CTA butonu
2. **Hero Section** — Buyuk baslik (deger onerisi), altinda 1-2 cumlelik aciklama, CTA butonu, ve sag tarafta veya altta gorsel placeholder (gradient kutu)
3. **Sosyal Kanit Seridi** — "500+ isletme tarafindan tercih ediliyor" tarzinda bir metin, altinda 4-5 adet firma logosu placeholder
4. **Ozellikler Bolumu** — 3 veya 6 adet ozellik karti, her birinde emoji ikon, baslik ve kisa aciklama
5. **Nasil Calisir** — 3 adimli gorsel akis (numara + baslik + aciklama)
6. **Musteri Yorumlari** — En az 3 adet testimonial karti (isim, unvan, yorum metni, avatar placeholder)
7. **Fiyatlandirma** — 2-3 plan karti, one cikan plan vurgulu. Her planda ozellik listesi ve CTA butonu
8. **SSS (Sikca Sorulan Sorular)** — En az 4 adet acilir-kapanir soru-cevap (JavaScript ile accordion)
9. **Son CTA Bolumu** — Buyuk baslik, ikna edici metin, ana CTA butonu
10. **Footer** — Isletme adi, navigasyon linkleri, sosyal medya ikonlari (SVG), telif hakki metni

### Tasarim Kurallari

- **Koyu tema:** Arka plan `#080808`, metin `#f5f5f5`, ikincil metin `#a0a0a0`
- **Vurgu rengi:** Isletmeye uygun bir vurgu rengi sec ve CSS custom property olarak tanimla (`--accent`)
- **Font:** Google Fonts'tan "Inter" veya "DM Sans" kullan
- **Responsive:** Mobile-first tasarim. 768px ve 1024px breakpoint'leri kullan
- **Animasyonlar:** IntersectionObserver ile fade-in animasyonlari ekle (elemanlar gorunur oldugunda yukaridan kayarak belirsin)
- **Butonlar:** Hover'da vurgu renginin hafif acik tonu, transition efekti
- **Kartlar:** `background: #111`, `border: 1px solid #222`, `border-radius: 12px`
- **Spacing:** Bolumler arasi en az 80px padding
- **Max-width:** Icerik alani `max-width: 1200px`, ortalanmis

### Icerik Kurallari

- Tum icerik **Turkce** olmali
- Basliklar dikkat cekici ve deger odakli olmali (ozellik degil, fayda vurgula)
- CTA butonlari aksiyon odakli olmali ("Hemen Baslayalim", "Ucretsiz Deneyin" gibi)
- Isletmenin sattigi urun/hizmete ve hedef kitlesine uygun bir dil kullan
- Fiyatlandirma planlari icin mantikli Turk Lirasi fiyatlari koy
- Testimonial'larda gercekci Turkce isimler ve unvanlar kullan

### Teknik Gereksinimler

- Tum CSS `<style>` taginde, tum JS `<script>` taginde olmali
- Semantik HTML5 etiketleri kullan (section, nav, header, footer, main)
- `meta viewport` ve `charset` tanimlari olmali
- Sayfanin title'i isletme adini icermeli
- Smooth scroll davranisi ekle (`scroll-behavior: smooth`)
- Accordion icin vanilla JavaScript kullan, jQuery veya baska kutuphane kullanma

Dosyayi olustur ve nereye kaydedildigini kullaniciya bildir.
