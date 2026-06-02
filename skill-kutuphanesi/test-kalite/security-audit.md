---
name: security-audit
description: Security audit — OWASP top 10, dependency scan, secrets.
---

# Security Audit

## Ne zaman
Pre-launch, periodic, post-incident.

## Stack
Snyk / Semgrep / OWASP ZAP

## Süreç
1. Dependency scan (npm audit)
2. SAST (static analysis)
3. Secret scanning (history)
4. OWASP Top 10 check
5. Auth/authz review
6. Input validation
7. Rate limiting

## Çıktı standardı
- 0 critical vulnerabilities
- Secrets rotated
- All inputs validated
- HTTPS everywhere

## Yaygın hatalar
- "It works" mindset (security afterthought)
- Default credentials production
- SQL injection (parameterized queries)
