import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fenceTypes = [
  "6' Treated Pine Privacy",
  "6' Cedar Privacy",
  "6' Cedar Horizontal",
  "6' Vinyl Privacy",
  "4' Vinyl Semi-Privacy",
  "4' Black Aluminum 3-Rail",
  "6' Black Aluminum Flat Top",
  "4' Galvanized Chain Link",
  "4' Black Chain Link",
];

const materialCostPerLF: Record<string, number> = {
  "6' Treated Pine Privacy": 11.25,
  "6' Cedar Privacy": 19.63,
  "6' Cedar Horizontal": 16.25,
  "6' Vinyl Privacy": 18.75,
  "4' Vinyl Semi-Privacy": 14.50,
  "4' Black Aluminum 3-Rail": 19.50,
  "6' Black Aluminum Flat Top": 25.88,
  "4' Galvanized Chain Link": 10.00,
  "4' Black Chain Link": 12.00,
};

const gateOptions = ["None", "1 Walk Gate", "1 Double Gate", "1 Walk + 1 Double"];

const gateMatCost: Record<string, number> = {
  "None": 0,
  "1 Walk Gate": 170,
  "1 Double Gate": 340,
  "1 Walk + 1 Double": 510,
};

function roundTo50(n: number) {
  return Math.round(n / 50) * 50;
}

function SelectDropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-xs md:text-sm font-semibold text-foreground block mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-11 md:h-12 pl-3 md:pl-4 pr-9 md:pr-10 rounded-xl border border-border bg-background text-foreground text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      </div>
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button onClick={onChange} className="flex items-center gap-3 group cursor-pointer">
      <div
        className={`relative w-11 md:w-12 h-6 md:h-7 rounded-full transition-colors duration-200 ${
          checked ? "bg-accent" : "bg-border"
        }`}
      >
        <div
          className={`absolute top-0.5 md:top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
            checked ? "translate-x-[1.25rem] md:translate-x-[1.3rem]" : "translate-x-0.5 md:translate-x-1"
          }`}
        />
      </div>
      <span className="text-xs md:text-sm text-foreground">{label}</span>
    </button>
  );
}

export default function EstimateCalculator() {
  const [length, setLength] = useState(150);
  const [fenceType, setFenceType] = useState("6' Treated Pine Privacy");
  const [gate, setGate] = useState("None");
  const [demoHaulOff, setDemoHaulOff] = useState(false);

  const matPerLF = materialCostPerLF[fenceType] || 11.25;
  const totalFenceMat = matPerLF * length;
  const totalGateMat = gateMatCost[gate] || 0;
  const demoMat = demoHaulOff ? 2.80 * length : 0;
  const totalMat = totalFenceMat + totalGateMat + demoMat;

  const lowEstimate = roundTo50(totalMat * 2.5);
  const highEstimate = roundTo50(totalMat * 3.2);

  return (
    <section id="estimate" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14 lg:mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3 md:mb-4">
            Free & Instant
          </p>
          <h2 className="text-section-heading text-foreground">
            Get your fence estimate.
          </h2>
          <p className="text-muted-foreground mt-3 md:mt-4 text-sm md:text-base lg:text-lg max-w-lg mx-auto">
            Instant ballpark estimate. Exact quote confirmed after on-site measurement.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            No spam. No obligation. Just a number.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16"
        >
          {/* Controls */}
          <div className="flex-1 space-y-6 md:space-y-7">
            {/* Fence Length */}
            <div>
              <label className="text-xs md:text-sm font-semibold text-foreground block mb-3 md:mb-4">
                Fence Length (linear feet)
              </label>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-accent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <p className="text-center text-2xl md:text-3xl font-bold text-foreground tabular-nums mt-3 md:mt-4 tracking-tight">
                {length} ft
              </p>
            </div>

            {/* Fence Type & Gates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <SelectDropdown
                label="Fence Type"
                value={fenceType}
                options={fenceTypes}
                onChange={setFenceType}
              />
              <SelectDropdown
                label="Gates"
                value={gate}
                options={gateOptions}
                onChange={setGate}
              />
            </div>

            {/* Toggles */}
            <div className="flex flex-col gap-4 pt-1">
              <Toggle
                label="Demo & haul-off of old fence"
                checked={demoHaulOff}
                onChange={() => setDemoHaulOff(!demoHaulOff)}
              />
            </div>
          </div>

          {/* Price card */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-7 lg:p-8 lg:sticky lg:top-24 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2 md:mb-3">
                Estimated Price Range
              </p>
              <p className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-accent tabular-nums tracking-tight leading-tight">
                ${lowEstimate.toLocaleString()}&thinsp;–&thinsp;${highEstimate.toLocaleString()}
              </p>
              <p className="text-[11px] md:text-xs text-muted-foreground mt-2 md:mt-3 leading-relaxed">
                *Approximate. Final pricing based on on-site measurement.
              </p>
              <p className="text-xs md:text-sm font-semibold text-accent mt-4 md:mt-5">
                Flexible payment options available
              </p>

              <hr className="border-border my-5 md:my-6" />

              <p className="font-bold text-foreground text-base md:text-lg mb-4 md:mb-5">Get Your Exact Quote</p>
              <a
                href="tel:8166232363"
                className="flex items-center justify-center bg-accent text-accent-foreground w-full py-3.5 md:py-4 rounded-full text-sm font-bold tracking-wide hover:brightness-110 transition-all shadow-md"
              >
                Call Now — (816) 623-2363
              </a>
              <p className="text-[11px] md:text-xs text-muted-foreground text-center mt-2.5 md:mt-3">
                We'll schedule your free on-site measurement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
