---
name: a-b-test
description: A/B testing infrastructure — variant assignment, tracking, analysis.
---

# A/B Testing

## Ne zaman
Conversion optimization, feature validation.

## Stack
PostHog / Statsig / GrowthBook + custom analytics

## Süreç
1. Hypothesis tanımla
2. Variants oluştur
3. Audience segment
4. Random assignment (sticky)
5. Conversion event tracking
6. Statistical significance
7. Winner deploy

## Çıktı standardı
- Sample size hesaplanmış
- 95% confidence
- 1+ hafta data
- Decision document

## Yaygın hatalar
- Small sample (yanlış sonuç)
- Multiple comparison problem
- Peeking (test bitmeden sonuçlandırmak)
