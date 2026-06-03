# İçerik Fabrikası

Tek bir markaya hizmet eden, uçtan uca içerik üretim sistemi: fikir → görsel/video → caption → takvim → otomatik paylaşım. Tamamen sohbet üzerinden çalışır. Claude Code + Higgsfield MCP + Upload-Post API üzerine kurulu.

> Bu klasörü Claude Code'da açtığın anda sistem **kendini otomatik yükler**. CLAUDE.md, MEMORY.md ve `memory/`, `brand/`, `reference/` klasörlerindeki tüm dosyalar oturumun başında otomatik gelir. Hiçbir prompt'u kopyalaman gerekmez.

---

## 1. Sistem Tek Cümlede

> "Sen ne istersen söyle, doğru workflow'u tetiklerim, üretirim, sana onaylatırım, takvime koyarım, zamanı gelince Upload-Post otomatik yayınlar."

---

## 2. Ön Koşullar

| Ne | Ne için | Nereden |
|---|---|---|
| **Claude Code** (CLI) | Sistemin altyapısı — terminal üzerinden çalışır, klasördeki CLAUDE.md/MEMORY.md ve `@-import` edilen dosyaları otomatik yükler | claude.ai/code → resmi installer; veya `npm install -g @anthropic-ai/claude-code` |
| **Anthropic hesabı** | Claude Code için kimlik | Claude Pro/Max aboneliği VEYA Anthropic API key (console.anthropic.com) |
| **Higgsfield MCP bağlantısı** | Görsel ve video üretimi (`generate_image`, `generate_video`) | higgsfield.ai → hesap aç → MCP olarak Claude Code'a ekle (Adım 2'ye bak) |
| **Upload-Post hesabı** | Sosyal medya hesaplarına otomatik paylaşım. API key ile bash üzerinden çağrılır. | upload-post.com → hesap aç → user identifier oluştur → sosyal medya hesaplarını bağla → API key al |
| **Aktif sosyal medya hesapları** | Paylaşım yapacağın platformlar | Instagram, TikTok, X, YouTube, LinkedIn, Facebook, Pinterest, Threads, Bluesky, Reddit, Google Business Profile |

> Upload-Post yoksa **sistemin %80'i çalışmaya devam eder**: üretim, onay, takvim planlaması — hepsi olur. Sadece son adım (otomatik yayın) yapılmaz, manuel paylaşırsın.
>
> **Önemli**: Upload-Post'un Free planında **TikTok yok** + aylık post limiti düşük. TikTok kullanacaksan paid plan gerekli.

---

## 3. Kurulum (15 dakika)

### Adım 1 — Claude Code'u Kur ve Klasöre Gir (1 dk)

