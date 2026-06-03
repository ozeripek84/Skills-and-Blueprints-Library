---
tags: [referans, arac, gorsel, video, mcp, higgsfield, entegrasyon]
guncelleme: 2026-06-03
---

# 🎬 Higgsfield MCP / CLI — Ajana Görsel & Video Üretimi (referans)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Harici araç. Higgsfield (AI görsel/video motoru) **herhangi bir ajana** bağlanır (Claude, Hermes, OpenClaw, Cursor, Perplexity, NemoClaw). Buraya not düşülme sebebi: görsel/video üretimi gerektiğinde + **[[İçerik Fabrikası — Referans Sistem]]'in bağımlılığı** olduğu için.

## Ne yapar
- **Marketing Studio:** tek bir **link/foto** ver → poster, reklam, lifestyle, sosyal video kampanyası. (Video'da: Claude'a sadece ürün linki verildi → site tarandı, ürün bulundu, video üretildi.)
- **Video analizi → prompt:** beğendiğin videoyu at, "bunu nasıl yaparım" → adım/prompt çıkarır.
- **Soul 2.0 karakter eğitimi:** 8+ fotoğraftan tutarlı karakter (ör. "Maya") + **soul ID**; her seferinde ID ile aynı karakteri üret (marka kampanyalarında tekrar).
- **Sinematik image-to-video**, **viral klip çıkarıcı** (uzun videodan dikey kesitler), **virality prediction** (hook/devamlılık/izlenme 100 üzerinden puan — yeni).
- Görsel 4K'ya, video ~15 sn'ye kadar. **30+ model:** Soul 2, Cinema Studio 3.0, Nano Banana Pro, GPT Image 2, Seedream 4.5, VO 3.1, Flux, Kling, Veo…

## MCP mi, CLI mı?
| | **MCP** | **CLI** |
|---|---|---|
| Ne | Ajan, Higgsfield'ı sohbet içine çağırır | Komut satırından çağırır |
| Kurulum | Ajan ayarlarına **server URL** + Higgsfield hesabıyla auth (API key yok) | Terminalden kur; GitHub'da şeffaf (ne yükleniyor görünür) |
| Maliyet | — | **Agentic iş akışlarında belirgin biçimde daha ucuz (token)** → ajanla çok çağrı yapacaksan CLI |

**Bağlama (Claude masaüstü, MCP):** Settings → **Customization → Connectors** → custom connector → isim "Higgsfield" + MCP adresi → **Connect** → Higgsfield'da onay. (Hermes: prompt'u gir → Hermes'in olduğu cihazda login+doğrula+token kaydet → test bağlantısı.)

## En güzel tarafı: uzaktan kontrol
Ajanı uzaktan sür: ör. **Telegram → Hermes → Higgsfield** — bilgisayarın başına geçmeden görsel/video ürettir.

## ⚠️ Artı / eksi (video'dan dürüst notlar)
- ✅ Büyük kolaylık: cepten, mailden tetikleyip iş başlatma.
- ⚠️ **Kredi-harcama psikolojisi:** ajan onayında token/kredi maliyeti **görünmüyor** → "kartla harcama" gibi farkında olmadan fazla yakabilirsin. Çözüm: her işte **onay iste**, platformu tanı.
- ⚠️ **Platformu ezbere bilmezsen** ajan eksik prompt verir → tekrar → daha çok kredi. Tek seferde net prompt (format + karakter + en-boy) ver.
- ⚠️ **Türkçe yazı/ses** zayıf kalabiliyor (video testinde kayık çıktı); İngilizce/global pazar için çok iyi. İpucu: videoya sonradan yazı bindirmek yerine sıfırdan üret.

## Kütüphanedeki bağı
- 🏭 [[İçerik Fabrikası — Referans Sistem]] — **görsel/video üretim bağımlılığı bu** (sistemin "Higgsfield MCP bağla" adımı buradaki akış).
- 🧱 [[Blueprints MOC|blueprints/scroll-narrative-site]] — asset hattında ElevenLabs yerine Higgsfield kullanılabilir.
- Aynı 4-parça mantığı: [[Agent Kurma — BLAST Çerçevesi]] (araçlar katmanı).

## Kaynaklar
- [higgsfield.ai/mcp](https://higgsfield.ai/mcp) · [higgsfield.ai/cli](https://higgsfield.ai/cli)
- [Higgsfield MCP vs CLI — CLI agentic iş akışında daha ucuz (MindStudio)](https://www.mindstudio.ai/blog/higgsfield-mcp-vs-cli-claude-code-agents-token-cost)
