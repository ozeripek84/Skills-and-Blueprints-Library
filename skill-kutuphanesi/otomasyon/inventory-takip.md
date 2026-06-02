---
name: inventory-takip
description: Stok/envanter takip otomasyonu — alert, reorder, multi-warehouse.
---

# Inventory Tracking

## Ne zaman
E-ticaret/üretim, stok yönetimi gerekli.

## Stack
n8n + Shopify/custom DB + Slack/Email alerts

## Süreç
1. Stok seviyesi DB
2. Trigger: order placed → stock decrement
3. Threshold check (low stock alert)
4. Auto-reorder PO (supplier'a email)
5. Multi-warehouse routing
6. Daily summary (top movers, dead stock)

## Çıktı standardı
- Real-time accuracy
- Multi-channel sync (Shopify + offline)
- Reorder suggestion (sales velocity'ye göre)

## Yaygın hatalar
- Race condition (2 sipariş aynı anda)
- Negative stock allow (oversold)
- Supplier lead time hesaplanmamış
