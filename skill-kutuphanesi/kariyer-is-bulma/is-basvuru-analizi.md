---
name: is-basvuru-analizi
description: Akıllı iş başvurusu — ilanları profile göre 100'lük puanla, en uygunları seç, kişiselleştirilmiş başvuru taslağı hazırla. Otomatik gönderim YOK, son karar insanda.
---

# Akıllı İş Başvurusu — İlan Analizi + Taslak

## Ne zaman
İş ararken asıl yük ilan *bulmak* değil: yüzlerce ilanı tek tek okumak, hangisinin gerçekten uygun olduğunu anlamak ve her başvuru için kişisel metin yazmak. Bu yetenek ilanları aday profiline göre **puanlar**, önceliklendirir ve **taslak** hazırlar. Karar + gönderim kullanıcıda kalır.

## Stack (ücretsiz-öncelik)
Analiz + puanlama + taslak = **saf Claude** (ek servis yok). İlan verisi kaynağı:
- **Varsayılan (ücretsiz):** ilanları elle yapıştır / LinkedIn job alert maillerinden kopyala / CSV-Excel olarak ver. 10-20 ilanla başla.
- **Opsiyonel:** Apify MCP connector'ı (`https://mcp.apify.com`, Settings→Connectors) ile toplu toplama — ⚠️ freemium (kredi biter → paralı) ve **LinkedIn scraping ToS-gri** (hesap riski). Kaynak rehber bunu kullanıyor; varsayılan sayma.

## Süreç
1. **Profil çıkar:** hedef rol(ler), seviye, teknolojiler, şehir/remote tercihi, kısa CV özeti. (CV/portfolyo verilirse taslaklar kişiselleşir.)
2. **İlanları al:** yapıştır / dosya / (opsiyonel) Apify. Net kriter kullan: "yazılım işi" değil, "Türkiye'de remote Junior Backend Developer".
3. **Puanla (0-100):** teknoloji uyumu · deneyim seviyesi · lokasyon/remote · dil beklentisi · sektör/şirket uyumu · CV eşleşmesi. Okuma: 80-100 öncelikli · 60-79 incelemeye değer · 40-59 eksiklere dikkat · 0-39 düşük.
4. **En uygun N ilanı seç** — her biri için güçlü eşleşme + eksik noktalar gerekçesiyle.
5. **Şirket araştır:** ürün, sektör, pozisyonun ekipteki yeri; işe alıma yakın roller (recruiter/HR/hiring manager) — kişilere otomatik mesaj DEĞİL, rol-bazlı strateji.
6. **Taslaklar:** başvuru maili · LinkedIn bağlantı notu · hiring manager tanışma mesajı · başvuru sonrası takip · CV güncelleme önerisi. Ton: kısa, profesyonel, abartısız.
7. **Manuel kontrol:** şirket/pozisyon adı, deneyim doğruluğu, kişisel bilgiler → gönderim kullanıcıda.

## Çıktı standardı
- Puan tablosu (ilan · puan · gerekçe) + önceliklendirilmiş kısa liste
- Her taslakta "göndermeden önce kontrol et" notları
- Otomatik gönderim / toplu mesaj **yok** — sistem karar verici değil, yardımcı

## Yaygın hatalar
- LinkedIn'de otomatik başvuru/mesaj/toplu gönderim (ToS ihlali → **hesap riski**; bu yetenek bunu yapmaz)
- Gerçek dışı deneyim/yetenek ekletmek (taslağı kontrol etmeden göndermek)
- İlk denemede 500 ilan (10-20 ile başla, kalite doğrulanınca büyüt)
- "En iyi işi bul" gibi bulanık kriter (rol+seviye+lokasyon net olmalı)

## Akraba
- Proaktif taraf: [[skill-kutuphanesi/kariyer-is-bulma/video-outreach-basvuru|video-outreach-basvuru]] (ATS'i atlayıp doğrudan ulaşım) · blueprints/vize-sponsorlu-is-outreach (sponsor-filtreli kampanya). **Bu yetenek ilan-tarama tarafı; ikisi birlikte tam iş-arama sistemi olur.**
- CV uyarlama: awesome-claude-skills → `tailored-resume-generator`
- Kaynak: talhaunuvai'nin "Claude + Apify Akıllı İş Başvurusu" PDF rehberi (2026-07; ilkeleri korundu, ücretsiz-öncelik uyarlandı)
