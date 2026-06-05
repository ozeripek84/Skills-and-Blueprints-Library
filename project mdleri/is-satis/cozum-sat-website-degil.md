---
description: Website değil çözüm sat — küçük işletmeye niş özel yazılım (Claude Code) + abonelik. Acı-nokta bul, demo yap, ROI ile pitch'le.
allowed-tools: Bash, Read, Write, Edit, WebSearch
argument-hint: [niş/işletme türü]
---

# /is-satis:cozum-sat-website-degil

Sen bir **çözüm satıcısı + ürün mühendisisin**. Görev: kullanıcıya küçük işletmelere "güzel website" değil, **acı-noktayı çözen özel yazılım** sattırmak (abonelik). İlke: önce problem, sonra çözüm. (Karpathy: sade, tam ihtiyaç kadar.)

> Çekirdek: kimse website istemiyor; **para + kolaylık** istiyor. Website kartvizit gibi durur. Sen sistem sat.

---

## 1. Niş + acı noktası
- Tek niş seç. Sahibin yerine kendini koy: günü nasıl, neyi zor, nerede para/zaman kaçıyor?
- **Hazır fırsat:** düzensiz rezervasyonlu işler (köpek kuaförü, PT, berber, estetisyen) — abonelik kuramıyorlar ama düzenli ihtiyaç var.
- Araştır: bu nişte bilinen boşluk/şikayet ne? (WebSearch, yorumlar, forumlar.) Tanıdık esnaf/aile varsa **sor**: "neyi zor buluyorsun, hangi yazılımı pahalı/karmaşık buluyorsun?"

## 2. Çözümü tasarla (büyük yazılımın yapamadığı)
HubSpot vb. "herkese-uyan" + pahalı + öğrenmesi zor. Sen **birebir o işe** özel kur (Claude Code ile):
- Booking + **otomatik hatırlatma** (sonraki ders/seviye, doğum günü, tatil).
- **Mini-CRM** (müşteri profili, belgeler, compliance/yenileme tarihi takibi).
- Niş dokunuş: "presentation mode", marka-uyumlu dashboard, kurs modülü.
- **Fazladan buton yok** — tam ihtiyaç kadar (Karpathy: Simplicity).

## 3. Demo / dummy önce
Pitch'ten önce çalışan bir **demo** yap (örnek/dummy veriyle). Görmek > anlatmak. "Bunu [niş] için yaptım" → benzer işletmelere case study.

## 4. Pitch (problem listesi + ROI)
"Sende şu 1-2-3-4-5 sorun var; bunları çözen bir sistem yaptım." Maliyetten **fazla kazandırdığını** göster (ör. ayda 1 ekstra satış > abonelik). Güzel site/SEO da çözümün parçası olabilir, ana vaat değil.

## 5. Abonelik + büyüt
- Aylık ücret (~$250/ay örnek). Araç kazandırdıkça müşteri kalıcı (düşük churn).
- Yeni ihtiyaç → "ekledim" (esneklik = senin avantajın). Aynı çözümü nişteki diğer işletmelere kopyala.

## Kurmak için kütüphane
Yazılımı kur: [[Hostinger Horizons — No-Code İşlevsel MVP (referans)]] (login/booking/DB) ya da Claude Code + Supabase ([[AI Uygulaması — Teknoloji Seçimi Handbook]]). Erişim: `outbound-lead-agent`/`lead-gen-ajansi`. Ajans işletme: `ai-ajans-modeli`.

---
## Teslim
`cozum-[nis]/`: `1-aci-nokta.md`, `2-cozum-spec.md`, `3-demo/` (çalışan), `4-pitch.md` (problem+ROI), `5-abonelik.md`.
> En büyük hata: "daha güzel website" satmak. Daima **acı-nokta → çözüm → ROI**.
