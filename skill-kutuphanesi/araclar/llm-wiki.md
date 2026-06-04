---
name: llm-wiki
description: LLM'in sürekli güncel tuttuğu kişisel bilgi tabanı (Obsidian + markdown). RAG değil — her kaynakla biriken, derlenmiş, çapraz-bağlı kalıcı bir wiki. (Karpathy patternı)
---

# LLM Wiki — Biriken Kişisel Bilgi Tabanı

## Ne zaman
Zamanla bilgi biriktirip **dağınık değil organize** tutmak gerektiğinde: araştırma (haftalarca bir konu), kitap okuma (companion wiki), kişisel (hedef/sağlık/günlük), ekip iç-wiki, rakip analizi, due diligence, kurs notu, hobi.

## Temel fikir (RAG'dan farkı)
RAG her soruda bilgiyi **sıfırdan keşfeder**; hiçbir şey birikmez. LLM Wiki ise **kalıcı, büyüyen bir artifact**: kaynak eklendikçe LLM onu okur, özetler, mevcut entity/konu sayfalarına **entegre eder**, çelişkileri işaretler, sentezi zenginleştirir. Bilgi bir kez derlenir, sonra **güncel tutulur**. Cross-ref'ler hazır, çelişkiler işaretli, sentez her şeyi yansıtır.
> **Sen:** kaynak bulma, keşif, doğru soruları sorma. **LLM:** tüm angarya — özetleme, çapraz-referans, dosyalama, tutarlılık. *Obsidian = IDE, LLM = programcı, wiki = codebase.*

## 3 Katman
1. **Raw sources** — kürate edilmiş kaynaklar (makale, PDF, görsel). **Değişmez**, LLM okur ama dokunmaz. Hakikat kaynağı.
2. **Wiki** — LLM'in ürettiği markdown (özet, entity, konu, karşılaştırma, overview, sentez). LLM bu katmanı **tamamen sahiplenir**.
3. **Schema** (`CLAUDE.md`) — wiki nasıl yapılı, konvansiyonlar, ingest/query/lint workflow'ları. LLM'i jenerik chatbot değil **disiplinli wiki bakımcısı** yapan dosya. Sen ve LLM birlikte evrimleştirir.

## 3 Operasyon
- **Ingest** — yeni kaynağı bırak → LLM okur, takeaway'leri seninle konuşur, özet sayfası yazar, index'i + ilgili entity/konu sayfalarını günceller, log'a ekler. Tek kaynak **10-15 sayfaya** dokunabilir. (Tek tek + denetimli ya da toplu.)
- **Query** — soru sor → ilgili sayfalar → citation'lı sentez. Çıktı markdown/tablo/slide (Marp)/grafik olabilir. **Önemli:** iyi cevaplar sohbet geçmişinde kaybolmasın, **yeni sayfa olarak wiki'ye geri dosyalanır** → keşifler de birikir.
- **Lint** — periyodik sağlık taraması: çelişkiler, eskimiş iddialar, orphan sayfalar, kendi sayfası olmayan kavramlar, eksik cross-ref, web aramasıyla doldurulacak boşluklar.

## Navigasyon dosyaları
- **index.md** — içerik kataloğu (her sayfa + 1 satır özet + metadata), kategoriye göre. Her ingest'te güncellenir; query'de önce bu okunur → embedding-RAG'a gerek yok (~100 kaynak/yüzlerce sayfaya kadar).
- **log.md** — kronolojik, append-only. Tutarlı prefix: `## [2026-04-02] ingest | Başlık` → `grep "^## \[" log.md | tail -5` ile parse edilir.

## Çıktı standardı
- Wiki'yi LLM yazar, sen okur/yönlendirirsin. Her kaynak index + log + ilgili sayfaları günceller.
- Cross-ref'ler ve çelişki notları güncel. git repo (versiyon + geçmiş bedava).

## Araçlar (opsiyonel)
Obsidian **Web Clipper** (web→markdown), **graph view** (şekli gör), **Marp** (slayt), **Dataview** (frontmatter sorgu), **qmd** (yerel BM25+vektör arama, CLI+MCP). Hepsi modüler — gerekeni al.

## Yaygın hatalar
- Wiki'yi RAG gibi kullanmak (sadece retrieve) → birikim olmaz.
- Schema'sız başlamak → LLM tutarsız, jenerik üretir.
- İyi query cevaplarını geri dosyalamamak (keşif kaybolur).
- Lint'i atlamak → çelişki/orphan birikir.

> Çalıştırılabilir kurulum (schema CLAUDE.md şablonu + klasör yapısı + ingest/query/lint adımları): `/araclar:llm-wiki`
> Meta: **bu kütüphane zaten böyle bir LLM-wiki** (MOC'lar = index, MEMORY = log, `.gen_index.py` = araç). İlke: [[Karpathy Çalışma İlkeleri (CLAUDE.md)]].
