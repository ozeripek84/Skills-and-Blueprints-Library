---
tags: [referans, arac, ses, muzik, video, mcp, elevenlabs, entegrasyon, ucretli]
guncelleme: 2026-10-18
---

# 🎙️ ElevenLabs MCP Connector — Claude'dan Ses, Müzik, Görsel, Video (referans)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Harici, **ücretli (freemium)** araç. ElevenLabs'in barındırılan MCP bağlayıcısı 2026-09-14'ten beri yalnız ajan yönetimi değil, **üretim** de yapıyor: Claude sohbetinden seslendirme, ses efekti, müzik, dublaj, transkript, görsel ve video. Buraya not düşülme sebebi: ElevenLabs kütüphanede zaten 4 yerde bağımlılık olarak geçiyor (`ai-chatbot/voice-bot`, `blueprints/scroll-narrative-site`, `blueprints/jarvis`) ve viral bir video bağlayıcıyı tanıttı.
> ⚠️ Kütüphanenin **ücretsiz-araç tercihi**: bunu varsayılan yetenek olarak değil, kalite gerektiğinde ve bütçe varsa kullanılacak bir referans olarak tut. Ücretsiz alternatifler aşağıda.

## Ne yapar (resmî duyuru, 2026-09-14 · son güncelleme 2026-10-12)
- **Seslendirme (TTS):** kütüphanedeki herhangi bir sesle; "sakin, biraz yavaş, şu aksanla" gibi tarif → Claude ses seçer, üretir, dosyayı sohbete verir. Beğenmezsen "daha sıcak yap" → yeniden üretir.
- **Ses efekti + müzik:** "bant yırtılması, karton kapak kapanması, gök gürültüsü" → varyasyonlar; vokalli/vokalsiz her türde müzik.
- **Transkript (Scribe):** 99 dil, konuşmacı etiketi + zaman damgası. **Dublaj:** konuşmacının sesini koruyarak çeviri.
- **Görsel + video:** görsel üretme/düzenleme, görseli videoya çevirme, lipsync. 50+ model (ElevenLabs hangi görsel/video modelleri olduğunu açıkça yazmıyor).
- **Flows:** görsel → o görselden video → üstüne seslendirme → müzik zincirini tek istekte kurar. Her Flows düğümüne MCP'den erişilir.
- **Çıktı nerede:** her üretim ElevenCreative çalışma alanına kaydedilir; Studio'da açıp timeline'da elle bitirebilirsin.

## Videonun iddiası vs gerçek

| Videonun iddiası | Gerçek |
|---|---|
| "Connectors'ta ara, bağlan, o kadar" | Doğru (OAuth, API anahtarı yok). Ama her üretim **ElevenLabs kredisi** yer; videoda hiç geçmiyor. |
| "Görsel ve video da aynı şekilde" | **Ücretsiz planda video yok**, yalnız görsel. Video için en az Starter. |
| "Kötü sesi (yol kenarı kaydı) temizletirsin" | Resmî duyuruda ve MCP sayfasında ses izolasyonu/gürültü temizleme **geçmiyor**. ElevenLabs'in Voice Isolator ürünü var, ama bağlayıcıdan çağrılabildiği doğrulanmadı. Kendi hesabında dene, varsayma. |
| "Bitmiş işi tek seferde iste" (görsel → video → ses → müzik) | Doğru, Flows bunu yapıyor. Ama zincirin her halkası ayrı kredi yer; tek bir istek, birden çok üretimin faturası demek. |
| "Tamamen sohbette kalırsın" | Üretim evet; ince ayar (timeline, miks) için yine Studio'ya geçmen gerekebilir. Video bunu kendisi de söylüyor. |

## Plan ve lisans (elevenlabs.io/pricing, 2026-10-18)

| Plan | Aylık | Kredi/ay | Ticari lisans | Ses klonlama | Video |
|---|---|---|---|---|---|
| Free | $0 | 10.000 | ❌ | ❌ | ❌ (yalnız görsel) |
| Starter | $6 | 30.000 | ✅ | Instant | ✅ |
| Creator | $22 | 121.000 | ✅ | Instant + Professional | ✅ |
| Pro | $99 | 600.000 | ✅ | Instant + Professional | ✅ |

