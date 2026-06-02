---
description: Tool-calling AI agent kur (autonom, multi-step, tool use)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /ai-chatbot:ai-agent

Sen AI agent architect'ısın. Tool-calling agent uygulaması kuracaksın — Claude bağımsız olarak tool'ları kullanıp görev tamamlayacak.

## Stack
Next.js + Anthropic SDK (tools API) + custom tool implementations

## Süreç

### 1. Tool tanımları

```typescript
// src/lib/agent/tools.ts
export const tools = [
  {
    name: 'web_search',
    description: 'Web\'de güncel bilgi ara',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Arama sorgusu' }
      },
      required: ['query']
    }
  },
  {
    name: 'read_file',
    description: 'Bir dosyanın içeriğini oku',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Dosya yolu' }
      },
      required: ['path']
    }
  },
  {
    name: 'write_file',
    description: 'Bir dosyaya içerik yaz',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string' },
        content: { type: 'string' }
      },
      required: ['path', 'content']
    }
  },
  {
    name: 'execute_code',
    description: 'Python kodu çalıştır (sandbox)',
    input_schema: {
      type: 'object',
      properties: {
        code: { type: 'string', description: 'Çalıştırılacak Python kodu' }
      },
      required: ['code']
    }
  },
  {
    name: 'send_email',
    description: 'Email gönder',
    input_schema: {
      type: 'object',
      properties: {
        to: { type: 'string' },
        subject: { type: 'string' },
        body: { type: 'string' }
      },
      required: ['to', 'subject', 'body']
    }
  }
]
```

### 2. Tool implementation

```typescript
export async function executeTool(name: string, input: any): Promise<string> {
  switch (name) {
    case 'web_search':
      return await webSearch(input.query) // Brave Search API ya da Tavily
    case 'read_file':
      return await fs.readFile(input.path, 'utf-8')
    case 'write_file':
      await fs.writeFile(input.path, input.content)
      return `Dosya yazıldı: ${input.path}`
    case 'execute_code':
      return await runInSandbox(input.code) // Pyodide ya da E2B
    case 'send_email':
      return await sendEmail(input)
    default:
      throw new Error(`Bilinmeyen tool: ${name}`)
  }
}
```

### 3. Agent loop

```typescript
// src/lib/agent/loop.ts
export async function* runAgent(userMessage: string, maxIterations = 10) {
  const messages = [{ role: 'user', content: userMessage }]
  
  for (let i = 0; i < maxIterations; i++) {
    yield { type: 'thinking', iteration: i }
    
    const response = await anthropic.messages.create({
      model: 'claude-opus-4-7',
      max_tokens: 4096,
      tools,
      messages
    })
    
    yield { type: 'response', content: response.content }
    
    // Tool use var mı?
    const toolUses = response.content.filter(c => c.type === 'tool_use')
    if (toolUses.length === 0) {
      // Bitti
      yield { type: 'done', final: response.content[0].text }
      return
    }
    
    // Tool'ları çalıştır
    const toolResults = []
    for (const toolUse of toolUses) {
      yield { type: 'tool_call', name: toolUse.name, input: toolUse.input }
      
      try {
        const result = await executeTool(toolUse.name, toolUse.input)
        toolResults.push({
          type: 'tool_result',
          tool_use_id: toolUse.id,
          content: result
        })
        yield { type: 'tool_result', name: toolUse.name, result }
      } catch (error) {
        toolResults.push({
          type: 'tool_result',
          tool_use_id: toolUse.id,
          content: `Hata: ${error.message}`,
          is_error: true
        })
      }
    }
    
    // Mesajlara ekle
    messages.push({ role: 'assistant', content: response.content })
    messages.push({ role: 'user', content: toolResults })
  }
  
  yield { type: 'max_iterations' }
}
```

### 4. Streaming UI

```tsx
'use client'
export default function Agent() {
  const [steps, setSteps] = useState<AgentStep[]>([])
  const [running, setRunning] = useState(false)
  
  async function runTask(prompt: string) {
    setRunning(true)
    setSteps([])
    
    const response = await fetch('/api/agent', {
      method: 'POST',
      body: JSON.stringify({ prompt })
    })
    
    const reader = response.body!.getReader()
    const decoder = new TextDecoder()
    
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      
      const chunk = decoder.decode(value)
      const events = chunk.split('\n').filter(Boolean).map(JSON.parse)
      setSteps(prev => [...prev, ...events])
    }
    
    setRunning(false)
  }
  
  return (
    <div>
      {steps.map((step, i) => <StepCard key={i} step={step} />)}
      {/* Input + run button */}
    </div>
  )
}
```

### 5. Step UI

Her step için kart:
- 🤔 Thinking — spinner + iteration sayacı
- 🔧 Tool call — tool adı + input (collapsed JSON)
- ✅ Tool result — başarı / ❌ hata
- 💬 Response — markdown rendered text
- ⚠️ Max iterations — kullanıcıya uyarı

### 6. Cost tracking

Her tool call ve LLM response'unda token sayısını track et:
```typescript
function calculateCost(usage: Usage): number {
  return (usage.input_tokens / 1_000_000 * 15) + (usage.output_tokens / 1_000_000 * 75)
}
```

UI'da: "Bu görev maliyet: $0.42"

### 7. Audit log

```sql
CREATE TABLE agent_runs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  prompt TEXT,
  status TEXT, -- 'running', 'completed', 'failed', 'max_iterations'
  iterations INTEGER,
  total_cost_cents INTEGER,
  steps JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 8. Safety

- **Tool whitelist:** Sensitive tool'ları kullanıcı onayıyla
- **Sandbox:** Kod çalıştırma E2B ya da Pyodide ile izole
- **Rate limit:** User başına saatlik max 10 agent run
- **Cost limit:** User başına aylık max $5

## Çıktı standardı

- [ ] 5+ tool tanımlı
- [ ] Step-by-step UI (her step görünür)
- [ ] Cancel mid-execution
- [ ] Cost tracking per run
- [ ] Audit log her run için
- [ ] Sandbox / safety guardrails
- [ ] Max iteration limit

## Anti-patterns

❌ Tool schema net değil (LLM yanlış kullanır)
❌ Infinite loop (max_iterations şart)
❌ Sensitive tools güvensiz
❌ Cost runaway (per-user limit yok)
❌ Production'a alırken dry-run mode yok

Başla.
