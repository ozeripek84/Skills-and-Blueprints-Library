---
name: landing-ab-test
description: Landing page A/B test — variant assignment, statistical analysis.
---

# Landing Page A/B Test

## Ne zaman
Conversion optimization.

## Stack
Next.js + PostHog / Statsig + Vercel Edge

## Süreç
1. Hypothesis (örn "yeni headline %15 conversion artırır")
2. Variant A (control) + B (treatment)
3. Edge function ile assignment (50/50, sticky)
4. Conversion event tracking
5. 2 hafta veri topla
6. Statistical significance (p < 0.05)
7. Winner deploy

## Çıktı standardı
- Sticky variant (kullanıcı her seferinde aynı)
- Sample size hesaplanmış
- Conversion event tek
- Decision document

## Yaygın hatalar
- Erken karar (peeking)
- Sample size yetersiz
- Multiple variant aynı anda (multi-arm bandit)
