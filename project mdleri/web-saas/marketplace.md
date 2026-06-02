---
description: İki taraflı marketplace kur (Etsy/Fiverr tarzı, Stripe Connect ile)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /web-saas:marketplace

Sen marketplace product expert'ısın. İki taraflı (alıcı + satıcı) marketplace kuracaksın.

## Stack
Next.js + Supabase + Stripe Connect + Algolia + Cloudflare R2

## Süreç

### 1. User types

```sql
CREATE TYPE user_type AS ENUM ('buyer', 'seller', 'both', 'admin');
ALTER TABLE profiles ADD COLUMN user_type user_type DEFAULT 'buyer';
ALTER TABLE profiles ADD COLUMN stripe_account_id TEXT; -- Connect account
ALTER TABLE profiles ADD COLUMN seller_onboarded BOOLEAN DEFAULT FALSE;
```

### 2. Listing schema

```sql
CREATE TABLE listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id UUID REFERENCES profiles(id),
  title TEXT NOT NULL,
  description TEXT,
  price_cents INTEGER NOT NULL,
  currency TEXT DEFAULT 'TRY',
  category TEXT,
  images JSONB DEFAULT '[]',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'paused', 'sold')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_listings_seller ON listings(seller_id);
CREATE INDEX idx_listings_status ON listings(status) WHERE status = 'active';
CREATE INDEX idx_listings_category ON listings(category);
```

### 3. Search (Algolia)

```bash
npm install algoliasearch react-instantsearch-hooks-web
```

Listing INSERT/UPDATE/DELETE'te Algolia sync:
```typescript
async function syncToAlgolia(listing: Listing) {
  const index = algoliaClient.initIndex('listings')
  if (listing.status === 'active') {
    await index.saveObject({ objectID: listing.id, ...listing })
  } else {
    await index.deleteObject(listing.id)
  }
}
```

Search UI: faceted search (price range, category, location), instant results.

### 4. Seller onboarding (Stripe Connect)

```typescript
// /api/stripe/connect/onboard
const account = await stripe.accounts.create({
  type: 'express',
  country: 'TR',
  email: user.email,
  capabilities: {
    card_payments: { requested: true },
    transfers: { requested: true },
  },
})

const accountLink = await stripe.accountLinks.create({
  account: account.id,
  refresh_url: `${url}/seller/onboard?refresh=true`,
  return_url: `${url}/seller/onboard?complete=true`,
  type: 'account_onboarding',
})

return { url: accountLink.url, accountId: account.id }
```

Webhook `account.updated` ile `seller_onboarded` güncelle.

### 5. Listing CRUD (seller)

`/seller/listings` — kendi listingleri
`/seller/listings/new` — yeni listing form (image upload + crop)
`/seller/listings/[id]/edit`

Image upload: R2'ye direct (presigned URL).

### 6. Order flow

```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  buyer_id UUID REFERENCES profiles(id),
  seller_id UUID REFERENCES profiles(id),
  listing_id UUID REFERENCES listings(id),
  amount_cents INTEGER,
  platform_fee_cents INTEGER, -- 10% commission
  status TEXT DEFAULT 'pending',
  stripe_payment_intent_id TEXT,
  shipping_address JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

Checkout:
```typescript
const paymentIntent = await stripe.paymentIntents.create({
  amount: listing.price_cents,
  currency: 'try',
  application_fee_amount: Math.round(listing.price_cents * 0.10), // %10 platform fee
  transfer_data: {
    destination: seller.stripe_account_id,
  },
})
```

### 7. Review & rating

```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id) UNIQUE,
  buyer_id UUID REFERENCES profiles(id),
  seller_id UUID REFERENCES profiles(id),
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

Tek review per order, sadece order status='completed' sonrası.

### 8. Dispute / refund flow

- Buyer "iade istiyorum" → Stripe refund + listing status update
- Seller "anlaşmazlık" → Admin'e flag
- Dispute resolution UI (admin only)

## Çıktı standardı

- [ ] Two-sided onboarding (buyer + seller)
- [ ] Stripe Connect Express
- [ ] Search 200ms altı
- [ ] Faceted filter (price, category, location)
- [ ] Image upload + multi-image gallery
- [ ] Two-sided rating system
- [ ] Mobile-first listing card
- [ ] Dispute flow basic var

## Anti-patterns

❌ Stripe Connect'i normal Stripe ile karıştırmak
❌ Search index async sync (hemen güncelle)
❌ Dispute flow yok (legal sorun)
❌ Seller verification atlamak (KYC zorunlu yüksek tutarlarda)

Başla.
