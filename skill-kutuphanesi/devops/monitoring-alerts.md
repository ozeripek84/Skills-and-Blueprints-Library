---
name: monitoring-alerts
description: Production monitoring — uptime, errors, performance, alerts.
---

# Monitoring & Alerts

## Ne zaman
Production app — visibility şart.

## Stack
Sentry (errors) + Better Stack (uptime) + Vercel Analytics

## Süreç
1. Sentry SDK install (frontend + backend)
2. Source maps upload
3. Uptime monitor (5dk interval)
4. Synthetic checks (critical flow)
5. Alert channels (Slack, email)
6. Status page (public)

## Çıktı standardı
- Error rate <%0.1
- Uptime 99.9%
- Mean time to detect <5dk
- Alert fatigue düşük (sadece actionable)

## Yaygın hatalar
- Tüm error'a alert (gürültü)
- Source map yok (stack trace okunamıyor)
- Alert kanalları aşırı (sadece 1-2 kişi)
