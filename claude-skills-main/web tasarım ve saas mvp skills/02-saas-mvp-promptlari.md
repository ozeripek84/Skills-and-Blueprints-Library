# SaaS MVP Prompt Şablonları

1 hafta içinde mini SaaS kurmak için hazır prompt'lar.

---

## 1. Proje setup (Day 1, ilk 30 dk)

```
Sıfırdan Next.js 14 + TypeScript + Tailwind + Supabase + Stripe stack'i ile bir SaaS projesi başlat.

Adımlar:
1. npx create-next-app@latest [PROJE-ADI] (TypeScript, Tailwind, App Router, Yes)
2. shadcn/ui init (default settings, neutral)
3. Şu paketleri yükle: @supabase/ssr, @supabase/supabase-js, stripe, resend, lucide-react, next-themes
4. .env.local oluştur, gerekli değişkenleri placeholder olarak yaz
5. Klasör yapısı kur: app/(marketing), app/(auth), app/(dashboard), app/api/webhooks, components/ui, lib/supabase, lib/stripe
6. Tailwind config'e dark mode ekle
7. Tema toggle component'ı (next-themes ile)
8. Bir basit homepage (placeholder)

Bittiğinde: localhost:3000'de çalışan bir Next.js, dark mode toggle çalışıyor, env'ler ready.
```

---

## 2. Authentication (Day 1, sonraki 1 saat)

```
Supabase Auth ile login/signup kur.

Sayfalar:
- /login: email + password form, Google OAuth butonu
- /signup: aynı, ek "Şifre tekrarı" alanı
- /reset-password: email gir → reset link
- /update-password: yeni şifre belirle (token ile)

Middleware:
- /dashboard ve alt rotalar protected
- /login, /signup vb auth-only sayfalar (logged in ise /dashboard'a yönlendir)

Session management:
- @supabase/ssr ile server-side session
- Logout fonksiyonu (button + API route)
- Header'da: logged in ise email göster + logout, değilse Login butonu

Önemli: cookie'leri httpOnly + secure ayarla. CSRF koruması ekle.

Test:
- Yeni hesap aç
- Logout
- Login
- Şifre değiştir
- Protected route'a anonimken erişmeye çalış (login'e yönlendirsin)
```

---

## 3. Database schema (Day 2)

```
Supabase'de aşağıdaki tabloları oluştur (SQL migration olarak):

[ÜRÜN KONUSU: ÖRN PROJE YÖNETİM ARACI]

Tablolar:
- profiles (id uuid pk, user_id uuid fk auth.users, full_name text, created_at)
- workspaces (id uuid pk, name text, owner_id uuid fk profiles, created_at)
- projects (id uuid pk, workspace_id uuid fk, name text, status text, created_at)
- tasks (id uuid pk, project_id uuid fk, title text, status text, assignee_id uuid fk profiles)

RLS Policies (Row Level Security):
- Her kullanıcı SADECE kendi workspace'lerini görebilir
- Workspace owner'ı tüm projeleri yönetebilir
- Task assignee'si task'ı güncelleyebilir

Trigger'lar:
- auth.users'a yeni user eklenince → profiles'a auto insert
- workspace silinince → projeler + task'lar cascade silinsin

TypeScript types üret (supabase gen types).
```

---

## 4. Core feature CRUD (Day 3)

```
Ana feature: [PROJELER YÖNETİM]

Sayfalar ve component'ler:

/dashboard/projects
- Liste: kullanıcının workspace'lerindeki projeleri göster
- Filter: status (active/archived/completed)
- Sort: newest, name, status
- Search bar
- "Yeni Proje" butonu → modal aç

/dashboard/projects/[id]
- Proje detayı
- İçindeki task'lar listesi
- Task ekleme inline form
- Task'ları drag-drop ile sıralama (dnd-kit)
- Task tamamlandı işaretleme (checkbox, optimistic update)

Server Actions:
- createProject(data)
- updateProject(id, data)
- deleteProject(id)
- createTask(projectId, data)
- toggleTask(id)
- deleteTask(id)

Optimistic updates her aksiyonda. Toast bildirimleri (sonner kütüphanesi).
```

---

## 5. Stripe entegrasyonu (Day 4)

```
Stripe entegrasyonunu kur:

Stripe Dashboard:
1. Test mode'da 2 product oluştur:
   - Pro: $19/ay (price_id'sini al)
   - Business: $49/ay
2. Webhook endpoint ekle: https://your-app.com/api/webhooks/stripe
3. Webhook secret'i .env'ye

Kod:
- /pricing sayfası: 3 plan kartı (Free, Pro, Business), her birinde "Upgrade" butonu
- "Upgrade" tıklayınca → /api/checkout route → Stripe Checkout session yarat → redirect
- Checkout başarılı → /dashboard?upgraded=true (toast göster)
- Cancel → /pricing?canceled=true

Webhook handler (/api/webhooks/stripe):
- checkout.session.completed → user'ın profilinde subscription_status='active', tier='pro'
- customer.subscription.deleted → tier='free' yap
- invoice.payment_failed → email gönder + 3 gün sonra dondur

Subscription helper:
- lib/stripe/getUserSubscription(userId) → mevcut tier döndürsün
- Component'lerde: tier='free' ise feature lock göster

Test:
- Stripe CLI ile webhook localhost'a forward et
- Test card 4242 4242 4242 4242 ile checkout dene
- Webhook'un tetiklendiğini doğrula
```

