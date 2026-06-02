---
name: file-upload
description: Dosya upload — direkt cloud, virus scan, image processing.
---

# File Upload Handler

## Ne zaman
User upload (avatar, document, video).

## Stack
Supabase Storage / R2 / S3 + Sharp (image) + UploadThing

## Süreç
1. Presigned URL (direct browser upload)
2. File type whitelist + size limit
3. Virus scan (ClamAV ya da ClamCloud)
4. Image processing (Sharp: resize, optimize)
5. Storage (cold storage older files)
6. CDN (Cloudflare R2 + custom domain)
7. Cleanup (orphaned files)

## Çıktı standardı
- Direct-to-cloud (server bypass)
- Image optimization automatic
- Multipart for large files
- Resume support

## Yaygın hatalar
- Server'a yüklemek (memory bloat)
- File type validate sadece extension'a göre
- Public URL'leri tahmin edilebilir
