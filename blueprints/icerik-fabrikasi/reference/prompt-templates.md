# Prompt Templates — Higgsfield

> Skeleton prompts the studios use as a starting point.
> Always merge with `brand/visual-style.md` (colors, mood, fonts) before sending to Higgsfield.
> Aspect/resolution comes from `reference/platform-specs.md` for the target platform.
> Model is picked by the user (or recalled from the studio's `MEMORY.md`). If unclear, ask or call `models_explore`.

## Reference Image — When user pastes an image inline

User-attached inline images **cannot** be sent to Higgsfield as a reference (no byte access). Workflow when user says "use this image":

1. Ask user to save the file to `brand/assets/<descriptive-name>.<ext>`.
2. Confirm the path exists (`ls brand/assets/`).
3. Upload via `media_upload` → returns a UUID.
4. Pass `medias: [{ role: "<role>", value: "<UUID>" }]` (`role` varies per model — check via `models_explore({action: "get", model_id: "..."})`).

If user refuses or skips that step, render from a **detailed text description** of the reference, and tell the user explicitly: "Bunu reference olarak yükleyemediğim için detaylı tarifle yeniden ürettim — birebir tutmayabilir."

---

## Naming Convention for Generated Files

`YYYY-MM-DD_HHMM_<type>_<purpose>_<variant>.<ext>`

Example: `2026-05-09_1432_image_product-hero_v1.png`

Each draft saved to `library/drafts/` MUST follow this convention.

---

## IMAGE PROMPTS

### 1. Product Hero Shot (single product, no character)
```
Professional product photography of {PRODUCT_DESCRIPTION}.
Setting: {SURFACE/BACKGROUND from visual-style mood}.
Lighting: {LIGHTING from visual-style — e.g., soft daylight from left, gentle shadows}.
Style: {AESTHETIC TAGS — e.g., minimalist, editorial, premium}.
Color palette: {PRIMARY_COLORS hex from visual-style}.
Composition: centered, generous negative space top-third for caption overlay.
Aspect: {ASPECT from platform-specs}.
Avoid: {FORBIDDEN_VISUALS from visual-style}.
```

### 2. Lifestyle Product Shot (product in context, no human)
```
{PRODUCT} integrated naturally into a {ENVIRONMENT — bedroom / kitchen / desk / outdoor}.
Mood: {MOOD TAGS}.
Lighting: {LIGHTING}.
Color story: {PALETTE}.
Style: {AESTHETIC} photography, {LENS — e.g., 50mm shallow depth of field}.
Aspect: {ASPECT}.
```

### 3. Character + Product
```
{CHARACTER_REFERENCE — use Higgsfield character ID from character-library.md}
holding/using {PRODUCT}.
Pose: {POSE_DESCRIPTION}.
Setting: {ENVIRONMENT consistent with brand mood}.
Expression: {EXPRESSION matching voice-tone}.
Camera: {SHOT TYPE — close-up / medium / wide}.
Lighting: {LIGHTING}.
Color palette: {PALETTE}.
Aspect: {ASPECT}.
Style: {AESTHETIC}.
```

### 4. Graphic Design / Typography Post
```
Editorial-style graphic poster.
Headline: "{HEADLINE TEXT}"
Subhead: "{OPTIONAL SUBHEAD}"
Background: {SOLID/GRADIENT/TEXTURE from palette}.
Typography: {DISPLAY_FONT for headline}, {BODY_FONT for subhead}.
Layout: {LAYOUT — left-aligned / centered / asymmetric}.
Color contrast: high readability, brand palette only.
Logo placement: {bottom-right / top-left / centered footer / none}.
Aspect: {ASPECT}.
Style: {AESTHETIC}.
```

### 5. Carousel (multi-slide)
```
[For each slide, run an image prompt and ensure visual consistency across all slides.]
Slide 1: hook / cover (text-heavy, visual hook).
Slide 2-N: one idea per slide.
Final slide: CTA.
Maintain identical color grading, font system, layout grid across all slides.
```

---

## VIDEO PROMPTS

### 6. Image-to-Video (animate a still)
```
Source: {IMAGE_REFERENCE — path or Higgsfield asset ID}.
Motion: {MOTION DESCRIPTION — e.g., gentle parallax, slow product rotation, particles drifting}.
Camera: {CAMERA MOVE — push-in / orbit / static / pan}.
Duration: {SECONDS}.
Audio: none (audio added in post-processing if needed).
Aspect: {ASPECT}.
```

### 7. Character Speaking (lip-sync to script)
```
{CHARACTER_REFERENCE} speaking the following script:
"{SCRIPT_TEXT}"
Voice direction: {TONE — confident / warm / playful / informative}.
Setting: {BACKGROUND consistent with brand}.
Camera: {SHOT — talking head close-up / medium / over-the-shoulder}.
Wardrobe: {OUTFIT consistent with established character profile}.
Duration: {SECONDS — usually 15–60 for shorts/reels}.
Aspect: 9:16 (default for shorts).
```

### 8. Product Demo / Explainer Video
```
A {DURATION}-second product demonstration of {PRODUCT}.
Sequence:
  0–3s: hook shot ({HOOK})
  3–{X}s: {KEY_BENEFIT_1 visual}
  {X}–{Y}s: {KEY_BENEFIT_2 visual}
  {Y}–end: CTA shot
Camera moves: {SMOOTH / DYNAMIC / STATIC}.
Color grade: {GRADE from visual-style}.
On-screen text: {KEY PHRASES with timing}.
Aspect: {ASPECT}.
```

### 9. B-Roll / Mood Video (no characters, no product)
```
Cinematic b-roll of {SUBJECT — e.g., morning coffee ritual, urban texture, nature detail}.
Pace: {SLOW_MEDITATIVE / QUICK_CUTS}.
Color grade: {GRADE}.
Lighting: {LIGHT}.
Sound: silent (added in post).
Duration: {SECONDS}.
Aspect: {ASPECT}.
```

---

## NEGATIVE PROMPTS (added to ALL Higgsfield calls by default)

```
no AI artifacts, no malformed hands, no warped faces, no text gibberish,
no watermarks, no stock-photo cliché, no over-saturated colors,
no off-brand colors (anything outside visual-style palette).
```

> The image and video production workflows automatically append this negative prompt unless the user explicitly waives it.

---

## How the Workflows Use These

1. Identify the prompt category (1–9 above).
2. Fill in `{PLACEHOLDERS}` from `brand/visual-style.md`, `brand/voice-tone.md`, target platform spec.
3. Generate **2–3 variants** per request unless user asks for a specific count.
4. Save all variants to `library/drafts/` using the naming convention.
5. Show the user thumbnails / paths and wait for approval before proceeding.