1. Claude Code'u kur (yoksa):
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
   (veya claude.ai/code'dan resmi installer)
2. Bu zip'i bilgisayarında uygun bir yere aç (örn. `~/Documents/İçerik Fabrikası/`).
3. Terminalden klasöre gir ve Claude Code'u başlat:
   ```bash
   cd "~/Documents/İçerik Fabrikası"
   claude
   ```
4. İlk açılışta Claude Code dosyalara erişim için onay ister → kalıcı onay ver.

> Doğru çalıştırdıysan Claude Code `CLAUDE.md`'yi ve onun `@-import` ettiği tüm dosyaları (brand/, reference/, memory/) otomatik okur. Selamlamada sistemi tanıdığını görürsün.

### Adım 2 — Higgsfield MCP'yi Bağla (3 dk)

1. higgsfield.ai'da hesap aç (yoksa). Plan seç (görsel başına credit harcanıyor).
2. Higgsfield'in MCP server URL'ini ya da kurulum talimatını al (higgsfield.ai → Developer / MCP).
3. Claude Code'a MCP olarak ekle:
   - **Komut ile**: `claude mcp add higgsfield <higgsfield-mcp-url>`
   - **Manuel**: `~/.claude.json` veya bu klasörde `.mcp.json` oluştur, içine Higgsfield server config'ini koy.
4. Claude Code'u yeniden başlat.
5. Doğrula: sohbete `Higgsfield araçları çalışıyor mu test et` yaz → Claude `balance` ya da `list_workspaces` çağırır.

### Adım 3 — Markanı Kur (10 dk)

Sohbete yaz:

```
markamı kuralım
```

Sistem sırayla 4 bloğu sorar ve cevaplarına göre `brand/` ve `config/scheduling-rules.md` dosyalarını otomatik doldurur:

- **Marka** → ad, ne yaptığı, hedef kitle, USP, sosyal hesaplar
- **Görsel stil** → renkler, logo, görsel ton, foto/illüstrasyon karması
- **Ses tonu** → kişilik, hashtag stratejisi, emoji kullanımı, kaçınılacak kelimeler
- **Paylaşım kuralları** → aktif platformlar, haftalık ritim, gün/saat slotları, blackout dönemler

Her blok sonunda yazılacak içeriği sana onaylatır. Yarım bırakırsan kalan placeholder'lar `[FILL: ...]` olarak kalır, sonra "şu kısmı tamamlayalım" diyerek devam edebilirsin.

### Adım 4 — Upload-Post'u Bağla (paylaşıma hazır olduğunda — 5 dk)

> Bu adımı atlayabilirsin; sonra eklersin. Atlarsan sistem üretim ve takvim yapar, manuel paylaşırsın.

1. **upload-post.com'da hesap aç.** Plan seç (Free veya Paid).
2. Dashboard'da **bir "user" / "profile" oluştur** (örn. `marka-adın`).
3. **Sosyal medya hesaplarını bağla** (her platform için OAuth).
4. **API key oluştur** (Settings → API Keys).
5. `config/upload-post-config.md` dosyasını aç, `[FILL: ...]` placeholder'larını gerçek değerlerle değiştir.

### Adım 5 — Test Et (2 dk)

Sohbete yaz:

```
Test postu yap. Sadece bir görsel üret, sonra Reddit'e r/test subreddit'ine şimdi yayınla.
```

Sistem:
- Görsel üretir → `library/drafts/`'a kaydeder, sana gösterir
- Sen onaylarsın → `library/approved/`'a geçer
- Upload-Post'a submit eder → `library/published/`'a taşır
- Yayınlandığını sana söyler

Çalıştıysa hazırsın. Çalışmadıysa → **Bölüm 11 Troubleshooting**.

---

## 4. Klasör Yapısı

```
İçerik Fabrikası/
├── README.md, CLAUDE.md, MEMORY.md
│
├── brand/                  ← KULLANICI DOLDURUR (auto-loaded)
│   ├── identity.md
│   ├── visual-style.md
│   ├── voice-tone.md
│   └── assets/             ← logo, font, ürün foto, karakter referansları
│
├── config/                 ← KULLANICI DOLDURUR (NOT auto-loaded)
│   ├── upload-post-config.md
│   └── scheduling-rules.md
│
├── reference/              ← AI REFERANSI (auto-loaded)
│   ├── platform-specs.md
│   ├── prompt-templates.md
│   └── character-library.md
│
├── memory/                 ← DOMAIN HAFIZA (auto-loaded, ≤120 satır/dosya)
│   ├── strategy.md
│   ├── images.md
│   ├── videos.md
│   ├── characters.md
│   ├── calendar.md
│   ├── publishing.md
│   ├── feedback-log.md
│   └── archive/            ← compaction sonrası eski entry'ler
│
├── library/                ← ASSET AKIŞI (asla context'e yüklenmez)
│   ├── drafts/             üretildi
│   ├── approved/           onaylandı
│   ├── scheduled/          Upload-Post'a gönderildi
│   ├── published/          yayınlandı
│   │   └── 2026/05/        yıl/ay arşivi (otomatik aylık)
│   └── rejected/           reddedildi
│
└── calendar/               ← TAKVİM (workflow tarafından yüklenir)
    ├── current.json        son 90 günün entry'leri
    └── archive/
        └── 2026-04.json    eski aylar
```

### Neden bu yapı?

- **`@-import` ile tek context.** Claude Code başladığı an `brand/`, `reference/`, `memory/` içindeki tüm dosyalar otomatik context'e gelir. Manuel "şu dosyayı oku" demene gerek yok.
- **`config/` ayrı.** API key her oturum context'e girmesin diye — hem güvenlik hem token tasarrufu.
- **`library/` ve `calendar/` ayrı.** Yüzlerce asset / yüzlerce takvim entry'si oturum context'ini şişirmesin.
- **Memory compaction.** Her `memory/*.md` dosyası 120 satırı geçince sistem uyarır, eski entry'leri `memory/archive/`'a taşır. Sürdürülebilir uzun vadeli kullanım.

---

## 5. Onay Akışı — Asla Bozulmayan Tek Yön

```
DRAFT  →  APPROVED  →  SCHEDULED (Upload-Post'a submit edildi)  →  PUBLISHED
```

Her aşama bir klasör (`library/drafts/`, `approved/`, `scheduled/`, `published/`) ve **sadece sen onaylayınca** bir sonraki aşamaya geçilir.

| Komut | Ne yapar |
|---|---|
| "1, 3, 5 beğendim" | drafts → approved klasörüne taşır |
| "2 reddet, çok klişe" | drafts → rejected; sebebi feedback-log'a yazılır |
| "Onaylananları 2 hafta içine takvimle" | scheduling-rules'a göre slot atar, caption üretir, sana onaylatır, Upload-Post'a submit eder |
| "Bu hafta neler planlı?" | calendar.json'u listeler, Upload-Post'tan status çeker |
| "Şimdi paylaş <id>" | Belirli bir postu Upload-Post'a anında submit eder |

> **Hiçbir koşulda** sistem onay almadan submit yapmaz. Bu hard rule, CLAUDE.md §4'te yazılı.

---

## 6. Otomatik Paylaşım

Upload-Post zamanlamayı kendi sunucusunda hallediyor. Biz `scheduled_date` parametresiyle gönderiyoruz, Upload-Post o zaman geldiğinde paylaşıyor. Bizim cron / scheduled task kurmamıza gerek yok.

Akış:
1. Onaylanan içeriği takvimle dersin → calendar workflow plan kurar, sana gösterir.
2. Sen onaylarsın → publishing workflow her entry'yi Upload-Post'a `scheduled_date` ile gönderir.
3. Upload-Post `job_id` döner, biz `calendar/current.json`'a kaydederiz.
4. Zamanı gelince Upload-Post yayınlar. Sen "ne yayınlandı?" diye sorduğunda sistem status'u kontrol eder, calendar'ı günceller.

---

## 7. Kendini Geliştirme — Feedback Loop

Sistem üç şekilde öğrenir:

### 7.1 Otomatik (sen hiçbir şey demeden)
- Her geri bildirim (*"bu güzel"*, *"bu çok mor"*, *"yeniden dene"*) anında `memory/feedback-log.md`'ye yazılır.
- Her draft → approved → published transition'ı `library/`'de izlenir.
- Kampanya statüleri, scheduled post'lar, error log'lar otomatik güncellenir.

### 7.2 Yarı-otonom (sistem önerir, sen onaylarsın)
**Pattern auto-detection** (CLAUDE.md §1.6): Her oturum başında sistem `memory/feedback-log.md`'yi tarar. Aynı türden **3+ benzer geri bildirim** görürse sana sorar:

> *"⚠️ Son 4 görselde renk yoğunluğu eleştirildi (warm tones tercihi gibi görünüyor). `memory/images.md`'ye kalıcı kural olarak ekleyeyim mi? (evet / hayır / 30 gün sorma)"*

- **evet** → kalıcı kural olur, bir daha sürekli "warm tones lütfen" demek zorunda kalmazsın.
- **hayır** → ignore, bir sonraki oturumda pattern devam ederse tekrar sorulur.
- **30 gün sorma** → 30 gün boyunca o pattern için sessiz kalır.

Sistem **asla onayın olmadan kural koymaz** — sadece gözünü açık tutar ve sana önerir.

### 7.3 Manuel (sen söyleyince)
- *"Bunu hatırla: artık emoji kullanmıyoruz"* → ilgili memory dosyasına + ana `MEMORY.md`'ye cross-reference.
- *"Bundan sonra hep warm tones"* → `memory/images.md`'ye kalıcı kural.

### Pratik etki
- **1 hafta sonra**: sistem ilk renk tercihini hatırlar.
- **1 ay sonra**: caption tonun ve görsel stilin otomatik oturmuş olur.
- **3 ay sonra**: marka tonu, görsel stil, hashtag stratejin **senin gerçek tarzına** çoktan oturmuş.

### Compaction (sürdürülebilirlik)
Her `memory/*.md` dosyası 120 satıra ulaştığında sistem uyarır: *"⚠️ memory/X.md 130 satır. Compaction önereyim mi?"* Onaylarsan eski entry'ler `memory/archive/YYYY-MM-DD_X.md`'ye taşınır, dosya kompakt hale gelir.

Aynı şekilde aylık olarak: *"Geçen ayın published asset'lerini library/published/2026/04/'a taşıyayım mı?"* sorusu sorulur. Bu sayede sistem 4 ay, 6 ay, 1 yıl sonra da temiz çalışır.

---

## 8. Günlük Kullanım — Örnek Komutlar

### Strateji
- "Önümüzdeki 2 hafta için Instagram'da ürün lansmanı planı kur"
- "Bana 5 farklı reel hook'u öner — eğitim odaklı"
- "Rakiplerin sık kullandığı bir formatı bizim sesimize uyarlayarak brief yaz"

### Görsel
- "Ürünümüzün 4:5 lifestyle shot'ı, mermer yüzey, sabah ışığı, 3 varyant"
- "Pastel arka plan üstüne 'Yeni geldi' yazılı bir grafik post"
- "Carousel — 5 slide, ilk slide hook, son slide CTA"

### Karakter & Video
- "Karakter oluştur: 30'lu yaşlarda, sade tarz, doğal ışıkta — adı Rana olsun"
- "Rana'yı kullanarak şu script'i okuyan 30 saniyelik bir reel yap"
- "Bu görseli yumuşak bir parallax ile 5 saniyelik mp4'e çevir"

### Onay & Takvim
- "Drafts'a bak, hangileri var?"
- "1, 3, 5'i onaylıyorum, 2'yi reddet — fazla agresif"
- "Onaylananları önümüzdeki 2 haftaya takvimle"
- "Bu hafta neler planlı?"

### Paylaşım
- "Şimdi paylaş <post id>"
- "Yayınlananları göster"
- "Failed olanları listele, neden başarısız oldu?"

### Sistem
- "Bunu hatırla: artık emoji kullanmıyoruz"
- "Yeni bir alan ekle: e-posta pazarlama"
- "Memory dosyalarını kompakt et"

---

## 9. Token & Maliyet Disiplini

Sistem `@-import` sayesinde her oturum başında **brand + reference + memory**'i tek seferde yükler — tahmin edilebilir bir maliyet.

- `library/` ve `calendar/` context'e gelmez (potansiyel olarak GB'larca).
- `config/` context'e gelmez (API key güvenliği + boşuna token).
- `memory/` her dosya 120 satırla sınırlı — dengeli kullanım.

