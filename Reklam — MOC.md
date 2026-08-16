---
tags: [moc, reklam, ads, pazarlama, performans]
guncelleme: 2026-08-16
---

# 📣 Reklam — Harita

> [[00 HOME|🏠 Ana sayfaya dön]]
> Ödemeli reklamla ilgili **her şey** burada toplandı: strateji, rakip istihbaratı, kreatif üretimi, varış sayfası, ölçüm ve outreach. "Reklam vereceğim, nereden başlayayım / hangi parça nerede?" sorusunun tek giriş noktası.
> **Not:** bu bir **indeks**tir — skill'ler kendi kategorilerinde duruyor (taşınmadı; `.gen_index.py` kategorileri klasörden türetiyor, taşımak skill/command ikizliğini bozardı). Buradan hepsine linklisin.

---

## 🧭 Hızlı karar — ne lazım?

- **Hiç reklam vermedim, nereden başlarım?** → `marketing-skills/skills/ads` (strateji) → sonra aşağıdaki **Kreatif** katmanı → **Varış** katmanı → **Ölçüm**
- **Ne yazacağımı/göstereceğimi bilmiyorum** → [[skill-kutuphanesi/icerik-pazarlama/rakip-reklam-istihbarati|⚙️ rakip-reklam-istihbarati]] (rakipte ne tuttuğunu bul) → `marketing-skills/skills/ad-creative`
- **Reklam metni/varyantı lazım** → `marketing-skills/skills/ad-creative` · `skills/copywriting`
- **Görsel/video kreatif lazım** → [[İçerik Fabrikası — Referans Sistem]] · [[AI UGC-Reklam Video Üretici (open-source, self-host) — referans]] · [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]]
- **Tıklayan geliyor ama satın almıyor** → [[skill-kutuphanesi/icerik-pazarlama/donusum-landing|⚙️ donusum-landing]] · `marketing-skills/skills/cro`
- **Hangi reklam işe yarıyor bilmiyorum** → **Ölçüm** katmanı (aşağıda). Önce metrik merdivenini oku.
- **Reklam yerine/yanında müşteri bulma** → **Outreach** katmanı · [[Yetenekler MOC|is-satis/lead-gen-ajansi]]
- **Reklamı müşteriye hizmet olarak satacağım** → [[Yetenekler MOC|is-satis/ai-ajans-modeli]] + ⚠️ [[Lokal İşletmeye AI Hizmet Satışı — dürüst değerlendirme + kütüphane haritası (referans)]]

---

