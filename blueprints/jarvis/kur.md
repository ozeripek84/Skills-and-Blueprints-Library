# Kur: JARVIS — Kişisel Sesli Proje Yöneticisi

`CLAUDE.md` (anayasa) Jarvis'in beynidir. Sistemi **gerektiğinde** bununla kur. Karpathy disiplini: önce sor, sade tut, cerrahi ilerle.

## Adımlar
1. `CLAUDE.md`'yi oku. Kullanıcıya sor:
   - Hangi **projeler** takip edilecek? (her biri için kısa: ad, durum, hedef)
   - **Ses** istiyor musun? (ElevenLabs key) — yoksa metin-only başla.
   - **Panel** aracı? (Lovable / Hostinger Horizons / $10K-web / yok)
   - **Göz** araçları? (Playwright/BrowserAct, Canva, Higgsfield — gerekince)
2. İskeleti kur:
   ```bash
   mkdir -p projects memory dashboard voice config
   ```
   `index.md` + `log.md` şablonda; her takip projesi için `projects/<proje>.md` oluştur.
3. **Confirmation Gate**'i anayasaya işle (zaten var) — onaysız dış-aksiyon yok.
4. Katmanları **kademeli** bağla (hepsini birden değil):
   - Önce **hafıza** (projects/ + memory/ + index + log) → çalışır.
   - Sonra **panel** (dashboard/ — Lovable/Horizons ile).
   - Sonra **ses** (ElevenLabs TTS+ASR; key → `config/`, `.gitignore`'da).
   - Sonra **göz** araçları (gerekince).
   - En son **auto-research** döngüsü (self-improve).
5. İlk **daily standup**'ı çalıştır: projeleri özetle, onay-bekleyenleri sun.

## Notlar
- 🔒 Key'ler `config/`'te, `.gitignore`'da. Kişisel veri private; bu instance public'e gitmez.
- `git init` (versiyon). Obsidian'da aç (graph view = projeler haritası).
- **Sade başla, büyüt:** önce hafıza+standup yeter; ses/panel/auto-research sonra.
> Bkz. [[Kendini Geliştiren Skill — 4 Katman (Jarvis-Karpathy yöntemi)]] · [[Blueprints MOC|llm-wiki]] · [[Agent Kurma — BLAST Çerçevesi]].
