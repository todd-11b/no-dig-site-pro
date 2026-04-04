

## Conversion Funnel Restructure

### Current Flow
```text
"Get Your Free Quote" → /contact (or /book directly)
```

### Proposed Flow
```text
"Get Your Free Quote" → /estimate (Calculator)
   → "Get My Exact Quote" → /book (Schedule + Lead Form)
      → /thank-you
```

### Why This Works
- **Low commitment first**: The calculator gives instant value with zero personal info required. Users engage before they commit.
- **Anchoring**: Once they see a price range, they're motivated to get the exact number — which requires booking a measurement.
- **Data carries forward**: The calculator selections (fence type, length, gates, demo) already pass via URL params to /book, so the sales team sees what the prospect configured.

### Changes Required

**1. Update all "Get Your Free Quote" CTAs to point to /estimate**
- `FloatingQuoteButton.tsx` — change `to="/contact"` → `to="/estimate"`
- `MobileStickyBar.tsx` — change `to="/contact"` → `to="/estimate"`
- `FinalCTASection.tsx` — change `to="/contact"` → `to="/estimate"`
- `HeroSection.tsx` — update primary CTA link (if it points to /contact)

**2. Keep /estimate's "Get My Free Quote" button pointing to /book** (already does this)

**3. Keep /contact as a separate page** for users who want to call or send a message directly — don't remove it, just stop using it as the primary CTA destination.

### What Stays the Same
- The calculator logic, pricing formula, and UI — no changes
- The /book page scheduling + lead form — no changes
- The /thank-you page — no changes
- Navigation menu — no changes

### Summary
This is essentially just re-pointing 3-4 button links from `/contact` to `/estimate`. Small change, big impact on funnel quality.

