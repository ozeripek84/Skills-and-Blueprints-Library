#!/usr/bin/env python3
"""Vault icin indeks/MOC notlari uretir. Mevcut dosyalara DOKUNMAZ, sadece yeni .md ekler."""
import os, re, datetime

ROOT = os.path.dirname(os.path.abspath(__file__))
SKILL_DIR = os.path.join(ROOT, "skill-kutuphanesi")
CMD_DIR = os.path.join(ROOT, "project mdleri")
BP_DIR = os.path.join(ROOT, "blueprints")

CAT_TR = {
    "web-saas": "🌐 Web / SaaS", "ai-chatbot": "🤖 AI / Chatbot", "otomasyon": "⚡ Otomasyon",
    "backend-api": "🔌 Backend / API", "mobil": "📱 Mobil", "veri-analitik": "📊 Veri / Analitik",
    "devops": "🚀 DevOps", "e-ticaret": "🛒 E-ticaret", "entegrasyon": "🔗 Entegrasyon",
    "icerik-pazarlama": "✍️ İçerik / Pazarlama", "sektor-ozel": "🏢 Sektör Özel",
    "araclar": "🛠️ Araçlar", "is-satis": "💼 İş / Satış", "test-kalite": "🧪 Test / Kalite",
    "frontend": "🎨 Frontend", "is-akislari": "🧩 İş Akışları (sıfırdan kurulum)",
}
ORDER = ["web-saas","ai-chatbot","backend-api","frontend","e-ticaret","entegrasyon",
         "otomasyon","is-akislari","veri-analitik","icerik-pazarlama","is-satis",
         "sektor-ozel","araclar","mobil","devops","test-kalite"]

def fm(path, key):
    try:
        t = open(path, encoding="utf-8").read()
    except Exception:
        return ""
    m = re.search(r"^---\s*\n(.*?)\n---", t, re.S)
    if not m: return ""
    mm = re.search(rf"^{key}\s*:\s*(.+)$", m.group(1), re.M)
    return mm.group(1).strip().strip('"').strip("'") if mm else ""

def esc(s):  # tablo hucresi guvenli
    return s.replace("|", "\\|").replace("\n", " ").strip()

def gather():
    cats = {}
    for cat in os.listdir(SKILL_DIR):
        d = os.path.join(SKILL_DIR, cat)
        if not os.path.isdir(d): continue
        rows = []
        for f in sorted(os.listdir(d)):
            if not f.endswith(".md") or f == "README.md": continue
            name = f[:-3]
            desc = fm(os.path.join(d, f), "description")
            rows.append((name, desc, cat))
        if rows: cats[cat] = rows
    return cats

def write(path, content):
    with open(path, "w", encoding="utf-8") as fp:
        fp.write(content)
    print("wrote", os.path.relpath(path, ROOT))

DATE = datetime.date.today().isoformat()
cats = gather()
total = sum(len(v) for v in cats.values())

# ---------- Yetenekler MOC (skill + command birlesik) ----------
out = [f"""---
tags: [moc, yetenekler]
guncelleme: {DATE}
---

# 🧠 Yetenekler Haritası — Skill + Command

> [[00 HOME|🏠 Ana sayfaya dön]] · Toplam **{total} yetenek** · 16 kategori
> Her yetenek iki biçimde var: **⚙️ Skill** (Claude arka planda otomatik seçer) ve **▶️ Command** (`/...` ile sen açıkça çağırırsın). Aynı işin kısa ve detaylı (kodlu) hâli.

## Nasıl okunur
- **⚙️ Skill** linki → `skill-kutuphanesi/` içindeki kısa öz (ne zaman / stack / süreç / çıktı standardı).
- **▶️ Command** linki → `project mdleri/` içindeki kodlu, çalıştırılabilir slash command.
- Bir projede kullanmak için → [[Claude için kullanım|kopyalama rehberi]].

---
"""]
for cat in [c for c in ORDER if c in cats] + [c for c in cats if c not in ORDER]:
    rows = cats[cat]
    out.append(f"\n## {CAT_TR.get(cat, cat)}  ·  {len(rows)} adet\n")
    out.append("| Yetenek | Ne işe yarar | Biçimler |")
    out.append("|---|---|---|")
    for name, desc, c in rows:
        sk = f"[[skill-kutuphanesi/{c}/{name}\\|⚙️ skill]]"
        cm = f"[[project mdleri/{c}/{name}\\|▶️ command]]"
        out.append(f"| **{esc(name)}** | {esc(desc) or '—'} | {sk} · {cm} |")
