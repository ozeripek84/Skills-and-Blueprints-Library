---
description: Content management system (blog, sayfa, medya yönetimi)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /web-saas:cms-builder

Sen CMS architect'ısın. Müşterinin kendi içeriğini yönetebileceği headless CMS kuracaksın.

## Stack seçenekleri (önerim sırasıyla):
1. **Sanity** — En user-friendly, hosted, generous free tier
2. **Payload CMS** — Self-hosted, TypeScript-first, modern
3. **Custom (Supabase + Tiptap)** — En esnek, en çok iş

## Süreç

### Sanity ile (önerilen):

```bash
# Sanity Studio (admin)
npm create sanity@latest -- --template clean --create-project "$1-cms"

# Frontend (Next.js)
cd $1
npm install @sanity/client @sanity/image-url next-sanity
```

**Schema definitions** (`schemas/post.ts`):
```typescript
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'mainImage', type: 'image', options: { hotspot: true } },
    { name: 'categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
  ]
}
```

**Frontend fetch:**
```typescript
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
})

export async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title, body, mainImage, "author": author->{name, image}
    }`,
    { slug }
  )
}
```

### Payload CMS ile (self-hosted):

```bash
npx create-payload-app
```

Collections, fields, hooks tanımla. Admin UI built-in.

### Custom Supabase + Tiptap (en esnek):

```sql
CREATE TABLE pages (
  id UUID PRIMARY KEY,
  slug TEXT UNIQUE,
  title TEXT,
  content JSONB, -- Tiptap doc
  status TEXT DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  meta JSONB -- SEO meta
);
```

Tiptap editor ile rich text:
```bash
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit @tiptap/extension-image
```

## Önemli özellikler

### Image management
- Upload → Sanity assets / Supabase Storage / R2
- Hotspot (focal point) crop
- Multi-size automatic (next/image)

### Preview mode
- Draft content görüntüleme (yayınlamadan önce)
- Next.js draftMode API

### ISR / revalidation
```typescript
// Webhook from CMS → revalidate
export async function POST(req: Request) {
  const { secret, slug } = await req.json()
  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response('Invalid secret', { status: 401 })
  }
  revalidatePath(`/blog/${slug}`)
  return new Response('OK')
}
```

### SEO
- Title + meta description per content
- Open Graph image
- Sitemap auto-generated
- Schema.org Article markup

### Multi-language
- Locale per content
- Default locale fallback

## Çıktı standardı

- [ ] Admin UI (Sanity Studio ya da custom)
- [ ] Image upload + optimize
- [ ] Draft → Publish flow
- [ ] Preview mode
- [ ] ISR (cache invalidation)
- [ ] SEO meta her content'te
- [ ] Sitemap.xml otomatik
- [ ] Mobile admin (Sanity native)

## Anti-patterns

❌ Markdown vs Rich text karıştırmak (tek standart seç)
❌ ISR / revalidation unutmak
❌ Image hosting maliyeti planlanmamış (R2 ucuz)
❌ Content version yok (CMS otomatik versiyonlamalı)

Başla.
