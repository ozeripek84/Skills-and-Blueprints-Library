# LLM Wiki — Schema

## Amaç
Biriken kişisel bilgi tabanı iskeleti (Karpathy patternı). Klonla → `raw/`'a kaynak koy → LLM `wiki/`'yi yazıp güncel tutar. Bu dosya **schema**'dır: klonladığında senin wiki'nin CLAUDE.md'si olur, alanına göre evrimleştirirsin. Yöntem: [[Yetenekler MOC|araclar/llm-wiki]].

> Sen kaynak/soru getirirsin; ben (LLM) tüm angaryayı yaparım. raw/ değişmez; wiki/'yi ben sahiplenirim. İlke: [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] (önce sor, sade tut, cerrahi güncelle).

## Katmanlar
- `raw/` — kaynaklar (makale, PDF, görsel; `raw/assets/`). **DEĞİŞMEZ** — okurum, dokunmam.
- `wiki/` — benim ürettiğim sayfalar: `wiki/entities/`, `wiki/topics/`, `wiki/sources/`, `overview.md`, `synthesis.md`.
- `index.md` (içerik kataloğu) · `log.md` (kronolojik kayıt).

## Sayfa konvansiyonu
- Her sayfa YAML frontmatter: `tags`, `date`, `source_count`. Cross-ref `[[wikilink]]` ile.
- **entity** = tek varlık (kişi/şirket/kavram) · **topic** = konu sentezi · **source** = kaynak özeti.
- Stil: sade, doğrulanabilir, kaynak-bağlı, citation'lı. Spekülasyon yok.

## Workflow — Ingest
1. `raw/`'daki yeni kaynağı oku. 2. Takeaway'leri kullanıcıyla konuş. 3. `wiki/sources/`'a özet yaz.
4. İlgili entity/topic sayfalarını güncelle — **çelişki varsa İŞARETLE** (sil değil). 5. `index.md` + `log.md` güncelle.
Tek kaynak 10-15 sayfaya dokunabilir. Tek tek + denetimli öner.

## Workflow — Query
`index.md` oku → ilgili sayfalara gir → citation'lı sentez. Çıktı md/tablo/Marp slayt olabilir.
**Değerli yanıtı `wiki/`'ye yeni sayfa olarak DOSYALA** (keşif birikir, sohbette kaybolmaz).

## Workflow — Lint (kullanıcı isteyince)
Tara: çelişki · eskimiş iddia · orphan sayfa · kendi sayfası olmayan kavram · eksik cross-ref · web ile doldurulacak boşluk. Yeni soru/kaynak öner.

## Navigasyon
- `index.md`: `## Entities / ## Topics / ## Sources` — her satır `[[sayfa]] — 1 satır özet`.
- `log.md`: append-only, `## [YYYY-MM-DD] ingest|query|lint | Başlık` (grep'lenebilir).

> Büyürse: Obsidian graph view, Dataview (frontmatter sorgu), Marp (slayt), qmd (yerel arama). git ile versiyonla.
