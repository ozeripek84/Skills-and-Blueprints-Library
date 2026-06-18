---
name: instagram-carousel-uretici
description: Marka renginden türeyen 4:5 swipe'lanabilir Instagram carousel — her slayt 1080×1350 PNG olarak export edilir (self-contained HTML + Playwright).
---

# Instagram Carousel Generator

## Ne zaman
Markaya özel, doğrudan Instagram'a yüklenebilir carousel post üretmek gerektiğinde (hook→CTA eğitim/ürün anlatımı). Not: [[sosyal-icerik-uretici]] çok-platform genel üretici; **bu** spesifik bir IG carousel **tasarım sistemi** (HTML→PNG export hattıyla).

## Stack
Self-contained HTML/CSS (framework yok) + Google Fonts + Playwright (Python) ile PNG export. Önizleme için Canva/Higgsfield gerekmez — tarayıcı render eder.

## Süreç
1. Marka detaylarını topla (isim, handle, ana renk, logo, font, ton, görseller) — **varsayma, sor**
2. Tek ana renkten 6-token palet türet (BRAND_PRIMARY/LIGHT/DARK + LIGHT_BG/BORDER + DARK_BG)
3. Tipografi seç (başlık + gövde Google Fonts çifti, sabit ölçek)
4. 4:5 slaytlar — açık/koyu zemin değişimli; her slaytta progress bar + swipe ok (son slayt hariç)
5. 7-slayt anlatı yayı: Hook → Problem → Çözüm → Özellikler → Detay → Nasıl → CTA
6. IG çerçevesinde önizle (`.ig-frame` **tam 420px**) → kullanıcı swipe'layıp onaylasın
7. Playwright `device_scale_factor=2.5714` ile her slaytı **1080×1350 PNG** export et

## Çıktı standardı
- Her slayt export-ready (swipe oku + progress bar slaytın parçası, overlay değil)
- 1080×1350 PNG, doğrudan IG yüklemeye hazır
- Tek ana renkten türeyen tutarlı palet + açık/koyu görsel ritim
- Son slayt: ok yok, progress %100, net CTA

## Yaygın hatalar
- Viewport'u 1080px yapmak → layout reflow olur (420px tut, `device_scale_factor` kullan)
- HTML'i shell script'le üretmek → `$`/backtick/sayı bozulur (**Python** ile yaz)
- Fontları beklememek → fallback sistem fontu (render sonrası `wait_for_timeout(3000)`)
- IG chrome'unu gizlememek → export'a header/dots/caption karışır
- İçeriğin progress bar'la çakışması → alt içeriğe `padding-bottom: 52px`
