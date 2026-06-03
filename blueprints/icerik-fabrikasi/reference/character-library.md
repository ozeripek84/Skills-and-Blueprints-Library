# Character Library

> Catalog of recurring characters created via Higgsfield (`generate_image` + character system).
> Auto-loaded every session. Whenever a character needs to appear consistently across multiple posts/videos, it must be registered here.
> The image and video production workflows reference characters by their Higgsfield ID (not by re-generating from scratch).

---

## How to Add a Character

1. The character creation workflow (CLAUDE.md §5.4) generates the base character with Higgsfield (multiple angle reference shots).
2. Higgsfield assigns a character ID. **Copy that ID here.**
3. Save the reference images to `brand/assets/characters/<character-slug>/`.
4. Fill in the entry below.

---

## Active Characters

<!-- Format:

### {Character Slug — e.g., "rana-lifestyle"}
- **Higgsfield character ID**: `hgs_char_xxx`
- **Created**: YYYY-MM-DD
- **Demographic**: age, gender, ethnicity, body type
- **Style markers**: hair, clothing palette, accessories, signature look
- **Use cases**: "ürün taşıyan kadın posttaki ana figür", "talking head video host", etc.
- **Voice profile (if speaking)**: warm Turkish-accented, mid-tempo, light laugh
- **Reference shots**: brand/assets/characters/rana-lifestyle/ref-01.png, ref-02.png, ...
- **Brand alignment notes**: any rules — e.g., "always wears earth tones, never logos of other brands"

-->

*(no characters created yet)*

---

## Retired Characters
<!-- If a character is deprecated (brand pivot, voice change), move it here instead of deleting.
The library keeps the record so old posts referencing the character still resolve. -->

*(none)*

---

## Rules

- **Never** generate a "new" version of an existing character on the fly. Always use the registered ID.
- If the user asks for a small variation (different outfit, different setting), feed the existing character ID + variation prompt to Higgsfield rather than starting fresh.
- If a character drifts visually across generations, flag it to the user and propose a re-anchor (regenerate base reference, update ID).