write(os.path.join(ROOT, "Yetenekler MOC.md"), "\n".join(out) + "\n")

# ---------- Blueprints MOC ----------
bp = [f"""---
tags: [moc, blueprints]
guncelleme: {DATE}
---

# 🧱 Blueprint'ler — Hazır Uygulama İskeletleri

> [[00 HOME|🏠 Ana sayfaya dön]]
> Çoğu blueprint tek-dosya (`index.html`) çalışan bir uygulamaya derlenir; bazıları küçük çok-dosyalı projeler (Vite/Three.js vb. — hazır kod, klonla & uyarla). Klasörde **`CLAUDE.md`** (spec) + **`kur.md`** (`/kur` komutu) bulunur.
> Kullanım: blueprint klasörünü yeni projeye kopyala → `kur.md`'yi `.claude/commands/`'a koy → Claude'da `/kur` yaz. Detay: [[Claude için kullanım]].

| Blueprint | Amaç | Dosyalar |
|---|---|---|"""]
SYSTEM_BP = {"icerik-fabrikasi"}  # tek-dosya değil; aşağıda Sistem Blueprint'leri bölümünde
for name in sorted(os.listdir(BP_DIR)):
    d = os.path.join(BP_DIR, name)
    if not os.path.isdir(d) or name in SYSTEM_BP: continue
    claude = os.path.join(d, "CLAUDE.md")
    amac = ""
    if os.path.exists(claude):
        txt = open(claude, encoding="utf-8").read()
        m = re.search(r"^##\s*(?:Ama[cç]|Genel Bak[iı][sş])\s*\n+(.+?)(?:\n\n|\n##)", txt, re.S | re.M)
        if m:
            amac = re.sub(r"\s+", " ", m.group(1)).strip()
    spec = f"[[blueprints/{name}/CLAUDE\\|spec]]"
    links = spec
    if os.path.exists(os.path.join(d, "kur.md")):
        links += f" · [[blueprints/{name}/kur\\|/kur]]"
    bp.append(f"| **{esc(name)}** | {esc(amac[:160]) or '—'} | {links} |")

# Sistem blueprint'leri (dış konumda yaşayan, klonlanabilir tam sistemler — işaretçi)
bp.append("""
---

## 🏭 Sistem Blueprint'leri (klonlanabilir tam sistemler)
Tek-dosya değil; klonlayıp markaya bağladığın tam Claude Code sistemleri.

| Sistem | Ne | Klonla & detay |
|---|---|---|
| **İçerik Fabrikası** | Marka bazlı uçtan uca içerik üretim + otomatik yayın hattı (boş şablon — her marka için klonla) | `cp -R "blueprints/icerik-fabrikasi" <hedef>` · [[blueprints/icerik-fabrikasi/README\\|README]] · [[İçerik Fabrikası — Referans Sistem\\|detay]] |

> Yerel kopya `blueprints/icerik-fabrikasi/` (API key'siz, [FILL:] placeholder'lı şablon). Çalışan/güncel sürüm: `~/Desktop/SaaS Projects/İçerik Fabrikası`.""")

write(os.path.join(ROOT, "Blueprints MOC.md"), "\n".join(bp) + "\n")
print("DONE", total, "skills")
