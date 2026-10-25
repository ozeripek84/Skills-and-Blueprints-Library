---
tags: [referans, prompt, mcp, degerlendirme, prompts-chat]
guncelleme: 2026-10-25
---

# 📚 prompts.chat — Prompt Kütüphanesi MCP — dürüst değerlendirme (referans)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Kaynak: YouTube (TR) "prompt yazmaya gerek kalmadı" videosu (psK-23HbYiY) + isanurdogdu.com kaynak sayfası + repo `github.com/f/prompts.chat` (eski adı awesome-chatgpt-prompts; Fatih Kadir Akın). İnceleme 2026-10-25: repo klonlandı, MCP sunucusunun kodu (`src/pages/api/mcp.ts`) ve `prompts.csv` okundu.
> **Karar:** platform meşru ve ücretsiz; **elle göz atmak ve görsel/video promptu için ilham** olarak iyi. Videonun asıl önerisi olan **"her istekte önce prompts.chat'e bağlan" kuralı ise kurulmamalı.** Yeni yetenek açılmadı.

## Ne olduğu (doğrulanmış)
- 174.482★, 22K fork (GitHub API, 2026-10-25). 2022-12'den beri aktif, bugün de commit var.
- Lisans: kod **MIT**, prompt içeriği **CC0** (kamu malı) → ticari kullanım serbest.
- Prompt, "akış" (zincir prompt), ajan MD dosyası ve skill barındırıyor. Sponsorlu (Neon, Cognition, CodeRabbit, Sentry…), ücretli plan yok.
- Bağlantı: MCP `https://prompts.chat/api/mcp` · Claude Code eklentisi `/plugin marketplace add f/prompts.chat` → `/plugin install prompts.chat@prompts.chat` · CLI `npx prompts.chat mcp`.

## Videonun iddiası vs gerçek

| İddia | Gerçek |
|---|---|
| "On binlerce hazır prompt" | Repodaki `prompts.csv`'de **2.773** prompt var (2.404 metin, 348 yapılandırılmış, 21 görsel). Sitedeki veritabanı daha büyük olabilir ama site sayı vermiyor. |
| "Denenmiş promptlar, gönül rahatlığıyla kullanın" | **Test süreci yok.** Topluluk gönderiyor; kalite sinyali oylama, "öne çıkan" işareti ve "düşük kalite" bildirimi. "Denendi" notu yalnız bazı yazarların kendi beyanı. |
| "Dünyanın en büyük ve ilk prompt kütüphanesi" | En popüler ve en eskilerden biri, doğru. "İlk" iddiası doğrulanamaz. |
| "Modeller kötü promptu optimize ediyor, prompt yazmaya gerek kalmadı" | Yarı doğru. Model ifadeyi toparlar, ama **bağlamı** (amaç, kitle, kısıt, örnek) yalnız sen bilirsin; şablon bunu getiremez. |
| "10 tool geldi, hepsine izin verdim" | 10 aracın yalnız 4'ü (`search_prompts`, `get_prompt`, `search_skills`, `get_skill`) anahtarsız çalışır. `improve_prompt` ve 5 yazma aracı (`save_prompt`, `save_skill`, `add/update/remove_file…`) API anahtarı ister. Anahtar eklenirse Claude hesabına prompt/skill **yazabilir**; hesap ayarında "MCP ile kaydedilenler herkese açık" seçiliyse yayınlar. |
| Demo: "motion design animasyonu için prompt bul" | Videonun kendi demosunda doğrudan sonuç çıkmadı; "iki Remotion promptu var" dedi. Tipik isabet bu düzeyde. |

