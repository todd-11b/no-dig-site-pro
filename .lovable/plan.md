

## Plan: Address 4 Items

### 1. Hydraulic → Pneumatic
Replace all "hydraulic" references with "pneumatic" across 3 files:
- `HowItWorksSection.tsx` — step title "Hydraulic Drive" → "Pneumatic Drive", description updated
- `FAQSection.tsx` — "hydraulic driver" → "pneumatic driver"
- `InstallComparisonSection.tsx` — "Hydraulic post driver" → "Pneumatic post driver"

### 2. Merge FAQ price objections
Remove the "The price is higher than I expected" FAQ. Rework the "Another company is cheaper" FAQ into a single entry like:

> **Q:** "How does your pricing compare to other fence companies?"
> **A:** Many companies use cheaper methods — digging traditional holes with heavy equipment that tears up yards. Our No-Dig method and Clean Site Guarantee eliminate the mess, yard repairs, and long-term post failure. [Download our guide: How to Evaluate Your Fence Contractor →](#)

The link would point to a PDF or a new `/evaluate` page (your call — I can create either).

### 3. Calculator slider sensitivity
The current range is 50–10,000 with step=50 — that's 199 stops on a narrow slider, making small adjustments nearly impossible. Two options:

**Option A (recommended):** Cap the slider at 500 ft (covers 95%+ of residential jobs) and add a text input field next to it for anyone who needs to type a larger number up to 10,000.

**Option B:** Keep 50–10,000 but use a logarithmic scale so the first half of the slider covers 50–500 and the second half covers 500–10,000.

### 4. SteelCore™ vs. actual post method
Yes — "SteelCore™" is a brand term I created for marketing. Your actual method (driving 2⅜" Schedule 40 pipe, 8ft length, 4ft in ground) is different from the PostMaster+® product currently referenced throughout the site. This matters because:

- The PostMasterSection references Master Halco specs, warranties, and ASTM ratings that don't apply to round pipe
- Engineering claims (344 MPa, ASCE 7-10 wind ratings) are specific to PostMaster+® posts

**Recommendation:** Rewrite the PostMaster section and related specs to accurately describe your driven pipe method. Keep "SteelCore™" as the brand wrapper if you like it, but update the underlying specs to match Schedule 40 pipe properties (yield strength ~250 MPa for A53 Grade B, wall thickness 0.154", OD 2.375"). Remove Master Halco warranty references unless you'll also offer PostMaster+® as an option.

I'd suggest making this a decision point — do you want to:
- **A)** Drop PostMaster+® entirely and rebrand around your pipe method
- **B)** Offer both (PostMaster+® for premium, driven pipe as standard) with separate spec sections
- **C)** Keep the SteelCore™ branding but rewrite all specs to match your actual pipe

### Summary of file changes
- 3 files: hydraulic → pneumatic
- `FAQSection.tsx`: merge 2 price FAQs into 1 with contractor guide link
- `EstimateCalculator.tsx`: cap slider at 500 + add text input for larger values
- `PostMasterSection.tsx`, `ComparisonTableSection.tsx`, `About.tsx`, `Footer.tsx`: pending your decision on point 5

