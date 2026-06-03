# Platform Specifications

> Reference for every workflow that produces or schedules platform-bound content.
> Update if a platform changes specs or if the brand expands to new platforms.

---

## Instagram

### Formats
| Type | Aspect | Resolution | Max length |
|---|---|---|---|
| Feed photo | 1:1, 4:5 | 1080×1080 / 1080×1350 | — |
| Reel | 9:16 | 1080×1920 | 90 s (recommended <60 s) |
| Story | 9:16 | 1080×1920 | 60 s per slide |
| Carousel | 1:1, 4:5 | up to 10 slides | — |

### Caption / Copy
- Max characters: 2,200
- First 125 chars are visible without "…more" → put hook there
- Hashtags: 5–15 in caption or first comment
- Mentions: tag relevant accounts (max 20)

### Recommended posting windows (general; override with brand learnings)
- Tue–Thu 11:00–14:00 and 19:00–21:00 local

---

## TikTok

### Formats
| Type | Aspect | Resolution | Length |
|---|---|---|---|
| Video | 9:16 | 1080×1920 | 15 s – 10 min, sweet spot 21–34 s |

### Caption / Copy
- Max characters: 2,200 (functional sweet spot ~150)
- Hook in first 1–2 seconds (visual + text)
- Hashtags: 3–5 niche + 1–2 trending
- Hooks-on-screen text recommended

### Recommended posting windows
- 18:00–22:00 local; weekends slightly earlier

---

## X / Twitter

### Formats
| Type | Aspect | Resolution | Notes |
|---|---|---|---|
| Image post | 16:9, 1:1 | 1200×675 / 1200×1200 | up to 4 images |
| Video | 16:9, 9:16, 1:1 | up to 1920×1080 | up to 2:20 free / 4 hours premium |

### Caption / Copy
- 280 chars free / 25,000 premium
- Hook in first sentence; thread for long content
- Hashtags: 0–2 (more = lower reach)

### Recommended posting windows
- Tue–Thu 09:00–11:00 and 17:00–19:00 local

---

## YouTube

### Shorts
- Aspect: 9:16
- Resolution: 1080×1920
- Length: ≤60 s
- Title: ≤100 chars
- Description: ≤5,000 chars

### Long-form
- Aspect: 16:9
- Resolution: 1920×1080 or 4K
- Recommended length: 8–15 min for engagement
- Thumbnail: 1280×720, JPG/PNG, <2MB

### Posting cadence
- 1–3× per week is the standard floor for growth

---

## LinkedIn

### Formats
| Type | Aspect | Resolution | Length |
|---|---|---|---|
| Image post | 1.91:1 or 1:1 | 1200×627 / 1200×1200 | — |
| Video | 16:9, 1:1, 9:16 | up to 4K | up to 10 min |
| Document carousel (PDF) | 1:1, 4:5 | — | up to 300 pages |

### Caption / Copy
- Max 3,000 chars
- First 210 chars visible → hook there
- Hashtags: 3–5
- B2B-friendly tone usually wins

### Recommended posting windows
- Tue–Thu 08:00–10:00 local

---

## Facebook

### Formats
| Type | Aspect | Resolution | Notes |
|---|---|---|---|
| Feed photo | 1.91:1, 1:1 | 1200×630 | — |
| Reel | 9:16 | 1080×1920 | up to 90 s |
| Story | 9:16 | 1080×1920 | 60 s per slide |

### Caption / Copy
- Max 63,206 chars (functional <80)
- Hashtags: less effective; 1–3 is fine

---

## Cross-Platform Defaults

When in doubt:
- Image: produce at 1080×1080 (works on Instagram feed, X, LinkedIn, Facebook with mild crop)
- Vertical video: produce at 1080×1920 (Reels, Shorts, TikTok, Stories all share this)
- Horizontal video: 1920×1080 for YouTube long-form

If a single asset is being prepared for multiple platforms, the workflow should generate the **base aspect** and create platform-specific crops only when sizes diverge.

