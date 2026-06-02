---
name: telegram-bot
description: Telegram bot — komut, AI cevap, group/private.
---

# Telegram AI Bot

## Ne zaman
Kişisel asistan, bilgi sorgulama, otomatik bildirim.

## Stack
Node.js + grammy / node-telegram-bot-api + Anthropic

## Süreç
1. BotFather'dan token al
2. Webhook ya da polling setup
3. Komutlar: /start, /help, /ask
4. Inline keyboard (tıklanabilir butonlar)
5. Group vs private logic
6. File handling (photo, doc, voice)
7. Rate limit per user

## Çıktı standardı
- /start mesajı kullanıcıyı yönlendirsin
- Markdown V2 escape doğru
- Inline mode (opsiyonel)
- Cancel komutu uzun task'larda

## Yaygın hatalar
- Markdown V2 special char escape unutmak
- Long message (4096 char limit) chunk yapmamak
- Webhook timeout (10s limit)
