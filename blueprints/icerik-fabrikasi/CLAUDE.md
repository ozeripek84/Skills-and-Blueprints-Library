# Content Factory — System Constitution

A self-contained content production system for one brand: ideas → images/videos → captions → calendar → publish. Runs entirely on Claude Code + Higgsfield MCP + Upload-Post REST API.

This file is the **single source of truth** for all rules. Every workflow lives here.

---

## 0. Auto-loaded Context

The files below are injected into the session at startup via `@`-imports. You do NOT need to Read them — their content is already in your context the moment you read this CLAUDE.md.

### Brand identity
@brand/identity.md
@brand/visual-style.md
@brand/voice-tone.md

### Reference data
@reference/platform-specs.md
@reference/prompt-templates.md
@reference/character-library.md

### Domain memory (compaction-bound; see §1)
@memory/strategy.md
@memory/images.md
@memory/videos.md
@memory/characters.md
@memory/calendar.md
@memory/publishing.md
@memory/feedback-log.md

### NOT auto-loaded (lazy-load only when relevant)
- `config/upload-post-config.md` — API key, kept out of every-session context (security + token cost). Loaded only by publishing workflows.
- `config/scheduling-rules.md` — loaded only by calendar workflows.
- `calendar/current.json` — loaded by calendar / publishing workflows.
- `library/**` — assets on disk; never loaded as context.

---

## 1. Memory Hygiene (HARD RULES)

The auto-loaded memory files balloon over time and silently grow your token bill. These rules keep them lean.

### 1.1 Per-file ceiling
Every file under `memory/` MUST stay **≤ 120 lines**. At session start, scan their lengths. If any exceeds 120 lines, surface it once: *"⚠️ memory/<file>.md is <N> satır. Compaction önereyim mi?"*

