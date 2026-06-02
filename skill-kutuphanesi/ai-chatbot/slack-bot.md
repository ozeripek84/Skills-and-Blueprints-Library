---
name: slack-bot
description: Slack workspace'ine entegre AI bot — komutlar, mention, DM.
---

# Slack AI Bot

## Ne zaman
Şirket içi otomasyon, takım sorularına cevap, summary.

## Stack
Next.js + Slack Bolt SDK + Anthropic

## Süreç
1. Slack App oluştur (api.slack.com)
2. Bot scopes: chat:write, im:history, app_mentions:read
3. Event subscription endpoint
4. Slash command (`/ask`, `/summarize`)
5. Mention handler (`@bot`)
6. DM support
7. Thread context (önceki mesajları okusun)

## Çıktı standardı
- Mention'a 3sn altı response
- Markdown → Slack mrkdwn dönüşüm
- Threaded reply
- Modal forms (gerektiğinde)

## Yaygın hatalar
- Event endpoint timeout (3sn limit, async kullan)
- Bot kendi mesajına cevap vermek (loop)
- Rate limit (workspace başına)
