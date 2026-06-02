---
name: unit-test
description: Unit testing — Vitest/Jest, coverage, TDD.
---

# Unit Testing

## Ne zaman
Logic-heavy code, libraries, utils.

## Stack
Vitest + Testing Library

## Süreç
1. Test infrastructure
2. Util fonksiyonları
3. React component testing
4. Mock external deps
5. Coverage report
6. Watch mode (TDD)
7. CI integration

## Çıktı standardı
- 80%+ coverage critical paths
- <10sn full suite
- Snapshots minimal
- Mocks isolated

## Yaygın hatalar
- Snapshot abuse
- Implementation testing (behavior test)
- Mock everything (integration test daha iyi)