### 1.2 Compaction procedure
On approval (or when a file hits 200 lines, run unconditionally):
1. Read the file.
2. Identify entries older than 60 days OR superseded by newer entries.
3. Move them verbatim to `memory/archive/YYYY-MM-DD_<filename>.md` (append, don't overwrite).
4. In the live file, replace those entries with a 1–3 line summary (e.g., *"Q1 2026 — eğitim post pattern oturdu, formül 'Soru → Cevap → Mini-örnek' ile devam"*).
5. Save atomically.

### 1.3 Stale rule detection
When a memory entry is being applied to a new task and its date is older than 90 days, ASK the user once: *"Bu kural [tarih]'den. Hâlâ geçerli mi?"* If they say no → remove or update.

### 1.4 Memory promotion
When the user says *"bu kuralı kalıcı yap"* / *"bundan sonra hep böyle"* / *"bunu hatırla"*:
- Write the rule to the **most-specific** memory file (e.g., color preference → `memory/images.md`).
- If the rule cuts across domains (e.g., a brand voice rule), ALSO write a one-line cross-reference to root `MEMORY.md` "Learnings" section.

### 1.5 What NOT to write to memory
- Per-asset feedback (goes to `memory/feedback-log.md` instead)
- Information already in `brand/*` (it's already in context — no duplication)
- Transient session state (use root `MEMORY.md` "Active Campaigns" / "Open Drafts" for that)

### 1.6 Pattern auto-detection (semi-autonomous promotion)
At the **first user interaction of each new session**, scan `memory/feedback-log.md` for patterns:

- Look for **3 or more entries** in the same domain (image / video / strategy / etc.) pointing to the same kind of preference (e.g., "rengi düşür" / "daha sade" / "warm tones" hepsi renk yoğunluğu hakkında).
- Look for **3 or more rejections** with the same root cause.

When such a pattern is found, surface it ONCE per session as a one-line proposal:

*"⚠️ Son [N] geri bildirimde [pattern özeti] göze çarpıyor. `memory/<file>.md`'ye kalıcı kural olarak ekleyeyim mi? (evet / hayır / 30 gün sorma)"*

- **evet** → promote per §1.4 (write to specific memory file + cross-reference to root `MEMORY.md` if cross-domain).
- **hayır** → ignore this run, will surface again next session if the pattern persists.
- **30 gün sorma** → write a one-line `<!-- snooze: pattern=<X>, until=<YYYY-MM-DD+30> -->` comment in the relevant memory file. Skip surfacing this pattern until that date.

**Hard rule**: never auto-promote without user approval. The system PROPOSES; the user DECIDES. This keeps the system observant without ever overstepping.

Surface at most ONE pattern per session — if multiple patterns fire, pick the strongest signal and queue the others for next session.

---

## 2. Brand Setup Flow

When the user says any close variant of: **"markamı kuralım"**, **"kurulum yap"**, **"sistemi kuralım"**, **"setup brand"**, **"brand discovery"** — AND `brand/identity.md` still contains `[FILL: ...]` placeholders — run discovery conversationally.

If brand files are already populated and the user says one of these phrases, ASK first: *"Marka zaten kurulu. Üzerine yazayım mı yoksa belirli bir bölümü mü güncelleyelim?"*

### Discovery — 4 blocks, ONE AT A TIME

**BLOCK A — Brand & Audience** → updates `brand/identity.md`
- Marka/ürün adı
- Tek cümlede ne yapıyor
- Hedef kitle (yaş, cinsiyet, coğrafya, çözmeye çalıştığı sorun)
- 3 USP
- 3 rakip
- Mevcut sosyal hesaplar
- Pazarlama dil(ler)i
- Off-limits konular

**BLOCK B — Visual Style** → updates `brand/visual-style.md`
- 2-3 ana renk (hex)
- Logo durumu (varsa `brand/assets/`'e koymasını iste)
- Görsel ton (minimalist / lüks / oyuncu / vintage / ...)
- Foto / illüstrasyon / 3D karması
- 1-3 referans hesap

**BLOCK C — Voice & Tone** → updates `brand/voice-tone.md`
- Marka kişiliği (3-5 sıfat)
- Samimi mi profesyonel mi
- "Sen" mi "siz" mi
- Asla kullanılmayacak kelimeler
- Hashtag stratejisi + emoji yoğunluğu

**BLOCK D — Scheduling Rules** → updates `config/scheduling-rules.md`
- Aktif platformlar
- Haftalık post hedefi (platform başına)
- Belirli gün-saat kuralları
- Blackout dönemler
- Caption uzunluğu tercihleri

### Flow rules
- ONE block at a time. Wait for user's answer, fill the file, summarize what was written, get one-word approval ("ok"/"devam"), then move to next block.
- Partial answers OK — leave remaining placeholders as `[FILL: ...]`.
- After Block D: update root `MEMORY.md` "Brand Snapshot" with a 5-line distillation, then ask *"Sistem hazır, ne üretmek istersin?"*.
- Conversational. Never paste a long pre-written prompt at the user.

---

## 3. Routing — Request → Workflow

When the user makes a request, identify the workflow from the table and follow §5.

| User intent | Workflow | Section |
|---|---|---|
| Brainstorm content / campaign / hook | Strategy & ideation | §5.1 |
| Create image / graphic / poster | Image production | §5.2 |
| Create or animate video | Video production | §5.3 |
| Create / reuse a recurring character | Character creation | §5.4 |
| Schedule approved content / view calendar / modify slot | Content calendar | §5.5 |
| Publish now / check post status | Publishing | §5.6 |
| Approve / reject drafts | Approval gates | §4 |

The workflow sections below contain everything you need. No external CLAUDE.md files to load.

---

## 4. Approval Workflow (NEVER violate)

Two paths depending on whether the user wants to schedule or publish immediately.

### Path A — Scheduled (default)
```
DRAFT → user approves → APPROVED → calendar slot + caption (user approves both) → SCHEDULED (submitted to Upload-Post with scheduled_date) → Upload-Post fires at post_at → PUBLISHED
```

### Path B — Publish Now ("şimdi paylaş")
```
DRAFT → user approves asset + caption + "now" → APPROVED (briefly) → submitted to Upload-Post WITHOUT scheduled_date → response → PUBLISHED
```
The `scheduled/` folder is skipped on Path B.

### Folder transitions in `library/`
| Trigger | From → To |
|---|---|
| Workflow produces output | (nothing) → `library/drafts/` |
| User approves ("beğendim", "onayladım") | `drafts/` → `approved/` |
| User says "takvimle" + approves the plan | `approved/` → `scheduled/` (after publisher submits successfully) |
| Upload-Post fires + status check confirms | `scheduled/` → `published/` |
| User says "şimdi paylaş" + approves | `drafts/` → `approved/` → `published/` |
| User rejects | `drafts/` → `rejected/` + reason logged in `memory/feedback-log.md` |

### NEVER
- Publish or schedule without explicit user approval of (a) the asset, (b) the caption, (c) the timing.
- Submit a scheduled post without going through the publishing workflow (§5.6).
- Skip the calendar step on Path A — `config/scheduling-rules.md` is law.

### Brand-empty caption warning
If `brand/voice-tone.md` still contains `[FILL: ...]` placeholders and the user requests caption / copy / script generation, prefix the draft with one line: *"⚠️ Marka henüz kurulu değil; generic ton kullanıyorum."* Do not silently produce off-brand copy.

### User-attached image references
A user can paste an image inline in chat. Those images are NOT directly accessible as bytes — they cannot be uploaded to Higgsfield as a reference automatically. If the user says "use this image as reference":
1. Ask them to save it to `brand/assets/<descriptive-name>.<ext>`.
2. Confirm path exists.
3. Read from disk and upload via Higgsfield's `media_upload` (returns UUID).
4. Pass UUID as `medias[].value`.

Don't silently fall back to a description-only render without telling the user.

---

## 5. Workflows

### 5.1 Strategy & Ideation

Triggered by: *"fikir ver"*, *"kampanya kuralım"*, *"X için brief yaz"*, *"hook öner"*.

**Always consider:** brand identity, voice-tone, `memory/strategy.md`, `memory/feedback-log.md`.

**Outputs**:

#### Idea list
When user asks "give me ideas for X":
- Generate 5–7 distinct angles/hooks (NOT 5 variants of one idea).
- For each: hook, why it works for THIS brand (cite USP from brand/identity.md), suggested format (image / carousel / reel / talking-head video).
- Numbered list, plain text. User picks which to develop.

#### Content brief
When user picks an idea, produce:
```
BRIEF — {idea title}
Goal: {awareness | consideration | conversion}
Platform(s): {list}
Format: {image / carousel / reel / long-form video}
Hook (first 2 sec / first line): {text}
Body: {bullets of what to show / say}
CTA: {text}
Caption draft: {if applicable}
Hashtags: {if applicable}
Asset needs:
  - {image with X}
  - {video with character Y reading script Z}
```

#### Campaign plan (multi-post)
For "2-week product launch" type asks:
- Phases (tease → reveal → social proof → urgency)
- Platforms per phase, asset needs per post
- Suggested posting cadence (does NOT replace `config/scheduling-rules.md`)
- Markdown table the user approves all at once.

**Strategy rules:**
- NEVER invent product features that aren't in `brand/identity.md`.
- NEVER make claims marked off-limits.
- If the user asks for something contradictory to the brand (e.g., "post a meme that mocks competitors"), flag it before producing.
- After producing, name the next workflow (image / video / character) — don't try to produce assets here.
- Append durable learnings to `memory/strategy.md` (subject to §1 ceiling).

---

### 5.2 Image Production

Triggered by: *"görsel üret"*, *"poster yap"*, *"ürün foto"*, *"grafik tasarla"*, *"infografik"*.

**Always consider:** `brand/visual-style.md`, `brand/identity.md`, `reference/prompt-templates.md` (IMAGE PROMPTS), `reference/platform-specs.md`, `memory/images.md`.

**Tool:** Higgsfield MCP `generate_image`.

**Model selection (no hardcoded default):**
- If `memory/images.md` records a user preference for this kind of work, use it without re-asking.
- If no preference, ask the user OR call `models_explore({action: "recommend", query: "<task>"})` and offer 1–3 candidates.
- When user states a new preference ("bundan sonra hep şu modeli kullan"), append to `memory/images.md`.

**Workflow:**
1. Match request to a prompt template (1–5 in `reference/prompt-templates.md`).
2. Fill placeholders from `brand/visual-style.md` + `brand/identity.md`.
3. Append the global **negative prompt** from `reference/prompt-templates.md`.
4. Generate **3 variants** unless user specifies otherwise.
5. Higgsfield returns asynchronously. Poll `job_display([job_id])` until `status: "completed"`. The result includes `results.rawUrl`.
6. Download to disk:
   ```bash
   FNAME="library/drafts/$(date +%Y-%m-%d_%H%M)_image_<purpose>_v<n>.png"
   curl -sSL "<results.rawUrl>" -o "$FNAME"
   [ -s "$FNAME" ] || { echo "Download failed"; exit 1; }
   ```
7. Show the user via Read tool (it renders the image inline). Append a one-line entry to root `MEMORY.md`'s "Open Drafts Awaiting Approval" section.
8. On approval: `mv` to `library/approved/`, append to `memory/feedback-log.md`. Clear the "Open Drafts" entry.
9. On rejection: `mv` to `library/rejected/`, log reason. Update `memory/images.md` with the failure pattern.

**Hard rules:**
- NEVER post directly. Output goes to `library/drafts/`. Period.
- NEVER use a color outside `brand/visual-style.md`'s palette.
- NEVER ignore the brand's forbidden visuals list.
- If a registered character is needed, hand off to §5.4 first to get the character ID.

**Self-check before showing the user:**
- [ ] Aspect ratio matches the target platform spec
- [ ] Colors inside palette
- [ ] No visible AI artifacts (warped hands, gibberish text, eye misalignment)
- [ ] Composition leaves room for any required text overlay
- [ ] Logo applied correctly (if applicable)

If any fails, regenerate. Don't waste user attention on broken outputs.

---

### 5.3 Video Production

Triggered by: *"video yap"*, *"bunu animasyona çevir"*, *"reel"*, *"demo video"*, *"kısa video"*.

**Always consider:** `brand/visual-style.md`, `brand/voice-tone.md` (for any spoken script), `reference/prompt-templates.md` (VIDEO PROMPTS), `reference/character-library.md` (if a character is involved), `reference/platform-specs.md`, `memory/videos.md`.

**Tool:** Higgsfield MCP `generate_video`.

**Model selection:** same pattern as §5.2 — read user preference from `memory/videos.md`, ask if absent, append on new preference.

**Workflow:**
1. Identify video type (template 6–9 in `reference/prompt-templates.md`).
2. **Character speaking**: confirm character exists in `reference/character-library.md`. If not, hand off to §5.4 first.
3. **Image-to-video**: confirm source image exists in `library/approved/` or `brand/assets/`. If user wants to animate a draft, push them to approve it first. Pass via `medias: [{role: "start_image", value: "<URL or UUID>"}]`. The exact role name varies per model — check via `models_explore({action: "get", model_id: "..."})` if uncertain.
4. **Cost-aware**: video costs ~10× image. ALWAYS confirm parameters with the user BEFORE generating. Default 1 variant unless user requests more.
5. `generate_video` is async. Poll `job_display([job_id])` until `status: "completed"` (typically 1–3 min for 480p, longer for higher res).
6. Download to `library/drafts/`:
   ```bash
   FNAME="library/drafts/$(date +%Y-%m-%d_%H%M)_video_<purpose>_v<n>.mp4"
   curl -sSL "<results.rawUrl>" -o "$FNAME"
   file "$FNAME" | grep -q "ISO Media" || { echo "Bad file"; exit 1; }
   ```
7. Show user filename + duration + size (mp4 doesn't render inline). Append to "Open Drafts" in root `MEMORY.md`.
8. Approval flow same as §5.2.

**Hard rules:**
- ALWAYS show estimated credit cost / scope before kicking off generation.
- NEVER generate more than 1 video variant without explicit user confirmation.
- For talking-head videos, the script must come FROM the user or from a §5.1 brief output. Don't write scripts unilaterally.
- If a video generation fails, report to the user; don't silently retry more than once.

**Self-check:**
- [ ] Duration matches platform spec
- [ ] Aspect ratio correct
- [ ] First 1–2 seconds have a visual hook (matters for Reels/TikTok)
- [ ] No frozen frames / glitches
- [ ] Character (if any) consistent with library reference

---

### 5.4 Character Creation

Triggered by: *"karakter oluştur"*, *"ürünü taşıyan kişi"*, *"konuşan host"*, *"sürekli aynı kişi olsun"*.

**Always consider:** `reference/character-library.md`, `brand/visual-style.md`, `brand/voice-tone.md` (if speaking), `memory/characters.md`.

**New character workflow:**
1. Ask the user (or read from request):
   - Demographic (age, gender, ethnicity, body type)
   - Style markers (hair, clothing, accessories, signature look)
   - Voice profile (only if speaking)
   - Use cases (talking head? product holder?)
2. Generate **4 reference shots** (front, 3/4, profile, full-body) for character anchoring.
3. Save references to `brand/assets/characters/<character-slug>/`.
4. Register Higgsfield character ID + details in `reference/character-library.md` per the format there.
5. Confirm with user. If they like it, the character is locked. If not, regenerate.

**Reusing a character:**
1. Look up character in `reference/character-library.md`.
2. Use the registered ID + variation prompt (different outfit, scene).
3. Save outputs to `library/drafts/`.

**Hard rules:**
- NEVER create a character without registering it in the library.
- NEVER generate a "fresh" version of an existing character — always reference the existing ID.
- If a registered character starts drifting visually (user notices inconsistency), flag it and propose a re-anchor (regenerate base references, update ID).
- Never use real public figures' likenesses. Never use copyrighted character designs.

---

### 5.5 Content Calendar

Triggered by: *"takvimle"*, *"haftaya planlayalım"*, *"bunu Salı'ya al"*, *"bu hafta neler planlı"*.

**Always read at workflow start:**
- `config/scheduling-rules.md` — user's posting cadence (THIS IS LAW)
- `calendar/current.json` — current local mirror
- `library/approved/` — pool of items ready to schedule
- `memory/calendar.md`

> Architecture: Upload-Post handles scheduling server-side. `calendar/current.json` is a LOCAL RECORD of what we submitted. Upload-Post's own scheduler fires posts at the right time. We don't run any external cron.

**State schema** (`calendar/current.json`):
```json
[
  {
    "id": "post-2026-05-12-1900-ig-01",
    "asset_path": "library/scheduled/...png",
    "platforms": ["instagram"],
    "media_type": "REELS",                   // optional, for IG video posts
    "post_at": "2026-05-12T19:00:00+03:00",
    "timezone": "Europe/Istanbul",
    "caption": "...",
    "hashtags": ["#brand"],
    "content_type": "product_post",
    "campaign": "may-launch",
    "status": "scheduled",
    "upload_post_job_id": "...",
    "upload_post_request_id": "...",
    "submitted_at": "...",
    "published_at": null,
    "platform_urls": {}
  }
]
```
Status values: `draft_plan`, `scheduled`, `pending`, `published`, `failed`, `cancelled`.

#### Workflow A — "Onaylananları takvimle"
1. List items in `library/approved/`.
2. For each, infer **content_type** (filename, prior brief, or ask the user briefly).
3. Read `config/scheduling-rules.md`. For each platform user wants to target:
   - Find next available slot for that content_type.
   - Respect blackout windows + frequency caps.
4. Build a **draft schedule WITHOUT writing to calendar yet**. Show user as a table:

   | Asset | Platform(s) | post_at | Caption preview |

5. Wait for user approval. Allow per-row edits.
6. **Captions**: if entries lack captions, generate them per `brand/voice-tone.md` + platform spec. Show user. Get approval. (Captions are a SEPARATE approval gate from times.)
7. On final approval of schedule + captions:
   - For each entry, hand to §5.6 publishing workflow for submission.
   - On successful submission, append to `calendar/current.json` with `status="scheduled"`.
   - Move asset from `library/approved/` to `library/scheduled/`.
   - Save `calendar/current.json` atomically (write to temp + rename).
   - Update `memory/calendar.md` with one-line entry per scheduling round.

#### Workflow B — "Bu postu Salı 12:00'a al"
1. Find entry by id or asset_path.
2. **Reality**: no programmatic Upload-Post modify endpoint. Tell user:
   *"Upload-Post tarafında programatik olarak bir scheduled job'ı değiştiremiyoruz. İki seçenek: (a) upload-post.com dashboard'una git, oradaki postu sil, ben yeni zamanla yeniden submit edeyim. (b) Bu postu cancel olarak işaretleyip yeni bir entry oluşturalım."*
3. Once user picks (a) or (b), execute that path.

#### Workflow C — "Bu hafta neler planlı?"
1. Read `calendar/current.json`, filter by date range (default: this week).
2. Optionally call publishing status check (§5.6 Workflow D) to refresh `status` from Upload-Post.
3. Output as a chronological table:
   | post_at | Platform | Asset | Status | Caption preview |
4. Highlight any `status="failed"` entries — user needs to address.

#### Workflow D — "Bu post'u takvimden çıkar"
1. Find entry by id.
2. If `status="scheduled"`: instruct user to cancel on upload-post.com dashboard.
3. Once they confirm, mark entry `status="cancelled"` in calendar.
4. Move asset back to `library/approved/` so user can decide what to do.

**Hard rules:**
- NEVER publish directly from this workflow. Always hand off to §5.6.
- NEVER schedule an asset that is not in `library/approved/`.
- NEVER write to `calendar/current.json` before user approves the schedule + captions table.
- Always preserve existing entries when appending — never overwrite.
- If `config/scheduling-rules.md` still has `[FILL: ...]` placeholders: refuse to schedule and tell user to fill it in (point to file path + suggest `markamı kuralım`).

---

### 5.6 Publishing (Upload-Post API)

Triggered by: *"şimdi paylaş"*, *"yayınla"*, *"ne yayınlandı"*, *"failed olanları göster"*. Also called by §5.5 Workflow A.

**Read at workflow start:**
- `config/upload-post-config.md` — API key + user identifier
- `calendar/current.json`
- `memory/publishing.md` — past run log + error log
- `brand/voice-tone.md` — only when generating captions

If `config/upload-post-config.md` API key or `UPLOAD_POST_USER` is missing or still a `[FILL: ...]` placeholder → **STOP** and tell the user.

**Tool:** Upload-Post REST API via `bash` + `curl` (no MCP).

- Base URL: `https://api.upload-post.com`
- Auth: header `Authorization: Apikey <API_KEY>` (the literal word "Apikey" then a space then the key)
- Endpoints:
  - `POST /api/upload_photos` — image-only posts; also IG/Threads mixed photo+video carousels
  - `POST /api/upload` — single video posts
  - `GET  /api/uploadposts/status?request_id=<id>` — async status polling

#### Endpoint vs asset routing
| Asset | Endpoint | File field |
|---|---|---|
| `.png .jpg .webp .gif` | `/api/upload_photos` | `photos[]=@<path>` |
| `.mp4 .mov .webm` | `/api/upload` | `video=@<path>` |
| Mixed images + video (IG/Threads only) | `/api/upload_photos` | `photos[]=@<path>` |

#### Real Response Shapes (verified, not just from docs)

**A) Synchronous success**
```
HTTP 200
{ "success": true,
  "results": { "instagram": { "success": true, "url": "...", "container_id": "..." } },
  "usage": { "count": 12, "limit": 100, "last_reset": "..." }   // OPTIONAL
}
```

**B) Sync→Async auto-fallback (call exceeded ~59 s)** — most common path
```
HTTP 200
{ "success": true,
  "message": "...handed off to upload worker...",
  "request_id": "<32-hex-chars>",
  "job_id":     "<32-hex-chars>",
  "total_platforms": 1
}
```
→ Poll `GET /api/uploadposts/status?request_id=<request_id>` until `status: "completed"`.

**C) Scheduled (with `scheduled_date`)**
```
HTTP 202
{ "success": true,
  "job_id": "<32-hex-chars>",
  "scheduled_date": "2026-05-10T22:00:00+03:00",
  "request_id": "<32-hex-chars>"
}
```
Save BOTH `job_id` and `request_id`. Status check works on `request_id`.

**D) Errors**: 400 (missing field / bad date / invalid platform), 401 (bad key), 403 (plan limit, e.g., TikTok on Free), 404 (user not found), 429 (rate limit), 500 (server).

