---
tags: [moc, blueprints]
guncelleme: 2026-06-04
---

# 🧱 Blueprint'ler — Hazır Uygulama İskeletleri

> [[00 HOME|🏠 Ana sayfaya dön]]
> Çoğu blueprint tek-dosya (`index.html`) çalışan bir uygulamaya derlenir; bazıları küçük çok-dosyalı projeler (Vite/Three.js vb. — hazır kod, klonla & uyarla). Klasörde **`CLAUDE.md`** (spec) + **`kur.md`** (`/kur` komutu) bulunur.
> Kullanım: blueprint klasörünü yeni projeye kopyala → `kur.md`'yi `.claude/commands/`'a koy → Claude'da `/kur` yaz. Detay: [[Claude için kullanım]].

| Blueprint | Amaç | Dosyalar |
|---|---|---|
| **3d-camera-landing-page** | Scroll ile **3D model dönen** sinematik landing page. Sayfa açılışında loading animasyonu (bitene kadar scroll kilitli), sonra kaydırdıkça kamera/model dönerek | [[blueprints/3d-camera-landing-page/CLAUDE\|spec]] · [[blueprints/3d-camera-landing-page/kur\|/kur]] |
| **ai-chatbot-widget** | Isletmeler icin ozel chatbot widget'i olusturucu. Kullanici sol panelde botun adini, gorunumunu, soru-cevap ciftlerini ve tonunu ayarlar; sag panelde canli on i | [[blueprints/ai-chatbot-widget/CLAUDE\|spec]] · [[blueprints/ai-chatbot-widget/kur\|/kur]] |
| **analytics-dashboard** | Kullanıcı bir YouTube kanal URL'si girer, **Apify** ile gerçek kanal verileri çekilir ve dashboard'da gösterilir: - Abone sayısı, toplam görüntülenme, video say | [[blueprints/analytics-dashboard/CLAUDE\|spec]] · [[blueprints/analytics-dashboard/kur\|/kur]] |
| **email-kampanya-yoneticisi** | B2B cold email kampanyalarini yoneten bir kontrol paneli. Onceden doldurulmus 3 kampanya, email dizisi editoru, kisi birlestirme alanlari ve gorsel donusum huni | [[blueprints/email-kampanya-yoneticisi/CLAUDE\|spec]] · [[blueprints/email-kampanya-yoneticisi/kur\|/kur]] |
| **fatura-olusturucu** | Canli onizlemeli profesyonel fatura olusturucu. Sol tarafta editor formu, sag tarafta beyaz A4 fatura onizlemesi. PDF indirme destegi. API gerektirmez. | [[blueprints/fatura-olusturucu/CLAUDE\|spec]] · [[blueprints/fatura-olusturucu/kur\|/kur]] |
| **fiyat-hesaplayici** | E-ticaret saticilarinin urun fiyatlandirmasini optimize etmesini saglayan hesaplayici. Maliyet, kargo, komisyon ve hedef kar marjindan satis fiyati hesaplar. "R | [[blueprints/fiyat-hesaplayici/CLAUDE\|spec]] · [[blueprints/fiyat-hesaplayici/kur\|/kur]] |
| **lead-scraper-panel** | Apify API entegrasyonlu gercek lead scraping paneli. Kullanici Google Maps uzerinden isletme verisi ceker, tabloda gorur, CSV olarak indirir. Fallback olarak 25 | [[blueprints/lead-scraper-panel/CLAUDE\|spec]] · [[blueprints/lead-scraper-panel/kur\|/kur]] |
| **portfolio-site-builder** | Tarayici icinde calisan, surukleme ve birakma destekli bir portfolyo site olusturucu. Kullanici hazir bilesenleri ekleyerek, duzenleyerek ve siralayarak kendi p | [[blueprints/portfolio-site-builder/CLAUDE\|spec]] · [[blueprints/portfolio-site-builder/kur\|/kur]] |
| **qr-menu** | Restoran ve kafelerin dijital menusunu olusturup QR kod ile paylasabildigi tek sayfalik uygulama. Sol tarafta menu duzenleyici, sag tarafta canli onizleme. Her | [[blueprints/qr-menu/CLAUDE\|spec]] · [[blueprints/qr-menu/kur\|/kur]] |
| **randevu-sistemi** | Kucuk isletmeler icin haftalik takvim gorunumlu randevu sistemi. Slota tiklayarak randevu olusturma, hizmet secimi, durum yonetimi ve localStorage ile kalicilik | [[blueprints/randevu-sistemi/CLAUDE\|spec]] · [[blueprints/randevu-sistemi/kur\|/kur]] |
| **restoran-siparis-sistemi** | Sistem 3 görünümden oluşuyor, URL hash ile yönetiliyor: - `#menu` — Müşteri menü & sipariş sayfası (varsayılan) - `#mutfak` — Mutfak ekranı (gelen siparişler) - | [[blueprints/restoran-siparis-sistemi/CLAUDE\|spec]] · [[blueprints/restoran-siparis-sistemi/kur\|/kur]] |
| **scroll-narrative-site** | Premium bir marka için (çay, kozmetik, parfüm, takı, kahve vb.) **scroll ile ilerleyen sinematik anlatı** tek-sayfa site. Arka planda kullanıcı kaydırdıkça oyna | [[blueprints/scroll-narrative-site/CLAUDE\|spec]] · [[blueprints/scroll-narrative-site/kur\|/kur]] |
| **site-builder-v2** | — | [[blueprints/site-builder-v2/CLAUDE\|spec]] |
| **stok-dashboard** | E-ticaret isletmeleri icin gorsel acidan etkileyici, tam islevli envanter yonetim paneli. Urunleri listeleme, ekleme, duzenleme, silme, arama/filtreleme, SVG gr | [[blueprints/stok-dashboard/CLAUDE\|spec]] · [[blueprints/stok-dashboard/kur\|/kur]] |
| **threejs-fluid-portfolio** | Koyu, editoryal bir kişisel/ajans portfolyo sitesi. Ana sayfada **Three.js cursor-trail "fluid reveal" efekti**: mouse'u gezdirdiğin yerde üstteki portrenin alt | [[blueprints/threejs-fluid-portfolio/CLAUDE\|spec]] · [[blueprints/threejs-fluid-portfolio/kur\|/kur]] |
| **thumbnail-olusturucu** | Kullanıcı 1280x720 canvas üzerinde YouTube thumbnail tasarlayabilir: - 5 hazır şablon - Arka plan seçenekleri (renk, gradient, **Fal AI ile oluşturulmuş görsel* | [[blueprints/thumbnail-olusturucu/CLAUDE\|spec]] · [[blueprints/thumbnail-olusturucu/kur\|/kur]] |
| **urun-aciklama-yazici** | E-ticaret urunleri icin profesyonel aciklama metinleri ve AI-destekli urun gorseli ureten tek sayfalik uygulama. Kullanici urun bilgilerini girer, uygulama basl | [[blueprints/urun-aciklama-yazici/CLAUDE\|spec]] · [[blueprints/urun-aciklama-yazici/kur\|/kur]] |
| **urun-yazici** | E-ticaret urunleri icin profesyonel aciklama metinleri ve AI-destekli urun gorseli ureten tek sayfalik uygulama. Kullanici urun bilgilerini girer, uygulama basl | [[blueprints/urun-yazici/CLAUDE\|spec]] |
| **video-icerik-uretici** | Kullanıcı video konusu, hedef kitle, video uzunluğu ve içerik tipi girer. Sistem şunları üretir: - 5 başlık önerisi - SEO uyumlu açıklama (zaman damgalı) - 30 e | [[blueprints/video-icerik-uretici/CLAUDE\|spec]] · [[blueprints/video-icerik-uretici/kur\|/kur]] |
| **vize-sponsorlu-is-outreach** | Vize sponsorluğu gerektiren bir aday için, **sponsor olabilen şirketlere** kişiselleştirilmiş video + e-posta ile başvuru kampanyası. ATS'i atlayıp hiring manag | [[blueprints/vize-sponsorlu-is-outreach/CLAUDE\|spec]] · [[blueprints/vize-sponsorlu-is-outreach/kur\|/kur]] |
| **workflow-builder** | n8n tarzi gorsel bir workflow olusturucu. Kullanici surukle-birak ile node'lar ekler, birbirine baglar ve ornek bir otomasyon akisini canli olarak calistirir. T | [[blueprints/workflow-builder/CLAUDE\|spec]] · [[blueprints/workflow-builder/kur\|/kur]] |

---

## 🏭 Sistem Blueprint'leri (klonlanabilir tam sistemler)
Tek-dosya değil; klonlayıp markaya bağladığın tam Claude Code sistemleri.

| Sistem | Ne | Klonla & detay |
|---|---|---|
| **İçerik Fabrikası** | Marka bazlı uçtan uca içerik üretim + otomatik yayın hattı (boş şablon — her marka için klonla) | `cp -R "blueprints/icerik-fabrikasi" <hedef>` · [[blueprints/icerik-fabrikasi/README\|README]] · [[İçerik Fabrikası — Referans Sistem\|detay]] |

> Yerel kopya `blueprints/icerik-fabrikasi/` (API key'siz, [FILL:] placeholder'lı şablon). Çalışan/güncel sürüm: `~/Desktop/SaaS Projects/İçerik Fabrikası`.
