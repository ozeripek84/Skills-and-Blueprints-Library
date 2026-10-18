# Scroll-Anlatı Lüks Marka Sitesi — Blueprint

## Amac
Premium bir marka için (çay, kozmetik, parfüm, takı, kahve vb.) **scroll ile ilerleyen sinematik anlatı** tek-sayfa site. Arka planda kullanıcı kaydırdıkça oynayan/ilerleyen bir video, üstünde scroll'a senkron beliren metin katmanları, ürün kartları ve şık footer. AI üretimi video + Claude Code ile kod; kodlama bilmeden lüks görünümlü site. (Video referansı: Assam Tea örneği — bu blueprint markadan bağımsızdır.)

## Çıktı
- Tek dosya: `index.html` (inline CSS + JS, framework yok)
- + Asset slotları: `final.mp4` (birleştirilmiş arka plan videosu) ve 3 ürün görseli (`product-dawn.jpg`, `product-dusk.jpg`, `product-night.jpg`)

## Teknik Gereksinimler
- Vanilla HTML/CSS/JS (Google Fonts hariç harici bağımlılık yok)
- Tema: Lüks/koyu; markaya göre aksent. Bol negatif alan, serif + sans karması, ince harf aralığı
- Scroll-driven animasyon: `IntersectionObserver` + `scroll` event (throttle/`requestAnimationFrame`)
- Video: arka planda `<video>` (muted, playsinline, loop ya da scroll-scrub); poster fallback
- Mobil responsive; video ağırsa mobilde statik poster'a düş

## Marka Değişkenleri (klonlarken doldur)
```
[MARKA_ADI]      = "Assam Tea"
[SLOGAN]         = "From the hills to your cup"
[SEKTÖR]         = premium çay
[AKSENT_RENK]    = #c9a24b (altın) — markaya göre
[ÜRÜN_1..3]      = dawn / dusk / night varyantları
```

## Sayfa Yapısı (scroll sırası)
1. **Loading screen** — marka adı/logosu, ince ilerleme; asset'ler hazır olunca fade-out.
2. **Fixed header** — şeffaf, scroll'da hafif blur/bg; marka adı + minimal menü.
3. **Scroll progress bar** — sayfanın en üstünde ince ilerleme çubuğu.
4. **Hero (video arka plan)** — tam ekran `final.mp4`; üstte büyük başlık + slogan; "scroll" ipucu.
5. **Anlatı bölümleri (3–5)** — kullanıcı kaydırdıkça video ilerler/değişir, üstüne **metin katmanları** fade/slide ile girer-çıkar (ürünün hikâyesi: hasat → demleme → fincan vb.).
6. **Ürün kartları (3)** — dawn/dusk/night; her kartın altında **gradient fade** görselden kart arka planına geçiş; isim + kısa açıklama + fiyat/CTA.
7. **Footer** — marka, kısa manifesto, sosyal linkler, telif.

## Scroll Mekaniği (kritik detaylar)
- Metin katmanları viewport'a girince fade-in + yukarı kayma (~24px), çıkınca fade-out.
- Hero videosu: ya sürekli loop, ya scroll pozisyonuna göre `currentTime` scrub (performans için scrub'ı isteğe bağlı tut).
- `prefers-reduced-motion` desteği: animasyonları sıfırla.
- Ürün kartı görsellerinde alt kısma `linear-gradient(transparent → kart-bg)` overlay — görseli karta kaynaştırır.

## ÜRETİM HATTI — Asset'ler nasıl üretilir (kod dışı, ön adım)
> `index.html` bu asset'leri **bekler**; önce bunları üret, klasöre koy.

1. **Görseller (9 kare) — AI image:** ElevenLabs "creative → image" (veya herhangi bir görsel üretici; video'da GPT image 2 / nano banana 2). 16:9, 2K. Anlatının kareleri: teabag, ingredients, herbs, cup vb. `image1.jpg … image9.jpg` olarak adlandır.
2. **Videolar (≈5 klip) — frame-pair tekniği:** ElevenLabs "creative → video". Her klip için **start frame = imageN**, **end frame = imageN+1**. Prompt + model (VO 3.1 light ekonomik / Seedance 2.0 kaliteli), 16:9, 1080p, ~6 sn. → `v1..v5` (tea bag, herbs falling, ingredients enter cup, tea breathing, hands wrap).
3. **Birleştir — Canva:** canva.com → Landscape Video → 5 klibi sırayla yükle/birleştir → 1080p indir → `final.mp4`.
4. **Ürün görselleri (3):** dawn/dusk/night ürün çekimleri → `product-dawn/dusk/night.jpg`.

> Alternatif: istediğin image/video aracı kullanılabilir; frame-pair (start/end image) mantığı korunur.

## MASTER PROMPT (Claude Code'a verilecek tohum)
```
Assam Tea / [MARKA_ADI] için lüks, scroll ile ilerleyen sinematik bir anlatı sitesi inşa et.
Premium [SEKTÖR] markası. Tek dosya index.html (inline CSS+JS).
Çekirdek mekanik: tam ekran video hero (final.mp4), scroll'a senkron metin katmanları.
İçer: loading screen, fixed header (scroll'da blur), üstte scroll progress bar,
3–5 anlatı bölümü (kaydırdıkça metin fade-in/out), 3 ürün kartı (alt gradient fade ile),
şık footer. Tipografi lüks (serif başlık + sans gövde), bol boşluk, [AKSENT_RENK] aksan.
Video dosyası: final.mp4. prefers-reduced-motion ve mobil fallback (poster) destekle.
```
Sonra ürün görsellerini eklet: *"Şu 3 görseli kartlara ekle: product-dawn/dusk/night. Her görselin altına kart arka planına karışan gradient fade koy, mevcut kart stilini bozma."*

## DEPLOY (ücretsiz)
1. **GitHub:** yeni repo aç → Claude Code'a *"tüm dosyaları şu repo'ya push et: <url>"* de.
2. **Vercel:** vercel.com → Add New Project → repo'yu import et → Deploy → canlı URL. (Statik site, ücretsiz.)

## Önemli Notlar
- Asset'ler yoksa site iskeleti yine kurulur; `final.mp4`/görseller eklenince tamamlanır.
- Video boyutu büyükse sıkıştır (Handbrake/Canva 1080p) — ilk yük süresi + Vercel için.
- "5K'ya satılır" iddiası video pazarlaması; gerçek değer markaya/teslimata bağlı.

## Dış referanslar (2026-09-11, kopyalanmadı)
- Motor alternatifi: `nateherkai/scroll-craft` (MIT, 2,3k ★) — kendi `scrollcraft.js` + ffmpeg ile scrub edilen klip, pin, yatay ray; plugin yolu `plugins/nateherk-design/skills/scroll-craft/`. Kurmadan önce SKILL.md oku.
- Referans analizi: `zanwei/design-dna` (MIT, 1,7k ★) — görsel/URL/video → DNA JSON (renk, tipografi, boşluk, köşe, hareket).
- Video modeli: Seedance 2.5 fal'da (`bytedance/seedance-2.5/image-to-video`, 480p $0,22/sn · 720p $0,47/sn, doğal 30 sn).