**Üç maliyet kalemi:**
1. **Claude Code** — Claude Pro/Max aboneliği (sabit aylık) VEYA Anthropic API key (kullanıma göre).
2. **Higgsfield** — üretim başına credit. Image ucuz, video ~10× daha pahalı.
3. **Upload-Post** — aylık post limitli abonelik. Free planın limiti düşük + TikTok yok.

---

## 10. Yeni Alan Eklemek

Sisteme şunu yaz:

```
Yeni bir alan ekle: [ad] — [ne yapacak]
```

Örnek: "Yeni bir alan ekle: e-posta pazarlama — haftalık newsletter draft'ları üretsin."

Sistem otomatik:
1. CLAUDE.md'ye yeni bir workflow section'ı ekler (§5.7 gibi)
2. `memory/<alan>.md` template dosyasını oluşturur
3. `@-import` listesine ekler (CLAUDE.md §0)
4. Routing tablosuna satır ekler

Sonra sen o alanın kurallarını sohbet ederek belirlersin.

---

## 11. Troubleshooting

### "Claude Code klasörü tanımıyor / kurallar yüklenmiyor"
- Doğru klasörde mi `claude` çalıştırdın? `pwd` ile kontrol et.
- `CLAUDE.md` ve `MEMORY.md` dosyalarının köke ait olduğunu doğrula (`ls`).
- Yeni oturum aç (`/exit` sonra `claude` tekrar).

