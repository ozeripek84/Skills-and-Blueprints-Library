---
tags: [moc, home]
guncelleme: 2026-10-18
---

# 🏠 Skills & Blueprints Kütüphanesi — Ana Sayfa

> İkinci beynin **kaynak kütüphanesi**. Yeni bir proje yaparken **önce buraya bakılır**: hazır kullanılabilecek bir skill, command veya blueprint var mı? Varsa kopyalanır, yoksa kendi yolumuza gideriz.
> Bu kütüphane hem **senin** hem **Claude'un** ortak kaynağı. → Claude bu vault'tan nasıl yararlanır: [[Claude için kullanım]]

## 🗺️ Haritalar (buradan gez)

| Harita | İçerik | Adet |
|---|---|---|
| [[Yetenekler MOC]] | TR skill + slash command çiftleri (kategori kategori) | **161** |
| [[Blueprints MOC]] | Hazır uygulama iskeletleri — tek-dosya + çok-dosyalı/klonlanabilir (`/kur` ile kurulur) | **24** |
| [[Dış Kütüphaneler MOC]] | İngilizce GitHub repo'ları — 🏛️ **anthropics/skills** + ⭐ **gstack** + 🧭 **Karpathy** + tasarım (ui-ux-pro-max · impeccable · taste · emilkowalski) + 📣 **marketing-skills** (45) + 🎬 **topview** + 250+ skill | **11 repo** |
| [[Web Sitesi Yapımı — MOC]] | 🌐 Site/web yapımı — yöntem + no-code üreticiler + tasarım, tek çatı | **7 rehber** |
| [[Reklam — MOC]] | 📣 Ödemeli reklam tek çatı — strateji · rakip istihbaratı · kreatif (metin/görsel/video) · varış sayfası · ölçüm · outreach + ortak dürüstlük çizgisi | **7 katman** |

