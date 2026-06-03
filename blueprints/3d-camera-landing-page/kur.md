# Kur: 3D Scroll-Animasyonlu Landing (WebGL)

Bu blueprint **hazır çalışan kod** (Next.js + React Three Fiber). Sıfırdan üretme; klonla, çalıştır, modeli/markayı uyarla.

## Adımlar
1. Klasörü hedef projeye kopyala (ya da burada çalış).
2. `CLAUDE.md`'yi oku — yapı + kritik dersler.
3. Çalıştır:
   ```bash
   npm install
   npm run dev      # localhost:3000
   ```
4. Kullanıcıya sor: hangi 3D model (Sketchfab GLB, **2MB sürüm**), metinler, marka rengi.
5. Uyarla:
   - `public/models/camera.glb` → yeni GLB.
   - `components/scrollStates.ts` → scroll→kamera pozisyonları (yeni modele göre **manuel** ayarla, kritik).
   - `ScrollSections.tsx` / `app/page.tsx` → içerik; Tailwind/`globals.css` → tema.
6. Performansı kontrol et (Lighthouse %90+ hedefle), mobil/desktop test.
7. Deploy: `npm run build` → Vercel/Netlify.

> Atıf: Yıldız Dikme (@YildizDikme). Sıfırdan benzerini istersen: önce "WebGL + React Three Fiber/Three.js" de, sahne+ışık+kamera iste, pozisyonları manuel ver. Bkz. [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]].
