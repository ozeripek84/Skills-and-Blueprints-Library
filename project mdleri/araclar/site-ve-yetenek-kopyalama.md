---
description: Beğenilen bir site/uygulama özelliğini kaynak kodsuz anla (gözlem → gerekirse REA) → kodsuz davranış spesifikasyonu → temiz-oda ile kendi versiyonunu kur → kabul testi + farklılaştırma kontrolü. Davranış kopyalanır, kod/görsel/marka değil.
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
argument-hint: [hedef: url | uygulama adı/yolu] [özellik]
---

# /araclar:site-ve-yetenek-kopyalama

Sen **tersine mühendislik + ürün mühendisisin**. Görev: kullanıcının beğendiği bir site/uygulama özelliğinin **nasıl çalıştığını kanıtla anlamak** ve aynı işi gören özelliği kullanıcının projesine **kendi koduyla, kendi tasarım diliyle** kurmak.

Hedef: `$ARGUMENTS`

> **Dürüstlük kuralları (kritik — kaynak video bunu abartıyor):**
> 1. **Davranış kopyalanır, ifade değil.** Decompile/minify edilmiş kodu, metinleri, görselleri, ikonları, logoyu, ayırt edici ekran düzenini projeye taşıma. Kullanıcı "birebir aynısı" isterse bir cümleyle neden yapmadığını söyle ve "aynı işi gören, ayrışan" versiyona yönlendir.
> 2. **Kırmızı çizgi — reddet, alternatif öner:** DRM / lisans kontrolü / paywall / anti-cheat atlatma, oyun hilesi, online servisi kurcalama, yetkin olmadığın sistemde auth veya bot koruması atlatma, ücretli yazılımı "ücretsiz yapma". (REA'nın kendi DISCLAIMER'ı da bunları kapsam dışı sayar.)
> 3. **REA kanıt üretir, gerçeği değil.** Pseudocode ve yeniden inşa eksik/yanlış olabilir. Her bulguyu **gözlem / çıkarım / bilinmeyen** diye ayır; statik analizi "çalışırken gördüm" diye sunma.
> 4. **Önce en ucuz yol.** Web özelliklerinin çoğu tarayıcıda gözlemle çözülür; REA'yı yalnız gözlemin cevaplamadığı soru için aç.
> 5. **Hukuki görüş verme.** Ticari ürüne dönüşecekse "EULA'yı oku, avukata danış" de ve devam et.

---

## 0 — Kapsamı netleştir (soru sor, eksikse AskUserQuestion ile — tek seferde bir soru)

1. **Hedef:** URL mi, kurulu uygulama mı (adı + yolu), APK mı? Kullanıcı yalnız "benim uygulamam" diyorsa adını sor; örnek uygulamayı kendin **seçme**, yakındaki dosyalardan tahmin etme.
2. **Özellik:** tek ve dar olsun ("arama", "fiyat hesaplayıcı", "export"). "Bütün uygulama" → reddetme, ama en değerli 1 özellikle başlamayı öner.
3. **İzin + niyet:** hedef kullanıcıya mı ait / izinli mi? Çıktı kişisel mi, ticari mi? Kırmızı çizgiye giriyorsa burada dur.
4. **Kullanıcının projesi:** nereye kurulacak (repo yolu, stack)?

## 1 — Soru listesi

Özelliği ölçülebilir sorulara böl ve kullanıcıya göster:

```
Özellik: [ÖZELLİK] — Hedef: [HEDEF]
S1. Tetikleyici ne? (tıklama, yazma, sayfa yükü, zamanlayıcı)
S2. Girdi ne, nereden geliyor? (form, URL, yerel depolama, sunucu)
S3. İşlem istemcide mi sunucuda mı?
S4. Hangi durumlar var? (boş, yükleniyor, sonuç, hata, kenar durum)
S5. Sonuç nereye yazılıyor / nasıl gösteriliyor?
S6. Performans/hız beklentisi (debounce, önbellek, sayfalama)?
```

## 2 — Kara kutu gözlem (her zaman önce)

- **Site:** Claude in Chrome veya Playwright ile özelliği farklı girdilerle kullan; Network isteklerinin **şeklini** (endpoint yolu, parametre, yanıt alanları), DOM durum değişimlerini ve ekran görüntülerini not et.
- **Masaüstü/mobil:** kullanıcıdan özelliği farklı girdilerle denemesini ve sonuçları paylaşmasını iste.
- Her cevabı soru listesine işle. **Tüm sorular cevaplandıysa 3'ü atla, 4'e geç.**

## 3 — REA ile kanıt (yalnız açık kalan sorular için)

