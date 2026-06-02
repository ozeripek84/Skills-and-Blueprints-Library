---
description: Membership site kur (Skool/Patreon/Substack tarzı)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /web-saas:membership-site

Sen community/content platform expert'ısın. Üyelik tabanlı içerik platformu kuracaksın.

## Stack
Next.js + Supabase + Stripe Subscriptions + Mux (video) + Resend

## Süreç

### 1. Subscription tiers

```sql
CREATE TYPE subscription_tier AS ENUM ('free', 'paid', 'premium');

ALTER TABLE profiles ADD COLUMN tier subscription_tier DEFAULT 'free';
ALTER TABLE profiles ADD COLUMN tier_started_at TIMESTAMPTZ;
ALTER TABLE profiles ADD COLUMN tier_expires_at TIMESTAMPTZ;
```

### 2. Content schema

```sql
CREATE TABLE content (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT CHECK (type IN ('video', 'article', 'download')),
  body TEXT, -- markdown for articles
  video_id TEXT, -- Mux playback ID
  download_url TEXT,
  required_tier subscription_tier DEFAULT 'free',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Free preview gösterelim mi
ALTER TABLE content ADD COLUMN free_preview_seconds INTEGER DEFAULT 0;
```

### 3. Content gating

```typescript
async function canAccessContent(userTier: Tier, requiredTier: Tier): boolean {
  const tierOrder = ['free', 'paid', 'premium']
  return tierOrder.indexOf(userTier) >= tierOrder.indexOf(requiredTier)
}
```

UI'da paid içeriğe free user için preview + "Upgrade" CTA.

### 4. Video player (Mux)

```bash
npm install @mux/mux-player-react @mux/mux-uploader-react
```

```tsx
<MuxPlayer
  playbackId={content.video_id}
  metadata={{ video_title: content.title, viewer_user_id: user.id }}
  streamType="on-demand"
/>
```

DRM (opsiyonel premium): Mux ile signed URL'ler.

### 5. Community / forum

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  title TEXT NOT NULL,
  body TEXT,
  category TEXT,
  reply_count INTEGER DEFAULT 0,
  upvote_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE replies (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id),
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE upvotes (
  user_id UUID,
  post_id UUID,
  PRIMARY KEY (user_id, post_id)
);
```

UI: feed, post detail, reply form, upvote button (optimistic).

### 6. Member directory

`/members` — tüm üyeleri listele (tier badge'leriyle).
Filter: by tier, by location, by interests.

### 7. Email digest

Haftalık digest:
- Yeni içerikler
- Trending discussions
- Member highlights

Vercel cron ile haftalık send.

### 8. Discovery

`/explore` — public sayfa, free preview ile içerik teasers.
Goal: visitors → free signup → paid upgrade.

## Çıktı standardı

- [ ] 3 tier (free/paid/premium)
- [ ] Content gating doğru
- [ ] Video player optimize
- [ ] Community forum çalışıyor
- [ ] Mobile responsive
- [ ] Email digest weekly
- [ ] Member directory
- [ ] Discovery / public preview

## Anti-patterns

❌ Free preview yok (SEO + conversion düşer)
❌ Cancel'i zorlamak (legal)
❌ Eski üyenin geçmiş içeriklere erişimi yok (etik)

Başla.