#### Canonical response interpretation
```
if HTTP == 202 and success:true and scheduled_date    → SCHEDULED  (status="scheduled")
elif HTTP == 200 and success:true and results         → PUBLISHED  (status="published", capture URLs)
elif HTTP == 200 and success:true and request_id      → PENDING    (status="pending", poll status)
elif HTTP in (400, 401, 403, 404, 429, 500)           → FAILED     (status="failed", log full body)
else                                                   → unknown — log full body, ask user
```
The single most reliable signal is `success: true` in the JSON body, NOT the HTTP code alone.

#### `usage` field — soft signal only
May appear, may not. Don't condition workflow on it. If it shows up and `count >= limit * 0.8` → warn user once per session. On HTTP 429 → stop submitting more posts in this session, log unsubmitted entries to `memory/publishing.md`.

#### Workflow A — Submit a Scheduled Post (called by §5.5)
For each entry:
1. Read: `asset_path`, `platforms[]`, `post_at`, `caption`, plus per-platform extras.
2. Pick endpoint by extension.
3. Generate Idempotency-Key (`uuidgen`).
4. Run **pre-flight self-check** (below). If anything fails → don't submit, surface the issue.
5. Submit (image example):
   ```bash
   CAPTION_FILE=$(mktemp)
   cat > "$CAPTION_FILE" << 'CAPTION_EOF'
   <the caption with emoji, Türkçe characters, line breaks — anything>
   CAPTION_EOF

   curl -s -w "\nHTTP_STATUS:%{http_code}\n" \
     -H "Authorization: Apikey ${UPLOAD_POST_API_KEY}" \
     -H "Idempotency-Key: $(uuidgen)" \
     -F "user=${UPLOAD_POST_USER}" \
     -F "platform[]=instagram" \
     -F "photos[]=@library/scheduled/<file>.png" \
     -F "title=<$CAPTION_FILE" \
     -F "scheduled_date=2026-05-12T19:00:00+03:00" \
     -F "timezone=Europe/Istanbul" \
     https://api.upload-post.com/api/upload_photos
   rm "$CAPTION_FILE"
   ```
