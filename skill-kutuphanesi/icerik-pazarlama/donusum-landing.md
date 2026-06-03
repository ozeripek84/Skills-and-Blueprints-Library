---
name: donusum-landing
description: "Güzel" değil DÖNÜŞTÜREN landing page kurar — 5 conversion ilkesi, hero/VSL/çok-adımlı form anatomisi, form→DB→takip funnel'ı, Cloudflare Workers deploy.
---

# Dönüşüm Odaklı Landing Page (CRO)

## Ne zaman
Ziyaretçiyi **aksiyona** (form doldurma, başvuru, üyelik) geçiren bir landing page gerektiğinde. Amaç güzellik değil **dönüşüm oranı** (örnek: 2 kişiden 1'i form doldurdu = %50).

## Temel ilke
Güzel tasarım ≠ dönüşüm. Çoğu zaman **sade, editöryal, güven veren, tek yerden okunan** sayfa daha çok dönüştürür. "Tasarım nasıl göründüğü değil, nasıl çalıştığıdır." (Steve Jobs)

## 5 Dönüşüm İlkesi
1. **Tek hedef** — sayfanın tek işi var (ör. form doldurt). Dikkat dağıtan her şeyi çıkar.
2. **Kanıt** — sosyal kanıt, sonuç, sayılar, referans (güven inşa eder).
3. **Friction kaldır** — gereksiz yazı/logo/menü/alan yok. Yol pürüzsüz.
4. **Aciliyet** — gerçek kıt-zaman/kontenjan: kalan gün sayacı, katılımcı sayısı, sınırlı kota.
5. **CTA** — net, harekete geçiren tek çağrı (her bölümde aynı aksiyona götürür).

## Anatomi
**Hero** (ilk ekran: ne + kime + CTA) → **VSL** (video sales letter, ikna için) → **çok-adımlı form** → kanıt + aciliyet bölümleri → tekrar CTA. Mobil-öncelikli, tek kolon, sağa-sola kaymadan.

## Çok-adımlı form psikolojisi
Önce sadece e-posta/isim → sonra adım adım. Kişi ilk bilgiyi girince "yatırım yapmış" hisseder → **bırakma oranı düşer**.

## Funnel (form → takip)
Form gönderimi → **veritabanı** (Cloudflare D1) → "kimler doldurdu" sorgusu → e-posta + (gerekirse) arama takibi. → [[outbound-lead-agent]], [[lead-gen-ajansi]].

## Deploy (ücretsiz)
**Cloudflare Workers** (`workers.dev`) — ⚠️ TR'de `pages.dev` **bloklu**, `workers.dev` kullan. CLI = **Wrangler** (ajan otomatik kurar; MCP gibi ama daha ucuz/hızlı). D1 ile form verisi aynı yerde. Alternatif: Vercel / Netlify.

## Çıktı standardı
- Tek ölçülebilir hedef + bölüm bölüm aynı CTA.
- Mobil uyumlu, sade, hızlı.
- Form verisi DB'de + takip akışı kurulu.

## Yaygın hatalar
- Güzellik peşinde dönüşümü unutmak (3D efekt ≠ daha çok müşteri).
- Friction (fazla alan/menü/yazı), belirsiz CTA, kanıt/aciliyet eksik.
- **Sahte aciliyet/kıtlık** — etik değil; aciliyet gerçek olsun.
- TR'de `pages.dev` ile yayınlamak (erişilemez).

> Çalıştırılabilir hâli (5 ilke uygulanmış + form spec + Cloudflare/Wrangler/D1 + Fal AI hero görsel): `/icerik-pazarlama:donusum-landing`
> İlişkili: `web-saas/landing-page` (yapı), `landing-ab-test` (test), [[$10K Web Sitesi — Claude Code Tasarım İş Akışı]], `frontend-design` (built-in).