## 📚 Rehberler
- 🌱 [[Sıfırdan Başlangıç — Bu Sistem Nedir]] — **hiç bilgisi olmayan için**. Benzetmelerle, baştan sona, basit. (Buradan başla.)
- [[AI Uygulaması — Teknoloji Seçimi Handbook]] — bir AI uygulamasının her katmanı (frontend, DB, auth, sunucu, VPS, LLM…), farkları, ne zaman hangisi, ve maliyetleri. Şemalı.
- 🧭 [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] — LLM kodlama tuzaklarına karşı 4 ilke (düşün-önce, sadelik, cerrahi, hedef-odaklı). Claude'un çalışma davranışı. (İlk mesajdaki "Karpathy prompt'u")
- [[Orkestra Şefi Çalışma Sistemi — Fable + Opus oturumları (Vitreno'da kanıtlandı)]] — çok oturumlu Claude Code çalışma düzeni: şef ölçer/ff alır, oturumlar kodlar; kanıt bloğu biçimi, ölçüm zinciri, kurallar; yeni projede 30 dk kurulum
- ⚡ [[Süper Opus 5]] — **Claude Code çalışma standardı.** Fable 5'in sızdırılan system prompt'undan (1.597 satır) damıtıldı: ~35 satır alındı, %98 atıldı; üstüne Opus 5'e özel bloklar eklendi (kapsam disiplini · alt-ajan tavanı · **doğrulama ölçülü ama projeye tabi** — iddia öncesi zorunlu, ara adımda yok; proje kendi disiplinini tanımlıyorsa o üstün). `~/.claude/CLAUDE.md` bu dosyaya symlink — düzenlersen Claude Code anında görür.
- 🧬 [[Kendini Geliştiren Skill — 4 Katman (Jarvis-Karpathy yöntemi)]] — statik değil, kendini iyileştiren skill kurma: oluştur → Karpathy disiplini → göz (web) → hafıza+auto-research. (Jarvis nedir + yöntemi)
- 🤖 [[Agent Kurma — BLAST Çerçevesi]] — Claude Code'da kod yazmadan ajan kurma: 4 parça, BLAST, 5 kural, araç bağlama. (Mert videosu)
- 📈 [[Borsa & Trading Prompt Paketi — dürüst kullanım (referans)]] — Claude ile piyasa analizi için 7 retail prompt + **dürüst uyarı**: canlı veri olmadan fiyat/backtest uydurur. Güvenli olanlar senin verinle çalışanlar (portföy, işlem günlüğü). Yatırım tavsiyesi değil.
- 🏛️ [[Goldman Sachs AI Trading — Kant Prompt Paketi (referans)]] — elit fon personalı 10 kurumsal/kant prompt (backtest motoru, faktör modeli, stat-arb, execution). **Dürüst uyarı:** kod/iskele LLM'in güçlü yanı ama başlık yalan (alfa=veri+altyapı, kod değil), üretilen kodu satır satır denetle + gerçek veriyle doğrula. Yatırım tavsiyesi değil.
- 🎬 [[AI YouTube Kanalı Prompt Paketi — dürüst kullanım (referans)]] — sıfırdan monetize kanal için 2 viral setin birleşimi 14 prompt (niş, kimlik, faceless video, başlık, retention script, thumbnail, SEO/algoritma, Shorts, rakip, monetizasyon, otomasyon, 90-gün/ilk-10). ✅ yazma/script Claude'un güçlü yanı · ⚠️⚠️ rakip/CPM/gelir canlı veri yok=uydurur · faceless-mill demonetize riski. Üretim için → [[İçerik Fabrikası — Referans Sistem]] · topview · thumbnail blueprint.
- 🧠 [[Life OS — Kişisel Verimlilik Prompt Paketi — dürüst kullanım (referans)]] — kişisel "hayat işletim sistemi" için 7 prompt (kurulum, beyin boşaltma, günlük rutin, haftalık plan, hedef sistemi, alışkanlık, dijital düzen). Diğer paketlerin aksine **✅ veri uydurmaz** (saf planlama, Claude'un en güvenli alanı); tek riski **uygulama disiplini** (plan≠yaşam, aşırı-mühendislik, verimlilik tiyatrosu). Çıktıyı Notion değil **kendi Obsidian vault'una** kur. 🔒 gerçek şifre yapıştırma.
- ✍️ [[AI Yazı — İnsan Sesi & Voice Match Prompt Paketi — dürüst kullanım (referans)]] — AI metnini insanlaştırmak/kendi sesine çevirmek için 7 düzenleme promptu (voice match, hook, kişisel hikâye, kontra görüş, spesifiklik, AI-kelime avcısı, etkileşim sorusu). Paketlerin **en iyilerinden**, ✅ veri uydurmaz. 🎯 asıl ders: "ses iste"me değil, **belirsiz** isteme; somut kısıt işe yarar. ⚠️ voice-match için kendi örneğini yapıştır · P5'te rakam uydurma · AI-tell asıl olarak **ritim**. Üretimin *üstüne* düzenleme katmanı → [[İçerik Fabrikası — Referans Sistem]] · icerik-pazarlama.
- 💸 [[Pasif Gelir OS Prompt Paketi — dürüst değerlendirme + kütüphane haritası (referans)]] — X'te viral "8 prompt ile uyurken para kazan". **Yeni skill açılmadı** (8 promptun hepsi kütüphanede zaten daha derin). Not = dürüst gerçeklik kontrolü (pasif gelir mit, "semi-passive"; plan≠gelir; en jenerik paket) + **routing haritası** (her prompt → mevcut yetenek: is-akislari, dijital-urun-lansmani, otomasyon, marketing-skills, pricing, dashboard-bi). P8 finansal tavsiyeye kayar, atla.
- 🏪 [[Lokal İşletmeye AI Hizmet Satışı — dürüst değerlendirme + kütüphane haritası (referans)]] — "Google Maps'ten esnafı kazı → fotoğrafını AI ile güzelleştir → site+reklam üret → demo yolla → günde 50-100'e ölçekle". **Yeni skill açılmadı** (model zaten `ai-ajans-modeli` Adım 3 + `cozum-sat-website-degil` Adım 4 + Higgsfield). Not = routing haritası + kaynakta hiç geçmeyen 6 risk: ⚖️ mekânın fotoğrafını değiştirmek (direk silmek!) yanıltıcı reklam · 📸 Reviews fotoğraflarının telifi çekende · 🚫 Maps kazıma ToS ihlali (meşru yol Places API) · 📧 50-100/gün spam+KVKK/GDPR · 🏗️ barındırılan demo ≠ teslim edilebilir site · 💸 demo ≠ satış.
- 💼 [[İşletme Satın Alma (SBA-ETA) Playbook — dürüst kullanım (referans)]] — X'te viral "12 ayda maaşını değiştir → sıkıcı-kârlı iş satın al" 17 adımlı ETA playbook'u. **Prompt paketi değil** (yalnız 1 adım Claude). 🇹🇷 **En kritik uyarı:** finansman motoru (SBA %90 kredi, SMBmarket, ABD lender'ları) tümüyle ABD'ye özel, **Türkiye'ye geçmez** — sadece iskeleti uyarla. ⚠️ strateji gerçek ama romantize (kişisel garanti, sahibe-bağımlılık, GM maliyeti). ✅ Claude 6+ adımda kaldıraç: sektör listesi, outreach, DD soruları, finansal analiz. Zıttı → is-satis/sifirdan-is-kurma.

> 🌐 **Web sitesi mi yapacaksın?** Tüm site/web rehberleri (Yıldız Dikme, $10K, Lovable, Hostinger, Brila, Claude Design) artık tek çatıda: **[[Web Sitesi Yapımı — MOC]]**.

## 📦 Örnekler
- [[ornekler/rusca-cocuk-ebook — Vmeste-veseleye (2-4 yas)|Örnek e-book: «Вместе — веселее!»]] — 2-4 yaş, RU + UA + kafiyeli, sayfa sayfa + görsel promptları.

## 🔌 Bağlı Sistemler (dış projeler — referans)
- 🏭 [[İçerik Fabrikası — Referans Sistem]] — uçtan uca içerik üretim & otomatik yayın hattı (Claude Code + Higgsfield + Upload-Post). Marka bazlı sürekli içerik için. *Konum: `~/Desktop/SaaS Projects/İçerik Fabrikası`*

## 🧰 Araçlar & Entegrasyonlar (referans)
- 🔎 [[find-skills — Skill Bulan Skill (Vercel Labs) (referans)]] — "skill bulan skill" (Vercel Labs, MIT): ne yapmak istediğini söyle, ekosistemden en uygun skill'i bulup (onayınla) kursun. **Bende global kurulu**, Claude otomatik çağırır. ⚠️ tedarik zinciri — bulduğunu körlemesine kurma; ⚠️ kütüphanendeki yeteneği ararken önce vault'a bak, find-skills'i *dışarıdaki* skill'ler için kullan.
- 🦾 [[Superpowers — Plan-Önce Geliştirme Plugin'i (referans)]] — Claude'u disiplinli çalıştırır: önce planla, test yaz, kendini gözden geçir (`/brainstorm → /write-plan → /execute-plan`). 127K★. gstack'i tamamlar.
- 🎭 [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] — **ücretsiz/açık** tarayıcı kontrolü: kendi siteni test et, public siteden veri çek, hesabına login olup iş yaptır. `claude mcp add playwright …`.
- 🌐 [[BrowserAct — Gerçek Tarayıcı Aracı (referans)]] — Claude'a gerçek tarayıcı verir (ürün): bot/captcha'lı scrape, stealth. (Playwright vs BrowserAct karşılaştırması iki notta da var.)
- 🎬 [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]] — herhangi bir ajana (Claude/Hermes) görsel & video üretimi: Marketing Studio (tek link→video), Soul karakter, viral klip, virality prediction. İçerik Fabrikası'nın bağımlılığı.
- 🎨 [[Claude + Canva Connector — Tasarım (referans)]] — Claude'a Canva bağla, sohbetten tasarla (form/sunum/kapak); düzenlemeyi Canva'da yap (ekonomik). *Bende canlı kullanılabilir.*
- 🎙️ [[ElevenLabs MCP Connector — Ses, Müzik, Görsel, Video (referans)]] — Claude'dan seslendirme, ses efekti, müzik, dublaj, transkript, görsel/video (2026-09'dan beri). 💸 Kredi yer; **ücretsiz planda ticari lisans ve video yok**. Videodaki "kötü sesi temizle" bağlayıcıda doğrulanmadı. Ayrım: ses = ElevenLabs, görsel/video = Higgsfield. Ücretsiz alternatifler notta.
- 🎞️ [[AI UGC-Reklam Video Üretici (open-source, self-host) — referans]] — klonlanan açık-kaynak app ile AI reklam/UGC videosu (Fal AI / ücretsiz LTX-2, text/image-to-video, 30 sahne). Müşteriye satılabilir.
- 🔍 [[Claude SEO — 25 Skill + 18 Ajanlı SEO Denetimi (referans)]] — açık kaynak (MIT, ~11K★) SEO denetim plugin'i: `/seo audit <url>` → 15'e kadar paralel ajan, teknik+E-E-A-T+schema+**GEO/AEO (AI arama)**, test-edilebilir aksiyon planı. Çekirdek ücretsiz + sıfır-ağ; paralı uzantılar opsiyonel. Site işlerinin denetim adımı.

> 🏗️ No-code site/app üreticileri (**Hostinger Horizons**, **Lovable**, **Brila**) ve **Claude Design** → [[Web Sitesi Yapımı — MOC]] altına taşındı.

## 🧭 Hızlı karar
- **"Sıfırdan çalışan bir mini-uygulama lazım"** (QR menü, fatura, dashboard…) → [[Blueprints MOC]]
- **"Bir projeye belirli bir yetenek eklemeliyim"** (admin panel, Stripe, RAG, SEO…) → [[Yetenekler MOC]]
- **"Mühendislik/agent/uzman referansı"** (security audit, CI/CD, agent tasarımı…) → [[Dış Kütüphaneler MOC]]

## 📂 Klasör düzeni (olduğu gibi korundu)
```
skill-kutuphanesi/   → 161 TR skill   (kısa öz · Claude otomatik seçer)
project mdleri/      → 161 TR command (kodlu · /... ile sen çağırırsın)  [skill ile ikiz]
blueprints/          → 24 hazır uygulama (CLAUDE.md spec + kur.md)
web-sitesi-yapimi/   → 🌐 site yapımı rehber+yöntem+araç (tek çatı) + MOC
awesome-claude-skills-master/  → EN repo (Apache) — referans
claude-skills-main/            → EN repo (MIT, 250+ skill/agent) — referans
```

## 🔄 Bakım
İndeks notları (`Yetenekler MOC`, `Blueprints MOC`) `.gen_index.py` ile **otomatik üretilir**. Kütüphaneye yeni skill/blueprint eklediğinde Claude'a "indeksi yenile" de, ya da `python3 .gen_index.py` çalıştır. Bu script mevcut dosyalara dokunmaz, sadece MOC'leri yeniden yazar.
