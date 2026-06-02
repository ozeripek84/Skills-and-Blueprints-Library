---
description: Yemek tarifi platform — recipe, meal plan, shopping list.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /sektor-ozel:yemek-tarif


# Recipe Platform

## Ne zaman
Yemek bloggeri, meal kit, dietitian.

## Stack
Next.js + Supabase + image-heavy

## Süreç
1. Recipe schema (ingredients, steps, nutrition)
2. Image gallery
3. Search + filter (cuisine, time, calories)
4. Meal plan (haftalık)
5. Shopping list (auto-generate)
6. User notes / ratings
7. Print-friendly view

## Çıktı standardı
- Recipe schema.org markup
- Print stylesheet
- Mobile cooking mode (büyük yazı)
- Servings adjuster

## Yaygın hatalar
- Image cost (storage + bandwidth)
- Unit conversion (g vs cup)
- Ingredient search fuzzy

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
