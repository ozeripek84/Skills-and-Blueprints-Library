---
tags: [referans, arac, canva, connector, tasarim, entegrasyon]
guncelleme: 2026-06-03
---

# 🎨 Claude + Canva Connector — Sohbetten Tasarım (referans)

> [[00 HOME|🏠 Ana sayfaya dön]]
> Claude'a Canva'yı (ve Gmail/Calendar/Slack/HubSpot/Zoom) **Connectors** ile bağla → doğal dille tarif et → Claude senin için Canva'da tasarlar. Uygulamayı bilmene gerek yok; AI nasıl kullanılacağını biliyor.
> 💡 **Bu entegrasyon Claude Code'da bende canlı** (Canva MCP araçları). Yani bu akışı doğrudan yaptırabilirsin — bkz. en altta.

## Kurulum (bir kez)
claude.com → sol altta **Customize** → **Connectors** sekmesi → **+** → **Canva** → ileri/izin → bağlı. (Aynı liste: Gmail, Google Calendar, Slack, HubSpot, Zoom…)

## Anahtar fikir: tasarım ≠ sadece sosyal medya
Form, yoklama kâğıdı, müşteri bilgi formu, hoş geldiniz kartı, **sunum**, fatura — hepsi tasarım. Elinde PDF/Word/eski tasarım/not varsa Claude'a yükle, onlardan üretsin.

## Akış
1. Prompt yaz (ses de olur): *"Güzellik merkezim için sade, lila (marka rengi), zarif bir hoş geldiniz + bilgi formu. **Canva ile tasarla.**"* → "Canva ile" demek önemli (başka tasarım connector'ı da olabilir).
2. `+` → Connectors'ta **Canva açık** olduğunu doğrula → enter.
3. Claude Canva'da üretir (boyutu kendi seçer — belge için A4; "Instagram boyutu" dersen onu). Logo (PNG/JPEG) verirsen ekler.
4. **"Canva'da aç"** → link → Canva'da her şeyi düzenle (metin, renk, konum, boyut) → çıktı al.

## En kritik tavsiye: düzenlemeyi Canva'da yap
AI tasarımını re-prompt ile düzeltmek (ör. "lila değil mavi olsun") **senin kullanım hakkını/kotanı harcar** ve yeni tasarım üretir. Bunun yerine tasarımı **Canva'ya götürüp orada düzenlemek çok daha ekonomik.**

## Claude mevcut Canva tasarımlarını görür + revize eder
"Canva tasarımlarımı görebiliyor musun?" → son tasarımları listeler. İsimle ya da içerikle: *"müşteri formunu kırmızı tonlarına çevirir misin"* → mevcut tasarıma erişip günceller. 🔐 **İzin:** tek seferlik ya da "her zaman". Her izinde **ne istediğine bak** (Canva, Claude'a yeni bir hafıza ekler gibi olur).

## Model seçimi
- **Sonnet (4.6/4.8):** bu tür tasarım işleri için ideal.
- **Opus:** karmaşık, tek seferlik, kod-ağırlıklı işler (daha pahalı).

## Kütüphanedeki bağı
- 🧱 [[Blueprints MOC|blueprints/scroll-narrative-site]] — video birleştirme adımı Canva'daydı; tasarım/dizgi de buradan.
- 🏭 [[İçerik Fabrikası — Referans Sistem]] — görsel asset/dizgi tarafında kullanılabilir.
- 🎬 [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)]] — video/görsel üretimi; Canva = düzenleme/dizgi.

## Bende canlı kullanım (Claude Code)
Bu ortamda Canva MCP araçlarım var: tasarım üret/düzenle, **görsel yükle (URL'den)**, **PDF/PNG export**, klasör/arama, resize, merge. Yani: *"şu marka için bir form/sunum/kapak tasarla, sonra PDF ver"* dersen doğrudan deneyebilirim (Canva hesabı bağlı/izinli olmak şartıyla).

## Kaynak
- Claude Connectors (claude.com → Customize → Connectors) · Canva connector
