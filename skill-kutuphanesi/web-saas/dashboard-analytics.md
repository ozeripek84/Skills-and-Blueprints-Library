---
name: dashboard-analytics
description: Real-time analytics dashboard (KPI'lar, grafikler, filtreler).
---

# Analytics Dashboard

## Ne zaman
SaaS ya da müşteri için kullanım/satış analitik panosu.

## Stack
Next.js + Recharts/Tremor + Supabase + TanStack Query

## Süreç
1. KPI kartları (toplam, değişim, trend)
2. Chart'lar (line, bar, pie, area)
3. Date range picker
4. Filtre paneli
5. Export (PDF/PNG/CSV)
6. Real-time subscription (Supabase Realtime)

## Çıktı standardı
- 4-6 KPI kart (büyük rakam + delta)
- 2-3 chart (responsive)
- Mobile için stack layout
- Loading skeletons
- Empty states

## Yaygın hatalar
- Tüm data'yı frontend'e dökmek (aggregate query'ler kullan)
- Date timezone sorunu (UTC standardize et)
- Real-time çok aktif (sadece görünür widget'lara subscribe ol)
