---
tags: [rehber, karpathy, claude-md, calisma-ilkesi, davranis]
guncelleme: 2026-06-04
---

# 🧭 Karpathy Çalışma İlkeleri — LLM Kodlama Tuzaklarına Karşı

> [[00 HOME|🏠 Ana sayfaya dön]]
> Andrej Karpathy'nin LLM kodlama gözlemlerinden türetilmiş, Claude'un davranışını iyileştiren tek-dosya `CLAUDE.md` rehberi. (Vendor: `andrej-karpathy-skills/`, MIT.) **İlk konuşmamızdaki "Karpathy prompt'u" buydu — artık kütüphanede ve ben bu ilkelerle çalışıyorum.**

## Karpathy'nin teşhisi (sorun)
> *"Modeller senin adına yanlış varsayımlar yapıp kontrol etmeden devam eder; kafa karışıklığını yönetmez, açıklama istemez, tutarsızlıkları yüzeye çıkarmaz, tradeoff sunmaz, gerektiğinde itiraz etmez."*
> *"Kodu ve API'leri aşırı karmaşıklaştırmayı, soyutlamaları şişirmeyi sever; 100 satırın yeteceği yerde 1000 satır yazar; anlamadığı kod/yorumu yan etki olarak değiştirir/siler."*

## 4 İlke (çözüm)
1. **Think Before Coding** — Varsayma. Kafa karışıklığını gizleme. Tradeoff'ları göster.
   - Varsayımları açıkça söyle; belirsizse **sor**. Birden çok yorum varsa sun, sessizce seçme. Daha basit yol varsa **itiraz et**. Kafan karışıksa **dur, neyin belirsiz olduğunu söyle**.
2. **Simplicity First** — Problemi çözen minimum kod. Spekülatif hiçbir şey.
   - İstenmeyen özellik/abstraction/"esneklik"/imkânsız-senaryo error handling yok. 200 satır 50 olabiliyorsa yeniden yaz. *"Senior bir mühendis buna 'fazla karmaşık' der mi?"*
3. **Surgical Changes** — Sadece gerekeni dokun. Sadece kendi yarattığın dağınıklığı temizle.
   - Komşu kodu/yorumu/formatı "iyileştirme". Bozuk olmayanı refactor etme. Mevcut stile uy. Alakasız ölü kodu **sil değil, söyle**. Her değişen satır kullanıcının isteğine izlenebilir olmalı.
4. **Goal-Driven Execution** — Başarı kriteri tanımla, doğrulanana dek döngüle.
   - "Validation ekle" → "geçersiz girdiler için test yaz, sonra geçir". Çok adımlı işte kısa plan: `adım → doğrula: kontrol`.

> **Tradeoff (yazarın notu):** Bu ilkeler hızdan çok dikkate eğilir. Önemsiz işlerde muhakeme kullan.

## Çalışıyor mu? (göstergeler)
Diff'lerde daha az gereksiz değişiklik · aşırı-karmaşıklık yüzünden daha az yeniden-yazım · açıklayıcı sorular hatadan **sonra** değil **önce** gelir.

## Kurulum
```text
/plugin marketplace add forrestchang/andrej-karpathy-skills
/plugin install andrej-karpathy-skills@karpathy-skills
```
Ya da `andrej-karpathy-skills/CLAUDE.md`'yi projenin/global `~/.claude/CLAUDE.md`'sine **birleştir**. Cursor için `.cursor/rules/` kuralı da var. Repo: github.com/multica-ai/andrej-karpathy-skills.

## İlişkili (aynı felsefe)
- 🤖 [[Agent Kurma — BLAST Çerçevesi]] — 5 başarısızlık-önleme kuralı (önce-veri, cerrahi, hedef-odaklı, ritim, niyet) = bunun ajan versiyonu.
- 🦾 [[Superpowers — Plan-Önce Geliştirme Plugin'i (referans)]] — plan→test→review (Goal-Driven'ın araç hâli).
- ⭐ [[Dış Kütüphaneler MOC|gstack]] · 💎 [[$10K Web Sitesi — Claude Code Tasarım İş Akışı]] (cerrahi/"pahalı değil sade").
