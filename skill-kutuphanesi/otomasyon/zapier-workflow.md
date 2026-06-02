---
name: zapier-workflow
description: Zapier üzerinde Zap tasarımı (müşteri zaten Zapier kullanıyorsa).
---

# Zapier Workflow

## Ne zaman
Müşteri zaten Zapier kullanıyor, n8n'e geçemiyorlar.

## Stack
Zapier (Starter / Pro / Team plan)

## Süreç
1. Trigger app + event seç
2. Action steps
3. Filter steps
4. Path (branching) gerekirse
5. Formatter steps (data transform)
6. Test her step
7. Turn on

## Çıktı standardı
- Çalıştığı doğrulanmış (3 farklı senaryo)
- Naming convention temiz
- Error notification (Slack/email)

## Yaygın hatalar
- Tasks usage'ı (Pro 750/ay limit)
- Trigger polling delay'i (15 dakika)
- Multi-step Pro+ gerektirir
