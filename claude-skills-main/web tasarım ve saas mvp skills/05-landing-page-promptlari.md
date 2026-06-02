# Landing Page Prompt Şablonları

Hazır kullanılabilir prompt'lar. Köşeli parantez içindekileri değiştir, Claude Code'a ver.

---

## 1. Sıfırdan landing page (basic)

```
Next.js 14 + Tailwind + TypeScript ile bir landing page kur.

Konu: [SEKTÖR/ÜRÜN]
Hedef kitle: [KIME SATIYOR]
Marka tonu: [profesyonel/genç/eğlenceli/lüks]
Ana renk: [HEX kod ya da renk adı]

Bölümler:
- Header: logo, nav, CTA buton
- Hero: büyük başlık, alt başlık, CTA, görsel
- Features: 3 ana özellik kartı
- Testimonials: 3 müşteri yorumu (placeholder data)
- Pricing: 3 paket
- FAQ: 5 soru-cevap
- Footer: linkler, sosyal, iletişim

Karanlık mod toggle olsun.
shadcn/ui kullan.
Tüm metinler Türkçe.
```

---

## 2. Sektörel landing page (kahveci)

```
Bir İstanbul mahalle kahvecisi için landing page kur.

İsim: [KAHVECİ ADI]
Mahalle: [LOKASYON]
Vibe: warm, cozy, third-wave coffee

Bölümler:
- Hero: kahvecinin atmosferi, hours, address, "Yol Tarifi Al" CTA
- Menu: kahve listesi (placeholder fiyatlarla), atıştırmalıklar
- Specialty: özgün/imza içecekleri öne çıkar
- Story: kahvecinin hikayesi (~150 kelime placeholder)
- Reservation: rezervasyon formu (Calendly entegrasyon hazır)
- Map: Google Maps embed
- Footer: çalışma saatleri, sosyal, iletişim

Renk paleti: warm browns + cream + dark green
Font: serif heading + sans body (örn Playfair + Inter)
```

---

## 3. Diş hekimi/klinik landing

```
Bir diş kliniği için profesyonel landing page kur.

Klinik: [İSİM]
Lokasyon: [ŞEHIR]
Uzmanlık: [implant/ortodonti/genel/zirkon]

Bölümler:
- Hero: profesyonel atmosfer, "Online Randevu" CTA
- Hizmetler: 6 kart (her biri detaylı açıklamayla)
- Doktorlar: 2-3 doktor profili (placeholder + foto alanı)
- Süreç: hasta yolculuğu (4 adım)
- SSS: 8 sık sorulan soru
- İletişim: form + harita + telefon
- Footer: çalışma saatleri, acil iletişim

Renk: sağlık temalı (mavi + beyaz + nane yeşili accent)
Font: temiz, profesyonel (Inter ya da DM Sans)
Mobile-first, %100 erişilebilir.
Dark mode YOK (sağlık sektöründe alışılmamış).
```

---

## 4. Dijital ajans/freelance portfolio

```
Bir dijital ajans/freelancer için modern portfolio site kur.

İsim: [İSİM]
Hizmet: [web tasarım, AI otomasyon, branding]

Bölümler:
- Hero: bold typography, "Çalışmak için iletişime geç" CTA
- Hizmetler: 3-4 ana hizmet (her biri detay sayfası link'iyle)
- Portfolio: 6 case study grid (her birinin detay sayfası)
- Süreç: nasıl çalışıyorum (5 adım)
- Testimonials: 4 müşteri yorumu
- About: kim olduğum + neden farklı
- İletişim: form + email
- Blog (opsiyonel): 3 son post

Tasarım:
- Bold, contemporary
- Çok alan (whitespace)
- Hover animations
- Dark mode default
- Custom cursor (opsiyonel)

Stack ek: Framer Motion animasyonlar için
```

---

## 5. SaaS landing (ürün için)

```
Bir SaaS ürünü için satış odaklı landing page kur.

Ürün: [ÜRÜN ADI]
Konu: [NE YAPIYOR — 1 cümle]
Hedef kullanıcı: [KIME]
Fiyat: [FREE/19/49/99/AY]

Bölümler:
- Header: nav (Features, Pricing, Login, Sign up CTA)
- Hero: clear value prop, demo screenshot/video, primary CTA "Ücretsiz Dene"
- Social proof: "X kullanıcı" + 3-4 logo
- Features: 4-6 ana özellik (alternating image+text)
- How it works: 3 adımda
- Pricing: 3 plan (Free, Pro, Business) + FAQ
- Testimonials: 4-6 kullanıcı yorumu (foto + isim + şirket)
- CTA section: "Hemen başla, kart yok"
- Footer: full footer (Product, Company, Legal, Social)

SEO meta tags için Türkçe metadata ekle.
Open Graph image placeholder ekle.
```

---

## 6. E-ticaret landing (single product)

```
Tek ürün satan bir e-ticaret landing page kur (Shopify-vari).

Ürün: [ÜRÜN ADI]
Kategori: [moda/teknoloji/güzellik/yiyecek]
Fiyat: [₺X]

Bölümler:
- Hero: ürün foto + add to cart + 4.8 yıldız (X yorum)
- Detaylar: özellik listesi, teknik özellikler
- Galeri: 4-6 ürün fotoğrafı (lightbox ile)
- Story: ürün hikayesi (sürdürülebilirlik, üretim, vs)
- Testimonials: 6+ verified review
- Compare: rakiplere göre tablo
- FAQ: kargo, iade, garanti
- Sticky bar: sayfanın altında "Add to Cart"

Ödeme: Stripe Checkout entegrasyon (test mode)
Cart: minimal, sadece bu ürün
```

---

## Tüm prompt'lar için ek talimat (CLAUDE.md'ye koyarsan ekleme yapmana gerek kalmaz)

```
Her sayfa için zorunlu:
- TypeScript hatasız
- Mobile-first responsive
- Lighthouse skoru 85+
- Tüm görseller next/image
- Loading + error state'ler
- Türkçe içerik (lorem ipsum yok)
- Dark mode (sektör uygun değilse istisna)
- SEO meta tags
- Footer'da yıl + isim + "Made with Claude Code"
```

---

## Son polish prompt'u (her sayfayı bittikten sonra)

```
Bu landing page'i şimdi bir mid-tier ajans seviyesinde polish et:
- Mikro animasyonlar (fade in on scroll, hover effects)
- Daha iyi typography hierarchy
- Görsel ritmin daha iyi
- Whitespace optimize
- Tüm metinleri tekrar gözden geçir, spelling/dilbilgisi
- Accessibility audit (kontrast, focus states)
- Lighthouse skorunu 95+'a çıkar

Her değişiklikten sonra bana ne yaptığını söyle.
```
