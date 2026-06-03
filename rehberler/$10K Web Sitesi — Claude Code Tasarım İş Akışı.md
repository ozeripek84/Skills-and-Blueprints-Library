---
tags: [rehber, web-tasarim, claude-code, workflow, skill]
guncelleme: 2026-06-03
---

# 💎 $10K Web Sitesi — Claude Code Tasarım İş Akışı

> [[00 HOME|🏠 Ana sayfaya dön]]
> Claude Code + iki tasarım skill'i ile "10.000 dolarlık freelancer işi" gibi duran, AI yapımı belli olmayan site. (Video yöntemi.) Bağlanır: [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]], [[frontend-design]] (built-in).

## İki tasarım skill'i
1. **frontend-design** (Anthropic) — arka planda çalışır, Claude'u **cesur/özgün** tasarıma iter, en çok kullanılan jenerik AI fontlarını yasaklar, "ölçülü duyusal" metin yazdırır. *Bu ortamda bende built-in zaten var.* Repo: anthropics/skills.
2. **UI UX Pro Max** (topluluk, MIT, [[Dış Kütüphaneler MOC|kütüphanede vendor]]) — büyük tasarım müdahalesinde `/ui-ux-pro-max` ile **doğrudan çağrılır**. 67 UI stili, 161 palet, 57 font çifti, 99 UX kuralı.
   - Kur: `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill` ya da `npm i -g uipro-cli && uipro init --ai claude`.

## $10K vs $200 — 8 maddelik çıta (kontrol listesi)
**Zevk:** ① Bakış açısı (net yön, ilham panosu değil) · ② Tipografi (jenerik AI fontu yok — Inter'i değiştir!) · ③ Renk (5 hex, gökkuşağı yok — ölçülülük = kalite) · ④ Hiyerarşi (boyut gözü yönlendirir).
**İçerik:** ⑤ Görseller (özel foto > AI üretim) · metin (ölçülü, sıfat yağmuru yok: *"Altı yemek, bir ateş"*).
**Hissedilen kalite:** ⑥ Hareket (imleç/scroll mikro-etkileşimler) · ⑦ Mobil (sadece responsive değil, *telefon için tasarlanmış*) · ⑧ Görünmez (hız, bitmişlik).

## Adım adım
1. **Referans topla:** Dribbble · Awwwards · Pinterest'ten 3-5 beğendiğin site ekran görüntüsü. Kopya değil — Claude'a *zevkini göster*.
2. **Build promptu:** `/ui-ux-pro-max` + ne istediğini anlat + son satır: **"Bana açıklayıcı sorular sor."** → Claude durup ~7 soru sorar (isim, stil yönü, bölümler, içerik, stack, animasyon seviyesi) ve **3 stil yönü** önerir. Bu an tüm siteyi belirler — soruları özenle yanıtla.
3. **İlk çıktı → 8 maddeye göre puanla:** "Bu site her kritere göre nerede? Dürüst ol."
4. **Görseller (asset):** Claude'a *görsel üretim promptunu yazdır* → ChatGPT (foto) / [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)|Higgsfield/ElevenLabs]] (video: ilk kare → Veo → Topaz upscale) → klasöre koy.
5. **Hazır bileşen:** **21st.dev** (ücretsiz) — kaydırma/imleç efekti, buton vb. "copy command" → Claude'a yapıştır. (React bileşeni statik siteye uymazsa Claude reddeder ve mimariyi korur — doğru davranış.)
6. **Cila — "daha karmaşık değil, daha PAHALI":** niyetle yönlendir, ayrıntıyla değil. *"Daha fazla el yapımı mikro-etkileşim; alt bölümler jenerik; pahalı hissettir."* Claude tek promptta 5 küçük değişiklik döndürür (token tasarrufu + tutarlılık).
7. **Sönük bölüm avı:** her bölümü gez, sönük olana **bir** imleç/hareket etkileşimi iste, "daha incelikli yap" de (ateş közü paralaks, mum ışığı imleç halesi…).
8. **Mobil:** "telefon için özel çalış — ne gizlensin, ne daralsın, ne yeniden boyutlansın."

## Deploy (statik site)
- Dosyaları **klasörün İÇİNDEKİLERİ** olarak zip'le (klasörün kendisini değil — yoksa bir dizin derine iner, boş sayfa). `index.html` zip kökünde olmalı.
- **Hostinger:** statik (login/DB yok) → **Premium**; gerçek backend (Node/DB/auth) → **Business**. (Hangi plan? Claude React'e geçtiyse backend var demektir → Business.)
- Alternatif: Vercel/Netlify (statik, ücretsiz).

## İlişkili
- 📐 [[Yıldız Dikme — Web Tasarım Prompt Yöntemi]] (aynı ruh: önce tech, İngilizce, ilham al, kısa promptlar).
- 🧱 [[Blueprints MOC|scroll-narrative-site]] · [[Blueprints MOC|3d-camera-landing-page]] — uygulanmış örnekler.
- 🎭 [[Playwright Tarayıcı Otomasyonu (Claude Code) — referans]] (Claude bozuk sayfayı tarayıcıda canlı debug eder) · 🖌️ [[Claude Design — Tasarım Çıkar, Claude Code'da Optimize Et (referans)]].
