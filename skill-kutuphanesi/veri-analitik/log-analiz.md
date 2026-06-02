---
name: log-analiz
description: Application log aggregation + analysis (errors, performance).
---

# Log Analysis

## Ne zaman
Production debug, performance issue, security audit.

## Stack
Axiom / Datadog / Logtail + structured logging

## Süreç
1. Structured logging (JSON, levels)
2. Log shipping (Pino → Axiom)
3. Search + filter
4. Saved queries
5. Alert rules
6. Distributed tracing

## Çıktı standardı
- All errors caught
- 30 day retention min
- Sub-second search
- Alert on threshold

## Yaygın hatalar
- console.log production (yapılandırılmış log şart)
- PII logging (GDPR ihlali)
- Cost runaway (sampling şart)
