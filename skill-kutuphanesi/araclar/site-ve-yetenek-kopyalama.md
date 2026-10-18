---
name: site-ve-yetenek-kopyalama
description: Beğendiğin bir sitenin/uygulamanın özelliğini kaynak koduna erişmeden anla (gözlem + REA ile tersine mühendislik) → davranış spesifikasyonu çıkar → kendi projende kendi kodunla, kendi tasarım dilinle kur. Kopyalanan şey DAVRANIŞ, kod/görsel/marka değil.
---

# Site ve Yetenek Kopyalama (tersine mühendislik → kendi versiyonun)

## Ne zaman
Bir sitede ya da uygulamada beğendiğin bir özellik var — "Notion'daki arama", "şu sitenin fiyat hesaplayıcısı", "şu landing'in scroll akışı", "şu masaüstü uygulamasının export'u" — kaynak koduna erişimin yok ve aynı **işi gören** bir özelliği kendi projene kurmak istiyorsun. Bu skill: önce gözlemle, gerekirse REA ile kanıt topla, davranışı spesifikasyona dök, sonra spesifikasyondan **kendi** kodunu yaz.

Kaynak: YouTube (TR) "Reverse Engineer Anything" videosu + repo [morluto/rea](https://github.com/morluto/rea) (MIT, v6.7.0, 2026-10-18 itibarıyla ~300K★, npm: `rea-agents`, site: rea.tools).

## ⚠️ Dürüst çerçeve (video vs gerçek)

- **"Craft Apps, Adobe'un bütün uygulamalarını ücretsiz yapıyor" → yanlış.** Videodaki proje *ArtCraft / Crafting Apps* (storytold): AI ile sıfırdan yazılmış **açık kaynak Adobe alternatifleri** (PhotoCraft, VectorCraft…). Adobe'u kırmıyor, Adobe lisansını açmıyor; erken alfa, 7 uygulamanın yalnız ~2'si kullanılabilir durumda. REA ile **ayrı** proje. "Adobe'un hisse düşüşü tek bir repo yüzünden" iddiası doğrulanmamış bir nedensellik.
- **"İstediğin uygulamayı birebir klonlar" → REA bunu yapmaz.** REA **kanıt** üretir: DOM/script/ağ gözlemi, JS modül grafiği, pseudocode, assembly. Kodu **senin ajanın** yazar. Decompile ve yeniden inşa çıktısı eksik ya da yanlış olabilir; REA'nın kendi feragatı da bunu söyler.
- **REA'nın kendi kırmızı çizgileri** (DISCLAIMER.md): DRM / lisans kontrolü / anti-cheat atlatmak, oyun hilesi, online servisleri kurcalamak, yetkin olmayan sistemde kimlik doğrulama/bot koruması atlatmak, **tescilli yazılımı kopyalamak ve korunan kodu/asset'i yeniden üretmek** desteklenmez. Videodaki "Call of Duty'ye kaykay eklemek" bu çizginin dışında kalır (online + anti-cheat → ban + ToS ihlali).
- **Videonun doğru söylediği kısım:** bir programı gözlemlemek, kullanmak, test etmek ve davranışını anlayıp **birebir aynısı olmayan**, kullanıcıyı yanıltmayan kendi versiyonunu yazmak genelde meşrudur. Hukuki dayanağın özü: **fikir ve davranış korunmaz; ifade (kod, metin, görsel, logo, ikon, ayırt edici arayüz/"trade dress") korunur.** Patentli yöntemler istisnadır.
- **Hukuk ülkeye ve sözleşmeye bağlı.** AB'de (2009/24/AT direktifi; Türkiye'de FSEK'in bilgisayar programı hükümleri aynı çizgide) programın işleyişini gözlemlemek/test etmek serbest, **decompile ise esasen birlikte çalışabilirlik amacıyla dar sınırlarla** izinli. ABD'de DMCA §1201 teknik koruma atlatmayı yasaklar. Uygulamanın EULA'sı tersine mühendisliği ayrıca yasaklayabilir. Ticari bir ürüne dönüşecekse → avukat. Bu skill hukuki görüş değildir.
- **Popülerlik ≠ uygunluk.** Çoğu "şu sitenin şu özelliği" işi REA gerektirmez; tarayıcıda gözlem + normal kodlama yeter. REA'yı yalnız gözlemin cevaplamadığı soru için aç.

## Altın kural: davranışı kopyala, ifadeyi değil (temiz-oda)

| Genelde serbest ✅ | Yapma ⛔ |
|---|---|
| Özelliği kullanıp girdi→çıktı ilişkisini not etmek | Minify/decompile edilmiş kodu kendi projene yapıştırmak |
| Ağ isteklerinin **şeklini** görüp kendi API'ni tasarlamak | Onların API'sini/anahtarını kendi ürününden çağırmak |
| Etkileşim akışını (adımlar, durumlar, kenar durumlar) tarif etmek | Metinlerini, görsellerini, ikonlarını, fontlarını, logosunu almak |
| Benzer işi gören, **kendi tasarım dilinde** bir arayüz | Ekranı piksel piksel aynı yapmak, ismi/markayı çağrıştırmak |
| Kendi sahip olduğun veya izinli yazılımı derinlemesine incelemek | Lisans kontrolünü, DRM'i, anti-cheat'i, paywall'u atlatmak |

**Temiz-oda yöntemi:** analizi yapan oturum yalnız bir **davranış spesifikasyonu** üretir (kod parçası yok). Kodu yazan ayrı oturum yalnız o spesifikasyonu görür. Böylece "esinlenme" ile "kopya" arasındaki çizgi belgeli olur.

## Rota — hedefe göre araç (ücretsiz önce)

| Hedef | İlk araç | Derine inmek gerekirse |
|---|---|---|
| **Site — görünüm/akış** (layout, scroll, animasyon, bölüm sırası) | Claude in Chrome / Playwright ile gez + ekran görüntüsü | REA gerekmez → tasarım akışı: [[Web Sitesi Yapımı — MOC]] |
| **Site — özelliğin mantığı** (hesaplayıcı, filtre, arama, sepet kuralı) | Tarayıcıda kullan + DevTools Network | REA: `inspect_web_page` (script kaynaklarıyla) → `export_web_scripts` → `analyze_javascript_application`; tıklama senaryosu için `capture_browser_scenario`; rota/endpoint adayları için `analyze_web_bundle` |
| **Electron masaüstü** (Notion, Slack, Discord, VS Code…) | REA `analyze_javascript_application` → `app.asar` | `trace_application_feature` ile özelliği preload/IPC/main boyunca izle. Native motor **gerekmez**. |
| **Native masaüstü** (C/C++/Swift/Rust) | REA `open_binary` + **Ghidra** (ücretsiz) | Hopper / IDA / JEB paralı → kullanma (kütüphanenin ücretsiz-araç tercihi) |
| **Android APK** | REA `inspect_android_package` + JADX + JDK (ücretsiz) | Kaynak/manifest için Apktool |
| **.NET uygulaması** | REA `inspect_managed_artifact` | Ek araç gerekmez |
| **Oyun** | Yalnız **offline / tek oyunculu** ve resmi mod desteği olanlar | Online + anti-cheat → **dokunma** |

## Süreç (6 adım)

0. **Hedef + izin + niyet.** Hangi uygulama/site, hangi özellik? Sana mı ait, izinli mi, EULA ne diyor? Çıktı kişisel mi, ticari mi? "Benim uygulamam" deyip isim vermiyorsa sor; örnek uygulamayı kendin seçme.
1. **Soru listesi.** "X nasıl çalışıyor"u ölçülebilir sorulara böl: tetikleyici ne, girdi ne, hangi durumlar var, sonuç nereye yazılıyor, hata/kenar durumunda ne oluyor.
2. **Kara kutu gözlem (önce bu).** Özelliği kullan, Network sekmesine bak, farklı girdilerle dene. Web özelliklerinin çoğu burada çözülür. Gözlemin cevaplamadığı soru kalırsa 3'e geç.
3. **REA ile kanıt.** Rotadaki ilk araçla başla, büyük hedefte `detail: "summary"` iste, sonra yalnız açık kalan soruya odaklan. Her bulguyu **gözlem / çıkarım / bilinmeyen** olarak ayır, Evidence ID'yi yaz. Statik analizi "çalışırken gördüm" diye sunma.
4. **Davranış spesifikasyonu (köprü belge).** Girdi→çıktı, durum makinesi, kenar durumlar, performans beklentisi, **kabul testleri**. Kod parçası, metin, görsel YOK. Kaynaklara (Evidence ID) atıf var.
5. **Kendi implementasyonun.** Yeni oturumda yalnız spesifikasyondan yaz; kendi isimlendirmen, kendi tasarım dilin (renk, tipografi, ikon, mikro-metin). Tasarım için kütüphanedeki akışları kullan.
6. **Doğrula + farklılaştır.** Kabul testleri geçiyor mu? Farklılaştırma listesi: isim/logo/renk paleti/metinler/ikonlar/ekran düzeni **onlarınkinden ayrışıyor mu**? Kullanıcı ikisini karıştırabilir mi? Karıştırabiliyorsa bitmedi.

## REA kurulumu (Claude Code)

- Gereksinim: Node.js 22.x (≥22.19) / 24.x (≥24.11) / 26+ ve npm.
- Önce ne değişeceğini gör: `npx -y rea-agents@latest setup --client claude_code --dry-run`
- Kur: `npx rea-agents setup` → Claude Code'u seç, değişiklikleri incele, onayla → **Claude Code'u yeniden başlat** (MCP araçları ancak yeni oturumda görünür). Kontrol: `claude mcp list`.
- MCP kurmadan, yalnız JS/Electron için CLI: `npx -y rea-agents@latest analyze-javascript-application /mutlak/yol/app --json`
- Güncelle: `npx rea-agents@latest setup` (hızlı değişiyor). Kaldır: `claude mcp remove --scope user rea`.
- **Tedarik zinciri:** yalnız `github.com/morluto/rea`, `rea.tools` ve npm `rea-agents`. README'nin kendisi uyarıyor: benzer isimli repo/kopyalanmış README resmî olduğunu göstermez.
- Analiz yerel çalışır; ama bulgular modele gider → gizli/müşteri uygulamasını incelerken bunu hesaba kat.
- Repoda Türkçe README var: `docs/readme/README_tr.md`.

## Çıktı standardı
- **Bulgu defteri:** her iddia → kaynak (gözlem notu / Evidence ID) · güven · bilinmeyenler. Açık kalan soru "çözüldü" diye işaretlenmez.
- **Davranış spesifikasyonu:** kodsuz, kabul testleriyle.
- **Kendi kodun + testleri.**
- **Farklılaştırma kontrol listesi** işaretlenmiş.

## Yaygın hatalar
- Gözlemle çözülecek web özelliği için doğrudan decompile'a dalmak (zaman + gereksiz hukuki risk).
- Minify/decompile çıktısını "referans" diye projeye taşımak — temiz-oda bozulur.
- Pseudocode'u kesin gerçek sanmak; kabul testi olmadan "aynısını yaptım" demek.
- Ekranı birebir kopyalayıp sadece logoyu değiştirmek (trade dress riski devam eder).
- Online oyun/servis üzerinde deney yapmak (ban, ToS, olası suç).
- Sahte "REA" repolarından kurulum.

## 🔗 Bununla birleştir
- **Site görünümü / tasarım tarafı:** [[Web Sitesi Yapımı — MOC]] · [[Claude Design — Tasarım Çıkar, Claude Code'da Optimize Et (referans)]] · [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]] · [[Stitch Metodu — Google Stitch + Claude Code (MCP) (referans)]]
- **Tarayıcı gözlemi (ücretsiz):** [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]]
- **Kurduğun özelliği test et:** `test-kalite/test-kalite`
- **Müşteriye "daha ucuz, kendi versiyonun" olarak satacaksan:** `is-satis/cozum-sat-website-degil` — ama satılan şey **çözüm**, başkasının markası değil.
- **Komut ikizi:** `/araclar:site-ve-yetenek-kopyalama`