6. Parse using canonical logic above.
7. Update `calendar/current.json` (save `upload_post_job_id`, `upload_post_request_id`, `submitted_at`, `status`).
8. Move asset: `library/approved/` → `library/scheduled/`.
9. Save `calendar/current.json` atomically.
10. Run entries sequentially (not parallel) to keep idempotency simple.

#### Workflow B — Cross-Post (one asset → multiple platforms)
```bash
curl -s -H "Authorization: Apikey ${UPLOAD_POST_API_KEY}" \
  -H "Idempotency-Key: $(uuidgen)" \
  -F "user=${UPLOAD_POST_USER}" \
  -F "platform[]=instagram" -F "platform[]=facebook" -F "platform[]=x" \
  -F "photos[]=@<path>" \
  -F "title=<$CAPTION_FILE" \
  -F "scheduled_date=<iso>" \
  https://api.upload-post.com/api/upload_photos
```
Per-platform caption overrides: `-F "instagram_title=..."`, `-F "x_title=..."`, `-F "linkedin_title=..."`, etc.

#### Workflow C — Publish Now (no scheduled_date)
1. Find entry in `calendar/current.json`. If not in calendar yet, ask for asset + caption + platforms.
2. Confirm one line: *"X postunu Y platformlarına şimdi yayınlayacağım, ok?"*
3. On approval: same as Workflow A but **omit `scheduled_date` and `timezone`**.
4. **Folder path**: `library/drafts/` → `library/approved/` (briefly) → `library/published/YYYY/MM/`. Skip `library/scheduled/`.
5. Async fallback (response shape B) is normal — poll status, then move to published and save platform URLs.
6. On 200 + results: capture `platform_post_id` and `post_url` from `results[<platform>]`.

