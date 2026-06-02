---
description: ChatGPT-vari custom chatbot kur (Anthropic API, streaming, history)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /ai-chatbot:llm-chatbot

Sen AI engineer'sın. Custom chatbot uygulaması kuracaksın — kendi UI, conversation history, streaming response.

## Stack
Next.js + Anthropic SDK + Vercel AI SDK + Supabase + shadcn/ui

## Süreç

### 1. Setup

```bash
npx create-next-app@latest $1 --typescript --tailwind --app
cd $1
npm install @anthropic-ai/sdk ai @ai-sdk/anthropic @supabase/supabase-js react-markdown remark-gfm @vercel/analytics
npx shadcn-ui@latest init -d
npx shadcn-ui@latest add button input textarea scroll-area card avatar
```

### 2. API Route — Streaming

```typescript
// src/app/api/chat/route.ts
import { anthropic } from '@ai-sdk/anthropic'
import { streamText } from 'ai'

export const maxDuration = 60

export async function POST(req: Request) {
  const { messages, systemPrompt } = await req.json()
  
  const result = await streamText({
    model: anthropic('claude-opus-4-7'),
    system: systemPrompt || 'Sen yardımcı bir Türkçe asistansın.',
    messages,
    maxTokens: 4096,
  })
  
  return result.toDataStreamResponse()
}
```

### 3. Chat UI

```tsx
'use client'
import { useChat } from 'ai/react'
import ReactMarkdown from 'react-markdown'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    api: '/api/chat',
  })

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto">
      <ScrollArea className="flex-1 p-4">
        {messages.map((m) => (
          <div key={m.id} className={cn("flex gap-3 mb-4", m.role === 'user' && "flex-row-reverse")}>
            <Avatar>{m.role === 'user' ? 'U' : 'AI'}</Avatar>
            <div className={cn("rounded-lg p-3 max-w-[80%]", m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
              <ReactMarkdown>{m.content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </ScrollArea>
      
      <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
        <Textarea value={input} onChange={handleInputChange} placeholder="Mesajını yaz..." />
        <Button type="submit" disabled={isLoading}>Gönder</Button>
        {isLoading && <Button onClick={stop}>Durdur</Button>}
      </form>
    </div>
  )
}
```

### 4. Conversation history (Supabase)

```sql
CREATE TABLE conversations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  title TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE messages (
  id UUID PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  role TEXT CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_messages_convo ON messages(conversation_id, created_at);
```

Auto-save her message:
```typescript
async function saveMessage(conversationId: string, role: string, content: string) {
  await supabase.from('messages').insert({ conversation_id: conversationId, role, content })
}
```

### 5. Sidebar — Conversation list

- Sol sidebar: kullanıcının önceki conversation'ları
- "+ Yeni" butonu
- Her conversation'a tıklayınca history yüklenir
- Auto-generate title (ilk user message'dan AI ile özet)

### 6. Markdown rendering

`react-markdown` + `remark-gfm` ile:
- Code blocks (syntax highlight: `react-syntax-highlighter`)
- Lists, tables, links
- Bold, italic, blockquote

### 7. Token counting + rate limit

```typescript
import { encoding_for_model } from 'tiktoken'

function countTokens(text: string): number {
  const enc = encoding_for_model('claude')
  return enc.encode(text).length
}
```

Rate limit (Upstash):
```typescript
const { success } = await ratelimit.limit(userId)
if (!success) return new Response('Too many requests', { status: 429 })
```

### 8. Export conversation

JSON ya da Markdown export:
```typescript
function exportToMarkdown(messages: Message[]): string {
  return messages.map(m => `## ${m.role}\n\n${m.content}`).join('\n\n---\n\n')
}
```

### 9. System prompt customization

Settings sayfasında kullanıcı kendi system prompt'unu kaydedebilsin:
- "Sen marketing expert'ısın"
- "Her zaman Türkçe cevap ver"
- "Code yazarken yorumla"

## Çıktı standardı

- [ ] Streaming smooth (token-by-token)
- [ ] Conversation history sidebar
- [ ] Markdown rendering (code blocks dahil)
- [ ] Mobile responsive
- [ ] Stop generation butonu
- [ ] Token counter
- [ ] Rate limiting
- [ ] Export

## Anti-patterns

❌ API key client-side (server-only)
❌ Rate limit unutmak
❌ System prompt'u user'a göstermek (gizli kalsın)
❌ Markdown raw göstermek (rendering şart)
❌ History sınırsız (max 50 message context)

Başla.
