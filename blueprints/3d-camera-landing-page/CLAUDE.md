# 3D Scroll-Animasyonlu Landing (WebGL) — Blueprint

## Amaç
Scroll ile **3D model dönen** sinematik landing page. Sayfa açılışında loading animasyonu (bitene kadar scroll kilitli), sonra kaydırdıkça kamera/model dönerek her açıdan görünüyor; yukarıdan ışık parlaması. Mobil + tablet + desktop optimize, Lighthouse ~%92+.

> ⚠️ Tek-dosya değil — gerçek **Next.js 14 + React Three Fiber** projesi (çalışan kod hazır). Klonla → modeli/metni değiştir.

## Kaynak & atıf
Yıldız Dikme (**[@YildizDikme](https://github.com/YildizDikme/3d-camera-landing-page)**), 3JS dokümantasyonundaki kamera örneğinden ilham. Atıf koru. Yöntem: [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]].

## Stack
Next.js 14 (app router) · React Three Fiber + drei · GSAP (scroll) · Three.js · Tailwind · TypeScript.

## Yapı
```
app/                 → layout, page, globals.css
components/
  CameraModel.tsx    → GLB modeli yükler/döndürür
  Scene.tsx / SceneClient.tsx → R3F canvas, ışık + kamera + sahne
  LoadingScreen.tsx  → açılış (scroll kilitli)
  ScrollSections.tsx + scrollStates.ts → scroll'a bağlı kamera pozisyonları
  ProceduralEnvironment.tsx → ortam/ışık
public/models/camera.glb → 3D model (~2.8MB)
```

## Çalıştırma
```bash
npm install
npm run dev      # → localhost:3000
npm run build    # üretim
```

## Özelleştirme (Claude'a yaptır)
1. **Modeli değiştir:** `public/models/camera.glb` yerine kendi GLB'ni koy (şişe, ayakkabı, ürün…). **Sketchfab**'ten ücretsiz model indir; **2MB sürümü** seç (6MB performansı düşürür).
2. **Kamera pozisyonları (KRİTİK):** `scrollStates.ts`'teki scroll→kamera konumlarını yeni modele göre ayarla. Bunu manuel deneyip oturtmak gerekir — AI tek seferde doğru yapamaz.
3. **İçerik/metin:** `ScrollSections.tsx`, `app/page.tsx`.
4. **Tema/font:** Tailwind + `globals.css`.
5. **Sahne:** ışık/kamera/environment `Scene.tsx`'te.

## Kritik dersler (videodan)
- **Önce teknolojiyi seç:** "WebGL, React Three Fiber/Three.js ile" de — yoksa Claude modeli anlamaz, yapamaz.
- **Sahne + ışık + kamera** ayarını açıkça iste (3D'de model bunlar olmadan oturmaz).
- **Pozisyonları manuel ver, "değiştirme" de** — animasyon/konumları AI bozmasın.
- **Performansı optimize et** (mobil/desktop ayrı) → Lighthouse %90+.
- **Loading scroll'u kilitlesin** animasyon bitene kadar.

## İlişkili
- 🧱 [[Blueprints MOC|threejs-fluid-portfolio]] — aynı yazarın fluid-reveal portfolyosu.
- 🎭 [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] — performans/test.
- 📐 [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]] — yöntem.
