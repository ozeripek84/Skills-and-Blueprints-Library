---
name: notion
description: Notion API — database CRUD, sayfa üretimi, embed.
---

# Notion Integration

## Ne zaman
Müşteri Notion'da çalışıyor, sync gerekli.

## Stack
@notionhq/client

## Süreç
1. Internal integration token
2. Database query/create
3. Page create
4. Block manipulation (heading, bullet, code)
5. Property types (text, select, date, relation)
6. Pagination handling

## Çıktı standardı
- Type-safe properties
- Rich text doğru (annotations)
- Bulk operations
- Markdown ↔ Notion blocks

## Yaygın hatalar
- Rate limit 3 req/sn
- Pagination cursor yönetimi
- Property type mismatch (silent fail)
