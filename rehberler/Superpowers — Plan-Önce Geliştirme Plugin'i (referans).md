---
tags: [referans, arac, plugin, claude-code, metodoloji]
guncelleme: 2026-06-04
---

# 🦾 Superpowers — Plan-Önce Geliştirme Plugin'i (referans)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Claude Code plugin'i (obra / Jesse Vincent, Prime Radiant — ~127K★). Claude'u **disiplinli** çalıştırır: koda atlamaz, **önce planlar, test yazar, kendi işini gözden geçirir.** Agentic skill çerçevesi + yazılım metodolojisi.

## Ne yapar
- **Plan-önce akış:** `/brainstorm` (fikri sorularla netleştir, alternatif üret, tasarımı bölüm bölüm onaylat) → `/write-plan` → `/execute-plan`.
- Test yazma + öz-inceleme dahili; "yaz-gör" yerine düşünülmüş üretim.
- 20+ savaşta denenmiş skill.

## Kurulum
```text
# Anthropic resmî marketplace:
/plugin install superpowers@claude-plugins-official
# ya da kendi marketplace'i:
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```
İlgili repolar: `obra/superpowers-skills` (topluluk skill'leri), `obra/superpowers-chrome` (tarayıcı kontrolü), `obra/superpowers-lab` (deneysel).

## Superpowers mı, gstack mı? (ikisi de "Claude'u ekibe çevir")
| | **Superpowers** | [[Dış Kütüphaneler MOC\|gstack]] |
|---|---|---|
| Odak | **Süreç/metodoloji** (plan→test→review, TDD disiplini) | **Roller** (CEO, eng manager, designer, QA, security, release — 23 uzman) |
| Çağrı | `/brainstorm`, `/write-plan`, `/execute-plan` | `/office-hours`, `/review`, `/cso`, `/ship`… |
| Birlikte? | **Evet** — Superpowers *nasıl çalışılır*, gstack *kim ne yapar*. Tamamlayıcı. |

## Videodaki diğerleri — zaten kütüphanede/built-in (tekrar eklenmedi)
- **frontend-design** (277K) → built-in skill + [[$10K Web Sitesi — Claude Code Tasarım İş Akışı]].
- **Code review (5 agent)** → built-in `/code-review` (ultra = çok-agent bulut incelemesi).
- **Security scan** → built-in `/security-review`.
- **Memory** → bende **dosya-tabanlı kalıcı hafıza** zaten çalışıyor (oturumlar arası).
- **gstack (Garry Tan, 23 yetenek)** → `gstack/` vendor klonu mevcut.

## İlişkili
- 🤖 [[Agent Kurma — BLAST Çerçevesi]] (aynı "önce planla" ruhu) · ⭐ [[Dış Kütüphaneler MOC|gstack]] · 💎 [[$10K Web Sitesi — Claude Code Tasarım İş Akışı]].

## Kaynaklar
- [github.com/obra/superpowers](https://github.com/obra/superpowers) · [superpowers-marketplace](https://github.com/obra/superpowers-marketplace) · [superpowers-skills](https://github.com/obra/superpowers-skills)
