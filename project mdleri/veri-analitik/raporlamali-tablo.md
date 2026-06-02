---
description: Excel-vari interaktif tablo — pivot, formula, export.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /veri-analitik:raporlamali-tablo


# Spreadsheet-like Table

## Ne zaman
Müşteri Excel benzeri arayüz istiyor (CRM, planning).

## Stack
TanStack Table + Univer / Handsontable / Glide

## Süreç
1. Column definitions
2. Sorting + filtering
3. Inline editing
4. Formulas (basic =SUM)
5. Pivot view
6. Export (Excel/CSV)
7. Conditional formatting

## Çıktı standardı
- 10K+ rows performant (virtualization)
- Keyboard nav (Excel-like)
- Copy/paste (Excel uyumlu)
- Undo/redo

## Yaygın hatalar
- Virtualize unutmak (browser donar)
- Formula complexity (basic kalsın)
- Editing race condition

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
