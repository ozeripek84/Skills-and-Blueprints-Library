---
tags: [rehber, prompt, verimlilik, life-os, alışkanlık, rutin, planlama, claude, uyari]
guncelleme: 2026-07-16
---

# 🧠 Life OS — Kişisel Verimlilik Prompt Paketi (7 prompt) — dürüst kullanım

> [[00 HOME|🏠 Ana sayfaya dön]]
> Claude ile kişisel bir "hayat işletim sistemi" (Life OS) kurmak için sosyal medyada dolaşan 7 hazır prompt (TR). Kurulum → beyin boşaltma → günlük rutin → haftalık plan → hedef sistemi → alışkanlık → dijital düzen. **Skill değil**, pasif referans (Claude otomatik çağırmaz — kasıtlı; sen yapıştırırsın).
> **İyi haber:** Bu set, YouTube/Trading paketlerinin aksine **canlı veri istemez** → Claude burada **sayı/veri uydurmaz**. Bunlar saf planlama/yazma/akıl yürütme — Claude'un **en güçlü ve en güvenli** alanı. Risk veride değil, **uygulamada**.

## ✅⚠️ Dürüst değerlendirme (önce oku)
Kaynağın dili her zamanki abartı ("Claude TÜM hayatını yönetir", "her zamankinden verimli", "hayat OS'unu kur", "bedava"). Teknik gerçek çok daha olumlu ama bir avuç gerçek tuzak var:

**✅ Neden bu set güvenli (fabrikasyon yok):** Fiyat, istatistik, canlı veri istemiyor. Claude'dan istenen şey; senin verdiğin bilgiyi (hedefler, saatler, alışkanlıklar) yapılandırılmış bir sisteme dökmek. Bu, LLM'in tam da iyi olduğu iş. Trading/YouTube'daki "⚠️⚠️ canlı veri yok → uydurur" riski **burada yok**.

**⚠️ Gerçek tuzaklar (kaynağın söylemediği):**
1. **Plan ≠ uygulama.** Claude sana kusursuz bir Life OS verir; ama onu **yaşamak sende**. İşin zoru sistemi kurmak değil, ona uymak. 3 günde terk edilen görkemli bir sistem = sıfır değer. Prompt sana verimlilik **vermez**, verimlilik için **iskele** verir.
2. **Aşırı-mühendislik tuzağı.** Bu set 7 ayrı alt-sistem üretir (dashboard, tracker'lar, rutinler…). Karmaşıklık, alışkanlığın düşmanıdır. **Hepsini birden kurma** → tek biriyle başla (2: beyin boşaltma **veya** 3: günlük rutin). Sadelik ilkesi: [[Karpathy Çalışma İlkeleri (CLAUDE.md)|Karpathy — sadelik]].
3. **"Verimlilik tiyatrosu" (meta-iş).** İşi yapmak yerine işi organize etmekle vakit geçirmek. Sistem kurmak, kaçınma davranışı olabilir. Sistem 10 dakikada kurulmalı, sonra **iş** başlamalı.
4. **Statik çıktı, canlı hayat.** Claude tek seferlik bir plan verir; hayat değişir. Sistem, **haftalık gözden geçirme döngüsü** (Prompt 4 + Pazar review) olmadan bir haftada bayatlar. Döngü olmadan kurulan Life OS = ölü doküman.
5. **Jenerik girdi → jenerik çıktı.** Köşeli parantezleri gerçek verinle **doldurmazsan** (gerçek takvimin, gerçek enerji ritmin, gerçek deadline'ların), plan genel bir şablondan öteye geçmez. Ne kadar spesifik olursan, o kadar işe yarar.
6. **⚠️ Gizlilik — Prompt 7 (dijital düzen).** "Şifreler/araçlar" isteyen kısımda **gerçek şifrelerini asla yapıştırma**. Yalnız **sistem/yapıyı** iste (klasör düzeni, adlandırma, temizlik rutini); şifreleri gerçek bir parola yöneticisinde (Bitwarden/1Password vb.) tut.

**İşe yarar hale getirme:** Tek prompt seç → köşeli parantezleri **gerçek** verinle doldur → çıktıyı **Obsidian vault'una** (bu kütüphane zaten Obsidian!) günlük/haftalık nota yapıştır → **haftalık review** ile canlı tut. Kaynak "Notion/Notes" diyor ama sende zaten [[00 HOME|ikinci beyin vault'u]] var.

**İşaretler:** ✅ Claude güçlü/güvenli (veri uydurmaz) · ⚠️ uygulama/disiplin sende · 🔒 gizlilik notu.

## 🔗 Senin sistemlerinle birleştir (kütüphanenin gücü)
- **Çıktının evi:** [[00 HOME|Obsidian vault]] — Life OS'u Notion yerine kendi ikinci beynine kur. Kütüphanenin kendisi bir Obsidian vault; günlük/haftalık notlar + MOC mantığı zaten burada.
- **Kendini besleyen bilgi tabanı:** [[blueprints/llm-wiki/CLAUDE|llm-wiki blueprint]] — Life OS'u statik değil, kendini güncelleyen bir wiki gibi tutma deseni.
- **Kişisel asistan/agent:** [[blueprints/jarvis/CLAUDE|jarvis blueprint]] — Life OS'u tek seferlik plandan çıkarıp sürekli çalışan bir asistana bağlamak istersen.
- **Çalışma disiplini:** [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] — sadelik + hedef-odaklılık; bu setin aşırı-mühendislik tuzağının panzehiri.

