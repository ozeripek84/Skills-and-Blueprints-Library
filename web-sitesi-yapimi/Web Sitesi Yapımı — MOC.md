---
tags: [moc, web-sitesi, tasarim]
guncelleme: 2026-10-18
---

# 🌐 Web Sitesi Yapımı — Harita

> [[00 HOME|🏠 Ana sayfaya dön]]
> Site/web yapımıyla ilgili tüm **rehberler, yöntemler ve araç referansları** burada toplandı. "Müşteriye satılabilir bir site nasıl çıkar / hangi araçla / hangi prompt yöntemiyle" sorusunun tek giriş noktası.
> Çalışan **iskeletler** (blueprint) ayrı klasörde duruyor ama aşağıdan linkli; **vendor tasarım skill'leri** de öyle.

---

## 🧭 Hızlı karar — hangi yolu seçeyim?
- **Sıfırdan, kod sahipliği isteyen, ödül-seviyesi dinamik site** (Three.js/WebGL) → [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]] + site blueprint'leri (aşağıda)
- **Premium "pahalı hissettiren" klasik site** (Claude Code'da) → [[$10K Web Sitesi — Claude Code Tasarım İş Akışı]]
- **Kod yazmadan, işlem yapabilen MVP** (login/rezervasyon/mail) → [[Hostinger Horizons — No-Code İşlevsel MVP (referans)]]
- **Yaz-gitsin full-stack site/app/dashboard** → [[Lovable — AI Full-Stack Site-App Üretici (referans)]]
- **Yerel işletmeye tek-sayfa site** (Google Maps linkinden) → [[Brila — Google Maps'ten Yerel İşletme Sitesi (referans)]]
- **Güçlü tasarım + zayıf performans sorununu çöz** → [[Claude Design — Tasarım Çıkar, Claude Code'da Optimize Et (referans)]]
- **Claude Code'un tasarım zayıflığını ücretsiz araçla kapat** (görsel tasarla → MCP ile kodlat) → [[Stitch Metodu — Google Stitch + Claude Code (MCP) (referans)]]
- **Sevdiğin bir sitenin/uygulamanın özelliğini kendi projene almak** (kaynak kodsuz; davranışı kopyala, kod/görsel/marka değil) → `araclar/site-ve-yetenek-kopyalama` (skill + `/araclar:site-ve-yetenek-kopyalama`, REA tersine mühendislik aracıyla)

---

## 📐 Yöntem & prompt rehberleri
- [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]] — ödül seviyesinde dinamik site prompt'lama: önce tech seç, İngilizce detay, ilham al-kopyalama, 3D'de manuel kamera pozisyonu, kısa promptlar, Sketchfab GLB ≤2MB, performans %90+.
- [[$10K Web Sitesi — Claude Code Tasarım İş Akışı]] — frontend-design + ui-ux-pro-max skill'leri, 8 maddelik "$10K çıta" checklist'i, 21st.dev bileşen, görsel hattı, "pahalı hissettir" cilası, mobil, deploy.
- [[Stitch Metodu — Google Stitch + Claude Code (MCP) (referans)]] — Claude Code'un tasarım zayıflığını kapatır: **ücretsiz** Google Stitch'te görsel tasarla → **MCP** (DESIGN.md) ile Claude Code'a taşı → birebir kodlat. 4 adım + hazır Stitch promptu. MCP adımı doğrulandı; yedek: DESIGN.md'yi dosya olarak ver. Zincir: premium-site-metni (copy) → Stitch → Claude Code.

## ✍️ Metin / içerik katmanı (copy-önce — tasarımdan ÖNCE gelir)
> Site "ne diyecek" belli olmadan "nasıl görünecek"e geçme. Metin katmanı burada eksikti; şimdi var:
- [[skill-kutuphanesi/icerik-pazarlama/premium-site-metni|premium-site-metni]] — premium/marka sitesi metnini bölüm bölüm yaz (strateji, hero, güven, hizmet, itiraz, CTA) → **build prompt**a çevir → şüpheci gözle revize et. Adım 7 çıktısı doğrudan yukarıdaki build/tasarım araçlarını besler. `/icerik-pazarlama:premium-site-metni`
- [[skill-kutuphanesi/icerik-pazarlama/donusum-landing|donusum-landing]] — tek-hedef **lead-capture** landing (form→DB→takip, Cloudflare deploy). Tam marka sitesi değil, tek dönüşüm istiyorsan.

## 🛠️ No-code / AI üreticiler (referans)
- [[Hostinger Horizons — No-Code İşlevsel MVP (referans)]] — kod yazmadan **işlem yapabilen** uygulama (login/rezervasyon/mail), entegre backend. Hızlı MVP; kod sahipliği istersen Claude Code+Supabase.
- [[Lovable — AI Full-Stack Site-App Üretici (referans)]] — ne istediğini yaz → komple full-stack site/app/dashboard (no-code). Müşteriye satılabilir.
- [[Brila — Google Maps'ten Yerel İşletme Sitesi (referans)]] — bir Google Maps linki → gerçek yorum/foto/saat ile tek-sayfa yerel işletme sitesi. Yerel işletmelere hizmet olarak satılabilir.

## 🖌️ Tasarım kalitesi / optimizasyon (referans)
- [[Claude Design — Tasarım Çıkar, Claude Code'da Optimize Et (referans)]] — güçlü tasarım/UI kit, zayıf performans → Claude Design'da tasarla, **Claude Code'da optimize et**.

---

## 🧱 İlgili blueprint'ler (çalışan iskeletler — `blueprints/`'te)
> Bunlar fiziksel olarak [[Blueprints MOC]]'ta; `/kur` ile derlenir. Yıldız Dikme yöntemiyle akraba.
- [[blueprints/threejs-fluid-portfolio/CLAUDE|threejs-fluid-portfolio]] — cursor-trail fluid reveal portföy
- [[blueprints/3d-camera-landing-page/CLAUDE|3d-camera-landing-page]] — Next.js + R3F, scroll'da dönen 3D model
- [[blueprints/scroll-narrative-site/CLAUDE|scroll-narrative-site]] — scroll-anlatı sitesi
- [[blueprints/portfolio-site-builder/CLAUDE|portfolio-site-builder]] — portföy site kurucu
- [[blueprints/site-builder-v2/CLAUDE|site-builder-v2]] — genel site kurucu v2

## 🎨 İlgili tasarım skill'leri (vendor — yerinde)
- **frontend-design** (Anthropic) — bende **built-in**; arka planda cesur/özgün tasarıma iter, jenerik AI fontlarını yasaklar.
- [[ui-ux-pro-max-skill/README|ui-ux-pro-max]] — `/ui-ux-pro-max`; 67 UI stili, 161 palet, 57 font çifti, 99 UX kuralı. [[$10K Web Sitesi — Claude Code Tasarım İş Akışı]] bunu kullanır.
- [[Claude + Canva Connector — Tasarım (referans)]] — genel tasarım (form/sunum/kapak); sohbetten Canva'da tasarla. *(Araçlar kümesinde duruyor.)*
- [[Tasarım Brief — Vault Ana Sayfa]] — bu vault'un kendi dashboard'unu Claude Design'a yaptırmak için örnek brief (somut bir "site tasarlat" örneği).

## ✨ 3 tasarım skill'i — vendor (eklendi 2026-06-13 · güncellendi 2026-10-18)
> Kaynakları teyit edildi ve kütüphaneye klonlandı (`--depth 1`, nested `.git` + yalnızca-Claude harici agent kopyaları temizlendi). Detaylı tablo: [[Dış Kütüphaneler MOC]].
- [[impeccable/README|impeccable]] — Paul Bakaus. Tek `/impeccable` komutu + **24** alt komut (`craft`, `shape`, `critique`, `audit`, **`polish`**, **`live`**, `generate`…), **61** deterministik detektör. **4.6.0:** motor Rust'a taşındı (skill/hook Node'suz), UI düzenlemesinde detektörü koşan hook varsayılan kuruluyor (⚠️ onaydan bağımsız çalışır; istemiyorsan `--no-hooks`), iOS/Android ekranları. Kur: `npx impeccable install` → `/impeccable init`. Kurucu için Node ≥ 22.18.0.
- [[emilkowalski-skill/README|emilkowalski-skill]] — Emil Kowalski (Sonner/Vaul). Tek skill'den **15 skill'lik pakete** büyüdü: `animate`, `review-animations`, `improve-animations`, `find-animation-opportunities`, `animation-performance`, `break-ui`, `mobile-native`, `prototype`… Kur: `npx skills@latest add emilkowalski/skills`.
- [[taste-skill/README|taste-skill]] — Leonxlnx. **v2.0.0:** 247 siteden türetilmiş kütüphane + gerçek tarayıcıda ölçen kapı + açık koleksiyonlardan lisanslı görsel bulma. ⚠️ Kendi kör testinde skill'siz Claude'u geçemedi (7.7 vs 7.8); tam koşum 30–45 dk, birkaç yüz bin token. Kur: `npx skills add https://github.com/Leonxlnx/taste-skill`.

### 🎬 Viral "bir gecede tasarımcı gibi görün" videosu — değerlendirme (2026-10-18)
Videodaki üç skill (taste, Emil'in motion skill'i, impeccable) **2026-06-13'ten beri bu kütüphanede**. Yeni not açılmadı; vendor kopyaları güncel sürüme çekildi ve iddialar kaynaklarla karşılaştırıldı.

| Videonun iddiası | Gerçek |
|---|---|
| "Taste, AI arayüzlerinin kök sorununu çözer, insan tasarımcı dokunmuş gibi" | Kendi kör testinde jüri puanı skill'siz Claude'la **aynı** (7.7 vs 7.8). Sağladığı şey ölçülebilir "slop" izlerini (gradient, eyebrow etiket, numaralı bölüm…) temizlemek ve lisanslı gerçek görsel bulmak. |
| "Emil'in motion skill'i, tek komutla gerçek hareket" | Doğru yönde: 15 skill'in 8'i animasyon. Ama denetim/fırsat skill'leri **salt okur**; kodu `animate` yazar. Asıl değer, uzman kurallarının (doğru eğri, süre, özellik) yazılı olması. |
| "Impeccable 20 komut" | **24** komut + 61 detektör. |
| "Ship'ten önce `/polish` çalıştır, tüm UI'ı otomatik süpürür" | Komut `/impeccable polish <hedef>`; hedefli son geçiş. `/polish` kısayolu ancak `/impeccable pin polish` ile oluşur. |
| "Bir gecede tasarımcı" | Bu skill'ler **kötü tasarım izlerini** azaltır. İyi tasarım kararı (marka, içerik, kitle, farklılaşma) yine senden gelir; impeccable'ın kendi sloganı da bu: "iyi tasarım özneldir, kötü tasarım değildir". |
| "'human' yaz, e-kitabı göndereyim" | Takipçi toplama yemi. Konunun kendisi kütüphanede zaten var: [[AI Yazı — İnsan Sesi & Voice Match Prompt Paketi — dürüst kullanım (referans)]]. |

**Nasıl kullan:** Üçünü birden "ana yön" yapma; aynı işi farklı kurallarla yapıyorlar (taste gradient'i ve gölgeyi kapıdan geçirmez, impeccable'ın kendi anti-pattern listesi var) ve çelişen talimat kaliteyi düşürür. Önerilen düzen: **tek ana yön** (sitede ve ürün arayüzünde impeccable; tek seferlik gösterişli landing'de taste v2) + **Emil'in animasyon skill'leri uzman olarak** + son kontrol için `break-ui` ve `/impeccable audit`.

---

## Ne zaman buraya bakılır?
- Müşteriye/projeye **bir web sitesi** çıkaracağın her durumda buradan başla: önce yöntem (Yıldız Dikme / $10K), sonra araç (Claude Code mi, Lovable mı, Hostinger mı), sonra iskelet (blueprint) + tasarım skill'i.
- Kopyalama mantığı yine aynı: [[Claude için kullanım]].
