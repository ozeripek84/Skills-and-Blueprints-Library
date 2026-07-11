---
tags: [rehber, prompt, borsa, trading, finans, quant, claude, uyari]
guncelleme: 2026-07-11
---

# 📈 Borsa & Trading Prompt Paketi — dürüst kullanım

> [[00 HOME|🏠 Ana sayfaya dön]]
> Claude ile piyasa/trading için sosyal medyada dolaşan iki prompt seti. **ÖNCE uyarıları oku.** Bu bir **skill değil**, pasif referans (Claude otomatik seçip uygulamaz — kasıtlı).
> - **Kısım 1 — Retail / günlük (7 prompt):** al/sat kararı + fiyat isteyen basit promptlar. Riski: canlı veri olmadan **fiyat uydurur**.
> - **Kısım 2 — Kurumsal / kant (10 prompt):** çerçeve + Python kodu isteyen ileri quant promptlar. LLM'in güçlü yanı, ama **kodu denetle + gerçek veriyle doğrula**; "Goldman'ı bedava kopyaladın" değil.

## 🔑 Ortak gerçek (iki set için de)
- Bunlar **yatırım tavsiyesi değil**, karar-destek/eğitim aracı. Gerçek para riski var; canlıya geçmeden **paper-trade**.
- Claude'un **canlı piyasa verisi yok** (varsayılan). Fiyat/backtest/haber isteyen her şey ya bir veri kaynağına (finans MCP, web erişimi, broker/veri API) bağlı olmalı ya da veriyi **sen yapıştırmalısın**.
- Her prompt'un sonuna şu güvenlik satırını ekle → *"Gerçek/güncel veriye erişimin yoksa fiyat, seviye veya istatistik UYDURMA; bunu açıkça söyle ve hangi veriye ihtiyacın olduğunu belirt."*

---

# 🟢 Kısım 1 — Retail / Günlük (7 prompt)

## ⚠️ Dürüst değerlendirme — Kısım 1
Kaynağın dili abartılı pazarlama ("Claude borsayı profesyonel gibi oynar", "işlemi otopilota al", "%99 kullanıcı..."). Teknik gerçek:
1. **Canlı veri YOK.** "Bugünkü piyasa / giriş-hedef-stop fiyatı / güncel destek-direnç" isteyen promptlar (1, 2) bağlı değilse **fiyatları uydurur**; otoriter görünür ama icat. **En büyük tuzak budur.**
2. **Backtest (Prompt 4) veri + motor olmadan imkânsız.** Kazanma oranı/drawdown/profit factor → **%100 hayal**.
3. **Haber→işlem (Prompt 3)** ancak web erişimi varsa veya haberi sen yapıştırırsan çalışır.
4. **Gerçekten işe yarayanlar → senin verinle çalışanlar:** Prompt 5 (portföy), Prompt 6 (işlem günlüğü), Prompt 7 (şablon).

**İşaretler:** ✅ senin verinle çalışır · ⚠️ canlı veri ister · ⚠️⚠️ veri olmadan uydurur.

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

# 🔵 Kısım 2 — Kurumsal / Kant (10 prompt)

## ⚠️ Dürüst değerlendirme — Kısım 2 (önce oku)
Başlık iddiası ("AI artık Goldman Sachs'ın algo masası gibi trading algoritması kurar — BEDAVA", "$500K/yıl quant stratejilerini değiştirir") **abartı/yanlış.** Ama dürüst olmak gerekirse bu set Kısım 1'den daha sağlam:

**Neden daha sağlam:** Bu 10 prompt canlı al/sat kararı değil, **çerçeve + metodoloji + Python kodu** istiyor (event-driven backtester, Kelly pozisyon boyutlama, Engle-Granger/Johansen kointegrasyon, faktör modeli, TWAP/VWAP execution). Bunlar **ders kitabı quant teknikleri** ve Claude bunları doğru kodlamada gerçekten iyi. Öğrenme + iskele için sahici değer var.

