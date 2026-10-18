---
description: Akıllı iş başvurusu — ilanları profile göre 100'lük puanla, en uygunları seç, kişiselleştirilmiş başvuru taslağı hazırla. Otomatik gönderim YOK, son karar insanda.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /kariyer-is-bulma:is-basvuru-analizi


# Akıllı İş Başvurusu — İlan Analizi + Taslak

## Ne zaman
Yüzlerce ilanı okumak, uygununu seçmek ve her başvuru için kişisel metin yazmak yerine: ilanları profile göre **puanla**, önceliklendir, **taslak** hazırla. Karar + gönderim kullanıcıda.

## Stack (ücretsiz-öncelik)
Analiz + puanlama + taslak = saf Claude. İlan kaynağı: **elle yapıştır / job-alert maili / CSV** (varsayılan, ücretsiz) · opsiyonel Apify MCP (`https://mcp.apify.com`) — ⚠️ freemium + LinkedIn scraping ToS-gri, varsayılan sayma.

## Puanlama (0-100)
Teknoloji uyumu · deneyim seviyesi · lokasyon/remote · dil · sektör/şirket · CV eşleşmesi.
80-100 öncelikli · 60-79 incelemeye değer · 40-59 eksiklere dikkat · 0-39 düşük.

## Taslak türleri
Başvuru maili · LinkedIn bağlantı notu · hiring manager tanışma · takip mesajı · CV güncelleme önerisi. Ton: kısa, profesyonel, kişiye özel, abartısız.

## Detaylı Adımlar

Bu komut çağrıldığında, kullanıcının iş başvurusu sürecini uçtan uca yürüt — ama **asla otomatik gönderim yapma**; tüm çıktılar taslaktır, gönderim kullanıcıda.

### Çalıştırma akışı:

1. **Profil çıkar:** kullanıcıdan al → hedef rol(ler), seviye (junior/mid/senior), teknolojiler, şehir/remote tercihi, kısa kariyer özeti. CV/LinkedIn özeti/portfolyo linki varsa oku — taslaklar kişiselleşir. Profili `basvuru/profil.md`'ye yaz.
2. **İlanları al:** kullanıcı yapıştırsın ya da dosya versin (CSV/Excel/metin). Apify MCP bağlıysa ve kullanıcı isterse oradan topla (⚠️ kredi + ToS uyarısını söyle). İlk turda 10-20 ilan; kalite doğrulanınca büyüt.
3. **Puanla:** her ilanı 6 kritere göre 0-100 puanla; tablo üret: ilan · şirket · puan · güçlü eşleşme · eksikler. `basvuru/puanlama.md`'ye kaydet.
4. **Kısa liste:** 80+ olanları öne al; kullanıcıyla teyitleş — hangileriyle devam?
5. **Şirket araştır** (seçilenler için): ürün, sektör, pozisyonun ekipteki yeri, başvuruda dikkat noktaları; işe alıma yakın roller (recruiter/TA/HR/hiring manager) — kişiye otomatik mesaj değil, rol-bazlı iletişim stratejisi.
6. **Taslakları üret** (her seçilen ilan için): başvuru maili + LinkedIn bağlantı notu + gerekirse hiring manager tanışma + takip mesajı. Her taslağın altına "göndermeden önce kontrol et" listesi: şirket adı ✓ pozisyon adı ✓ deneyim doğruluğu ✓ kişisel bilgiler ✓. `basvuru/taslaklar/` klasörüne yaz.
7. **CV önerisi:** ilanla eşleşmeyi güçlendirecek CV başlık/bullet önerileri (gerçek dışı hiçbir şey ekleme).
8. **Raporla:** puan tablosu + kısa liste + taslak dosyaları; sonraki adımın kullanıcının manuel kontrolü + gönderimi olduğunu net söyle.

### Kalite checklist:
- [ ] Profil net (rol + seviye + lokasyon + teknolojiler)
- [ ] İlk tur küçük (10-20 ilan)
- [ ] Puan tablosu gerekçeli
- [ ] Taslaklar kısa/profesyonel/abartısız; gerçek dışı deneyim YOK
- [ ] Her taslakta gönderim-öncesi kontrol notu
- [ ] Otomatik gönderim/toplu mesaj YAPILMADI (LinkedIn ToS + hesap riski)
- [ ] Kişisel veri (CV, mail listesi) public repo'ya konmadı

### Akraba:
Proaktif outreach: `/kariyer-is-bulma:video-outreach-basvuru` · blueprints/vize-sponsorlu-is-outreach. CV: awesome-claude-skills → tailored-resume-generator.

Şimdi başla — adım 1'den: kullanıcının profilini çıkar.
