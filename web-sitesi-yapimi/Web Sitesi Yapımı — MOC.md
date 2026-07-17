---
tags: [moc, web-sitesi, tasarim]
guncelleme: 2026-07-17
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

## ✨ 3 yeni tasarım skill'i — vendor olarak eklendi (2026-06-13)
> Kaynakları teyit edildi ve kütüphaneye klonlandı (`--depth 1`, nested `.git` + yalnızca-Claude harici agent kopyaları temizlendi). Detaylı tablo: [[Dış Kütüphaneler MOC]].
- [[impeccable/README|impeccable]] — Paul Bakaus. Tek `/impeccable` komutu + alt komutlar (`craft`, `shape`, `critique`, `audit`, **`polish`**…), 41 deterministik detektör. Kur: `npx impeccable skills install` → `/impeccable init`.
- [[emilkowalski-skill/skills/emil-design-eng/SKILL|emilkowalski-skill]] — Emil Kowalski (Sonner/Vaul). `emil-design-eng` skill'i: UI polish, komponent, animasyon kararları. Kur: `npx skills add https://github.com/emilkowalski/skill`.
- [[taste-skill/README|taste-skill]] — Leonxlnx. Jenerik "slop" yerine güçlü layout/tipografi/motion; çok sayıda alt-skill (minimalist, brutalist, soft, redesign, brandkit, imagegen…). Kur: `npx skills add https://github.com/Leonxlnx/taste-skill`.

---

## Ne zaman buraya bakılır?
- Müşteriye/projeye **bir web sitesi** çıkaracağın her durumda buradan başla: önce yöntem (Yıldız Dikme / $10K), sonra araç (Claude Code mi, Lovable mı, Hostinger mı), sonra iskelet (blueprint) + tasarım skill'i.
- Kopyalama mantığı yine aynı: [[Claude için kullanım]].