**Ama "Goldman'ı bedava kopyaladın" DEĞİL:**
1. **Alfa kod değildir.** Goldman/RenTech'in değeri kod değil; **tescilli veri + düşük-gecikme altyapı + on yıllık araştırma + gerçek edge.** Persona ("Sen Goldman MD'sisin") sadece ton/derinlik verir — Claude'da o firmaların gizli yöntemi/verisi YOK. Verdiği faktörler zaten herkesçe bilinen, çoğu arbitrajlanmış olanlar.
2. **Üretilen kodu SATIR SATIR denetle.** LLM backtester'ında ince **lookahead (geleceği sızdırma)** ve **survivorship bias** hataları olur → gerçek gibi görünen ama geçersiz sonuç. (Prompt 2 bu tuzakları saysa da üretilen kodda bulunabilir.)
3. **Veri + gerçekçi işlem maliyeti + out-of-sample şart.** Bunlar olmadan hiçbir backtest güvenilir değil. Prompt 2 (walk-forward, Monte Carlo, işlem maliyeti) ve Prompt 9 (veri hattı) doğru rigor'u içeriyor — ciddiye al.
4. **Canlıya geçmeden paper-trade.** Gerçek para riski; yatırım tavsiyesi değil.

**İşaret:** 🧱 = iskele/kod üretir (LLM güçlü, ama denetle + gerçek veriyle doğrula). 10'unun tümü bu sınıfta. Placeholder `[...]`'ları kendi durumunla doldur.

### 1) Goldman Sachs — Kantitatif Strateji Mimarı 🧱
*Sıfırdan komple sistematik strateji: tez, evren seçimi, sinyal mantığı, giriş/çıkış, pozisyon boyutlama, risk parametreleri, backtest çerçevesi, benchmark, edge-decay izleme.*
```
You are a managing director at Goldman Sachs' algorithmic trading desk, designing systematic trading strategies that manage over $10B in institutional capital across global equity markets.

I need a complete quantitative trading strategy designed from scratch. Design:
- Strategy Thesis: the specific market inefficiency or pattern this strategy exploits
- Universe Selection: which instruments to trade and why (stocks, ETFs, futures, options)
- Signal Generation Logic: the exact mathematical rules that produce buy and sell signals
- Entry Rules: precise conditions that must be met before opening a position
- Exit Rules: profit targets, stop losses, time-based exits, and signal reversal exits
- Position Sizing Model: how much capital to allocate per trade based on conviction and risk
- Risk Parameters: maximum drawdown, position limits, sector exposure caps, correlation limits
- Backtesting Framework: how to properly test this strategy with historical data
- Benchmark Selection: what to measure performance against and why
- Edge Decay Monitoring: how to detect when the strategy stops working

Format as a Goldman Sachs-style quantitative strategy memo with mathematical formulas, logic in pseudocode, and risk parameter tables.

My trading approach: [DESCRIBE YOUR CAPITAL, PREFERRED MARKETS, TIME HORIZON, RISK TOLERANCE, AND STRATEGIES YOU'VE EXPLORED]
```