- ⚠️ **Ücretsiz planda ticari lisans yok:** müşteri işi, reklam, para kazanan YouTube kanalı → en az Starter.
- Kredi devretmez (Free). Video ve uzun müzik krediyi hızlı yer; işe başlamadan küçük bir deneme ile tüketimi gör.
- **Ses klonlama:** yalnız kendi sesin ya da **yazılı izni olan** birinin sesi. Ünlü/başkasının sesi = hukuki risk + platform kuralı ihlali.

## Kurulum
- **claude.ai / Claude Desktop:** Ayarlar → Connectors → "ElevenLabs" ara → Connect → ElevenLabs hesabıyla bir kez giriş. Çalışma alanı yöneticisi hangi araçların çağrılabileceğini kısıtlayabilir; veri bölgesi (data residency) bağlanırken seçilir.
- **Claude Code:** `claude mcp add --transport http elevenlabs https://api.elevenlabs.io/v1/mcp` → oturumda `/mcp` ile OAuth girişi.
- **Geliştirici yolu:** ElevenLabs'in 2025'teki yerel açık kaynak MCP sunucusu hâlâ var (kendi API anahtarınla). Kendi uygulamanda (voice-bot vb.) zaten API'yi doğrudan kullanıyorsun; bağlayıcı **içerik üretimi** içindir.
- *Durum 2026-10-18:* bu ortamda bağlı değil; bağlamak için claude.ai connector ayarlarından yetkilendirmen gerekir.

## Ne zaman kullan / ne zaman kullanma
- ✅ Reels/Shorts seslendirmesi, ürün videosuna ses efekti ve müzik, Türkçe içeriği başka dile dublaj, podcast/röportaj transkripti. Çok dilli ses kalitesi ElevenLabs'in gerçek güçlü yanı.
- ✅ Hızlı deneme: farklı ton ve tempoda 3–4 seslendirme alıp seçmek.
- ⚠️ Görsel/video için tek araç yapma: kütüphanede görsel/video tarafı [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]] ile zaten kurulu ([[İçerik Fabrikası — Referans Sistem]] onu kullanıyor). İki bağlayıcıyı aynı iş için karıştırma: **ses = ElevenLabs, görsel/video = Higgsfield** iyi bir ayrım.
- ❌ Başkasının sesini klonlamak, ücretsiz planla müşteri işi teslim etmek.

## Ücretsiz / açık alternatifler (kütüphane tercihi)
- **TTS (yerel):** Piper (açık kaynak, Türkçe sesleri var) · Kokoro (Apache-2.0, sınırlı dil). Ses modeli lisansını model başına kontrol et.
- **Gürültü temizleme:** DeepFilterNet (açık kaynak) · Audacity "Noise Reduction".
- **Ses efekti:** freesound.org (Creative Commons; her dosyanın lisansı ayrı, ticari kullanımda CC0/CC BY seç).
- Kalite farkı gerçek: Türkçe doğal seslendirmede ElevenLabs belirgin önde. Ücretsiz yol dahili/kişisel işlerde yeter.

## 🔗 Bununla birleştir
- [[İçerik Fabrikası — Referans Sistem]] — uçtan uca içerik hattına ses katmanı olarak.
- [[AI YouTube Kanalı Prompt Paketi — dürüst kullanım (referans)]] — faceless video seslendirmesi (⚠️ faceless-mill demonetize riski orada yazılı).
- `ai-chatbot/voice-bot` — sesli bot (API yolu) · `blueprints/scroll-narrative-site` — asset hattı.
- [[Claude + Canva Connector — Tasarım (referans)]] — aynı mantıkta başka bir connector.

Kaynaklar: elevenlabs.io/blog/introducing-voice-music-image-and-video-generation-in-the-elevenlabs-mcp · elevenlabs.io/mcp · elevenlabs.io/pricing
