# kur

Bu bir **klonla-uyarla** komutu (tek-dosya build değil — hazır tam-yığın repo). Adımları takip et:

1. Bu dizindeki `CLAUDE.md`'yi oku — uygulama spesifikasyonu + marka-uyarlama listesi orada.

2. Kaynağı klonla (açık kaynak):
   ```bash
   git clone https://github.com/eyaprak/randevupro <hedef-klasor>
   cd <hedef-klasor>
   ```

3. Kurulum + veritabanı:
   ```bash
   npm install
   cp .env.example .env          # ADMIN_PASSWORD ve DATABASE_URL'i düzenle
   docker compose up -d          # PostgreSQL 16 (5432 boş olmalı) — "healthy" olmasını bekle
   npx prisma migrate dev        # şema
   npm run seed                  # örnek veri (5 hizmet, 3 çalışan, 200 müşteri, 500 randevu, 6 yorum)
   npm run dev                   # http://localhost:3000  ·  admin: /admin
   ```

4. **Markaya uyarla** (CLAUDE.md'deki listeye göre): işletme adı + logo + renkler, landing metinleri (hero/yorumlar), hizmet + fiyatlar, personel + çalışma saatleri, galeri görselleri, `.env` içinde `ADMIN_PASSWORD`.

5. **Doğrula** (repo'nun kendi testleri, ücretsiz): `docker compose up -d` + `npm run seed` + ayrı terminalde `npm run dev` açıkken `npm test` (Vitest, gerçek Postgres'e karşı, mock yok). İstersen `/test-kalite:test-kalite` ile ek e2e/QA.

6. Kullanıcıya çalışır durumda olduğunu bildir (landing + admin). Deploy gerekiyorsa `Dockerfile` + GitHub Actions (build-and-push) repoda hazır.
