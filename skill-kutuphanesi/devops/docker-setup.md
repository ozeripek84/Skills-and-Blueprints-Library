---
name: docker-setup
description: Docker containerization — multi-stage build, compose, optimized image.
---

# Docker Setup

## Ne zaman
Production deployment, dev environment standardization.

## Stack
Docker + Docker Compose

## Süreç
1. Dockerfile (multi-stage)
2. .dockerignore
3. docker-compose.yml (dev)
4. Image optimization (alpine base, layer cache)
5. Health checks
6. Secret management
7. CI build push registry

## Çıktı standardı
- Image <200MB (Next.js)
- Build cache leverage
- Non-root user
- Healthcheck endpoint

## Yaygın hatalar
- Root user (security)
- node_modules COPY (use multi-stage)
- Secrets in image layers