### "Sistem markamı tanımıyor / generic üretiyor"
- `brand/identity.md`'de hâlâ `[FILL: ...]` placeholder'ları kaldıysa kurulum tamamlanmamış.
- Sohbete `markamı kuralım` yaz, eksik kısımları tamamla.

### "Higgsfield çalışmıyor / generate_image hata veriyor"
- MCP server bağlı mı? `claude mcp list` ile kontrol et.
- Higgsfield credit'in bittiyse sistem söyler. higgsfield.ai'da credit topla.
- Yanlış workspace seçili olabilir. Sohbete `Higgsfield workspace listesini göster ve doğrusunu seç` yaz.

### "Bir görseli reference olarak verdim, sistem kullanmadı"
- Inline (sohbete drag-drop) attığın görsellerin ham byte'larına sistem doğrudan erişemiyor.
- Çözüm: dosyayı `brand/assets/<isim>.<uzantı>` olarak kaydet, sonra "şu dosyayı reference olarak kullan: brand/assets/x.png" de.

### "Görseller hep yanlış renkte / off-brand çıkıyor"
- `brand/visual-style.md`'deki renk paleti hex kodları olarak yazılı mı?
- "Şu rengi asla kullanma" listesine eklemeleri unutma.
- Birkaç düzeltme sonrası sistem öğrenir; `memory/feedback-log.md`'ye bak.

