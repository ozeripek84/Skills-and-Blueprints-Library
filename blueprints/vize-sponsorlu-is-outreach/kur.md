# Kur: Vize-Sponsorlu İş Outreach Kampanyası

Bu blueprint bir **kampanya** kurar (tek-dosya uygulama değil). `CLAUDE.md`'yi oku, kullanıcıyla doldur, adım adım yürüt.

> ⚠️ Kişisel veriyi (CV, e-posta, hedef liste) **private** bir klasörde tut — public repo'ya koyma.

## Adımlar
1. `CLAUDE.md`'yi oku. Değişkenleri sor: [AD], [ROL], [SEKTÖR], [ÜLKE]=UK|NL, [VIZE]=Skilled Worker|HSM, [BASE_VIDEO].
2. **Sponsor sicili filtresi:**
   - UK → gov.uk "Register of Licensed Sponsors (Workers)" CSV indir.
   - NL → ind.nl "Public Register Recognised Sponsors" + İngilizce-öncelikli filtre.
3. Register'ı sektör/rol ile kesiştir → hedef şirket listesi (her birine gerçekten bak).
4. Apollo'dan recruiter/hiring manager e-postaları → CSV.
5. SendSpark'ta kişisel video (watermelon placeholder) → test → toplu üret.
6. Apollo sequence kur (otomatik mail + video linki + CV).
7. CV: master + role-targeted başlık, metrikli, visa-ready + relocation net.
8. Başlat → yanıtları takip et → görüşmeye çevir. Ölç, zayıfsa hedef/script/CV revize.

## Çıktı klasörü (private)
`kampanya-[ÜLKE]/`: hedef-liste.csv, video-script.md, email-dizisi.md, cv-[rol].md, takip.md.
> İlke: gerçek alaka + kişisel + GDPR. Cleared savunma rolü değil, dual-use/ticari AI hedefle.
