---
name: raporlamali-tablo
description: Excel-vari interaktif tablo — pivot, formula, export.
---

# Spreadsheet-like Table

## Ne zaman
Müşteri Excel benzeri arayüz istiyor (CRM, planning).

## Stack
TanStack Table + Univer / Handsontable / Glide

## Süreç
1. Column definitions
2. Sorting + filtering
3. Inline editing
4. Formulas (basic =SUM)
5. Pivot view
6. Export (Excel/CSV)
7. Conditional formatting

## Çıktı standardı
- 10K+ rows performant (virtualization)
- Keyboard nav (Excel-like)
- Copy/paste (Excel uyumlu)
- Undo/redo

## Yaygın hatalar
- Virtualize unutmak (browser donar)
- Formula complexity (basic kalsın)
- Editing race condition
