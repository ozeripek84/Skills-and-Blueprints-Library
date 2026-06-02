---
name: admin-paneli
description: Müşteri/iç kullanım için yönetim paneli (CRUD, role-based access, raporlama) kurar.
---

# Admin Panel Builder

## Ne zaman
Müşterinin verisini yönetmek için iç kullanım, role-based admin paneli gerektiğinde.

## Stack
Next.js + shadcn/ui (Data Tables) + Supabase + tRPC (opsiyonel)

## Süreç
1. Role tablosu kur (admin / editor / viewer)
2. Login + role middleware
3. Sidebar navigation (her role'a özel)
4. Data table'lar (sortable, filterable, paginated)
5. CRUD modallar
6. Audit log (kim ne yaptı)
7. Export (CSV, Excel)

## Çıktı standardı
- Role-based route protection
- Tüm data table'lar 1000+ row'la performanslı
- Search + filter + sort tüm tablolarda
- Bulk actions (delete, archive, export)
- Activity log her aksiyonda

## Yaygın hatalar
- Frontend'de role kontrolü yapıp backend'i unutmak
- N+1 query problemi (Supabase'de)
- Export'ta hafıza taşması (large dataset için stream kullan)
