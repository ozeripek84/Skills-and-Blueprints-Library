---
name: database-migration
description: Production DB migration — zero-downtime, rollback strategy.
---

# Database Migration

## Ne zaman
Schema değişiklikleri, data migration.

## Stack
Drizzle Kit / Prisma Migrate / dbmate + Postgres

## Süreç
1. Migration dosyası (timestamp prefix)
2. Up + Down scripts
3. Test on staging copy
4. Backup before run
5. Run during low-traffic
6. Verify post-migration
7. Rollback plan ready

## Çıktı standardı
- Reversible (down script test edilmiş)
- Zero-downtime (blue-green ya da expand-contract)
- All tested on staging
- Audit log

## Yaygın hatalar
- ALTER COLUMN locked (büyük tablo)
- DROP COLUMN sonra geri lazım (önce nullable)
- Migration sırası yanlış (dependency)
