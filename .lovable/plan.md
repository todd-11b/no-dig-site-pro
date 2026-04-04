

## Extend Calculator Range to 10,000 Linear Feet

Single change in `src/components/sections/EstimateCalculator.tsx`:

Update the range slider's `max` attribute from `500` to `10000` and adjust the `step` to a reasonable increment (e.g., 50) so the slider remains usable at that scale. The default starting value (150) stays the same.

**File**: `src/components/sections/EstimateCalculator.tsx`
- Line with `max="500"` → `max="10000"`
- Line with `step="10"` → `step="50"` (prevents 1000 tiny increments)

No other files need changes — the pricing formulas already work with any length value.

