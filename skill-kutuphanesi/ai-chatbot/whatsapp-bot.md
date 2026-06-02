---
name: whatsapp-bot
description: WhatsApp üzerinde çalışan AI chatbot (Meta Cloud API).
---

# WhatsApp AI Bot

## Ne zaman
Müşteri hizmeti, lead qualification, support otomasyonu.

## Stack
Next.js + Meta WhatsApp Business Cloud API + Anthropic

## Süreç
1. Meta Business hesabı + WhatsApp Business
2. Webhook endpoint (mesaj geldiğinde tetiklenir)
3. Anthropic ile cevap üret
4. Cloud API üzerinden geri gönder
5. Conversation state (Redis/Supabase)
6. Template message (24 saat kuralı için)
7. Handoff to human (operator gerekirse)

## Çıktı standardı
- 5 saniye altı response
- 24-saat conversation window doğru yönetilmiş
- Opt-out komutu
- Human handoff flag

## Yaygın hatalar
- Template message approval'sız broadcast (account ban)
- Webhook signature verify etmemek
- Rate limit (1000 msg/saniye)
