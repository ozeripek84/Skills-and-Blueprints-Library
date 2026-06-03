# Feedback Log

Append-only log of every piece of feedback the user gives on generated assets.
The system uses this file to learn brand-specific patterns over time.
Auto-loaded. Capped at ~120 lines (compaction moves old entries to memory/archive/).

---

## Format

```
### YYYY-MM-DD — [asset reference]
- **Workflow**: image | video | strategy | character | calendar | publishing
- **Verdict**: ✅ approved | ❌ rejected | ⚠ approved-with-edit
- **What worked**: <observations>
- **What didn't**: <observations>
- **Rule learned (if durable)**: <rule, also promoted to relevant memory file>
```

---

## Entries

*(empty — fills with use)*
