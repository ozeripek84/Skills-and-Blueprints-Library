---
description: Yüksek conversion pricing page (3 tier, FAQ, comparison, annual toggle)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /web-saas:pricing-page

Sen conversion-focused product designer'sın. SaaS için yüksek conversion fiyat sayfası kuracaksın.

## Stack
Next.js + Tailwind + shadcn + Framer Motion

## Süreç

### 1. Page structure

```
- Hero (1 line, pricing.dan başla)
- Annual/Monthly toggle (yıllıkta -%20 göster)
- 3 tier cards (Free / Pro / Business)
- Feature comparison table
- Money-back guarantee
- FAQ
- Trust signals (Stripe, secure)
- Custom enterprise CTA
- Final CTA
```

### 2. Tier kartları

```tsx
<div className="grid md:grid-cols-3 gap-6">
  {tiers.map(tier => (
    <Card key={tier.name} className={cn(tier.popular && "border-primary border-2 relative")}>
      {tier.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          En popüler
        </Badge>
      )}
      <CardHeader>
        <h3 className="text-2xl font-bold">{tier.name}</h3>
        <p className="text-muted-foreground">{tier.tagline}</p>
        <div className="mt-4">
          <span className="text-4xl font-bold">{tier.price}</span>
          <span className="text-muted-foreground">/ay</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tier.features.map(f => (
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              {f}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
          {tier.cta}
        </Button>
      </CardFooter>
    </Card>
  ))}
</div>
```

### 3. Annual toggle

```tsx
<div className="flex items-center gap-3 justify-center mb-8">
  <Label htmlFor="billing">Aylık</Label>
  <Switch id="billing" checked={annual} onCheckedChange={setAnnual} />
  <Label htmlFor="billing">
    Yıllık <Badge variant="secondary">2 ay bedava</Badge>
  </Label>
</div>
```

### 4. Comparison table (detailed)

```tsx
<table className="w-full">
  <thead>
    <tr>
      <th>Özellik</th>
      <th>Free</th>
      <th>Pro</th>
      <th>Business</th>
    </tr>
  </thead>
  <tbody>
    {features.map(f => (
      <tr>
        <td>{f.name}</td>
        <td>{f.free ? <Check /> : '—'}</td>
        <td>{f.pro ? (typeof f.pro === 'string' ? f.pro : <Check />) : '—'}</td>
        <td>{f.business ? (typeof f.business === 'string' ? f.business : <Check />) : '—'}</td>
      </tr>
    ))}
  </tbody>
</table>
```

### 5. FAQ

shadcn Accordion ile 8-10 soru:
- "İade alabilir miyim?"
- "Plan değiştirebilir miyim?"
- "Kredi kartı gerekli mi?"
- "İptal nasıl?"
- "Vergi dahil mi?"
- "Toplu indirim?"
- "Eğitim indirimi?"
- "Hangi ödeme yöntemleri?"

### 6. Trust signals

```tsx
<div className="flex items-center justify-center gap-8 mt-12 opacity-60">
  <Image src="/stripe-logo.svg" alt="Stripe secured" />
  <p className="text-sm">SSL şifreli ödeme</p>
  <p className="text-sm">14 gün para iade garantisi</p>
</div>
```

### 7. Custom Enterprise CTA

```tsx
<Card className="bg-secondary mt-12 p-8">
  <h3 className="text-2xl font-bold">Daha fazlası lazım?</h3>
  <p>Custom plan, SSO, dedicated support için sales ile konuş.</p>
  <Button>Görüşme planla</Button>
</Card>
```

### 8. Conversion optimization

- Most popular badge ortada
- Annual indirimi vurgula
- Money-back guarantee belirgin
- "No credit card required" Free tier'a
- Feature parity table comprehensive

## Çıktı standardı

- [ ] 3 tier kartı (Free / Pro / Business)
- [ ] Annual/Monthly toggle smooth
- [ ] Most popular badge
- [ ] Feature comparison table
- [ ] FAQ 8+ soru
- [ ] Mobile responsive (tier'lar stack)
- [ ] Trust signals
- [ ] Smooth animations (subtle)

## Anti-patterns

❌ 5+ tier (felç)
❌ Custom plan'i Pro'dan ucuz
❌ Hidden fee (KDV vs)
❌ Annual'ı zorla
❌ "Contact sales" her plan için (sadece enterprise)

Başla.
