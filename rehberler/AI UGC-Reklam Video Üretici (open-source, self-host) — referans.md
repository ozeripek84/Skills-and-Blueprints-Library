---
tags: [referans, arac, video, ugc, reklam, self-host, fal-ai]
guncelleme: 2026-06-04
---

# 🎞️ AI UGC / Reklam Video Üretici (open-source, self-host) — referans

> [[00 HOME|🏠 Ana sayfaya dön]]
> Klonlanan açık-kaynak **Next.js/Vercel app**: arayüzden AI reklam/UGC videoları üretir (SaaS, mobil app, sosyal). Fal AI ile bulutta ya da **ücretsiz LTX-2** ile lokalde. ⚠️ Repo linki video açıklamasında — **linki verirsen vendor ederim** ([[Yetenekler MOC|yildiz-dikme]] repoları gibi).

## Kurulum (videodaki akış)
1. Repoyu klonla. 2. Claude Code'a: *"bu repo'yu klonla ve Vercel app olarak aç; sana Fal AI API anahtarı veriyorum"* → deploy + arayüz. 3. Fal key (bulut) **ya da** LTX-2 (lokal, ücretsiz).

## Ne yapar
- **Text-to-video** (yazıdan direkt video) **veya** **image-to-video** (önce görsel, sonra videoya çevir).
- Sahne sayısı **30'a kadar** → uzun videolar. Kamera kontrolü (zoom in/out, soldan-sağa).
- Modeller: Fal AI (**Seedance**, **Nano Banana 2**), ücretsiz **LTX-2** (lokal).
- **Detaylı prompt kütüphanesi** dahili: kamera / ışık / müzik / sahne promptları (LTX-2'ye ayarlı). Altyazıyı kendi ekler.

## 💡 Pratik ipuçları
- **Ekrandaki yazılar bozuluyorsa → image-to-video kullan** (text-to-video yazıyı bozar). Nano Banana 2 ile yazılar temiz çıkar.
- Ne kadar çok bilgi verirsen o kadar iyi. Hedefe göre uyarla ("sadece Instagram için" gibi).

## İş modeli
Kendi ürünün/sosyalin için **ya da** müşteriye **abonelikle hizmet** olarak sat (hazır arayüz) / tek-seferlik kurulum. → [[Yetenekler MOC|is-satis/ai-ajans-modeli]].

## Kütüphanedeki komşular (duplikasyon değil — fark)
| Araç | Fark |
|---|---|
| **Bu (self-host repo)** | Kendi kodun/arayüzün, ücretsiz LTX-2 seçeneği, müşteriye satılabilir app |
| [[Higgsfield MCP-CLI — Görsel-Video Üretimi (referans)\|Higgsfield]] | Hosted MCP/CLI, Marketing Studio (tek link→video), kredi bazlı |
| [[İçerik Fabrikası — Referans Sistem]] | Marka bazlı uçtan uca içerik+yayın hattı (Higgsfield bağımlı) |
| [[Blueprints MOC\|scroll-narrative-site]] | Tek-site video-arka-plan (ElevenLabs/Fal frame-pair) |

## Kaynak / benzerleri (resmî repo bilinmiyor)
- Benzer açık-kaynak: [SamurAIGPT/seedance-2-generator](https://github.com/SamurAIGPT/seedance-2-generator) (Next.js SaaS, text/image-to-video) · "Open AI UGC" (Veo/Seedance, self-host) · [Fal AI](https://fal.ai) · LTX-2 (ücretsiz lokal video modeli).
> Videodaki tam repo için: kullanıcı linki paylaşınca güncellenecek + vendor edilecek.
