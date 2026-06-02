---
name: oto-servis
description: Oto servis yönetim — araç, müşteri, iş emri, parça.
---

# Auto Service Management

## Ne zaman
Oto servis, lastikçi, yıkamacı.

## Stack
Next.js + Supabase

## Süreç
1. Araç DB (plaka, marka, model)
2. Müşteri (araç sahibi)
3. İş emri (yapılan işler, parça)
4. Parça stoku
5. Servis history
6. Faturalama + KDV
7. Hatırlatma (yağ değişimi 6 ay sonra)

## Çıktı standardı
- VIN/plaka arama hızlı
- Parça katalog (OEM)
- Mobile için tablet UI
- SMS hatırlatma

## Yaygın hatalar
- Parça stok eksik tracking
- Servis history search slow
- KDV hesabı yanlış
