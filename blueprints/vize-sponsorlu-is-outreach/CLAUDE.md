# Vize-Sponsorlu İş Outreach Kampanyası — Blueprint

## Amaç
Vize sponsorluğu gerektiren bir aday için, **sponsor olabilen şirketlere** kişiselleştirilmiş video + e-posta ile başvuru kampanyası. ATS'i atlayıp hiring manager'a doğrudan ulaşır. Rotalar: **UK Skilled Worker** ve **NL Highly Skilled Migrant (HSM / expat)**. (Global Talent kapsam dışı — sponsor rotası.)

> ⚠️ **Gizlilik:** Bu blueprint genel/şablondur (placeholder'lı). Kişisel veri (CV, e-posta, hedef liste) buraya/public repo'ya **konmaz** — onları private bir klasörde tut. Bkz. [[is-satis/video-outreach-basvuru]] skill'i.

## Doldurulacak değişkenler
```
[AD], [ROL] (ör. Data Scientist / ML Engineer), [SEKTÖR] (ör. defense-tech, AI/data, supply-chain AI)
[ÜLKE] = UK | NL,  [VIZE] = Skilled Worker | HSM
[BASE_VIDEO] = 45-60 sn intro video dosyası
```

## Pipeline (5 adım)
### 1. Vize rotası + filtre
- **UK Skilled Worker:** gov.uk **Register of Licensed Sponsors (Workers)** — CSV indir (125K+ şirket). Yalnızca lisanslı sponsorlar. Dil bariyeri yok.
- **NL HSM:** ind.nl **Public Register Recognised Sponsors** (~10-12K). + **İngilizce-öncelikli** şirketleri seç (Dutch-zorunlu ilanları ele). 30% ruling avantajını mailde kullan.

### 2. Hedef liste (sponsor ∩ uygunluk)
Register CSV'sini **sektör/rol + senin alanın** ile kesiştir → 50-200 hedef şirket. Her birinin kariyer sayfası/ilanına **gerçekten** bak, uygun olanı seç (rastgele değil). ⚠️ *Cleared* savunma rolleri vatandaşlık ister → **dual-use/ticari AI** rollerine odaklan, askeri geçmişi anlatı farkı olarak kullan.

### 3. E-posta bul (Apollo.io)
Hedef şirketlerde recruiter / talent acquisition / hiring manager. Aylık ~100 ücretsiz. CSV: first name, email, company, website.

### 4. Kişisel video (SendSpark)
Tek `[BASE_VIDEO]` çek; isim yerine **"watermelon"** placeholder → AI her kişiye ismini + arka plana **şirket sitesini** koyar. CSV yükle → 3 test → hepsi.
- Script (45-60 sn): değer-önce → [ROL]'de ne teslim ettin (somut/metrik) → "available to relocate, visa-ready via [VIZE]" → net çağrı. (Aile/vize hikayesi **vize dosyası** için, hiring pitch'e koyma.)

### 5. E-posta dizisi + takip
Apollo sequence: kişi eklenince ~30 dk sonra otomatik mail. Konu: "[İsim] — [ROL] application". Gövde kısa + kişisel + SendSpark video linki + CV eki. Yanıtları hızlı görüşmeye çevir.

## CV/konumlandırma (her başvuruda)
- **Master CV + ilana göre başlık varyantı** (başlık ilandaki unvanı birebir yansıtsın — ATS + 6 sn tarama).
- Bullet'lar **metrikli** (sonuç, %). Şirket adları **tutarlı**.
- Açıkça: "Open to relocation — [ÜLKE]; visa-ready via [VIZE]". NL'de 30% ruling'i işverene **maliyet avantajı** olarak ima et.

## Etik / GDPR (AB/UK zorunlu)
Gerçek alaka + kişisel + opt-out + makul hacim. Toplu jenerik spam değil. Kişisel veri private.

## Çıktı
`kampanya-[ÜLKE]/`: `hedef-liste.csv` (sponsor-filtreli), `video-script.md`, `email-dizisi.md`, `cv-[rol].md`, `takip.md`.
