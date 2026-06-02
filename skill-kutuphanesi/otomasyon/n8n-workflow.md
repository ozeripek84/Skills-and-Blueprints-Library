---
name: n8n-workflow
description: n8n üzerinde tekrar eden iş akışlarını otomatize eder.
---

# n8n Workflow Builder

## Ne zaman
Müşterinin manuel tekrarlayan işlerini otomatize etmek.

## Stack
n8n Cloud / Self-hosted

## Süreç
1. Tetikleyici seç (webhook, schedule, app event)
2. Akış adımları (transform, filter, branch)
3. Hata yönetimi (on error: continue)
4. Credentials güvenli saklama
5. Test data ile test
6. Production'a alma + monitoring

## Çıktı standardı
- JSON export edilmiş
- README ile teslim
- Credential listesi (env values)
- Monitoring dashboard linki

## Yaygın hatalar
- Hard-coded credentials
- 50 node'luk dev workflow (5 küçüğe böl)
- Rate limit unutmak