---

## Threads

### Formats
| Type | Aspect | Resolution | Length |
|---|---|---|---|
| Single post | 1:1, 1.91:1, 9:16 | 1440×1440 / 1440×1920 | — |
| Carousel | 1:1, 1.91:1 | up to 10 items | — |
| Video | 9:16, 1:1 | up to 1080×1920 | up to 5 min |

### Caption / Copy
- Max chars: 500
- One topic tag (`threads_topic_tag`) per post — 1-50 chars, no `.` or `&`
- Hashtags: 3-5 inline OK
- More than 10 media items → Upload-Post auto-chunks across multiple posts

### Recommended posting windows
- 09:00–11:00 and 19:00–22:00 local

---

## Pinterest

### Formats
| Type | Aspect | Resolution | Notes |
|---|---|---|---|
| Standard Pin | 2:3 | 1000×1500 | Most common |
| Square Pin | 1:1 | 1000×1000 | — |
| Long Pin | 1:2.1 | 1000×2100 | Higher reach |
| Video Pin | 9:16, 1:1 | 1080×1920 / 1080×1080 | 4 s – 15 min |

### Required parameters in Upload-Post
- `pinterest_board_id` — **mandatory** for every Pin (set per-post or default in `upload-post-config.md`)
- `pinterest_alt_text` — recommended for accessibility/SEO
- `pinterest_link` — destination URL when the Pin should drive traffic

### Caption / Copy
- Title: ≤100 chars
- Description: ≤500 chars (`pinterest_description` or fallback to `description`)
- Pinterest is search-driven → write descriptive, keyword-rich titles and descriptions

### Recommended posting windows
- 20:00–23:00 local; weekends drive more saves

---

## Bluesky

### Formats
| Type | Aspect | Resolution | Notes |
|---|---|---|---|
| Image post | any | up to 4 images per post | — |
| Video | 9:16, 16:9, 1:1 | up to 1080p | ≤180 s, ≤100 MB; 25 videos/day, 10 GB/day daily limit per account |

### Caption / Copy
- Max chars: 300
- Hashtags work but not central; tags on Bluesky still evolving
- No native quote-post boost mechanic — content stands on its own

### Recommended posting windows
- 11:00–14:00 and 19:00–22:00 local; tech audience leans earlier

---

## Reddit

### Formats
| Type | Aspect | Resolution | Notes |
|---|---|---|---|
| Image post | any | single image | Native image post; no carousel |
| Video post | 9:16, 16:9 | up to 1080p | ≤15 min depending on subreddit |

### Required parameters in Upload-Post
- `subreddit` — **mandatory**, no `r/` prefix (e.g., `pics`, not `r/pics`)
- `title` — **mandatory** (Reddit always requires a title)
- `flair_id` — optional but many subreddits require flair; check the subreddit rules first

### Caption / Copy
- Title: ≤300 chars
- Body (`description`): optional, supports markdown
- Hashtags don't apply on Reddit — use accurate titles instead

### Posting strategy
- Each subreddit has its own rules. Our system should NOT auto-post to a subreddit without confirming the rules in the subreddit description, or the post will be removed by mods.
- Reddit doesn't reward generic posts; original-looking content performs best.

---

## Google Business Profile

### Formats
| Type | Notes |
|---|---|
| Standard post | text + 1 image, optional CTA button |
| Event | dates, image, CTA |
| Offer | coupon, redeem URL, terms |

### Required parameters in Upload-Post
- `gbp_location_id` — auto-detected if user has 1 location, else required
- For Event posts: `gbp_event_title`, `gbp_event_start_date`, `gbp_event_end_date` (YYYY-MM-DD)
- For Offer posts: optional `gbp_coupon_code`, `gbp_redeem_url`, `gbp_terms`

### Caption / Copy
- Body: 1500 chars max
- One CTA per post (`gbp_cta_type` + `gbp_cta_url`)
- GBP audience is local-search driven — keep posts hyperlocal and time-bound

