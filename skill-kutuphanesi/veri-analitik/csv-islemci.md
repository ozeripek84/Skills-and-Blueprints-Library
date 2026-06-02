---
name: csv-islemci
description: CSV/Excel processing — large file, validation, transformation.
---

# CSV Processor

## Ne zaman
Müşteri CSV upload, bulk import, data migration.

## Stack
Papa Parse / xlsx / streaming + worker threads

## Süreç
1. File upload (chunked for large)
2. Streaming parse (memory-efficient)
3. Schema validation (zod)
4. Transformation
5. Progress reporting
6. Error report (which rows failed)
7. Bulk DB insert (transactions)

## Çıktı standardı
- 100MB+ file support
- Real-time progress
- Detailed error report
- Resumable (büyük import)

## Yaygın hatalar
- Memory load all (stream şart)
- Encoding issues (Türkçe için UTF-8 BOM)
- Date parsing (Excel quirks)
