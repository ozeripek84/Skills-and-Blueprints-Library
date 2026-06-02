---
name: vercel-deploy
description: Vercel production deploy — domain, env, optimization.
---

# Vercel Deployment

## Ne zaman
Next.js / static site / serverless deploy.

## Stack
Vercel + Cloudflare DNS

## Süreç
1. Vercel project link
2. Environment variables
3. Custom domain
4. SSL (otomatik)
5. Edge functions
6. Analytics + Speed Insights
7. Preview deployments

## Çıktı standardı
- Custom domain SSL aktif
- Env per env (production / preview / development)
- Edge function latency <100ms
- Cron jobs (gerekirse)

## Yaygın hatalar
- Build size limit aşımı (50MB free)
- Function timeout (10s hobby, 60s pro)
- DNS propagation 48h (acele etme)
