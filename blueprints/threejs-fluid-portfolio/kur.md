# Kur: Three.js Fluid-Reveal Portfolyo

Bu blueprint **hazır çalışan kod** (Vite + Three.js). Sıfırdan üretme; klonla, çalıştır, kullanıcının markasına uyarla.

## Adımlar
1. Bu klasörü hedef projeye kopyala (ya da burada çalış).
2. `CLAUDE.md`'yi oku — yapı + özelleştirme noktaları.
3. Çalıştır:
   ```bash
   npm install
   npm run dev
   ```
4. Kullanıcıya sor: 2 portre görseli (üst + reveal/alt), isim/başlık, marka rengi, font tercihi.
5. Uyarla:
   - `public/portrait_top.*` ve `public/portrait_bottom.png` → kullanıcının görselleri.
   - `index.html` → isim, bölümler, menü, akan yazı.
   - `styles.css` → renk/tipografi.
   - `shaders.js` / `script.js` → efekt ayarları (akışkanlık, dönme, gölge, trail genişliği).
6. Tarayıcıda kontrol et; istersen Playwright ile test ettir.
7. Deploy: statik build → Vercel/Netlify (gerekirse `vite build`).

> Atıf: orijinal Yıldız Dikme (@YildizDikme). Kaynağı koru.
