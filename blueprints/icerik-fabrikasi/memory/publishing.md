# Publishing Memory

Run log + error log for Upload-Post submissions. Auto-loaded. Capped at ~120 lines.

---

## Run log
<!-- One line per successful submit. Trimmed by compaction.
Format: YYYY-MM-DD HH:MM | entry_id | platform(s) | scheduled|now | job_id -->
*(empty)*

---

## Error log
<!-- One entry per failed submit. Keep verbatim until user clears.
Format:
### YYYY-MM-DD HH:MM | entry_id | platform | http_status
<error_excerpt or full body if short>
-->
*(empty)*

---

## API quota observations
<!-- When `usage` field appears in responses, log here so user can spot patterns.
Format: YYYY-MM-DD — count/limit (last_reset). -->
*(empty)*