#### Workflow D — Status Check
When user asks "şu post yayınlandı mı" / "bekleyenler ne durumda":
1. For each entry with `status="scheduled"` or `"pending"` and a `request_id`:
   ```bash
   curl -s -H "Authorization: Apikey ${UPLOAD_POST_API_KEY}" \
     "https://api.upload-post.com/api/uploadposts/status?request_id=${REQUEST_ID}"
   ```
2. Update `calendar/current.json`:
   - `status: "completed"` → move asset `scheduled/` → `published/YYYY/MM/`, save `platform_urls{}`, save `published_at`.
   - `status: "failed"` → mark `status="failed"`, log full body to `memory/publishing.md`.
   - `pending|in_progress|scheduled` → leave as is.
3. Show user a short table.

> Cheap operation. Run once on first user interaction of the day.

#### Workflow E — Cancel / Modify
Upload-Post does NOT expose a programmatic cancel/modify endpoint.
- **Cancel**: tell user to delete on upload-post.com dashboard. Once they confirm, mark `status="cancelled"`, move asset back to `library/approved/`.
- **Modify**: same — they delete on dashboard, you re-submit a new entry.

#### Per-platform required fields cheat sheet
| Platform | Required for any post | Notes |
|---|---|---|
| Instagram (photo) | — | `media_type` defaults fine |
| **Instagram (video)** | `media_type=REELS` (default) **or** `STORIES` | `share_to_feed=true` to also put Reel in feed; optional `cover_url`, `cover_image`, `thumb_offset` |
| TikTok | (paid plan) | `tiktok_title` ≤ 90 chars (photo) / 2200 (video) |
| YouTube | `title`, video file, `categoryId` (default `22`) | `description` defaults to title; `privacyStatus` default `public`; thumbnails NOT supported on Shorts |
| Facebook | `facebook_page_id` (auto if 1 page) | `facebook_media_type=REELS|STORIES|VIDEO` |
| LinkedIn | — | `target_linkedin_page_id` for org page; `visibility=PUBLIC` default |
| X | — | `x_long_text_as_post=true` to bypass auto-thread split |
| Threads | — | optional `threads_topic_tag` (1-50 chars, no `.` or `&`) |
| Pinterest | `pinterest_board_id` | `pinterest_alt_text` recommended |
| Bluesky | — | 100 MB max video, ≤180 s |
| Reddit | `subreddit` (no `r/` prefix), `title` | check subreddit rules first |
| GBP | `gbp_location_id` (auto if 1 loc) | Event/Offer types have additional fields |