---

## 7 Prompt (TR)

### 1) Life OS Kurulumu — ✅ (ama önce tek alan seç, hepsini birden kurma)
> Life OS mimarım olarak davran. Hayat alanlarım: [iş/işletme], [sağlık], [para], [ilişkiler], [öğrenme], [kişisel hedefler]. En büyük sorunlarım: [bunalmışlık/erteleme/rutin yokluğu/vb.]. Kategoriler, günlük rutin, haftalık planlama sistemi, görev takibi, alışkanlık takibi, Pazar review ve Notion/Notes/**Obsidian**'a kopyalayabileceğim bir dashboard içeren **basit** bir Life OS oluştur. Başlangıç seviyesine uygun ve pratik tut.

### 2) Beyin Boşaltma Düzenleyici — ✅ (en güvenli başlangıç noktası)
> Verimlilik asistanım olarak davran. Bu dağınık beyin boşaltmasını net bir aksiyon planına dönüştür: [beyin boşaltmasını yapıştır]. Her şeyi şu kategorilere ayır: acil, önemli, planla, delege et, sil, kişisel, iş, fikirler. Sonra bana bir öncelik listesi, 3 günlük plan, 7 günlük plan, 15 dakikanın altındaki hızlı kazanımlar ve önce neye odaklanacağımı ver.

### 3) Günlük Rutin Kurucu — ✅
> Bana gerçekçi bir günlük rutin oluştur. Uyanma saatim [saat], uyku saatim [saat], iş/okul saatlerim [saatler], enerjim en yüksek [sabah/öğleden sonra/gece], hedeflerim [hedefler]. Bir sabah rutini, çalışma blokları, molalar, egzersiz, öğünler, akşam sıfırlaması ve gece rutini kur. Yoğun günler için **minimum versiyonu** da ekle.

### 4) Haftalık Planlayıcı — ✅ (döngünün kalbi; sistemi bunun sayesinde canlı tut)
> Haftalık planlama asistanım olarak davran. Deadline'larım [deadline'lar], toplantılarım [etkinlikler], hedeflerim [hedefler], biten görevlerim [görevler], boş zamanım [zaman]. Haftalık planımı şunlarla oluştur: ilk 3 öncelik, gün gün program, zaman blokları, kişisel zaman, yedek plan ve **Pazar review kontrol listesi**.

### 5) Hedef Uygulama Sistemi — ✅
> Kişisel CEO'm olarak davran. Hedeflerim: [hedef 1], [hedef 2], [hedef 3]. Her hedef için: 90 günlük hedef, aylık kilometre taşı, haftalık aksiyonlar, günlük alışkanlıklar, engeller, ilerleme takibi ve ödül oluştur. Sonra hangi hedefe önce odaklanacağımı ve **bugün** ne yapacağımı söyle.

### 6) Alışkanlık Sistemi — ✅ (2 dakika kuralı + habit stacking gerçekten işe yarar)
> Alışkanlık koçum olarak davran. Kurmak istediğim alışkanlıklar: [alışkanlıklar]. Bırakmak istediklerim: [kötü alışkanlıklar]. Normal günüm şöyle: [rutin]. Şunları içeren bir alışkanlık planı oluştur: en iyi zamanlama, 2 dakikalık versiyonlar, alışkanlık zincirleme (habit stacking), hatırlatıcılar, kaçırılan-gün planı, kötü alışkanlık engelleyicileri ve 30 günlük takip.

### 7) Dijital Hayat Düzenleyici — ✅ / 🔒 (gerçek şifreni ASLA yapıştırma)
> Dijital hayat düzenleyicim olarak davran. Araçlarım: e-posta [araç], takvim [araç], notlar [araç], görevler [araç], depolama [araç], sosyal medya [platformlar]. E-postalar, takvim, notlar, görevler, dosyalar, **şifre yönetimi (yapı olarak — gerçek şifre değil)**, içerik ve dokümanlar için basit bir sistem oluştur. Klasör yapısı, adlandırma kuralları ve haftalık temizlik kontrol listesi ekle.
> *🔒 Not: Şifre kısmında yalnız **sistemi/yapıyı** iste; gerçek parolaları bir parola yöneticisinde tut, LLM'e yapıştırma.*

---

## Bağlam
Sosyal medyada (X) dolaşan viral "7 prompt ile Life OS kur" paketi (orijinali EN). Kütüphaneye **rehber** olarak, dürüst uyarılarla eklendi (2026-07-16; [[skills-blueprints-library]] anti-duplikasyon ilkesi — kütüphanede kişisel-verimlilik boşluğunu dolduruyor). Diğer viral X prompt paketleri (farklı aile — para/içerik odaklı): [[AI Yazı — İnsan Sesi & Voice Match Prompt Paketi — dürüst kullanım (referans)]] · [[AI YouTube Kanalı Prompt Paketi — dürüst kullanım (referans)]] · [[Borsa & Trading Prompt Paketi — dürüst kullanım (referans)]] · [[Goldman Sachs AI Trading — Kant Prompt Paketi (referans)]]. Bu set onlardan farklı olarak **veri uydurmaz** (saf planlama); tek riski uygulama disiplini. İlgili: [[Karpathy Çalışma İlkeleri (CLAUDE.md)]] (sadelik), [[blueprints/jarvis/CLAUDE|jarvis]], [[blueprints/llm-wiki/CLAUDE|llm-wiki]].
