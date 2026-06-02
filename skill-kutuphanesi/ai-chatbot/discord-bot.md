---
name: discord-bot
description: Discord sunucu için AI bot — moderation, command, AI yardımcı.
---

# Discord AI Bot

## Ne zaman
Topluluk yönetimi, AI komut, sosyal yardımcı.

## Stack
Node.js + discord.js v14 + Anthropic

## Süreç
1. Discord application oluştur, bot user
2. Slash commands register
3. Event listeners (messageCreate, interactionCreate)
4. AI komutlar (`/ask`, `/summarize`, `/moderate`)
5. Auto-moderation (filter, warning system)
6. Database for warnings/users
7. Voice channel support (opsiyonel)

## Çıktı standardı
- Slash commands smooth
- Embed messages (rich format)
- Permission checks (her komut için)
- Cooldown (spam önleme)

## Yaygın hatalar
- Intents'i yanlış set etmek
- Cooldown sistemi yok (spam)
- Long-running command (defer reply kullan)
