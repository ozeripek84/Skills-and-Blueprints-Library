---
description: AI image generator app kur (DALL-E / Flux ile, gallery, credits)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /ai-chatbot:gorsel-uretici

Text-to-image AI uygulaması — Replicate / fal.ai ile.

## Stack
Next.js + Replicate / fal.ai + Supabase Storage + Stripe (credits)

## Süreç

### 1. Setup
```bash
npm install replicate @fal-ai/serverless-client
```

### 2. Generate endpoint

```typescript
// src/app/api/generate/route.ts
import Replicate from 'replicate'
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN })

export async function POST(req: Request) {
  const { prompt, userId } = await req.json()
  
  // Check credits
  const credits = await getUserCredits(userId)
  if (credits < 1) return new Response('Yetersiz kredi', { status: 402 })
  
  // Generate
  const output = await replicate.run(
    "black-forest-labs/flux-1.1-pro",
    { input: { prompt, aspect_ratio: "1:1" } }
  )
  
  // Save to storage
  const imageUrl = await saveToStorage(output[0])
  
  // Decrement credits + save
  await deductCredit(userId)
  await supabase.from('generations').insert({
    user_id: userId, prompt, image_url: imageUrl
  })
  
  return Response.json({ imageUrl })
}
```

### 3. Credits system

```sql
ALTER TABLE profiles ADD COLUMN credits INTEGER DEFAULT 10;

CREATE TABLE generations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  prompt TEXT,
  image_url TEXT,
  cost_credits INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

Stripe ile credit pack: 100 credits / $9, 500 / $39, 1500 / $99.

### 4. Gallery

```sql
SELECT * FROM generations WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20
```

UI: masonry grid, click to enlarge, download, share, regenerate.

### 5. Variations

Existing image'dan variant:
```typescript
const variant = await replicate.run("black-forest-labs/flux-redux", {
  input: { redux_image: existingImageUrl, prompt: "..." }
})
```

### 6. Style presets

UI'da preset chip'ler: "Photorealistic", "Anime", "Pixel Art", "Oil Painting".
System prompt'a inject ediyor.

### 7. NSFW filter

Replicate'ın `nsfw_detection` modeliyle pre-check, ya da basit prompt blocklist.

### 8. Cost margin

Maliyet hesaplaması:
- Flux 1.1 Pro: ~$0.04/image
- Müşteri 1 credit = $0.10 ödüyor
- Margin: $0.06/image (60%)

## Çıktı standardı

- [ ] 30 saniye altı generation
- [ ] Gallery (sortable, downloadable)
- [ ] Credit balance görünür
- [ ] Stripe credit pack
- [ ] Style presets
- [ ] NSFW filter

## Anti-patterns

❌ Credit system yok (kullanıcı 1000 image üretir, batarsın)
❌ NSFW filter yok (legal sorun)
❌ Cost margin negatif

Başla.
