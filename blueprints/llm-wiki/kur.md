# Kur: LLM Wiki

Biriken bilgi tabanı iskeleti kurar. `CLAUDE.md` (schema) bu wiki'nin anayasası olur.

## Adımlar
1. Kullanıcıya alanı sor (araştırma / kitap / kişisel / ekip / rakip). `CLAUDE.md`'yi o alana göre uyarla.
2. Klasörleri kur:
   ```bash
   mkdir -p raw/assets wiki/entities wiki/topics wiki/sources
   ```
3. `index.md` ve `log.md` zaten şablonda; yoksa oluştur.
4. Kullanıcıya akışı göster: **ingest** (raw/'a kaynak koy → "işle"), **query** (soru sor → cevap wiki'ye dosyalanır), **lint** ("sağlık taraması").
5. İlk kaynağı bekle; geldiğinde Ingest workflow'u (CLAUDE.md) uygula.

## Not
- Küçük ölçekte `index.md` yeter — embedding/RAG altyapısı **gerekmez**.
- git başlat (versiyon geçmişi bedava): `git init`.
- Obsidian'da aç; graph view ile şekli izle.
> Örnek: bu Skills kütüphanesi zaten bir LLM-wiki (MOC=index, MEMORY=log).
