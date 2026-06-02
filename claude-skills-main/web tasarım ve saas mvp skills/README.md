# Gün 2 Paketi — Uygulama Geliştirme

**Tarih:** 28 Nisan 2026, 20:00 webinar sonrası

Bugün gerçek bir uygulama (SaaS / dashboard / custom app) kurmayı gördün. Bu pakette tüm referanslar var.

---

## Bu klasörde ne var?

### Skill'ler (Claude Code'a yüklenecek)
| Dosya | Ne işe yarar |
|---|---|
| `01-saas-iskelet-skill/SKILL.md` | 1 hafta MVP SaaS stack — auth + payment + dashboard, gün gün roadmap |
| `03-web-tasarim-skill/SKILL.md` | Marketing site / landing page tasarımı (SaaS ürününün vitrini) |
| `04-kod-incele-skill/SKILL.md` | Müşteriye teslim öncesi kod kalite kontrolü, production-ready check |

### Hazır prompt'lar
| Dosya | Ne işe yarar |
|---|---|
| `02-saas-mvp-promptlari.md` | 7 gün gün gün SaaS MVP planı (setup → auth → DB → Stripe → deploy) |
| `05-landing-page-promptlari.md` | Marketing landing page prompt şablonları (SaaS için) |

### Diğer
| Dosya | Ne işe yarar |
|---|---|
| `06-webinar-notlari-ve-odev.md` | Bu gecenin ödevi + Gün 3 hazırlık |

---

## Bu gece + sabah yapman gerekenler (2-3 saat)

### 1. Skill'leri Claude Code'a yükle

```bash
mkdir -p .claude/skills
cp -r 01-saas-iskelet-skill .claude/skills/saas-iskelet
cp -r 03-web-tasarim-skill .claude/skills/web-tasarim
cp -r 04-kod-incele-skill .claude/skills/kod-incele
```

Sonra Claude Code başlat — skill'ler yüklü.

### 2. SaaS iskeletini kur (Day 1-3 hafta sonu)

`02-saas-mvp-promptlari.md`'yi aç. Bu gece:
- **Gün 1 prompt'u (setup):** Boş Next.js + Supabase + Stripe iskeleti kur (~30 dk)
- **Gün 2 prompt'u (auth):** Login/signup çalışsın (~1 saat)

Tam 7 günlük plan içinde, sadece bu geceki başlangıç yeter.

### 3. Marketing landing'i de düşün

SaaS'ın marketing sitesi de var. `05-landing-page-promptlari.md` aç:
- Tip 5 (SaaS landing): senin SaaS ürünün için marketing site şablonu
- Bu prompt'u şimdi çalıştırmana gerek yok, hafta sonu için hazırla

### 4. Demo videosu (yarın için kritik)

SaaS iskeletinin auth çalıştığında:
- 1-2 dakikalık Loom kaydı al
- "Şu anda elimde olan: çalışan auth sistemi, [X] saatte kuruldu"
- DOA #tanıtım kanalına paylaş

---

## Yarın için (Gün 3 hazırlık)

Gün 3 — **Otomasyon, Müşteri Bulma, Satış + büyük duyuru**

Hazırlık:
- n8n hesabı aç (n8n.io free trial)
- Hedef müşteri listesi hazırla (10 işletme — Google Maps'ten)
- SaaS'ın hangi tarafına satış pitch yapacağını düşün

---

## Gün 2 başarı kriteri

✅ SaaS iskelet kuruldu (auth + temel layout)
✅ Skill'ler Claude Code'a yüklendi
✅ Marketing landing planı hazır
✅ Demo videosu DOA topluluğunda paylaşıldı

---

## Pro tip

SaaS kurarken bir hata: **çok fazla feature yapmaya çalışmak.**

İlk MVP için kural: **TEK ÖZELLİK**. Onun da %80'i çalışsın yeter. Müşteri %100 cilalı 5 feature yerine, %80 çalışan 1 feature için para verir.

`02-saas-mvp-promptlari.md` Day 3'te "core feature" derken: tek bir şeyi çok iyi yap.

---

## Hafta sonu tam SaaS bitmesini istiyorsan

Cumartesi: Day 4-5 (Stripe + dashboard)
Pazar: Day 6-7 (email + deploy)

Bittiğinde elinde **çalışan, satılabilir SaaS MVP** var.

İlk müşteriyi yarın akşam Gün 3'ten sonra aramaya başlayacaksın — pipeline 30 günde dolar.
