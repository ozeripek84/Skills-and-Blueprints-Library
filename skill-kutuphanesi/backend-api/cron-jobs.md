---
name: cron-jobs
description: Schedule edilen background job'lar — Vercel Cron, Inngest.
---

# Scheduled Jobs / Cron

## Ne zaman
Periyodik task'lar — daily reports, cleanup, sync, billing.

## Stack
Vercel Cron / Inngest / Trigger.dev / GitHub Actions

## Süreç
1. Job tanımla (cron expression)
2. API route handler
3. Auth (cron secret)
4. Idempotency (overlap guard)
5. Monitoring (success/fail tracking)
6. Alert on failure

## Çıktı standardı
- Cron expression doğru (UTC vs local)
- Job runs <50% timeout
- Alert if missed run
- Manual trigger butonu

## Yaygın hatalar
- Vercel Cron 60s timeout (longer için Inngest)
- Overlap (önceki bitmeden yenisi başlar)
- Timezone karışıklığı (always UTC)