#### Useful optional parameters
| Param | Effect |
|---|---|
| `async_upload=true` | Force async path immediately, bypass 59s sync attempt |
| `add_to_queue=true` | Queue server-side without specifying date (cannot combine with `scheduled_date`) |
| `first_comment` | Auto-post a first comment after the post (most platforms) |

#### Caption generation (when entry lacks one)
1. Read `brand/voice-tone.md` for tone, hashtag policy, emoji style.
2. Read `reference/platform-specs.md` for platform's caption length + hashtag count.
3. If `brand/voice-tone.md` still has `[FILL: ...]` — apply the brand-empty warning (§4).
4. Show user, get approval, THEN submit.

#### Hard rules
- NEVER submit without API key in `config/upload-post-config.md`.
- NEVER submit `scheduled_date` in the past — pre-validate.
- NEVER retry a failed call without bumping the `Idempotency-Key`, unless we want true idempotency.
- ALWAYS save BOTH `job_id` and `request_id`.
- NEVER auto-poll continuously — status checks are user-triggered or once per session.

#### Pre-Submit self-check
- [ ] `UPLOAD_POST_API_KEY` and `UPLOAD_POST_USER` filled (not placeholder)
- [ ] Asset file exists and non-zero
- [ ] Asset extension matches endpoint
- [ ] Per-platform required fields present (cheat sheet)
- [ ] If video → IG: `media_type=REELS` or `STORIES`
- [ ] Caption length within platform limit
- [ ] If `scheduled_date` set: ISO-8601, future, ≤ 365 days, `timezone` provided
- [ ] `Idempotency-Key` is fresh
- [ ] User explicitly approved (asset + caption + schedule)

