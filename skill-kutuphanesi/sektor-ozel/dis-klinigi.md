---
name: dis-klinigi
description: Diş kliniği yönetim — hasta dosyası, randevu, faturalama.
---

# Dental Practice Management

## Ne zaman
Diş hekimi / klinik yönetimi.

## Stack
Next.js + Supabase + HIPAA-compliant storage

## Süreç
1. Hasta dosyası (anamnez, alerji, ilaç)
2. Tedavi planı + maliyet
3. Randevu sistemi
4. SGK/özel sigorta entegre
5. X-ray / foto upload
6. Reçete üretimi
7. Faturalama

## Çıktı standardı
- KVKK uyumlu (sağlık verisi)
- Hasta portal (kendi randevuları görsün)
- Treatment history kronolojik
- E-imza (recete)

## Yaygın hatalar
- Sağlık verisi public bucket
- KVKK rıza alınmamış
- Backup eksik (kritik veri)
