---
tags: [rehber, agent, blast, claude-code]
guncelleme: 2026-06-03
---

# 🤖 Agent Kurma — BLAST Çerçevesi (Claude Code'da ajan)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Claude Code'un *içinde*, kod yazmadan, gerçek bir **ajan** (çalışan gibi proaktif sistem) kurmanın çerçevesi. Kaynak: Mert'in outbound-ajan videosu; mimari alındı, etik korumalar eklendi. (Kodlanmış SaaS ajanı için → [[Yetenekler MOC|is-akislari/sifirdan-ajan-sistemi]].)

## Ajan ≠ Chatbot
- **Chatbot:** kullanıcı sorar → cevaplar → bekler.
- **Ajan:** kullanıcı bir **hedef** verir → planlar → uygular → değerlendirir → tekrarlar. Bir çalışan gibi **proaktif** hedefe gider.
- Model (Opus/Sonnet/GPT/Gemini) = zekâ; **işin yapıldığı yer IDE** (Claude Code). Karıştırma.

## Ajanın 4 Parçası (ajan kurmanın ~%99'u)
| Parça | Ne | Nerede |
|---|---|---|
| 🧠 **Hafıza** | Neyi hatırladı (geçmiş, müşteri bilgisi, kararlar) | `memory.md` / `memory/` |
| 🔁 **Döngü** | Nasıl davranır: gör → karar ver → uygula → değerlendir → tekrarla | CLAUDE.md'de tanımlı |
| 🛠️ **Araçlar** | Neler yapabilir (mail, takvim, kazıma, API) | Gmail, Calendar, Firecrawl, Apify… |
| 📜 **Bağlam** | Kuralların / anayasan / kısıtlar | `CLAUDE.md` |

## BLAST Çerçevesi (kurulum sırası)
> Sırayla tanımla; ajan iskeleti net çıkar. (Akronim videodan uyarlandı.)

1. **B — Blueprint (Sonuç):** Önce **çıktıyı** tanımla. "Her gün 20 ideal müşteri + kişisel mesaj + dashboard." Koddan değil sonuçtan başla.
2. **L — Links (Araçlar):** Sonuca ulaşmak için hangi araçlar/entegrasyonlar bağlanacak.
3. **A — Architecture (Yapı):** Dosya yapısı — CLAUDE.md, memory, çıktı klasörü, config.
4. **S — State/Style (Durum):** Durum nasıl görünecek — görsel (HTML dashboard) + session (kaldığı yer).
5. **T — Trigger (Tetik):** Ne zaman çalışacak — manuel, ya da `/schedule` ile her gün/hafta.

## Ajan Başarısızlığını Önleyen 5 Kural
1. **Önce veri** — kodla değil, gerçek veriyle başla.
2. **Cerrahi değişiklik** — büyük değil, küçük/kesin dokunuşlar.
3. **Hedef odaklı** — her adım sonuca hizmet etsin.
4. **Görev başına tek ritim** — keşfet → planla → kodla → **commit** (commit'i atlama).
5. **Niyetini söyle** — en büyük hile: ne istediğini net belirt (baştan hedefi, sonda tam çıktıyı).

## Araçları Bağlama
- **Gmail / Calendar:** Claude Code'da `/plugin` → *manage plugins* → ara (ör. "Gmail") → install → bağla.
- **Apify** (LinkedIn/Maps/Instagram/TikTok kazıma — aylık ~$5 ücretsiz kredi) ve **Firecrawl** (web kazıma): API key al.
- 🔐 **API key'i ASLA chat'e yapıştırma.** Claude'a config **dosyası** oluşturtup oraya koy (`.env` / config). `.gitignore`'a ekle.

## ⚠️ Etik (kütüphane çizgisi)
Kazıma + soğuk outreach yapan ajanlar **ToS/KVKK/GDPR** sınırında. Public/izinli veri, kişiselleştirilmiş + opt-out'lu mesaj, rate-limit ve platform kurallarına saygı. Toplu spam/scrape **yok**. Detay: [[Yetenekler MOC|is-satis/lead-gen-ajansi]].

## Hızlı başlangıç
1. Yeni klasör + `claude` aç.
2. Hedefini tek cümle anlat (Blueprint).
3. Claude'a BLAST yapısında CLAUDE.md + memory + dashboard kurdur ("ultrathink" ile daha detaylı).
4. Araçları bağla (`/plugin`, key'ler dosyaya).
5. Çalıştır → çıktıyı gör → `/schedule` ile tekrarla.

## İlişkili
- [[Yetenekler MOC|is-satis/outbound-lead-agent]] — bu çerçeveyle kurulmuş etik outbound ajan.
- [[BrowserAct — Gerçek Tarayıcı Aracı (referans)]] · [[İçerik Fabrikası — Referans Sistem]] (aynı 4-parça mantığı).
- [[Dış Kütüphaneler MOC|gstack]] — hazır ajan/skill takımı.
