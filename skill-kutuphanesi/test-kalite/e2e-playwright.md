---
name: e2e-playwright
description: End-to-end test — Playwright ile critical flow testing.
---

# E2E Testing (Playwright)

## Ne zaman
Production critical flows (checkout, signup, key features).

## Stack
Playwright + GitHub Actions

## Süreç
1. Critical user journeys belirle
2. Test setup (auth, db state)
3. Page Object Model
4. Visual regression (screenshots)
5. Mobile viewports
6. CI integration
7. Flaky test handling

## Çıktı standardı
- Top 10 flow tested
- <5dk total runtime
- Parallel execution
- Trace on failure

## Yaygın hatalar
- waitForTimeout (kötü pratik, locator wait kullan)
- Flaky tests (retry değil, kök neden bul)
- Auth her test'te (storage state reuse)