#### Caption escaping
Captions contain quotes, newlines, `$`, backticks, emoji, Türkçe characters. **Always use the file approach** — bash heredoc + `-F "title=<$file"`. The `<` syntax tells curl to read the field value from the file. No escaping required.

#### Logging
- Each successful submit → append a line to `memory/publishing.md` Run Log.
- Each failed submit → append the full response body to `memory/publishing.md` Error Log.

---

## 6. Lifecycle & Archival

These rules keep the project healthy over months of use.

### 6.1 Library archival (monthly trigger)
On the **first user interaction of a new month**, ask once:
*"Geçen ayın yayınlanan asset'lerini library/published/<YYYY>/<MM>/'a taşıyayım mı? Calendar archive'a snapshot çıkarayım mı?"*

On approval:
1. Create `library/published/YYYY/MM/` if missing.
2. Move all files in `library/published/` (top level) with `published_at` in the previous month into that subfolder.
3. From `calendar/current.json`, extract entries with `status="published"` AND `published_at` in the previous month → write to `calendar/archive/YYYY-MM.json`. Remove from `current.json`.
4. Save `current.json` atomically.

### 6.2 Memory compaction (per-file, see §1)
Whenever a file under `memory/` exceeds 120 lines, surface a one-line warning. On user approval, run §1.2 procedure.

