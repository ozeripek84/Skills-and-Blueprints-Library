---
name: hukuk-burosu
description: Hukuk bürosu yönetim — dosya, müvekkil, randevu, fatura.
---

# Law Firm Management

## Ne zaman
Hukuk bürosu için case + müvekkil.

## Stack
Next.js + Supabase + e-imza + UYAP API

## Süreç
1. Müvekkil dosyası
2. Case management
3. Document management (versiyon)
4. Time tracking (saat × ücret)
5. Faturalama
6. Calendar (duruşma takibi)
7. UYAP entegre (TR)

## Çıktı standardı
- Attorney-client privilege (encrypted)
- Document version history
- Conflict check
- KVKK uyumlu

## Yaygın hatalar
- Document encrypt edilmemiş
- Conflict check yok (etik ihlal)
- UYAP entegre eksik
