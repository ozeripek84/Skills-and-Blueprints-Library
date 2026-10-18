# Claude Code Slash Commands — 145+

145+ Claude Code slash command'i organize edilmiş, kategorilere ayrılmış. Webinar'da canlı göster, müşteriye sat, kendi işinde kullan.

---

## Slash command nedir?

Skill'lerden farklı olarak **explicit tetiklenen** komutlar. Kullanıcı tam olarak `/web-saas:saas-mvp` yazdığında çalışır.

**Skill** = Claude otomatik seçer (background)
**Slash command** = Kullanıcı bilinçli çağırır (foreground)

Webinar için **slash command çok daha iyi** çünkü:
- "Şimdi şu komutu yazacağım: `/web-saas:saas-mvp`"
- Beklenmedik davranış yok
- Demonstratif (showmanship)
- Müşteriye reproducible

---

## Yükleme

### Bir komutu yükle:
```bash
mkdir -p .claude/commands
cp /path/to/komutlar/web-saas/saas-mvp.md .claude/commands/saas-mvp.md
```

Sonra Claude Code'da: `/saas-mvp`

### Namespace'li yükle (kategori korumalı):
```bash
mkdir -p .claude/commands/web-saas
cp /path/to/komutlar/web-saas/*.md .claude/commands/web-saas/
```

Sonra Claude Code'da: `/web-saas:saas-mvp`

### Hepsini yükle (overkill ama mümkün):
```bash
cp -r /path/to/komutlar/* .claude/commands/
```

145 komut hepsi yüklü, autocomplete'te görünür.

---

## Kategoriler

| Kategori | Sayı | Klasör |
|---|---:|---|
| **Web/SaaS** | 10 | `web-saas/` |
| **AI/Chatbot** | 10 | `ai-chatbot/` |
| **Otomasyon** | 10 | `otomasyon/` |
| **Backend/API** | 10 | `backend-api/` |
| **Mobil** | 5 | `mobil/` |
| **Veri/Analitik** | 8 | `veri-analitik/` |
| **DevOps** | 5 | `devops/` |
| **E-ticaret** | 8 | `e-ticaret/` |
| **Entegrasyon** | 15 | `entegrasyon/` |
| **İçerik/Pazarlama** | 8 | `icerik-pazarlama/` |
| **Sektör Özel** | 15 | `sektor-ozel/` |
| **Araçlar** | 8 | `araclar/` |
| **İş/Satış** | 10 | `is-satis/` |
| **Kariyer/İş Bulma** | 5 | `kariyer-is-bulma/` |
| **Test/Kalite** | 5 | `test-kalite/` |
| **Frontend** | 8 | `frontend/` |
| **İş Akışları** | 10 | `is-akislari/` |

**Toplam: 145 slash command**

---

## Webinar canlı demo öneriler

### Gün 1 — Kurulum + İlk Proje
```
/web-saas:landing-page restoran
/is-akislari:sifirdan-portfolio freelance-web
```

### Gün 2 — Uygulama Geliştirme
```
/web-saas:saas-mvp project-tracker
/ai-chatbot:llm-chatbot custom-bot
/is-akislari:sifirdan-saas crm-mini
```

### Gün 3 — Otomasyon + Müşteri
```
/otomasyon:lead-capture
/is-satis:teklif-jenerator
/entegrasyon:whatsapp-business
/sektor-ozel:randevu-sistemi
```

---

## Komut formatı

Her komut şu yapıda:

```markdown
---
description: Kısa açıklama (autocomplete'te görünür)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [opsiyonel-argument]
---

# /kategori:komut-adi

[Role assignment + context]

## Stack
[Hangi teknolojiler]

## Süreç
[Adım adım detay]

## Çıktı standardı
[Neyle bittiğini bilirsin]

## Anti-patterns
[Yapma]

## Yaygın hatalar
[Hata + çözüm]
```

Claude Code bu formatı parse edip kullanıcı `/komut-adi` yazınca system prompt olarak kullanır.

---

## Pro Tip: Kendi komutlarını yaz

Müşteri-spesifik komutlar yaratabilirsin:

```bash
.claude/commands/
├── musteri-x-brand-stil.md      # Müşteri X'in marka kuralları
├── kendi-fiyat-stratejim.md     # Senin pricing rules
└── deploy-protokolum.md         # Senin deploy checklist
```

Her yeni proje kuruşunda `/deploy-protokolum` ile aynı prosedürü tekrar et.

---

## Argümanlar

Komutta `argument-hint` olan dosyalar argüman alabilir:

```
User: /web-saas:saas-mvp project-tracker
```

Komut içinde `$1` = "project-tracker" olarak yer alır.

Çoklu argüman:
```
User: /web-saas:landing-page restoran-x kahveci
```
`$1` = "restoran-x", `$2` = "kahveci"

---

## Autocomplete

Claude Code'da `/` yazınca tüm yüklü komutlar listelenir. Kategorize:

```
/web-saas:
  saas-mvp          - 7 günde MVP SaaS
  landing-page      - Marketing landing
  admin-paneli      - Role-based admin panel
  ...

/ai-chatbot:
  llm-chatbot       - Custom ChatGPT
  rag-uygulama      - RAG document Q&A
  ...
```

---

## Webinar canlı showcase

3 günlük webinar boyunca:

**Gün 1 (45 dk):**
- "Bakın bu kit'te 145 farklı use case var"
- Kategori menüsü göster
- 1-2 komut çalıştır canlı (`/web-saas:landing-page`)

**Gün 2 (90 dk):**
- "/saas-mvp" ile sıfırdan SaaS demo
- Kullanıcılar paralel olarak kendi sektörü için çağırsın
- Q&A: "şu sektör için hangisini kullanırım?"

**Gün 3 (60 dk):**
- "/otomasyon:lead-capture" ile lead pipeline
- Müşteri kapatma akışı: `/is-satis:teklif-jenerator`
- Goatstarter Accelerator duyurusu

---

## Update mekanizması

Webinar sonrası bu komutları güncellemek istersen:

1. `webinar-ozel/komutlar/` içindeki dosyayı düzenle
2. `.claude/commands/` içine yeniden kopyala
3. Claude Code restart (genelde gerek yok, sıcak yükleme)

---

## DOA Topluluğu

Yeni komutlar ekleyince DOA Skool'da paylaş — toplulukta uzman olduğun konularda kütüphaneyi büyütelim.

skool.com/doa → #komutlar kanalı

---

## Setup Script (tek tıkla yükle)

```bash
#!/bin/bash
# Tüm komutları .claude/commands/'a yükle

mkdir -p .claude/commands
cp -r /path/to/webinar-ozel/komutlar/* .claude/commands/

echo "✅ 145 slash command yüklendi"
echo "Claude Code'da '/' yazıp listele"
```

`/Users/esadkilic/goathq/webinar-ozel/komutlar/install.sh` olarak kaydet, müşterilere ver.

---

— Esad & Burhan
Goatstarter Ventures
