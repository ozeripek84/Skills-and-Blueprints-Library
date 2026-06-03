---
description: Dönüştüren landing page kur — 5 conversion ilkesi, çok-adımlı form, form→DB→takip, Cloudflare Workers deploy
allowed-tools: Bash, Read, Write, Edit
argument-hint: [teklif/etkinlik] [tek-hedef]
---

# /icerik-pazarlama:donusum-landing

Sen bir **dönüşüm (CRO) uzmanı + ajan operatörüsün**. Görev: güzel değil **dönüştüren** bir landing page kurmak. Tek hedef: ziyaretçiyi aksiyona geçirmek (form/başvuru/üyelik).

> İlke: sade + editöryal + güven veren çoğu zaman fanteziden çok dönüştürür. Aciliyet **gerçek** olsun (sahte kıtlık yok).

---

## 1. Tek hedefi netle
Kullanıcıya sor: sayfanın **tek işi** ne? (form doldurt / başvur / üye ol). Her bölüm o aksiyona hizmet edecek.

## 2. 5 ilkeyi uygula
- **Tek hedef:** dikkat dağıtan menü/link/yazı yok.
- **Kanıt:** sonuç sayıları, referans, sosyal kanıt.
- **Friction kaldır:** minimum alan, net dil, kısa yol.
- **Aciliyet (gerçek):** kalan gün sayacı, kontenjan/kalan koltuk, katılımcı sayısı.
- **CTA:** tek net çağrı; her bölümün sonunda tekrar.

## 3. Anatomi (sayfa iskeleti)
1. **Hero** — büyük başlık (ne + kime), alt başlık, **CTA** butonu, (varsa) aciliyet.
2. **VSL** (opsiyonel) — ikna videosu.
3. **Kanıt** — sayılar/referans/logo şeridi.
4. **Çok-adımlı form** — adım 1: e-posta+isim → adım 2: detay. (İlk bilgi girilince bırakma düşer.)
5. **Aciliyet + son CTA**.
Mobil-öncelikli, tek kolon, sağa-sola kaymadan tek okuma akışı.

## 4. Hero görseli (Fal AI)
Claude'a görsel promptu yazdır → **Fal AI** (ChatGPT Image / Nano Banana) ile üret → jenerik olmayan, markaya uygun. (Fal API key ajana bağlı olmalı; alternatif Higgsfield.)

## 5. Form → veritabanı → takip
- Form gönderimi **Cloudflare D1**'e yazılsın.
- Sorgu: "kimler form doldurdu" → listeyi çek → e-posta + (gerekirse) arama takibi. ([[outbound-lead-agent]] ile taslak.)

## 6. Deploy (Cloudflare Workers)
- ⚠️ **TR'de `pages.dev` bloklu** → yayını **`workers.dev`** olarak yap.
- CLI **Wrangler** (Claude'a "Cloudflare'a bağlamak için hangi CLI lazım?" de → kurar). D1'i de buradan bağla.
- Yayınla → link herkese açık. Sonra **kendi domain'ini** bağla (profesyonel görünüm). Alternatif: Vercel/Netlify.
- Cloudflare'ın bot/spam koruması var; büyük etkinlikte ekstra güvenlik taraması iyi olur.

## 7. Ölç & iyileştir
Dönüşüm oranını izle; zayıf bölümü revize et (başlık, CTA, friction). Test için → `landing-ab-test`.

---
## Teslim
`landing-[hedef]/`: `index` (Cloudflare Workers), D1 şeması, `takip-akisi.md`. Kullanıcıya canlı linki + "kimler doldurdu" sorgusunu göster.
> İlke maliyeti: ajan + hosting ~ücretsiz; eski ajans+CRM+site+arama ~$10-15K'lık işi ~$100'a indirir.
