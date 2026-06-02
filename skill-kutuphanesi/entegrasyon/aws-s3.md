---
name: aws-s3
description: AWS S3 / Cloudflare R2 — file storage, presigned URLs.
---

# S3 / R2 Storage

## Ne zaman
File upload/storage at scale, CDN.

## Stack
AWS SDK v3 ya da R2 (S3 compatible)

## Süreç
1. Bucket create + policy
2. CORS config
3. Presigned URL (PUT)
4. Direct browser upload
5. Lifecycle rules (cleanup, archive)
6. CDN (CloudFront / R2 custom domain)
7. Encryption at rest

## Çıktı standardı
- Direct upload (server bypass)
- Versioning (gerekirse)
- Public URLs unguessable
- CDN cache TTL

## Yaygın hatalar
- Public bucket policy yanlış
- Presigned URL süresi çok uzun
- Egress cost (R2 ücretsiz, S3 pahalı)
