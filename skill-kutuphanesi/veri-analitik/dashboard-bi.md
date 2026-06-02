---
name: dashboard-bi
description: Business intelligence dashboard — Metabase/Tableau alternatifi.
---

# BI Dashboard

## Ne zaman
İç ekip için data exploration, executive dashboards.

## Stack
Metabase / Superset (open source) + Postgres

## Süreç
1. Data warehouse setup
2. Metabase install (Docker)
3. DB connection
4. Questions (saved queries)
5. Dashboards (collection of questions)
6. Permissions (per team)
7. Email/Slack subscriptions

## Çıktı standardı
- Self-service for non-tech
- Permission-based access
- Scheduled reports
- Mobile-friendly

## Yaygın hatalar
- Production DB'ye direct query (read replica kullan)
- Slow queries (CTAS materialized views)
- Permission leak (column-level security)
