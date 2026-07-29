---
tags: [rehber, skill, arac, find-skills, vercel, meta, referans]
guncelleme: 2026-07-29
---

# 🔎 find-skills — "Skill Bulan Skill" (Vercel Labs)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Bir meta-skill: ne yapmak istediğini söylersin, o işe en uygun **açık ekosistem skill'ini** bulur ve (onayınla) kurar. Vercel Labs · MIT · `skills.sh` dizini. **Bende global kurulu** (`~/.claude/skills/find-skills/`, 2026-07-29) → Claude otomatik çağırabilir.
> Kaynak: [github.com/vercel-labs/skills](https://github.com/vercel-labs/skills/tree/HEAD/skills/find-skills) · YouTube (I8AZIIEKZGY).

## Ne yapar
- `npx skills find <sorgu>` — skill arar; `npx skills add <owner/repo@skill> -g -y` — kurar; `npx skills update` — günceller.
- Sıralama ölçütü: **indirme sayısı + kaynak itibarı + GitHub yıldızı** (Vercel/Anthropic gibi resmi kaynakları öne alır); önce `skills.sh` liderlik tablosuna bakar.
- **Otomatik kod çalıştırmaz** — keşfeder, kurulumu **senin onayınla** yapar.

## Kurulum (gerekirse tekrar)
```
npx skills add vercel-labs/skills --skill find-skills --agent claude-code
```

## ⚠️ Dürüst değerlendirme
- **✅ Meşru ve kullanışlı:** Vercel Labs, MIT, gerçek `skills` CLI. Doğru skill'i tahmin etmek yerine buldurmak mantıklı.
- **⚠️ Tedarik zinciri:** Bu, *başka* skill'leri GitHub'dan kuran bir araç. Bulduğu her skill'i körlemesine kurma — video bile "GitHub'dan rastgele skill yükleme" diyor. find-skills itibar/indirme metriğiyle eler ama son kontrol sende (skill kodunu oku, kaynağa bak).
- **⚠️ Senin sistemini KOPYALAMAZ, tamamlar:** Sen zaten insan-eliyle küratörlü dev bir kütüphane kurdun ([[00 HOME]] + MOC'lar + routing notları) — bu senin "skill bulma" sistemin. find-skills **dışarıdaki/yeni** skill'leri keşfetmek için işe yarar; kütüphanendeki mevcut yeteneği ararken **önce vault'a bak** ([[skills-blueprints-library]] ilkesi), find-skills'i ekosistemde olmayan bir şey lazım olunca kullan.
- **Ağ gerekir:** arama/kurulum `npx` + internet ister.

## Ne zaman hangisi?
- **"Kütüphanemde bu var mı?"** → önce [[Yetenekler MOC]] / [[Blueprints MOC]] / [[Dış Kütüphaneler MOC]].
- **"Dışarıda, ekosistemde bu iş için hazır skill var mı?"** → find-skills.

## Bağlam
Kullanıcının isteğiyle eklendi (2026-07-29); global kurulu, Claude ihtiyaç duyunca otomatik çağırır. İlgili: [[skills-blueprints-library]] (kendi küratörlü sistemi), [[ucretsiz-arac-tercihi]] (find-skills'in kurduğu araçların ücretsiz/açık olmasına dikkat).
