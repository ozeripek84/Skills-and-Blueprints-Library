---
description: RAG application kur (PDF/website üzerinde Q&A)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /ai-chatbot:rag-uygulama

Sen AI engineer'sın. RAG (Retrieval Augmented Generation) uygulaması kuracaksın — kullanıcı dokümanları yükleyip onlar üzerinde soru sorabilecek.

## Stack
Next.js + Anthropic + Supabase pgvector + LangChain (opsiyonel) + Cohere (re-rank)

## Süreç

### 1. Database setup (pgvector)

```sql
-- Supabase'de pgvector enable
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  title TEXT NOT NULL,
  source_url TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE chunks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  embedding VECTOR(1536), -- OpenAI text-embedding-3-small
  chunk_index INTEGER,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Vector index
CREATE INDEX idx_chunks_embedding ON chunks 
  USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);

CREATE INDEX idx_chunks_document ON chunks(document_id);
```

### 2. Document ingestion

```typescript
// src/lib/rag/ingest.ts
import { OpenAI } from 'openai'
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function chunkText(text: string, chunkSize = 1000, overlap = 200): Promise<string[]> {
  const chunks: string[] = []
  let start = 0
  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length)
    chunks.push(text.slice(start, end))
    start += chunkSize - overlap
  }
  return chunks
}

export async function embed(text: string): Promise<number[]> {
  const res = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  })
  return res.data[0].embedding
}

export async function ingestDocument(userId: string, title: string, content: string) {
  // 1. Document kaydı
  const { data: doc } = await supabase
    .from('documents')
    .insert({ user_id: userId, title })
    .select()
    .single()
  
  // 2. Chunk'la
  const chunks = await chunkText(content)
  
  // 3. Embed + insert
  const chunkRecords = await Promise.all(chunks.map(async (chunk, i) => ({
    document_id: doc.id,
    content: chunk,
    chunk_index: i,
    embedding: await embed(chunk),
  })))
  
  await supabase.from('chunks').insert(chunkRecords)
  return doc
}
```

### 3. PDF parsing

```bash
npm install pdf-parse
```

```typescript
import pdf from 'pdf-parse'

export async function parsePDF(file: Buffer): Promise<string> {
  const data = await pdf(file)
  return data.text
}
```

### 4. Web scraping (URL → text)

```bash
npm install jsdom @mozilla/readability
```

```typescript
import { JSDOM } from 'jsdom'
import { Readability } from '@mozilla/readability'

export async function scrapeURL(url: string): Promise<string> {
  const html = await fetch(url).then(r => r.text())
  const doc = new JSDOM(html, { url })
  const reader = new Readability(doc.window.document)
  const article = reader.parse()
  return article?.textContent || ''
}
```

### 5. Vector search

```typescript
// src/lib/rag/search.ts
export async function searchChunks(
  query: string, 
  userId: string,
  topK = 5
): Promise<Chunk[]> {
  const queryEmbedding = await embed(query)
  
  const { data } = await supabase.rpc('match_chunks', {
    query_embedding: queryEmbedding,
    match_count: topK,
    user_id: userId,
  })
  
  return data
}
```

Supabase RPC function:
```sql
CREATE OR REPLACE FUNCTION match_chunks(
  query_embedding VECTOR(1536),
  match_count INT,
  user_id UUID
)
RETURNS TABLE (
  id UUID,
  content TEXT,
  document_id UUID,
  similarity FLOAT
)
LANGUAGE SQL STABLE
AS $$
  SELECT 
    c.id, c.content, c.document_id,
    1 - (c.embedding <=> query_embedding) AS similarity
  FROM chunks c
  JOIN documents d ON c.document_id = d.id
  WHERE d.user_id = match_chunks.user_id
  ORDER BY c.embedding <=> query_embedding
  LIMIT match_count;
$$;
```

### 6. RAG query (with citations)

```typescript
// src/app/api/rag/route.ts
export async function POST(req: Request) {
  const { question, userId } = await req.json()
  
  // 1. Search
  const chunks = await searchChunks(question, userId, 5)
  
  // 2. Build context
  const context = chunks.map((c, i) => 
    `[${i + 1}] ${c.content}`
  ).join('\n\n')
  
  // 3. LLM call
  const response = await anthropic.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 1024,
    system: `Sen yardımcı bir asistansın. Cevaplarken sadece verilen bağlam kullan. Her iddia için kaynak referansı ver: [1], [2] gibi.`,
    messages: [{
      role: 'user',
      content: `Bağlam:\n${context}\n\nSoru: ${question}`
    }]
  })
  
  return Response.json({
    answer: response.content[0].text,
    sources: chunks.map(c => ({ id: c.id, content: c.content.slice(0, 200) }))
  })
}
```

### 7. UI

- Document upload (drag-drop, multi-file)
- Document list (her birinde chunk count, status)
- Chat interface (RAG-enabled)
- Citation links (cevapta [1] tıklanınca source chunk'a scroll)

### 8. Re-ranking (Cohere — opsiyonel ama önerilen)

```bash
npm install cohere-ai
```

Top-K vector'dan (örn 20) → re-rank ile top-5'e indir:
```typescript
const reranked = await cohere.rerank({
  query: question,
  documents: chunks.map(c => c.content),
  topN: 5,
})
```

### 9. Hybrid search (BM25 + vector)

Daha iyi accuracy:
```sql
-- Postgres full-text search + vector
SELECT *, 
  ts_rank(to_tsvector(content), plainto_tsquery($1)) AS bm25_score,
  1 - (embedding <=> $2) AS vector_score
FROM chunks
ORDER BY (bm25_score * 0.5 + vector_score * 0.5) DESC
LIMIT 10;
```

## Çıktı standardı

- [ ] Document upload (PDF, TXT, URL)
- [ ] Multi-doc support
- [ ] Vector search hızlı (<200ms)
- [ ] Citation linkleri tıklanabilir
- [ ] Answer streaming
- [ ] Cost monitoring (embeddings + LLM)
- [ ] Hybrid search (opsiyonel)

## Anti-patterns

❌ Chunk size yanlış (800-1200 char ideal)
❌ Embedding cost hesaplanmamış (1M token ~ $0.02)
❌ Re-ranking skip (kalite düşer)
❌ User isolation yok (cross-user data leak)

Başla.
