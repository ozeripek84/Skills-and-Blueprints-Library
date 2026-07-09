# Berber / Kuaför Randevu Sistemi (RandevuPro)

## Genel Bakış
Tek lokasyonlu berber/kuaför için **iki yüzlü tam-yığın** randevu uygulaması: müşteri-yüzlü landing (hizmet, fiyat, galeri, ekip, yorum + gerçek DB'ye bağlı randevu isteği formu) + admin panel (bekleyen istek onay/red, haftalık takvim, müşteri/randevu yönetimi, raporlar, ayarlar). Klonla & markaya uyarla. Kaynak (açık kaynak): github.com/eyaprak/randevupro.

## Neden blueprint (tek-dosya değil)
Bu, [[blueprints/randevu-sistemi/CLAUDE|randevu-sistemi]] (tek-dosya `index.html`, localStorage, backend'siz demo) **değil**; gerçek PostgreSQL'e bağlı, sunucu-doğrulamalı üretim iskeleti. Kendi kodun gibi klonlanıp deploy edilir. İkisi farklı katman — basit demo için diğeri, gerçek işletme için bu.

## Teknoloji (hepsi ücretsiz/açık)
- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS 4**
- **PostgreSQL 16** (Docker Compose) + **Prisma 6** ORM
- `sonner` (toast) · `swiper` (galeri/slider)
- Test: **Vitest** (gerçek DB'ye karşı API testleri, mock yok) + **Playwright** (yalnız ekran görüntüsü)
- Deploy: **Dockerfile** + **GitHub Actions** (build-and-push) hazır

## İki yüz

### Landing (`/`)
Hero, hizmetler + fiyatlar, galeri (swiper), ekip/çalışanlar, müşteri yorumları, iletişim ve **DB'ye yazan randevu isteği formu**. Müşteri formu doldurur → istek "beklemede" düşer.

### Admin (`/admin`)
- Bekleyen istekleri **onayla / reddet** (PendingRequests)
- **Haftalık takvim** (WeekCalendar)
- **Randevular** listesi (durum: beklemede/onaylı/iptal, sayfalama)
- **Müşteriler** listesi
- **Raporlar** (gelir/istatistik)
- Panelden **hızlı yeni randevu** (NewAppointmentForm)
- **Ayarlar:** hizmetler · personel · çalışma saatleri yönetimi
- Giriş: tek şifre (`ADMIN_PASSWORD`, varsayılan `kuafor2026`), httpOnly oturum çerezi; yetkisiz API → **401**

## Akış
Müşteri formdan istek bırakır → istek **beklemede** → salon sahibi panelden **onaylar** → randevu takvime işlenir. Onay anında çakışma + mesai kuralları sunucuda bir kez daha doğrulanır.

## İş kuralları (sunucu tarafı)
1. Aynı çalışan için zaman-kesişen ikinci randevu → **409** (bitişik 10:00-10:30 / 10:30-11:00 çakışma değildir).
2. Çalışan mesaisi dışına randevu → **422**.
3. `GET /api/availability?staff&service&date` → o gün için uygun başlangıç saatlerini döndürür.

## Örnek veri (seed)
5 hizmet · 3 çalışan · 200 müşteri · 500 randevu · 6 yorum (uygulama dolu gelir; test seed'e dayanır).

## Markaya uyarlama (klonladıktan sonra)
- İşletme adı, logo, renkler (Tailwind), landing metinleri (hero/yorumlar)
- Hizmetler + fiyatlar (admin > ayarlar ya da seed)
- Personel + çalışma saatleri
- Galeri görselleri (swiper)
- `.env`: `ADMIN_PASSWORD` değiştir · `DATABASE_URL`

## Kurulum
→ **`/kur`** komutu (bkz. `kur.md`): klonla → bağımlılıklar → Postgres (docker) → migrate → seed → çalıştır. Gereksinim: Node 20+, Docker (5432 portu boş).

## Akraba
- Basit tek-dosya alternatifi: [[blueprints/randevu-sistemi/CLAUDE|randevu-sistemi]]
- Test/doğrulama: [[skill-kutuphanesi/test-kalite/test-kalite|test-kalite]] (Vitest/Playwright zaten repoda; ekstra e2e/QA için)