### 2) Renaissance Technologies — Backtest Motoru 🧱
*Dürüst backtest çerçevesi: veri gereksinimleri, motor mimarisi, işlem maliyeti, lookahead/survivorship önleme, walk-forward, out-of-sample, Monte Carlo, istatistiksel anlamlılık + çalışan Python.* **(Doğru rigor'u içeriyor — bunu ciddiye al.)**
```
You are a senior quantitative researcher at Renaissance Technologies, building rigorous backtesting systems that distinguish true alpha from overfitting noise across decades of market data.

I need a comprehensive backtesting framework that delivers honest and reliable results. Build:
- Data Requirements: which historical data feeds I need, minimum periods, and quality controls
- Backtesting Engine Architecture: event-driven or vectorized, with pros and cons for my strategy
- Transaction Cost Modeling: commissions, slippage, bid-ask spread, and market impact estimates
- Lookahead Bias Prevention: safeguards that ensure no future data leaks into past decisions
- Survivorship Bias Handling: accounting for delisted stocks and failed companies in historical data
- Walk-Forward Optimization: training on past data, testing on unseen data in sliding windows
- Out-of-Sample Testing Protocol: how to split data so results aren't just curve-fitting
- Monte Carlo Simulation: randomizing trade sequences to understand the range of possible outcomes
- Statistical Significance Tests: is the backtest return real or could it happen by chance?
- Complete Runnable Python Backtesting Code: with sample data and visualization

Format as a quantitative research document with complete Python code, statistical validation methodology, and result interpretation guides.

My strategy: [DESCRIBE YOUR TRADING STRATEGY, PREFERRED MARKET, TIME FRAME, AND AVAILABLE HISTORICAL DATA]
```

### 3) Two Sigma — Risk Yönetim Sistemi 🧱
*Kapsamlı risk çerçevesi: Kelly pozisyon boyutlama, stop türleri, max-drawdown kontrolleri, korelasyon izleme, VaR (%95/%99), stres testleri (2008/COVID/flash crash), kaldıraç limitleri, likidite riski, günlük risk panosu + Python.*
```
You are a senior portfolio risk manager at Two Sigma, building risk management frameworks that protect over $60B in assets from catastrophic losses during black swan events and market crashes.

I need a comprehensive risk management system for my trading operations. Build:
- Position sizing algorithm: Kelly Criterion or fractional Kelly with exact implementation
- Stop-loss framework: fixed, trailing, volatility-adjusted, and time-based stops with rules for each
- Maximum drawdown controls: strict limits that automatically reduce position sizes or halt trading
- Correlation monitoring: detect when supposedly uncorrelated positions start moving together
- Value at Risk (VaR) calculation: estimate maximum daily loss at 95% and 99% confidence levels
- Stress testing scenarios: simulate portfolio behavior during the 2008 crash, COVID crash, flash crashes
- Leverage limits: maximum margin utilization rules with automatic deleveraging triggers
- Sector and factor exposure caps: prevent hidden concentration risk across positions
- Liquidity risk assessment: ensure every position can be closed within an acceptable timeframe and cost
- Daily risk dashboard: every metric I should review each morning before markets open

Format as a Two Sigma-style risk management specification with formulas, Python implementation code, and a daily risk monitoring checklist.

My portfolio: [DESCRIBE YOUR TRADING CAPITAL, TYPES OF STRATEGIES, NUMBER OF POSITIONS, LEVERAGE USAGE, AND GREATEST RISK CONCERN]
```

### 4) Citadel — Alfa Sinyal Araştırma Lab'ı 🧱
*Sistematik sinyal keşfi: 20 sinyal kategorisi, veri kaynakları, feature-engineering, sinyal gücü testleri (information coefficient, hit rate), decay analizi, korelasyon doğrulama, sinyal birleştirme, rejim tespiti, turnover + Python.*
```
You are a senior quantitative researcher at Citadel, discovering and validating new alpha signals by analyzing alternative data, market microstructure, and statistical patterns across thousands of securities.

I need a systematic process for uncovering profitable trading signals. Research:
- Signal idea generation framework: 20 categories of potential alpha signals to investigate
- Data sources inventory: price data, fundamentals, sentiment, and alternative data sources
- Feature engineering pipeline: step-by-step transformation of raw data into testable trading signals
- Signal strength testing: information coefficient, hit rate, and risk-adjusted return for each signal
- Decay analysis: how quickly each signal loses its predictive power after formation
- Correlation verification: ensuring new signals aren't just repackaged versions of known factors
- Signal combination methodology: how to blend multiple weak signals into a single strong composite
- Regime detection: which signals perform in trending vs. mean-reversion vs. volatile conditions
- Turnover analysis: how frequently the signal forces trading and whether alpha survives costs
- Signal monitoring dashboard: tracking live signal performance against backtest expectations

Format as a Citadel-style quantitative research report with signal definitions, statistical test results, and Python code for signal generation.

My approach: [DESCRIBE YOUR MARKET, AVAILABLE DATA SOURCES, TRADING FREQUENCY, AND TYPES OF SIGNALS THAT INTEREST YOU]
```

### 5) Jane Street — Market Making Motoru 🧱
*Market making çerçevesi: spread hesap modeli, envanter yönetimi, kota ayarlama, adverse-selection tespiti, gecikme gereksinimleri, hedge, mikroyapı, PnL ayrıştırma, risk limitleri + metrikler.*
```
You are a senior quantitative trader at Jane Street, designing market making algorithms that profit from bid-ask spreads while managing inventory risk across thousands of trades per day.

I need a complete market making strategy framework. Design:
- Spread calculation model: how to set bid and ask prices based on volatility, volume, and inventory
- Inventory management: rules to stay neutral and avoid large directional bets
- Quote adjustment logic: how to shift prices when inventory builds up on one side
- Adverse selection detection: identifying when informed traders are picking off your quotes
- Speed and latency requirements: how fast order placement and cancellation must be
- Hedging strategy: when and how to offset accumulated directional risk
- Market microstructure analysis: order book dynamics, tick sizes, and queue priority
- PnL decomposition: separating spread capture vs. directional moves vs. hedging costs
- Risk limits: maximum inventory, maximum daily loss, and automatic shutdown triggers
- Performance metrics: captured spread, inventory turnover, Sharpe ratio, and fill rate targets

Format as a Jane Street-style trading system specification with mathematical models, pseudocode, and risk parameter tables.

My interest: [DESCRIBE THE MARKET YOU WANT TO MAKE MARKETS IN, YOUR CAPITAL, AVAILABLE TECHNOLOGY, AND YOUR EXPERIENCE LEVEL]
```

### 6) AQR — Faktör Model Kurucu 🧱
*Çok-faktörlü model: faktör seçimi (value/momentum/quality/size/low-vol), tanımlar, long-short kurulum, exposure ölçümü, korelasyon matrisi, birleştirme, rebalancing, faktör-timing, performans atıfı + Python.*
```
You are a senior researcher at AQR Capital Management, building multifactor models used to construct portfolios that systematically harvest risk premia in global markets.

I need a comprehensive factor model for portfolio construction. Build:
- Factor Selection: which factors to include (value, momentum, quality, size, low volatility) with evidence
- Factor Definitions: exact calculation formula for each factor using available financial data
- Factor Portfolio Construction: how to build long-short portfolios for each individual factor
- Factor Exposure Measurement: how to calculate my portfolio's current exposure to each factor
- Factor Correlation Matrix: how factors move relative to each other and diversification benefits
- Multifactor Combination: how to weight and blend factors into a single composite score
- Rebalancing Methodology: when to rebalance factor portfolios and how to minimize turnover
- Factor Timing Analysis: can we increase exposure to factors when conditions favor them?
- Performance Attribution: decompose returns into factor contributions and stock-specific alpha
- Full Python Implementation with data loading, factor calculation, and portfolio construction

Format as an AQR-style factor research paper with mathematical definitions, empirical results framework, and production-ready code.

My investment universe: [DESCRIBE YOUR MARKET (U.S. STOCKS, GLOBAL, ETFs), CAPITAL SIZE, REBALANCING FREQUENCY, AND FACTOR PREFERENCES]
```

### 7) D.E. Shaw — İstatistiksel Arbitraj Sistemi 🧱
*Pairs trading / stat-arb: pair seçimi (korelasyon+kointegrasyon), Engle-Granger & Johansen testleri, spread hesabı, z-score sinyali, giriş/çıkış eşikleri, hedge oranı, mean-reversion hızı, rejim değişimi, 20+ pair yönetimi + Python.*
```
You are a senior portfolio manager at D.E. Shaw, building statistical arbitrage systems that exploit price relationships between related securities using advanced statistical methods.

I need a complete framework for pairs trading and statistical arbitrage. Build:
- Pair selection methodology: how to find stocks that move together using correlation and cointegration
- Cointegration test: Engle-Granger and Johansen tests to verify the pair's relationship is real
- Spread calculation: how to correctly measure the price difference between paired securities
- Z-score signal generation: when the spread deviates sufficiently from the norm to trigger a trade
- Entry and exit thresholds: exact z-score levels for opening, adding to, and closing positions
- Hedge ratio calculation: how many shares of each security to trade to remain market-neutral
- Mean reversion speed analysis: how quickly the spread typically returns to normal
- Regime change detection: identifying when a pair's relationship breaks down permanently
- Pairs portfolio: how to manage 20+ pairs simultaneously with capital allocation rules
- Complete Python code with pair selection, signal generation, and backtesting

Format as a D.E. Shaw-style quantitative research document with statistical test results, strategy rules, and full implementation code.

My market: [DESCRIBE YOUR PREFERRED SECTOR OR MARKET, AVAILABLE DATA, TRADING CAPITAL, AND EXPERIENCE WITH PAIRS TRADING]
```

### 8) Bridgewater — Makro Trading Stratejisti 🧱
*Sistematik makro (Dalio "economic machine"): 15 makro gösterge panosu, rejim sınıflama (büyüme/enflasyon matrisi), varlık-sınıfı davranış haritası, All-Weather taban + taktik overlay, enstrüman seçimi, rebalancing, korelasyon rejimi, jeopolitik risk + Python.*
```
You are a senior investment strategist at Bridgewater Associates, designing systematic macro trading strategies based on Ray Dalio's economic machine framework, operating across currencies, bonds, commodities, and global equities.

I need a complete systematic macro trading strategy. Design:
- Economic Indicators Dashboard: 15 macro signals to monitor (GDP, inflation, employment, yield curves)
- Regime Classification System: growth/inflation matrix that creates 4 market environments
- Asset Class Behavior Map: how equities, bonds, commodities, currencies perform in each regime
- Signal Construction: how to combine macro indicators into actionable portfolio allocation signals
- All-Weather Inspired Allocation: a base portfolio designed to perform in any environment
- Tactical Overlay Rules: how to deviate from the base when regime signals are strong
- Instrument Selection: specific ETFs or futures to express each macro view
- Rebalancing Triggers: based on calendar, threshold, or signal with rules for each
- Correlation Regime Monitoring: how asset correlations change during crises and how to prepare
- Geopolitical Risk Framework: how to adjust positioning for elections, wars, and policy shifts

Format as a Bridgewater-style investment strategy memo with economic frameworks, allocation tables, and Python code for regime detection.

My approach: [DESCRIBE YOUR INVESTABLE CAPITAL, PREFERRED INSTRUMENTS, RISK TOLERANCE, AND MACRO VIEWS YOU WANT TO TRADE]
```

### 9) Bloomberg — Piyasa Verisi Hattı Kurucu 🧱
*Veri mühendisliği: ücretsiz+paralı kaynak mimarisi, real-time WebSocket feed, geçmiş veri deposu, temizleme, kurumsal aksiyon düzeltmesi (split/temettü/delisting), feature store, doğrulama kuralları, API katmanı, zamanlama + Python.* **(Diğer promptların ön koşulu olan "veri" sorununu çözmeye çalışan set.)**
```
You are a senior quantitative data engineer at Bloomberg, building the real-time and historical data pipelines that power the algorithmic trading systems of the world's largest hedge funds.

I need a complete market data pipeline for my trading system. Build:
- Data Sources Architecture: free and paid sources for price, fundamental, sentiment, alternative data
- Real-Time Data Feed: WebSocket connections to live market data with reconnection handling
- Historical Data Storage: database design for efficiently storing years of tick, minute, and daily data
- Data Cleaning Pipeline: automatically handle missing values, stock splits, dividends, and delistings
- Corporate Actions Adjustment: automatically adjust historical prices for splits, mergers, spin-offs
- Feature Store: precomputed technical indicators and fundamental ratios ready for signal generation
- Data Validation Rules: automated checks that detect bad data before it triggers false trades
- API Layer: clean endpoints that your trading strategy can query for any data instantly
- Scheduling System: automated daily updates, weekly fundamental refreshes, monthly recalculations
- Complete Python Code for Data Pipeline with database setup, data ingestion, and API service

Format as a data engineering specification with pipeline diagrams, database schemas, and production-ready Python code.

My needs: [DESCRIBE YOUR TRADING MARKETS, DATA SOURCES YOU HAVE ACCESS TO, REQUIRED UPDATE FREQUENCY, AND STORAGE PREFERENCES]
```

### 10) Virtu Financial — Execution Algoritma Tasarımcısı 🧱
*Emir yürütme: TWAP, VWAP, implementation shortfall, iceberg emir, akıllı yönlendirme (borsa/dark pool), slippage ölçümü, market-impact modeli, execution kalite analitiği, pre/post-trade maliyet analizi.*
```
You are a senior execution algorithms developer at Virtu Financial, building intelligent order routing and execution algorithms that minimize market impact and slippage for institutional-sized orders.

I need execution algorithms that let me enter and exit positions at the best possible prices. Design:
- TWAP Algorithm: divide large orders evenly over a time window to reduce market impact
- VWAP Algorithm: execute proportionally to historical volume patterns throughout the trading day
- Implementation Shortfall Optimizer: balance urgency against market impact cost
- Iceberg Order Logic: display only a small portion of the total order to conceal the true size
- Intelligent Order Routing: how to choose between exchanges and dark pools for optimal execution
- Slippage Measurement: track the difference between the signal price and the actual execution price
- Market Impact Model: estimate how the size of my order will move the price against me
- Execution Quality Analytics: metrics to assess whether my execution is improving or deteriorating
- Pre-Trade Cost Estimation: predict the total execution cost before placing the order
- Post-Trade Transaction Cost Analysis: detailed breakdown of where costs are coming from

Format as an execution algorithm specification with mathematical models, pseudocode for each algorithm, and performance measurement frameworks.

My trading: [DESCRIBE YOUR AVERAGE ORDER SIZE, TRADING FREQUENCY, MARKETS TRADED, AND CURRENT EXECUTION CHALLENGES]
```

---

## Bağlam
Sosyal medyada dolaşan iki prompt paketi (Kısım 1: retail 7, EN+TR · Kısım 2: kurumsal/kant 10, EN — "Goldman gibi bedava quant" başlıklı). Kütüphaneye tek **rehber** olarak, dürüst uyarılarla toplandı (2026-07-11; dağıtmadan tek yerde — [[skills-blueprints-library]] ilkesi). İlgili: [[Yetenekler MOC|veri-analitik]] (kendi verini analiz), [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] (ücretsiz veri/haber çekme). Kant kodu yazdırırken → [[skill-kutuphanesi/test-kalite/test-kalite|test-kalite]] ile denetle.
