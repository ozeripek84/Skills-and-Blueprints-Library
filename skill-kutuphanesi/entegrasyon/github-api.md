---
name: github-api
description: GitHub API — repo, PR, issue, webhook automation.
---

# GitHub API

## Ne zaman
DevOps automation, code review bot, repo management.

## Stack
@octokit/rest + GitHub App

## Süreç
1. GitHub App ya da Personal Access Token
2. Webhook events (push, PR, issue)
3. Comment / review on PR
4. Branch operations
5. File CRUD via API
6. Workflow triggers
7. App installation flow

## Çıktı standardı
- App permission scoped
- Webhook signature verify (sha256)
- Rate limit handle (5000/saat)
- Idempotent operations

## Yaygın hatalar
- Personal token (App daha güvenli)
- Rate limit hit (conditional requests)
- Race condition (PR comment duplicate)
