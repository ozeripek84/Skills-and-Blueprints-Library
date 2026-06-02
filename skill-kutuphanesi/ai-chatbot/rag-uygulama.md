---
name: rag-uygulama
description: RAG (Retrieval Augmented Generation) — döküman üzerinde soru-cevap.
---

# RAG Application

## Ne zaman
Müşteri içeriği üzerinde "ChatGPT" — PDF, websitesi, knowledge base.

## Stack
Next.js + Anthropic + Pinecone/Supabase pgvector + LangChain

## Süreç
1. Document ingestion: PDF/text → chunks
2. Embeddings (OpenAI text-embedding-3)
3. Vector DB store (Pinecone ya da Supabase pgvector)
4. Query: embed → similarity search → context
5. LLM call: context + question → answer
6. Citation: hangi chunk'tan geldi göster
7. Re-ranking (Cohere optional)

## Çıktı standardı
- Document upload (drag-drop)
- Multi-doc support
- Citation linkleri
- Answer streaming

## Yaygın hatalar
- Chunk size yanlış (800-1200 char ideal)
- Embedding cost'u hesaplamamak
- Hybrid search (BM25 + vector) skip etmek
