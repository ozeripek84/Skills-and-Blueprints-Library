---
description: Claude Code'da BLAST çerçevesiyle ETİK outbound lead ajanı kur — ICP bul, zenginleştir, kişisel taslak yaz, takvime işle, HTML dashboard
allowed-tools: Bash, Read, Write, Edit, WebSearch
argument-hint: [sektör/ICP] [günlük-adet]
---

# /is-satis:outbound-lead-agent

Sen bir **ajan mimarı + büyüme mühendisisin**. Görev: Claude Code'da, [[Agent Kurma — BLAST Çerçevesi]]'ne göre **etik** bir outbound lead ajanı kurmak. Strateji temeli: `lead-gen-ajansi`.

> **Sınır:** Toplu otomatik scrape + toplu otomatik cold DM/mail **kurma**. Ajan **taslak** üretir; gönderimi insan onaylar. ToS/KVKK/GDPR + rate-limit içinde kal.

---

## Kurulum — BLAST sırası

### B — Blueprint (önce sonucu yaz)
Kullanıcıya doğrula: "Her [gün] [N] ideal müşteri (ICP: [sektör/konum]) için iletişim + kişisel taslak mesaj + HTML dashboard." Koddan değil bu sonuçtan başla.

### L — Links (araçları planla, sonra bağla)
- **Apify** (LinkedIn/Maps/IG/TikTok aktörleri — aylık ~$5 ücretsiz) ve/veya **Firecrawl** (web): public/izinli veri için.
- **Gmail** (taslak oluşturma), **Calendar/CRM** (takip).
- Bağlama: `/plugin` → manage plugins → Gmail install. Apify/Firecrawl **API key → config dosyası** (CHAT'E YAPIŞTIRMA), `.gitignore`'a ekle.

### A — Architecture (dosya yapısını kur)
```
CLAUDE.md      → anayasa: hedef, ICP tanımı, döngü, ETİK kurallar, "taslak-only"
memory/        → reached.md (ulaşılanlar), decisions.md
config/        → apify.key, firecrawl.key  (.gitignore'da)
leads/         → YYYY-MM-DD.json
dashboard.html → çıktı paneli
```

### S — State/Style (dashboard + hafıza)
HTML dashboard: her lead kartı = firma · iletişim (mail/tel/LinkedIn) · kişiselleştirme gözlemi · mesaj taslağı · **durum** (taslak/onaylı/gönderildi). Aranabilir + filtrelenebilir. İlerleme `memory/`'de; ajan idempotent (memory'de olanı tekrar işlemez).

### T — Trigger
Manuel çalıştır; istenirse `/schedule` ile günlük. Her koşuda sadece **yeni** leadleri ekle.

---

## Ajan döngüsü (CLAUDE.md'ye yaz)
gör (ICP'ye uygun yeni firma) → karar (uygun mu, daha önce işlendi mi) → uygula (zenginleştir + araştır + kişisel taslak) → değerlendir (kişiselleştirme ≥1 gerçek gözlem mi) → tekrarla (N'e ulaşana dek). Max iterasyon + maliyet limiti koy.

## Kişiselleştirilmiş taslak (şablon)
```
[Ad] — [işine dair gerçek gözlem]. [Nişindeki] işletmelerin [sonuç] elde etmesine
yardım ediyorum: [1 cümle]. [Ona özel hızlı fikir]. İlgini çekerse 15 dk göstereyim,
çekmiyorsa kafanı meşgul etmem. — opt-out: [çıkış]
```

## Etik checklist (her koşu)
- [ ] Liste public/izinli kaynaktan (ToS-uyumlu)
- [ ] Kişiye özel + alakalı + opt-out
- [ ] Rate-limit + KVKK/GDPR içinde
- [ ] Gönderim insan onayında (ajan sadece taslak)
- [ ] API key dosyada, `.gitignore`'da

## Teslim
`CLAUDE.md`, `dashboard.html`, `leads/<tarih>.json`, `memory/reached.md`. Kullanıcıya dashboard'u aç (`open dashboard.html`) ve "her gün çalıştırmak için `/schedule`" öner.