### "Upload-Post'a submit hata veriyor"
| Kod | Olası sebep | Çözüm |
|---|---|---|
| 401 | API key yanlış / boş | `config/upload-post-config.md` kontrol |
| 403 | Plan sınırı (örn. TikTok Free'de yok) | Paid plana geç veya o platformu çıkar |
| 400 (Pinterest) | `pinterest_board_id` yok | `config/upload-post-config.md`'ye ekle |
| 400 (Reddit) | `subreddit` yok | Calendar entry'sinde belirt |
| 400 (YouTube) | `title` yok | Caption üretiminde title'ı zorunlu yap |
| 400 (scheduled_date past) | Geçmiş tarih | Scheduling-rules zaman hesaplaması bozuk olabilir |
| 404 | `UPLOAD_POST_USER` yanlış | Upload-Post dashboard'unda profile adının tam aynısı |
| 429 | Aylık limit aşıldı | Upgrade veya bir sonraki ay |

Detaylı hata her zaman `memory/publishing.md` Error Log'unda.

### "Post Upload-Post'a gitti ama platforma gitmedi"
- Upload-Post dashboard'unda postu kontrol et.
- Sosyal medya hesabının token'ı süresi dolmuş olabilir (Instagram/Facebook OAuth periyodik yenilenir).
- Çözüm: Upload-Post dashboard → Connections → ilgili hesabı yeniden bağla.

### "Aynı post iki kere yayınlandı"
- Idempotency-Key normalde engeller. Eğer farklı key ile iki kere submit olduysa: dashboard'dan birini sil, `calendar/current.json`'u el ile düzelt.

### "calendar/current.json bozuldu / JSON parse hatası"
- Manuel düzenleme sırasında syntax bozulmuş olabilir.
- jsonlint.com'a yapıştır, hatayı bul.
- Acil: `current.json`'u `[]` yap, onaylanan asset'leri `approved/`'a geri al, baştan takvimle.

### "Token / context limit'e takılıyorum"
- Memory dosyaları büyümüş olabilir — sohbete `memory dosyalarını kompakt et` yaz.
- Çok eski sohbet uzamış olabilir; yeni oturum aç.

---

## 12. SSS

**S: Birden fazla marka için kullanabilir miyim?**
A: Evet. Her marka için klasörü kopyala (`İçerik Fabrikası — A/`, `İçerik Fabrikası — B/`). Hangisinde çalışacaksan o klasöre `cd` edip `claude` çalıştırırsın. Upload-Post tarafında her marka için ayrı `user` profili oluşturursun.

**S: API key'lerim güvende mi?**
A: Evet. Key'ler sadece yerel diskinde, `config/upload-post-config.md` dosyasında. Bilgisayarın dışına çıkmıyor. Klasörü başkasıyla paylaşırken (zip alırken) bu dosyadaki API key'i silmeyi unutma.

**S: Sistem yanlış bir şey paylaşabilir mi?**
A: Hayır. Onay olmadan içerik takvime girmez, takvime girmeyen şey Upload-Post'a submit edilmez. Bu kural CLAUDE.md §4'te hard rule.

**S: Claude Code yoksa çalışır mı?**
A: Hayır. Bu sistemin altyapısı Claude Code (markdown dosyaları + agentic CLI). Claude Code olmadan dosyalar sadece ölü metin.

**S: Sistemi nasıl güncellerim / geliştiririm?**
A: "Bunu hatırla: ..." veya "Şu kuralı ekle: ..." yaz. Sistem ilgili dosyayı kendisi günceller. Kendin de istediğin markdown dosyasını editörle açıp düzenleyebilirsin.

**S: Upload-Post yerine başka bir paylaşım servisi (Buffer, Hootsuite, Later, vs.) kullanabilir miyim?**
A: Evet ama CLAUDE.md §5.6 Upload-Post API'sine özel yazılı. Başka servise geçeceksen o servisin API dokümanını sohbete ver, "publishing workflow'unu bu API'ye göre yeniden yaz" de — sistem yapar.

**S: Higgsfield yerine başka bir image/video aracı kullanabilir miyim?**
A: Evet. O aracın MCP'si Claude Code'a bağlıysa, CLAUDE.md §5.2 ve §5.3'teki tool referanslarını güncelle. Sohbete söylersen sistem yapar.

**S: Higgsfield'in ürettiği dosyayı önce CDN'e yüklemem gerekiyor mu?**
A: Hayır. Upload-Post lokal dosyayı multipart form ile direkt kabul ediyor.

**S: Bir Instagram Reel paylaşırken `media_type` parametresi otomatik mi gidiyor?**
A: Evet. CLAUDE.md §5.6 video → IG için `media_type=REELS` default'unu zaten ekler. Story olarak paylaşmak istersen sohbette belirt.

**S: Upload-Post'un sync request'i timeout olursa ne olur?**
A: Otomatik async'e düşüyor (~59 saniyede). HTTP 200 + `success: true` + `request_id` ile cevap dönüyor. Sistem bunu otomatik tanır, status polling'e geçer.

**S: Bir post'u zamanladıktan sonra iptal etmem gerekirse?**
A: Upload-Post API'sinde public cancel endpoint yok. upload-post.com dashboard'undan manuel sil; sistem bunu görünce `calendar/current.json`'u günceller.

**S: 4 ay sonra sistem hâlâ tertipli kalır mı?**
A: Evet — `memory/` dosyaları 120 satırla sınırlı, aylık olarak `library/published/`'da arşivleme yapılır, `calendar/current.json` 90 gün sonra `calendar/archive/`'a kayar. Compaction kuralları CLAUDE.md §1 ve §6'da yazılı.
