---
tags: [rehber, prompt, borsa, trading, finans, claude, uyari]
guncelleme: 2026-07-11
---

# 📈 Borsa & Trading Prompt Paketi (7 prompt) — dürüst kullanım

> [[00 HOME|🏠 Ana sayfaya dön]]
> Claude ile piyasa analizi için sosyal medyada dolaşan 7 hazır prompt (TR). **ÖNCE aşağıdaki uyarıyı oku** — bunlar işe yarar ama yalnız doğru kullanılırsa; yanlışında Claude gerçek gibi görünen **uydurma sayılar** üretir. Bu bir **skill değil**, pasif referans (Claude otomatik seçip uygulamaz — kasıtlı).

## ⚠️ Dürüst değerlendirme (önce oku)
Kaynağın dili abartılı pazarlama ("Claude borsayı profesyonel gibi oynar", "işlemi otopilota al", "%99 kullanıcı potansiyelini kullanmıyor"). Teknik gerçek:

1. **Claude'un canlı piyasa verisi YOK (varsayılan).** "Bugünkü piyasa", "giriş/hedef/stop fiyatı", "güncel destek/direnç" isteyen promptlar (1, 2) — Claude anlık fiyatı bilmez. Bir veri kaynağına (finans MCP / web erişimi / broker API) **bağlı değilse fiyatları uydurur**; otoriter görünür ama icat edilmiştir. **En büyük tuzak budur.**
2. **Backtest (Prompt 4) veri + motor olmadan imkânsız.** Kazanma oranı, toplam getiri, profit factor, drawdown → gerçek geçmiş veri ve backtest aracı olmadan bu sayılar **%100 hayal**.
3. **Haber→işlem (Prompt 3)** ancak Claude'un web erişimi varsa **veya** haberi sen yapıştırırsan çalışır; yoksa eğitim kesim tarihinden eski veya uydurma.
4. **Gerçekten işe yarayanlar → senin verdiğin veriyle çalışanlar:** Prompt 5 (portföyünü sen verirsin), Prompt 6 (işlemlerini sen verirsin), Prompt 7 (jenerik rutin şablonu). Prompt 2/3 de grafiği/haberi sen yapıştırınca sağlıklı olur.
5. **Gerçek para riski.** "Otopilot işlem"i LLM çıktısına bırakmak risklidir. Bunlar **yatırım tavsiyesi değil**, karar-destek/eğitim aracıdır. LLM halüsinasyon yapar; piyasa düşmandır. Kararı sen ver, sayıları bağımsız doğrula.

## ✅ İşe yarar hale getirme
- **Veri bağla:** canlı fiyat/haber için bir kaynak ekle (finans MCP, web erişimi, broker API). Yoksa fiyat/backtest isteyen promptları ya kullanma ya da veriyi **elle yapıştır**.
- **Kendi verinle besle:** grafik (OHLC), portföy, işlem günlüğü → prompt'a yapıştır, analiz o zaman gerçek olur.
- **Uydurmayı kes:** her prompt'un sonuna şu satırı ekle → *"Gerçek/güncel veriye erişimin yoksa fiyat, seviye veya istatistik UYDURMA; bunu açıkça belirt ve hangi veriye ihtiyacın olduğunu söyle."*

**İşaretler:** ✅ senin verinle çalışır · ⚠️ canlı veri ister · ⚠️⚠️ veri olmadan uydurur.

---

## 7 Prompt (TR)

### 1) Trade Fikri Üreticisi — ⚠️ canlı veri ister
> Bugünkü piyasayı analiz et ve [hisse/endeks/sektör] için olasılığı yüksek 5 işlem fırsatı bul. Her işlem için giriş fiyatı, hedef fiyat, stop-loss seviyesi ve risk-getiri oranını belirt. Kurulumu hem teknik hem de önemli piyasa/temel faktörleri kullanarak basit bir dille açıkla.

### 2) Otomatik Teknik Analist — ⚠️ grafik/veri ister
> [Hisse/Ticker] varlığını günlük ve haftalık grafikler üzerinden analiz et. Ana destek/direnç seviyelerini, trend çizgilerini, hareketli ortalamaları ve RSI/MACD gibi momentum göstergelerini belirle. Kararın arkasındaki mantığı adım adım açıklayarak net bir Al / Tut / Sat sinyali ver.

### 3) Haberi İşleme Dönüştürücü — ⚠️ web/haber ister (ya da haberi yapıştır)
> [Şirket/sektör] hakkında çıkan en güncel haberleri özetle ve uygulanabilir işlem fikirlerine dönüştür. Olası kısa ve uzun vadeli piyasa etkisini, beklenen fiyat hareket aralığını, genel piyasa hissiyatını ve habere göre en uygun işlem/yatırım pozisyonlanmasını açıkla.

### 4) Strateji Backtest Uzmanı — ⚠️⚠️ gerçek veri + motor olmadan UYDURUR
> [Strateji] stratejisini geçmiş [zaman aralığı] boyunca [hisse/endeks/varlık] üzerinde backtest et. Kazanma oranı, toplam getiri, profit factor, maksimum drawdown ve ortalama risk-getiri dahil performansı göster. Neyin işe yaradığını/başarısız olduğunu açıkla ve basit iyileştirme önerileri sun.
> *Not: Gerçek fiyat serisi + backtest motoru bağlı değilse bu prompt SAYI UYDURUR — çıktıya inanma. Ya gerçek veriyi/aracı bağla ya da yalnız yöntem/mantık iskeleti iste.*

### 5) Portföy Risk Yöneticisi — ✅ senin verinle çalışır
> Portföyümü değerlendir: [tickerlar ve % dağılımları]. Aşırı risk yoğunlaşmalarını, zayıf pozisyonları ve gizli korelasyonları tespit et. Olası %20'lik bir piyasa düşüşüne dayanabilecek risk-ayarlı yeniden dengeleme ve hedge stratejileri öner.

### 6) İşlem Günlüğü Analizcisi — ✅ senin verinle çalışır
> Son 20 işlemimi analiz et: [giriş, çıkış ve sonuçlar]. Tekrarlayan hataları, kaçırılan fırsatları ve davranışsal önyargıları tespit et. Tutarlılığı hemen artırmak için bana özel 3 kural öner.

### 7) Tam Otomatik Günlük İşlem Planı — ✅ şablon
> [Piyasa/varlık] için basit ve yapılandırılmış bir günlük işlem planı oluştur. Piyasa öncesi tarama, açılış stratejisi, gün ortası ayarlamaları ve kapanış rutinini dahil et. Her şeyi saat bazlı bir kontrol listesi şeklinde, net adım adım aksiyonlarla sun.

---

## Bağlam
Sosyal medyada dolaşan bir prompt paketi (orijinali EN + TR). Kütüphaneye **rehber** olarak, dürüst uyarılarla eklendi (2026-07-11). İlgili: [[Yetenekler MOC|veri-analitik]] (kendi verini analiz ettirmek), [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] (veri/haber çekmek için ücretsiz araç).
