---
description: Lead capture pipeline (form → CRM → notify → automate) — n8n ile
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /otomasyon:lead-capture

Sen otomasyon mühendisisin. Müşteri için tam otomatik lead capture pipeline'ı kuracaksın.

## Stack
n8n (cloud / self-host) + form tool (Tally / custom) + CRM (HubSpot / Pipedrive) + Slack + Email

## Süreç

### 1. Form setup

**Seçenek A — Tally:** Hızlı, ücretsiz, webhook destekli
**Seçenek B — Custom Next.js form:** Daha kontrollü, kendi UI

```typescript
// Custom form endpoint
export async function POST(req: Request) {
  const data = await req.json()
  
  // Validate
  const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    message: z.string().optional(),
    source: z.string().default('website')
  })
  const validated = schema.parse(data)
  
  // n8n webhook'a forward et
  await fetch(process.env.N8N_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validated)
  })
  
  return Response.json({ success: true })
}
```

### 2. n8n workflow

**Trigger:** Webhook

**Adım adım:**

```
1. Webhook (form data alır)
   ↓
2. Code node (email validate, phone format)
   ↓
3. HTTP Request → Hunter.io (email verify)
   ↓
4. IF node (email valid mi?)
   ↓ Evet
5. HubSpot - Search Contact (duplicate check)
   ↓
6. IF (var mı?)
   ├─ Var → Update Contact (yeni info ekle)
   └─ Yok → Create Contact
   ↓
7. Code node (round-robin sales rep atama)
   ↓
8. Set node (CRM owner update)
   ↓
9. Slack node (#leads kanalına bildirim)
   ↓
10. Resend node (welcome email)
   ↓
11. Wait node (24 saat)
   ↓
12. HubSpot - Get Contact (status check)
   ↓
13. IF (henüz cevap yok)
   ↓ Evet
14. Sales rep'e Slack hatırlatma DM
```

### 3. Email validation

```typescript
// /api/validate-email
async function validateEmail(email: string) {
  // 1. Format check (regex)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { valid: false, reason: 'invalid_format' }
  
  // 2. Disposable email check
  const domain = email.split('@')[1]
  const disposable = ['tempmail.com', '10minutemail.com', /* ... */]
  if (disposable.includes(domain)) return { valid: false, reason: 'disposable' }
  
  // 3. Hunter.io API
  const res = await fetch(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${HUNTER_KEY}`)
  const data = await res.json()
  return { valid: data.result === 'deliverable', score: data.score }
}
```

### 4. Round-robin atama

```javascript
// n8n Code node
const reps = ['ahmet@', 'mehmet@', 'ayse@']
const counter = $getWorkflowStaticData().leadCounter || 0
const assignedRep = reps[counter % reps.length]
$getWorkflowStaticData().leadCounter = counter + 1

return { assignedRep }
```

### 5. Slack notification format

```javascript
{
  "blocks": [
    {
      "type": "header",
      "text": { "type": "plain_text", "text": "🎯 Yeni Lead!" }
    },
    {
      "type": "section",
      "fields": [
        { "type": "mrkdwn", "text": "*İsim:*\n{{ $json.name }}" },
        { "type": "mrkdwn", "text": "*Email:*\n{{ $json.email }}" },
        { "type": "mrkdwn", "text": "*Telefon:*\n{{ $json.phone }}" },
        { "type": "mrkdwn", "text": "*Atanan:*\n{{ $json.assignedRep }}" }
      ]
    },
    {
      "type": "actions",
      "elements": [
        { "type": "button", "text": { "type": "plain_text", "text": "HubSpot'ta Aç" }, "url": "{{ $json.crmUrl }}" },
        { "type": "button", "text": { "type": "plain_text", "text": "Talep ettim (claim)" } }
      ]
    }
  ]
}
```

### 6. Welcome email template

```tsx
// React Email template
export default function WelcomeEmail({ name, repName }: Props) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>Merhaba {name}!</Heading>
          <Text>Bizimle iletişime geçtiğin için teşekkürler 👋</Text>
          <Text>{repName} 1 iş günü içinde sana dönüş yapacak.</Text>
          <Text>Bu arada şunlara göz atabilirsin:</Text>
          <ul>
            <li><Link href="...">Bizim hakkımızda</Link></li>
            <li><Link href="...">Sıkça sorulan sorular</Link></li>
            <li><Link href="...">Müşteri başarı hikayeleri</Link></li>
          </ul>
        </Container>
      </Body>
    </Html>
  )
}
```

### 7. Error handling

n8n'de "On Error: Continue" ile her node:
- Email API down → Slack #errors'a alarm + retry queue
- HubSpot rate limit → 5dk wait + retry
- Slack down → email fallback

### 8. Monitoring

n8n execution log + Slack alert thresholds:
- 5dk içinde >100 lead → suspect spam
- 1 saat içinde 0 lead → form broken?
- Error rate >%5 → urgent

## Çıktı standardı

- [ ] Form → Slack 30sn altı
- [ ] Email validation aktif
- [ ] Duplicate detection
- [ ] Round-robin atama dengeli
- [ ] Welcome email branded
- [ ] 24h follow-up reminder
- [ ] Error handling + alerting
- [ ] Workflow JSON export edilmiş

## Müşteriye teslim

1. n8n workflow JSON
2. README (kurulum + değişiklik nasıl)
3. Credential listesi (.env değerleri)
4. 1 sayfalık SOP (kim ne kontrol eder)
5. 5 dakikalık Loom (workflow tour)

## Anti-patterns

❌ Hard-coded credentials (env kullan)
❌ 50 node'luk dev workflow (5 küçük workflow daha bakım kolay)
❌ Rate limit unutmak
❌ Test data ile production'a gitmek
❌ Error notification yok (silent fail)

Başla.