**REA bağlı mı?** Oturumda REA araçları görünmüyorsa kurma; kullanıcıya şunu göster ve onay iste:

```bash
npx -y rea-agents@latest setup --client claude_code --dry-run   # ne değişecek
npx rea-agents setup                                            # onaydan sonra; ardından Claude Code'u yeniden başlat
```

Yalnız resmî kaynak: `github.com/morluto/rea` · `rea.tools` · npm `rea-agents`. MCP kurulmadan JS/Electron için CLI yeter:
`npx -y rea-agents@latest analyze-javascript-application /mutlak/yol --json`

**Hedefe göre ilk araç:**

| Hedef | Araç |
|---|---|
| Açık web sayfası | `list_browser_targets` → `inspect_web_page` (script kaynaklarıyla) → `export_web_scripts` → `analyze_javascript_application` |
| Tıklama/yazma gerektiren site akışı | `capture_browser_scenario` (beyan edilen eylemlerle) |
| Site bundle'ında rota/endpoint | `analyze_web_bundle` |
| Electron uygulaması (`app.asar`) | `analyze_javascript_application` → `trace_application_feature` |
| Native ikili | `open_binary` (Ghidra — ücretsiz; Hopper/IDA paralı, önerme) → `analyze_function` |
| Android APK | `inspect_android_package` (JADX + JDK gerekir) |
| .NET | `inspect_managed_artifact` |

Büyük hedefte `detail: "summary"` iste, sonra `inspect_analysis_view` ile yalnız ilgili modüle in. Aynı analizi tekrar çalıştırma. İş bitince native oturumu `close_binary` ile kapat.

**Bulgu defteri** (her soru için):

```
S[n] — [soru]
Durum: cevaplandı / kısmen / açık
Gözlem: [ne görüldü] — kaynak: [Evidence ID veya gözlem notu]
Çıkarım: [ne sonucuna varıldı] — güven: yüksek/orta/düşük
Bilinmeyen: [cevaplanmayan kısım]
```

## 4 — Davranış spesifikasyonu (köprü belge, KODSUZ)

Kullanıcının projesine `docs/spec-[özellik].md` olarak yaz:

```
# [Özellik] — davranış spesifikasyonu
Kaynak: [hedef] gözlemi + bulgu defteri (Evidence ID'ler)

## Amaç — kullanıcıya ne sağlıyor (1-2 cümle)
## Girdi → çıktı — tablo
## Durumlar — boş / yükleniyor / sonuç / hata / kenar durumlar
## Kurallar — sıralama, filtre, hesaplama formülü (kendi sözlerinle)
## Performans — debounce, önbellek, limit
## Kabul testleri — "verildiğinde / yapıldığında / beklenir" biçiminde 5-10 madde
## Bilinmeyenler — ve bizim tasarım kararımız
## Bilinçli farklılıklar — isim, görünüm, metin bizde nasıl olacak
```

Bu belgede **kod parçası, onların metinleri, görselleri yok.** Kullanıcıya göster, onay al.

## 5 — Temiz-oda implementasyon

- Mümkünse **yeni bir oturumda**, yalnız spesifikasyon belgesiyle çalış (analiz çıktılarını bağlama alma).
- Kullanıcının stack'ine ve kod üslubuna uy; kendi isimlendirmen.
- Arayüz: kendi tasarım dili. Gerekirse kütüphanedeki tasarım akışları (Web Sitesi Yapımı — MOC, Claude Design, Yıldız Dikme).

## 6 — Doğrula + farklılaştır

1. Kabul testlerini koş (otomatik test ya da tarayıcıda senaryo). Geçmeyeni çıktısıyla raporla.
2. Farklılaştırma kontrolü — hepsi "evet" olmadan bitti deme:

```
[ ] Ürün/özellik adı onlarınkini çağrıştırmıyor
[ ] Logo, ikonlar, illüstrasyonlar bize ait / lisanslı
[ ] Renk paleti ve tipografi ayrışıyor
[ ] Mikro-metinler (buton, hata, boş durum) kendi sözlerimiz
[ ] Ekran düzeni yan yana konunca karıştırılmıyor
[ ] Kodda onların koduna ait parça yok (minify/decompile kopyası yok)
[ ] Onların API'sini / anahtarını çağırmıyoruz
```

## Teslim raporu

```
Özellik: … — Hedef: …
Soru listesi: X cevaplandı · Y kısmen · Z açık
Spesifikasyon: docs/spec-….md
Kod: [dosyalar]
Kabul testleri: N/M geçti (geçmeyenler: …)
Farklılaştırma: 7/7
Açık kalanlar / riskler: …
```
