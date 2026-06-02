---
tags: [moc, claude, protokol]
guncelleme: 2026-06-02
---

# 🤝 Claude İçin Kullanım Protokolü

> Bu not Claude'a (bana) yöneliktir: bu kütüphaneyi herhangi bir projede nasıl bir **kaynak** olarak kullanacağımı tanımlar. Özet kural: **Önce buraya bak, sonra yola çık.**

**Kütüphanenin tam yolu:**
```
/Users/ozeripek/Desktop/Obsidian/skills and  blueprints library
```
(Not: "skills and" ile "blueprints" arasında **iki boşluk** var.)

---

## 🧭 Protokol — yeni proje / yeni özellik başlarken
1. **Önce kütüphaneye bak.** İhtiyaç ne? Bu üç soruyu sırayla sor:
   - Sıfırdan çalışan bir mini-uygulama mı lazım? → [[Blueprints MOC]]
   - Mevcut projeye bir yetenek mi eklenecek? → [[Yetenekler MOC]]
   - Derin teknik / agent referansı mı? → [[Dış Kütüphaneler MOC]]
2. **Varsa, uyarlayarak kullan.** İlgili dosyayı oku, projeye kopyala (aşağıdaki komutlar), gerekiyorsa projeye göre düzenle. Sıfırdan yazma.
3. **Yoksa, kendi yolumuza gideriz.** Kütüphanede uygun bir şey yoksa bunu açıkça söyle ve sıfırdan kur. (İstersen yeni ürettiğimiz şeyi sonradan kütüphaneye skill/blueprint olarak ekleyebiliriz.)

> Kütüphane salt-kaynak. Bir projede çalışırken buradaki dosyaları **o projenin** klasörüne kopyalarım; bu vault'u kirletmem.

---

## 📥 Kopyalama reçeteleri

Kısalık için kütüphane yolunu değişkene al:
```bash
LIB="/Users/ozeripek/Desktop/Obsidian/skills and  blueprints library"
```

### A) Bir **skill** ekle (Claude arka planda otomatik seçer)
```bash
# örnek: web-saas/admin-paneli
mkdir -p .claude/skills/admin-paneli
cp "$LIB/skill-kutuphanesi/web-saas/admin-paneli.md" .claude/skills/admin-paneli/SKILL.md
```

### B) Bir **slash command** ekle (sen `/...` ile çağırırsın)
```bash
# namespace'siz → /admin-paneli
mkdir -p .claude/commands
cp "$LIB/project mdleri/web-saas/admin-paneli.md" .claude/commands/admin-paneli.md

# namespace'li → /web-saas:admin-paneli
mkdir -p .claude/commands/web-saas
cp "$LIB/project mdleri/web-saas/admin-paneli.md" .claude/commands/web-saas/
```

### C) Bir **blueprint** ile sıfırdan uygulama kur
```bash
mkdir -p ~/Desktop/yeni-proje && cd ~/Desktop/yeni-proje
cp "$LIB/blueprints/qr-menu/CLAUDE.md" .
mkdir -p .claude/commands
cp "$LIB/blueprints/qr-menu/kur.md" .claude/commands/
# sonra Claude Code'da:  /kur
```

### D) Dış repo'dan bir **EN skill** ekle
```bash
mkdir -p .claude/skills/mcp-builder
cp "$LIB/awesome-claude-skills-master/mcp-builder/SKILL.md" .claude/skills/mcp-builder/SKILL.md
# (varsa scripts/ klasörünü de kopyala)
```

---

## ⚙️ Skill vs Command — hangisi?
| | **Skill** (`skill-kutuphanesi/`) | **Command** (`project mdleri/`) |
|---|---|---|
| Tetikleme | Claude duruma göre **otomatik** seçer | Sen **`/ad`** yazınca çalışır |
| İçerik | Kısa öz (ne zaman/stack/süreç/standart) | Detaylı, **kod bloklu**, adım adım |
| Ne zaman | "Claude bunu bilsin, gerekince kullansın" | "Tam şimdi şu işi yap, belirsizlik olmasın" |

Aynı 145 yetenek **her iki biçimde** de mevcut (ikiz). Genelde: kontrollü demo/üretim için **command**, arka plan uzmanlığı için **skill**.

## 🌐 Global mi, proje-bazlı mı?
- **Proje-bazlı** (önerilen): `.claude/skills` / `.claude/commands` → sadece o projede aktif, temiz.
- **Global**: `~/.claude/skills` / `~/.claude/commands` → her projede açık. Sadece gerçekten her yerde lazım olan birkaç tanesi için; yoksa gürültü olur.
