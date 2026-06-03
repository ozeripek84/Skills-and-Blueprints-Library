# Three.js Fluid-Reveal Portfolyo — Blueprint

## Amaç
Koyu, editoryal bir kişisel/ajans portfolyo sitesi. Ana sayfada **Three.js cursor-trail "fluid reveal" efekti**: mouse'u gezdirdiğin yerde üstteki portrenin altından **ikinci bir portre** (ör. kasklı hali) sızar; mouse hareketsizken bile akışkan efekt kendi döner. GSAP tarzı akan yazı, özenli tipografi.

> ⚠️ Bu **tek-dosya değil**, gerçek **Vite + Three.js** projesi (çalışan kod klasörde hazır). Sıfırdan üretmiyoruz; **klonla → kendi markana uyarla.**

## Kaynak & atıf
Yıldız Dikme (**[@YildizDikme](https://github.com/YildizDikme/threejs-fluid-reveal-portfolio)**) tarafından, ödüllü bir F1 pilotu sitesinden ilham alınarak Claude ile canlı geliştirildi. Orijinal README ve lisans korunmuştur — kullanırken kaynağa atıf yap.

## Yapı
```
index.html      → markup + içerik
script.js       → Three.js sahne, cursor-trail mantığı
shaders.js      → fluid/reveal shader (efektin kalbi)
styles.css      → tema, tipografi, layout
public/         → portrait_top.(jpg/png) görünen, portrait_bottom.png altta beliren
package.json    → vite + three (npm)
```

## Çalıştırma
```bash
npm install
npm run dev
```

## Özelleştirme (Claude'a yaptır)
1. **Portreleri değiştir:** `public/portrait_top.*` ve `public/portrait_bottom.png`'i kendi 2 görselinle değiştir (aynı isim/boyut oranı). Üstteki normal, alttaki "reveal" hali.
2. **İçerik:** `index.html`'de isim, başlık, bölümler, menü, akan yazı.
3. **Tema/font:** `styles.css`'te renk paleti, tipografi.
4. **Efekt ayarları:** `shaders.js` / `script.js`'te akışkanlık, dönme hızı, kenar gölgesi, trail genişliği (videoda "config" denen genel ayarlar).
5. Mobil: cursor yok → efekt otomatik döner (zaten responsive).

## Prompt mühendisliği dersi (videodan)
- Sıfırdan benzerini yaptırmak istersen: **detaylı, teknik prompt'u İngilizce** ver (AI İngilizceyi daha iyi anlıyor) — stack, dosya yapısı, shader/efekt mantığı, matematik, fontlar.
- Küçük düzeltmeleri (renk/yazı) Türkçe yazabilirsin.
- Ödüllü siteden **ilham al, kopyalama** de → akışkan formu yakalar, %90 benzerini üretir.

## İlişkili
- 📐 [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]] — bu blueprint'in yöntemi.
- 🧱 [[Blueprints MOC|3d-camera-landing-page]] — aynı yazarın 3D scroll landing'i.
- 🧱 [[Blueprints MOC|scroll-narrative-site]] — sinematik scroll sitesi (video-arka-plan).
- 🎨 [[frontend-design]] skill'i (built-in) — distinctive UI.
- 🎭 [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] — siteyi Claude'a test ettir.
