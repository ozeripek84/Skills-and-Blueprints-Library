---
description: ETL pipeline — extract, transform, load (multiple sources → DW).
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /veri-analitik:data-pipeline


# Data Pipeline / ETL

## Ne zaman
Multiple kaynaklardan data warehouse'a aggregation.

## Stack
n8n / Airbyte / dbt + BigQuery/Postgres

## Süreç
1. Sources tanımla (DB, API, CSV)
2. Extraction schedule
3. Transformations (clean, dedupe, enrich)
4. Load to warehouse
5. Data quality checks
6. Lineage tracking

## Çıktı standardı
- Idempotent runs
- Data quality alerts
- Backfill capability
- Schema evolution handling

## Yaygın hatalar
- Schema değişikliği pipeline'ı kırar
- Backfill stratejisi yok
- Failed run silently (alerting şart)

## Detaylı Adımlar

Bu komut çağrıldığında, kullanıcının ihtiyacına özel olarak yukarıdaki süreci uygula. Adım adım ilerle, her adımda kullanıcıdan onay al.

### Çalıştırma akışı:

1. **Anla:** Kullanıcının spesifik ihtiyacını öğren (sektör, hedef, kısıtlar)
2. **Plan:** Yukarıdaki süreçten hangi adımları kullanacağını belirle
3. **Setup:** Gerekli dependency'leri yükle, klasör yapısını oluştur
4. **Implement:** Adım adım kod yaz, her adım çalışır halde olsun
5. **Test:** Her özelliği gerçek senaryoyla doğrula
6. **Polish:** Mobile, error states, loading states, edge cases
7. **Deploy:** Production'a al, custom domain, SSL
8. **Document:** README + kullanım rehberi

### Müşteriye teslim paketi (uygulanabilirse):
- Live URL + admin login
- GitHub repo erişimi
- README + kullanım rehberi
- 5 dakikalık Loom tour videosu
- 7 gün post-launch destek

### Kalite checklist:
- [ ] TypeScript hatasız
- [ ] Mobile responsive (gerçek device test)
- [ ] Lighthouse 85+ (mobile)
- [ ] Loading + error states
- [ ] Empty states
- [ ] Türkçe UI dili
- [ ] SEO meta tags
- [ ] Accessibility (a11y)
- [ ] Privacy + Terms (gerekirse)

Şimdi başla — kullanıcının verdiği detaylara göre adım 1'den ilerle.
