# Kur: Scroll-Anlatı Lüks Marka Sitesi

Bu dizindeki `CLAUDE.md` dosyasını oku. İçindeki tüm spesifikasyonu takip ederek tek bir `index.html` dosyası oluştur.

## Adımlar
1. `CLAUDE.md`'yi baştan sona oku.
2. Önce kullanıcıya **marka değişkenlerini** sor (MARKA_ADI, SLOGAN, SEKTÖR, AKSENT_RENK, 3 ürün). Cevap yoksa Assam Tea örnek değerleriyle kur.
3. Belirtilen yapıyı içeren `index.html`'i bu dizinde oluştur: loading screen, fixed header (scroll'da blur), scroll progress bar, video hero (`final.mp4`), 3–5 scroll-senkron anlatı bölümü, 3 ürün kartı (alt gradient fade), footer.
4. Inline CSS + JS kullan; Google Fonts hariç harici bağımlılık olmasın.
5. Scroll animasyonları: `IntersectionObserver` + `requestAnimationFrame`; `prefers-reduced-motion` ve mobil poster fallback ekle.
6. Asset'ler henüz yoksa: `final.mp4` için poster/placeholder, ürün kartları için gri placeholder kullan; kod asset gelince çalışacak şekilde hazır olsun.
7. **Asset üretimi gerekiyorsa** kullanıcıya `CLAUDE.md` → "ÜRETİM HATTI" adımlarını hatırlat (ElevenLabs görsel → frame-pair video → Canva birleştir → `final.mp4`).
8. Dosyayı tarayıcıda aç: `open index.html`.
9. İstenirse deploy: GitHub repo'ya push → Vercel'de import & deploy (CLAUDE.md → DEPLOY).
