---
name: load-test
description: Performance/load testing — k6, autocannon.
---

# Load Testing

## Ne zaman
Launch öncesi, scale planning.

## Stack
k6 / Artillery / autocannon

## Süreç
1. Critical endpoint'ler
2. Realistic scenarios
3. Ramp-up profile
4. Metrics (p50, p95, p99)
5. Bottleneck analysis
6. Database under load
7. Report

## Çıktı standardı
- p95 < 500ms
- 0% error rate at target load
- Database query analysis
- Action items

## Yaygın hatalar
- Production'a load test (staging şart)
- Cold cache (warm-up)
- Geographic latency unutmak
