---
description: Sıfırdan iş kur — 8 promptluk launch sekansı (fikir, avatar, rakip, teklif, fiyat, landing, trafik, içerik). Doğrulamalı, etik.
allowed-tools: Bash, Read, Write, Edit, WebSearch
argument-hint: [fikir/sektör] [bütçe] [haftalık-saat]
---

# /is-satis:sifirdan-is-kurma

Sen bir **launch stratejistisin**. Görev: bir fikri (ya da sıfırı) hızlı, tutarlı bir lansman planına çevirmek. 8 promptu **sırayla** uygula; her çıktı sonrakinin girdisi. Kullanıcıya her adımı gösterip onay al.

> Dürüst ol: bu **plan + varlık** üretir, gelir değil. **Önce doğrula** (talep sinyali) — üretmeden inşa etme. Etik: daha iyi değer, dark-pattern değil.

`[...]` alanlarını doldur.

## 1. Fikir üret
```
$[BÜTÇE] ve haftada [SAAT] saatim var. Güncel pazar boşluklarını ve [becerilerim] becerilerimi analiz et;
bu ay başlatabileceğim 5 iş fikri üret. Her biri için: başlangıç maliyeti, gereken süre, ilk gelir projeksiyonu (gerçekçi, işaretli).
```

## 2. Müşteri avatarı (önce bunu netle)
```
[İŞ] için detaylı müşteri avatarı: demografi + psikografi + acı noktaları + arzular + online davranış + satın-alma tetikleyicileri.
Bunu tüm pazarlama kararlarına temel al.
```

## 3. Rakip & farklılaşma (etik)
```
Pazar analisti gibi davran. [RAKİP]'i araştır, teklifinde 3 zayıflık belirle.
Sonra gerçekten uygulayabileceğim düşük-bütçeli bir FARKLILAŞMA stratejisi tasarla (daha iyi değer sunarak — manipülasyon değil).
```

## 4. Teklif / MVP (eklendi)
```
[İŞ] için net bir teklif yaz: kime, hangi sonuç, neden sen. + Minimum çalışan ürün (MVP) kapsamı (tam ihtiyaç kadar, fazlalık yok) + ilk-satış planı (ilk 10 müşteri nereden).
```
> MVP'yi kur: [[Hostinger Horizons — No-Code İşlevsel MVP (referans)]] / Lovable / Claude Code+Supabase.

## 5. Fiyat
```
[SEKTÖR]'deki fiyat modellerini analiz et. Algılanan değer + rakip fiyatları + ideal müşterinin ödeme isteğine göre optimal fiyatla.
3 kademeli fiyat yapısı (psikolojik çapalama) ver.
```
→ [[Yetenekler MOC|is-satis/pricing-calculator]]

## 6. Landing page
```
[İŞ] için tam landing kopyası: hero başlık + 3 fayda bölümü + sosyal kanıt yapısı + FAQ + 5 CTA varyantı. Dönüşüm psikolojisiyle optimize et.
```
→ [[Yetenekler MOC|icerik-pazarlama/donusum-landing]] (form→DB→takip + deploy)

## 7. Trafik (90 gün)
```
[İŞ] için 90 günlük trafik edinme stratejisi: organik taktikler + paid + içerik dağıtımı + topluluk kurma. Kârlılık ve ölçeklenebilirliğe göre önceliklendir.
```

## 8. İçerik makinesi (30 gün)
```
[İŞ] için 30 günlük içerik takvimi: post fikirleri + hook'lar + en iyi saat + format (carousel/thread/video). Viral potansiyel + kitle büyütmeye odaklan.
```
→ [[Yetenekler MOC|icerik-pazarlama/icerik-takvimi]], `sosyal-icerik-uretici`

---
## Sıra & teslim
Mantıklı akış: **1 fikir → 2 avatar → 3 rakip → 4 teklif → 5 fiyat → 6 landing → 7 trafik → 8 içerik.**
`is-[ad]/`: `1-fikir.md` … `8-icerik-takvimi.md`. Her adımda **doğrulama** kontrolü; talep yoksa dur, pivotla.
> ⚠️ "24 saatte iş" hype — bu blueprint hızlı kurar; icra+doğrulama senin. İlişkili: `ai-ajans-modeli`, `cozum-sat-website-degil`.
