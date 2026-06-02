---
name: database-design
description: Postgres database schema tasarımı — normalize, index, relations.
---

# Database Schema Design

## Ne zaman
Yeni proje DB design ya da mevcut'u optimize etme.

## Stack
Postgres + Supabase + Drizzle/Prisma

## Süreç
1. Entity-relationship diagram
2. Tablolar + columns + types
3. Foreign keys + cascade rules
4. Index'ler (query pattern'a göre)
5. RLS policies (Supabase)
6. Migrations (sequential, reversible)
7. Seed data (dev/test)

## Çıktı standardı
- 3NF (gerektikçe denormalize)
- All FK indexed
- Composite index'ler optimize
- Migration history clean

## Yaygın hatalar
- Tüm column'a index (yazma yavaş)
- UUID primary key (büyük tablolarda BIGINT)
- Cascade delete tehlikeli (soft delete kullan)