## 1️⃣ Strateji & kampanya yönetimi
| Kaynak | Ne yapar |
|---|---|
| `marketing-skills/skills/ads` | **Ana kaynak.** Kampanya stratejisi, hedefleme, teklif (bidding), bütçe, ROAS/CPA optimizasyonu. Google/Meta/LinkedIn/X. |
| `marketing-skills/tools/integrations/meta-ads.md` | Meta Marketing API — kendi hesabının kampanya/rapor verisini çekme (auth + endpoint'ler). |
| `marketing-skills/skills/offers` · `skills/marketing-psychology` | Teklif kurgusu ve ikna psikolojisi — reklamın *ne söylediğini* belirler. |
| [[Yetenekler MOC\|is-satis/ai-ajans-modeli]] | Reklamı **hizmet olarak** satacaksan operasyon modeli (ICP → paket → yakalama → teslimat → retention). |
| [[Yetenekler MOC\|is-satis/dijital-urun-lansmani]] | Lansman kampanyası (sales page, bonus/upsell) — reklamın arkasındaki teklif. |

## 2️⃣ Rakip istihbaratı
| Kaynak | Ne yapar |
|---|---|
| [[skill-kutuphanesi/icerik-pazarlama/rakip-reklam-istihbarati\|⚙️ rakip-reklam-istihbarati]] · [[project mdleri/icerik-pazarlama/rakip-reklam-istihbarati\|▶️ command]] | **Rakibin yayındaki reklamları** + haftalık hayatta-kalma farkı (arşiv → diff → kreatif brief). Kütüphanenin bu alandaki tek yeteneği. |
| `marketing-skills/skills/competitor-profiling` | Rakibin **sitesini/konumlandırmasını** profilleme (reklamlarını değil). |
| `marketing-skills/skills/competitors` | Rakip karşılaştırma / "X alternatifi" sayfaları (SEO + satış). |

## 3️⃣ Kreatif — metin
| Kaynak | Ne yapar |
|---|---|
| `marketing-skills/skills/ad-creative` | **Ana kaynak.** Toplu reklam metni/başlık/varyant üretimi, performansa göre iterasyon. |
| `marketing-skills/skills/copywriting` | Genel satış metni disiplini. |
| [[skill-kutuphanesi/icerik-pazarlama/premium-site-metni\|⚙️ premium-site-metni]] | Marka/premium konumlandırma metni (reklamın vardığı yerin dili). |
| [[AI Yazı — İnsan Sesi & Voice Match Prompt Paketi — dürüst kullanım (referans)]] | Metni AI-tellerinden arındır, kendi sesine çevir. Reklam metninin üstüne **düzenleme katmanı**. |

## 4️⃣ Kreatif — görsel & video
| Kaynak | Ne yapar |
|---|---|
| [[İçerik Fabrikası — Referans Sistem]] | Uçtan uca üretim + otomatik yayın hattı (marka bazlı, sürekli). **Ölçekli üretimin merkezi.** |
| [[AI UGC-Reklam Video Üretici (open-source, self-host) — referans]] | **Ücretsiz/açık** — UGC & reklam videosu (LTX-2, text/image-to-video, 30 sahne). Önce buna bak. |
| [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]] | Paralı/bulut — Marketing Studio (tek link → reklam videosu), Soul karakter, virality prediction. |
| `topview-skill` | Video, görsel, avatar, TTS (API). |
| [[Blueprints MOC\|blueprints/video-icerik-uretici]] · [[Blueprints MOC\|blueprints/thumbnail-olusturucu]] | Çalışan iskeletler — video üretimi ve thumbnail. |
| [[skill-kutuphanesi/icerik-pazarlama/instagram-carousel-uretici\|⚙️ instagram-carousel-uretici]] · [[skill-kutuphanesi/icerik-pazarlama/og-image-generator\|⚙️ og-image-generator]] | Carousel (1080×1350 PNG export) ve OG/paylaşım görseli. |
| [[skill-kutuphanesi/icerik-pazarlama/sosyal-icerik-uretici\|⚙️ sosyal-icerik-uretici]] | Organik sosyal içerik (reklamın ücretsiz kardeşi; kreatif havuzunu besler). |
| `marketing-skills/skills/{image,video,social}` | Vendor tarafındaki karşılıkları. |

## 5️⃣ Varış noktası (reklam tıklandıktan sonrası)
| Kaynak | Ne yapar |
|---|---|
| [[skill-kutuphanesi/icerik-pazarlama/donusum-landing\|⚙️ donusum-landing]] | **"Güzel" değil DÖNÜŞTÜREN** landing: 5 conversion ilkesi, hero/VSL/çok-adımlı form, form→DB→takip funnel'ı. |
| `marketing-skills/skills/cro` | Dönüşüm oranı optimizasyonu. |
| [[skill-kutuphanesi/icerik-pazarlama/landing-ab-test\|⚙️ landing-ab-test]] | Landing varyant testi + istatistiksel analiz. |
| [[skill-kutuphanesi/otomasyon/lead-capture\|⚙️ lead-capture]] | Form → CRM → bildirim → otomasyon. |
| [[Web Sitesi Yapımı — MOC]] | Sayfanın kendisini kurmak/güzelleştirmek (tüm site yapımı tek çatı). |

## 6️⃣ Ölçüm & analiz
| Kaynak | Ne yapar |
|---|---|
| [[skill-kutuphanesi/veri-analitik/a-b-test\|⚙️ a-b-test]] | Genel A/B altyapısı — varyant ataması, takip, analiz. |
| [[skill-kutuphanesi/veri-analitik/kullanici-takip\|⚙️ kullanici-takip]] | Event, funnel, cohort — reklamdan satışa yolu görmek. |
| [[skill-kutuphanesi/veri-analitik/dashboard-bi\|⚙️ dashboard-bi]] · [[Blueprints MOC\|blueprints/analytics-dashboard]] | Rapor/dashboard katmanı. |
| [[skill-kutuphanesi/veri-analitik/csv-islemci\|⚙️ csv-islemci]] | Reklam panelinden CSV export'u işlemek — **Claude'a veri vermenin en pratik yolu.** |
| `marketing-skills/skills/analytics` · `tools/integrations/meta-ads.md` | Vendor tarafı ölçüm + API. |