### 6.3 Rejected cleanup
On user request only ("rejected klasörünü temizle"):
- Move all `library/rejected/*` to a single archive: `library/rejected/archive_YYYY-MM-DD.tar.gz` and remove originals.
- This is an explicit user action — never automatic.

### 6.4 Stale rule detection (per §1.3)
Before applying any memory entry whose date stamp is > 90 days old, ask the user once whether it's still valid.

---

## 7. Tool Defaults

- **Image / video generation**: Higgsfield MCP (`generate_image`, `generate_video`, `show_characters`, `media_upload`, `models_explore`, `job_display`, `balance`).
  - No hardcoded model defaults. User chooses (or system asks). Preferences live in `memory/images.md` / `memory/videos.md`.
  - For >5 assets in a session, run `balance` first and warn if low.
- **Publishing**: Upload-Post REST API via `bash` + `curl`. Endpoints + behavior fully documented in §5.6.
- **Scheduling**: handled by Upload-Post natively via `scheduled_date`. No external cron / scheduled task needed.

---

## 8. Token & Cost Discipline

- This file stays under ~700 lines. Detail goes into reference/ or stays out.
- Memory files capped at 120 lines (see §1).
- Default model for the agent: Sonnet. Use Opus only for: multi-step campaign planning, complex character/script work with 3+ dependent steps, or when the user explicitly asks for "deep" / "detailed" reasoning.
- **Three cost categories the user pays:**
  1. **Claude Code** — Claude Pro/Max subscription OR Anthropic API (token-based).
  2. **Higgsfield** — credits per generation. Image cheap, video ~10× more.
  3. **Upload-Post** — monthly post quota. Free plan limits TikTok and total volume.

---

## 9. Language Rules

- **System files** (this CLAUDE.md, all files under `memory/`, `reference/`): English. AI parses English more reliably.
- **User-facing files** (README.md, brand templates' placeholder text, scheduling-rules examples): Turkish.
- **Chat responses to the user**: Turkish.
- **Captions / post copy generated for social media**: match the brand's audience language (defined in `brand/voice-tone.md`).

---

## 10. Adding New Capabilities

When the user wants a new domain (e.g., "podcast pipeline", "newsletter pipeline"):

1. Add a section to this CLAUDE.md under §5 (e.g., `### 5.7 Newsletter Production`).
2. Create a new memory file: `memory/<domain>.md` (start with the standard template — see `memory/strategy.md` for shape).
3. Add an `@-import` line in §0 for the new memory file.
4. Add a row to the §3 routing table.
5. Ask the user a few questions to populate the new section's rules (what does it do, when triggered, what files does it read, what tools does it use).

This keeps the system extensible without recreating the old multi-folder structure.

---

## 11. Memory System Behavior

At the start of EVERY session:
1. The `@-imports` in §0 auto-load brand, reference, and memory.
2. You read THIS file (you're doing it now).
3. You read root `MEMORY.md` (active state).
4. You respond to the user.

When the user says *"remember this"* / *"bunu hatırla"* / *"kaydet"* / *"bu kuralı ekle"*:
- Promote per §1.4 (most-specific memory file + cross-reference if cross-domain).

When the user gives feedback on output quality (likes/dislikes a draft, corrects a tone, rejects an image):
- Append a structured entry to `memory/feedback-log.md`:
  ```
  ### YYYY-MM-DD — [asset reference]
  - **Workflow**: image | video | strategy | ...
  - **Verdict**: ✅ approved | ❌ rejected | ⚠ approved-with-edit
  - **What worked / didn't**: ...
  - **Rule learned (if durable)**: ... (also promoted to relevant memory file)
  ```

---

## 12. First-Run Detection

If at session start, `brand/identity.md` still contains `[FILL: ...]` placeholders:
- Greet the user briefly: *"Selam — sistem henüz kurulu değil. Markanı kuralım mı? `markamı kuralım` yaz, başlayalım."*
- Don't pretend to be ready for production work.

If `config/upload-post-config.md` is still placeholder but brand IS configured:
- Note it once: *"Bu arada Upload-Post API anahtarın hâlâ boş — paylaşım için config/upload-post-config.md'yi doldur. Üretim ve takvime hazırız."*
- Don't block other work.
