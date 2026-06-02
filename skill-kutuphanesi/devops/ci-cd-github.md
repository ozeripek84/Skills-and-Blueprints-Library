---
name: ci-cd-github
description: GitHub Actions CI/CD — test, build, deploy automation.
---

# GitHub Actions CI/CD

## Ne zaman
Her push'ta test + auto-deploy.

## Stack
GitHub Actions + Vercel/Cloudflare

## Süreç
1. .github/workflows/ci.yml
2. PR: lint + typecheck + test
3. Main push: deploy production
4. Branch push: preview deploy
5. Cache (npm, build artifacts)
6. Notifications (Slack on fail)
7. Secrets management

## Çıktı standardı
- PR check 5 dakikadan kısa
- Cache hit rate >80%
- Status badges README'de
- Branch protection

## Yaygın hatalar
- Cache miss (lockfile değiştiği için)
- Secret leak (echo $SECRET)
- Concurrent run conflict (concurrency group)