## Neden "her istekte önce prompts.chat" kuralı kurulmamalı
1. **Kaliteyi artırmıyor, bazen düşürüyor.** Promptların ~%30'u (834) 2022 ChatGPT dönemine ait "I want you to act as…" kalıbında. Persona üzerine yapılan bir araştırma (Zheng vd., *EMNLP 2024 Findings*; 162 rol × 2.410 soru × 4 model ailesi) sistem promptuna persona eklemenin olgusal görevlerde doğruluğu **artırmadığını**, etkisinin büyük ölçüde rastgele olduğunu buldu. Güncel Claude'da net görev + bağlam, jenerik şablondan iyi çalışır.
2. **Her istekte ek maliyet.** Her görevde bir ağ çağrısı + bağlama alakasız metin = daha yavaş, daha çok token, dikkati dağıtan talimat.
3. **Güvenlik yüzeyi.** Kural, topluluğun yazdığı metni **her göreve otomatik** çekip "isteğimi buna göre güçlendir" der. Bu, prompt enjeksiyonuna kapı açar. `get_skill` script içeren skill'leri döndürüyor ve açıklaması Claude'a bunları `.claude/skills/` altına kaydetmeyi öneriyor. İncelenmemiş topluluk skill'ini kurmak tedarik zinciri riskidir (bkz. [[find-skills — Skill Bulan Skill (Vercel Labs) (referans)]] uyarısı).
4. **Kendi kuralınla çakışıyor.** [[Süper Opus 5]] "önce **bu** kütüphaneye bak" diyor; bu kütüphane dürüstlük filtresinden geçmiş, sana göre uyarlanmış. İkinci bir "önce buraya bak" katmanı, küratörsüz ve daha zayıf bir kaynağa öncelik verir.
5. **Kalıcı kural, kalıcı davranış.** "Kural olarak kaydet" tek seferlik bir deneme değil; her sohbeti etkiler ve sonradan neden kötüleştiğini fark etmek zordur.

## Alternatiflerle kıyas

| Seçenek | Kalite filtresi | Maliyet | Ne zaman |
|---|---|---|---|
| **Bu vault** (skill + command) | Küratörlü, dürüstlük işaretli, sana uyarlanmış | Bedava, yerel | Her zaman ilk durak (zaten kuralın bu) |
| **prompts.chat** (isteğe bağlı) | Oylama + bildirim, test yok | Bedava, her çağrı ağ + token | Görsel/video promptu için ilham, "X için örnek var mı?" diye **elle** sorduğunda |
| **Görevi iyi anlatmak** (bağlam + örnek + kısıt) | Senin bilgin | Bedava | Çoğu iş; şablonun veremeyeceği şeyi verir |
| **Anthropic Console prompt improver / resmi prompt rehberi** | Model sağlayıcının kendi pratiği | Console'da API kullanımı | API/system prompt yazarken |
| **find-skills / skills.sh** | Ekosistem, inceleme sende | Bedava | Eksik bir **skill** ararken; kurmadan önce oku |

## Nasıl kullanılır (önerilen)
- **Bağlamak istersen:** salt okuma yeter, API anahtarı ekleme. claude.ai → Ayarlar → Connectors → Add custom connector → URL `https://prompts.chat/api/mcp`. Yazma araçlarını kapalı tut.
- **Kural yazma.** Gerektiğinde açıkça iste: "prompts.chat'te Midjourney sinematik portre için 3 örnek bul, ortak anahtar kelimeleri çıkar, benim konuma uyarla."
- **Topluluk skill'ini kurmadan önce** SKILL.md'yi ve varsa script'leri satır satır oku.
- Görsel/video promptu (stil anahtar kelimeleri, kamera dili) prompts.chat'in en güçlü olduğu alan. Metin işleri için bu vault ve iyi bir görev tarifi daha iyi.

## 🔗 İlgili
- [[Süper Opus 5]] — "önce kütüphaneye bak" kuralı
- `skill-kutuphanesi/araclar/model-metodu-tasima` — "bağlam kalır, davranış tarifi gider" ilkesi
- [[find-skills — Skill Bulan Skill (Vercel Labs) (referans)]] — dış skill kurarken tedarik zinciri uyarısı
- [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]] — görsel/video üretim tarafı

Kaynaklar: github.com/f/prompts.chat · prompts.chat · isanurdogdu.com/kaynaklar/prompts-chat-kutuphanesi · Zheng vd. 2024, arXiv:2311.10054 (EMNLP 2024 Findings, s. 15126–15154)
