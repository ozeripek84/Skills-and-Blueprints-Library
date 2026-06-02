---
name: data-pipeline
description: ETL pipeline — extract, transform, load (multiple sources → DW).
---

# Data Pipeline / ETL

## Ne zaman
Multiple kaynaklardan data warehouse'a aggregation.

## Stack
n8n / Airbyte / dbt + BigQuery/Postgres

## Süreç
1. Sources tanımla (DB, API, CSV)
2. Extraction schedule
3. Transformations (clean, dedupe, enrich)
4. Load to warehouse
5. Data quality checks
6. Lineage tracking

## Çıktı standardı
- Idempotent runs
- Data quality alerts
- Backfill capability
- Schema evolution handling

## Yaygın hatalar
- Schema değişikliği pipeline'ı kırar
- Backfill stratejisi yok
- Failed run silently (alerting şart)