### 📐 Metrik merdiveni (hangi aşamada hangi sayıya bakılır)
| Aşama | Bütçe | Bakılacak metrik | Neden |
|---|---|---|---|
| **1 — Eleme** | Düşük, çok kreatif | **CPC / CPM**, video izlenme-tutma | Satın alma hacmi yok; dönüşüme bakmak gürültü okumaktır |
| **2 — Doğrulama** | Orta, az kreatif | Dönüşüm oranı, satın alma başına maliyet | İlk satışlar geldi, huni gerçek |
| **3 — Ölçek** | Yüksek, yalnız kanıtlanmış | **ROAS**, geri ödeme süresi | Tek soru: 1 harcamaya ne dönüyor |

## 7️⃣ Outreach (reklam yerine / yanında müşteri bulma)
| Kaynak | Ne yapar |
|---|---|
| [[Yetenekler MOC\|is-satis/lead-gen-ajansi]] | ToS-uyumlu, etik lead-gen ajansı. Çizgi: **az ama isabetli > çok ama spam.** |
| [[Yetenekler MOC\|is-satis/outbound-lead-agent]] | Bunun Claude Code'daki otomatik ajan hâli (BLAST). |
| [[Yetenekler MOC\|is-satis/cozum-sat-website-degil]] | "Kimse website istemiyor" — lokal esnafa asıl satan şey. |
| [[Blueprints MOC\|blueprints/lead-scraper-panel]] · [[Blueprints MOC\|blueprints/email-kampanya-yoneticisi]] | Çalışan iskeletler. |
| `marketing-skills/skills/{prospecting,cold-email,lead-magnets}` | Vendor tarafı. |

---

## ⚠️ Bu alanın ortak dürüstlük çizgisi
Kütüphanedeki reklam işlerinin **hepsi** için geçerli:

- **⚠️⚠️ Claude senin reklam hesabını göremez.** CPC/ROAS/dönüşüm rakamlarını CSV export ya da API ile **sen vereceksin**; vermezsen **uydurur**. Panel görüntüsü olan videolara aldanma — o kişinin kendi hesabı.
- **Düşük bütçede fark gürültüdür.** Günlük €10'la gelen 3 satın alma istatistiksel sinyal değil. Erken aşamada **eleme** yap, karar verme.
- **Rakipte tutan sende tutmayabilir** — onun kitlesi ve pikseli sende yok. Rakip verisi başlangıç noktası verir, garanti vermez.
- **Yapıyı kopyala, varlığı değil.** Rakibin görselini/metnini birebir kopyalamak telif/marka riski; açı, hook yapısı, format, CTA deseni kopyalanır.
- **Gerçek bir mekânın/ürünün görselini "düzeltmenin" sınırı var.** Işık/renk makul; nesne silmek, olmadığı gibi göstermek yanıltıcı reklam riski → [[Lokal İşletmeye AI Hizmet Satışı — dürüst değerlendirme + kütüphane haritası (referans)]]
- **Outreach hacmi:** KVKK/İYS (TR), GDPR (AB) + platform limitleri. Günde yüzlerce otomatik mesaj kütüphane çizgisinin dışında.
- **Ücretsiz araç önce.** Toplama → [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] · üretim → [[AI UGC-Reklam Video Üretici (open-source, self-host) — referans]]. Paralı/bulut araç (Apify, Higgsfield) hız satın alır, yetenek değil.
- **Altın kural: kreatif ≠ satış, demo ≠ satış, plan ≠ gelir.**

## 🔮 Bakım
Reklamla ilgili yeni bir video/paket gelirse: **önce bu haritaya bak.** Büyük olasılıkla karşılığı zaten var → mevcut skill'i zenginleştir. Gerçekten yeni bir parçaysa ilgili kategoriye skill+command ekle, sonra bu notu güncelle.

> İlişkili haritalar: [[Yetenekler MOC]] · [[Blueprints MOC]] · [[Dış Kütüphaneler MOC]] (marketing-skills 45 skill) · [[Web Sitesi Yapımı — MOC]]
