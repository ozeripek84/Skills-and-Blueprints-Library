# Upload-Post Configuration

> Bu dosya gizli bilgi içerir (API key). Sistemi başkasıyla paylaşırken (zip alırken) bu dosyadaki API key'i silmeyi / placeholder'a çevirmeyi unutma.

---

## API Credentials

```
UPLOAD_POST_API_KEY: [FILL: upload-post.com dashboard'undan al — başında "Apikey " olmadan, sadece key]
UPLOAD_POST_USER:    [FILL: Upload-Post hesabındaki user identifier — örnek: "test", "marka-adın", "ana-profil"]
```

> Publishing workflow (CLAUDE.md §5.6) API key olmadan submit yapmaz. İki alanı da doldurmadan paylaşım imkânsız.

---

## Hesap Kurulumu (~5 dk)

1. **upload-post.com'da hesap aç.**
2. Dashboard'da **bir "user" / "profile" oluştur.** Bu, sosyal medya hesaplarının bağlanacağı kapsayıcı. Profilin adını üstte `UPLOAD_POST_USER` olarak gir.
3. **Sosyal medya hesaplarını bağla.** Her platform için OAuth ile giriş yap:
   - Instagram (Graph API üzerinden — Facebook bağlantısı gerekir)
   - TikTok (paid plan gerektiriyor — Free'de TikTok yok)
   - LinkedIn (kişisel veya organization page)
   - Facebook (sadece Page'ler — kişisel profil API üzerinden post almıyor, Meta kuralı)
   - X (Twitter)
   - Threads
   - Pinterest (board ID gerekli — aşağıdaki tabloda)
   - Bluesky
   - Reddit (subreddit gerekli — her post için)
   - YouTube (sadece video endpoint'i, video için title zorunlu)
   - Google Business Profile (location ID otomatik veya elle)
4. **API key oluştur** (dashboard → API Keys ya da Settings). Üstteki `UPLOAD_POST_API_KEY`'e yaz.
5. **Plan seç:**
   - **Free plan**: TikTok yok + aylık post limiti düşük. Test için ok.
   - **Paid plan**: TikTok dahil tüm platformlar + daha yüksek aylık limit. Fiyatları upload-post.com'dan kontrol et.

---

## Platform-Specific Tamamlayıcı Bilgi

Bazı platformlar her postta ek alan ister. Bunları her post için tutarlı kullanmak için varsayılan değerlerini buraya not et.

| Alan | Değer | Açıklama |
|---|---|---|
| `facebook_page_id` | [FILL: opsiyonel — sadece 1 sayfa bağlıysa otomatik kullanılır] | Birden fazla Facebook sayfan varsa hangisine post atılacağını belirtir |
| `pinterest_board_id` | [FILL: zorunlu — Pinterest post yapacaksan] | Pin'in gideceği board ID. upload-post.com dashboard'undan veya Pinterest'ten al |
| `subreddit` (Reddit) | [FILL: post başına değişir, takvimde kullan] | Her post için subreddit adı (`r/` olmadan). Calendar entry'de tek tek belirtilir |
| `youtube_category_id` | `22` (varsayılan: People & Blogs) | YouTube'a yüklerken kategori |
| `gbp_location_id` | [FILL: varsa GBP location ID, yoksa otomatik] | Google Business Profile lokasyon ID'si |
| `target_linkedin_page_id` | [FILL: organization page'e post atacaksan ID] | Boş bırakırsan kişisel profile gider |
| `default_timezone` | `Europe/Istanbul` | scheduled_date için varsayılan timezone (IANA formatı) |

---

## Plan / Limit Awareness

- Upload-Post API yanıtlarında bazen `usage: { count, limit, last_reset }` döner — her zaman değil.
- Publisher `count >= limit * 0.8` olunca uyarır.
- 429 (limit aşımı) gelirse oturumdaki kalan post submission durdurur, sana bildirir.
- Gerçek kullanım için her zaman upload-post.com dashboard'unu kontrol edebilirsin.

---

## First-Time Setup Checklist

- [ ] upload-post.com'da hesap açıldı
- [ ] User identifier oluşturuldu (`UPLOAD_POST_USER` üstte yazılı)
- [ ] Sosyal medya hesapları Upload-Post profiline bağlandı
- [ ] API key alındı, `UPLOAD_POST_API_KEY` üstte yazılı
- [ ] Pinterest'e post atıyorsan `pinterest_board_id` belirlendi
- [ ] Plan seçildi (TikTok için paid plan gerekli)
- [ ] Sohbete yazarak test: `bir test postu yap — ürünümün görseli, sadece bir test hesabına (örn. kendi Bluesky veya kişisel test Instagram'ın), şimdi yayınla. Hangi hesabın test için uygunsa onu seç.`
- [ ] Test başarılıysa canlı kullanıma geç