---

## 6. Dashboard UI + polish (Day 5)

```
Dashboard'u finalize et:

/dashboard (ana sayfa):
- Welcome message (kullanıcı ismi)
- Quick stats (3 kart): toplam proje, aktif task, tamamlanan task (bu hafta)
- Recent activity feed (son 10 aksiyon)
- "Quick action" buttons: Yeni proje, Yeni task

/dashboard/settings:
- Profile: isim, email, avatar upload
- Account: şifre değiştir, hesap sil
- Billing: mevcut plan, payment method, fatura geçmişi (Stripe Customer Portal link)
- Notifications: email tercihleri

Sidebar nav:
- Dashboard, Projects, Tasks, Settings
- Bottom: dark mode toggle, user dropdown (avatar + isim + logout)

Mobile: hamburger menu, drawer

Loading skeletons her sayfada.
Empty states: "Henüz proje yok, ilkini oluştur" + button
Error states: try-catch, kullanıcı dostu mesaj
```

---

## 7. Marketing landing (Day 5-6)

```
/  (public marketing landing page)

Bölümler:
- Hero: bold value prop, "Ücretsiz Dene" CTA, screenshot/demo video
- Features: 6 ana özellik grid
- How it works: 3 adımda (sign up → setup → results)
- Use cases: 4 farklı kullanıcı tipinin nasıl faydalandığı
- Testimonials: 4-6 (placeholder, sonra gerçek doldurulacak)
- Pricing: 3 plan
- FAQ: 8 soru-cevap
- Footer: full footer

CTA'lar:
- Header: Sign up
- Hero: Free trial
- After features: Free trial
- Pricing: Plan başına ayrı CTA
- Footer: Final CTA

SEO:
- Türkçe meta tags
- Open Graph image
- Schema.org SoftwareApplication
```

---

## 8. Email + onboarding (Day 6)

```
Resend ile transactional email kur:

Email template'leri (lib/emails/):
- welcome.tsx: signup sonrası
- password-reset.tsx: reset request
- payment-success.tsx: Stripe payment ok
- payment-failed.tsx: ödeme başarısız
- trial-ending.tsx: trial bitiyor (3 gün önce)
- weekly-report.tsx: haftalık özet (kullanım, projeler, tamamlanan)

Hepsi React Email + Tailwind kullansın.

Onboarding sequence (yeni signup için):
- Day 0: Welcome
- Day 1: "Hızlı başlangıç" guide
- Day 3: Use case examples
- Day 7: "Sorun var mı?" personal email
- Day 14: Trial ending (Pro'ya geç)

API route: /api/send-email
Cron route (Vercel cron): /api/cron/onboarding (günlük çalışsın)
```

---

## 9. Deploy + production (Day 7)

```
Production launch:

Vercel:
1. GitHub repo'yu Vercel'e bağla
2. Environment variables tüm secret'lar
3. Custom domain bağla (Cloudflare DNS)
4. SSL otomatik

Stripe:
1. Test mode → Live mode geçiş
2. Webhook'u production URL'iyle güncelle
3. Live API key'leri Vercel'e

Supabase:
1. Auth redirect URL'lerine production domain ekle
2. SMTP customization (Resend ile bağla — kullanıcı email'leri için)
3. Database backup schedule kontrol

Test (production'da):
- 3 farklı email ile signup
- Stripe live mode'da test ödeme (sonra refund)
- Hataları Sentry ya da Vercel logs'tan izle

Monitoring:
- Vercel Analytics
- Plausible (kullanıcı analytics)
- Stripe dashboard günlük kontrol

Launch:
- Twitter/LinkedIn duyurusu
- Product Hunt (gerekirse)
- DOA topluluğunda paylaş
- İlk 100 kullanıcı için extended trial (30 gün)
```

---

## Bonus: Müşteriye SaaS satarken

Eğer bu SaaS'ı kendi ürünün değil müşteri için kuruyorsan:

```
Bu SaaS müşteri [İŞ ADI] için. Onların:
- Markası: [LOGO/RENK]
- Hedef kullanıcısı: [KIME]
- Ana feature'ı: [NE YAPACAK]
- Fiyatlandırma stratejisi: [SADECE ÜCRETLİ / FREEMIUM / TRIAL]
- Domain'i: [URL]

Yukarıdaki tüm prompt'ları bu bilgilere göre özelleştir.
Müşterinin marka kimliğini her sayfaya yansıt.
Teslim öncesi: kod-incele skill'iyle quality check yap.
```
