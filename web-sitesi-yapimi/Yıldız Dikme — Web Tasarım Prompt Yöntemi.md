---
tags: [rehber, web-tasarim, prompt, yontem, kaynak]
guncelleme: 2026-06-03
---

# 📐 Yıldız Dikme — Web Tasarım Prompt Yöntemi

> [[00 HOME|🏠 Ana sayfaya dön]]
> [@YildizDikme](https://github.com/YildizDikme) — Claude'a doğru teknik prompt vererek **ödül seviyesinde dinamik web siteler** yapıyor. Bu not, videolarındaki tekrar eden yöntemi damıtır. Takip edilecek tasarım kaynağı; yeni blueprint geldikçe buraya bağlanır.

## Üretilen blueprint'ler (bu yöntemle)
- 🧱 [[Blueprints MOC|threejs-fluid-portfolio]] — fluid-reveal portfolyo (Three.js cursor-trail).
- 🧱 [[Blueprints MOC|3d-camera-landing-page]] — scroll'da dönen 3D model (R3F/WebGL).

## Yöntemin özü (10 kural)
1. **Önce teknolojiyi seç, sonra prompt yaz.** "WebGL + React Three Fiber/Three.js ile" de. Yoksa Claude 3D modeli anlamaz, yapamaz. (En kritik adım.)
2. **İlham al, kopyalama.** Ödüllü bir siteyi referans ver ama "kopyalama, ilham al" de → akışkan formu yakalar, **~%90 benzerini** üretir.
3. **Detaylı ilk prompt İngilizce.** AI İngilizceyi daha iyi anlıyor; Türkçe yaz → çevir. Küçük düzeltmeleri Türkçe yapabilirsin.
4. **Dosya yapısı / komponent ayrımını söyle** (yazılımcı gözüyle). Bu kısım projeden projeye değişmez — bir kez öğren, hep kullan.
5. **3D'de sahne + ışık + kamera** ayarını açıkça iste. Model bunlar olmadan oturmaz.
6. **Pozisyonları/animasyonları manuel ver + "değiştirme" de.** Kamera konumlarını AI tek seferde doğru yapamaz; sen oturt, "asla atlama/değiştirme" de.
7. **"Yaptığın tasarımları değiştirme"** — tek cümle. Uzun promptlarda AI halüsinasyonla driftler; bu onu sabitler. (Claude/Open Cloud/Horizons hepsinde aynı.)
8. **Kısa promptlar > tek dev prompt.** Bir işi ~20 küçük adımda yapmak, 5 devasa promptan sağlıklı. Çok uzun prompt = halüsinasyon.
9. **Performansı optimize ettir** (mobil + desktop ayrı) → Lighthouse %90+. 3D'de bile.
10. **"Lokalde ayağa kaldır, göster"** ile bitir. Bir bölümü değiştirirken: ekran görüntüsü + "sadece bunu değiştir, gerisine dokunma" → bütünlük korunur.

## Claude Design akışı (tasarım ↔ kod)
Tasarım-ağırlıklı işlerde: **Claude Design**'da ana tasarımı + UI kit'i çıkar → export → **Claude Code**'da performans/loading/animasyon/responsive optimize et. Claude Design güzel tasarlar ama performansı zayıf (Lighthouse ~%71). Detay: [[Claude Design — Tasarım Çıkar, Claude Code'da Optimize Et (referans)]].

## 3D model kaynağı
- **Sketchfab** — ücretli + ücretsiz GLB modeller. Three.js için **GLB** formatı.
- **2MB sürümünü** indir (6MB değil): detay biraz az ama performans çok daha iyi, hızlı açılır.

## No-code alternatifi
İşlem yapabilen (login/rezervasyon/mail) MVP'yi backend kurmadan istiyorsan → [[Hostinger Horizons — No-Code İşlevsel MVP (referans)]] (entegre backend). Kod sahipliği/taşınabilirlik istiyorsan → Claude Code + Supabase ([[AI Uygulaması — Teknoloji Seçimi Handbook]]).
