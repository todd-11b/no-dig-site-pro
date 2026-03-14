import { useState } from "react";
import { motion } from "framer-motion";

const materials = ["Wood", "Vinyl", "Aluminum", "Chain Link"];
const heights = ["4 ft", "6 ft", "8 ft"];
const gateOptions = ["0", "1", "2", "3+"];

const priceMap: Record<string, { min: number; max: number }> = {
  "Wood-4 ft": { min: 25, max: 35 },
  "Wood-6 ft": { min: 30, max: 45 },
  "Wood-8 ft": { min: 40, max: 55 },
  "Vinyl-4 ft": { min: 30, max: 45 },
  "Vinyl-6 ft": { min: 35, max: 55 },
  "Vinyl-8 ft": { min: 45, max: 65 },
  "Aluminum-4 ft": { min: 30, max: 50 },
  "Aluminum-6 ft": { min: 40, max: 60 },
  "Aluminum-8 ft": { min: 50, max: 75 },
  "Chain Link-4 ft": { min: 15, max: 25 },
  "Chain Link-6 ft": { min: 20, max: 30 },
  "Chain Link-8 ft": { min: 25, max: 40 },
};

function PillGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`h-11 min-w-[3.25rem] px-5 rounded-full text-sm font-medium transition-all duration-200 ${
            value === opt
              ? "bg-accent text-accent-foreground shadow-sm"
              : "bg-background border border-border text-foreground/70 hover:border-foreground/30"
          }`}
        >
          {opt}
        </button>
      ))}
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
        className={`relative w-12 h-7 rounded-full transition-colors duration-200 ${
          checked ? "bg-accent" : "bg-border"
        }`}
      >
        <div
          className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
            checked ? "translate-x-[1.3rem]" : "translate-x-1"
          }`}
        />
      </div>
      <span className="text-sm text-foreground">{label}</span>
    </button>
  );
}

export default function EstimateCalculator() {
  const [length, setLength] = useState(150);
  const [height, setHeight] = useState("6 ft");
  const [material, setMaterial] = useState("Wood");
  const [gates, setGates] = useState("1");
  const [removeOld, setRemoveOld] = useState(false);
  const [sloped, setSloped] = useState(false);

  const key = `${material}-${height}`;
  const base = priceMap[key] || { min: 30, max: 45 };
  const gateCount = gates === "3+" ? 3 : parseInt(gates);
  const gateCost = gateCount * 450;
  const removalCost = removeOld ? length * 3 : 0;
  const slopedMult = sloped ? 1.15 : 1;

  const minPrice = Math.round((base.min * length + gateCost + removalCost) * slopedMult);
  const maxPrice = Math.round((base.max * length + gateCost + removalCost) * slopedMult);

  return (
    <section id="estimate" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Free & Instant
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            Get your fence estimate.
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-lg mx-auto">
            Adjust the options below for an approximate price range.
          </p>
        </motion.div>

        {/* Calculator body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-16"
        >
          {/* Controls */}
          <div className="flex-1 space-y-9">
            {/* Fence Length */}
            <div>
              <label className="text-sm font-semibold text-foreground block mb-4">
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
              <p className="text-center text-3xl font-bold text-foreground tabular-nums mt-4 tracking-tight">
                {length} ft
              </p>
            </div>

            {/* Fence Height */}
            <div>
              <label className="text-sm font-semibold text-foreground block mb-3">
                Fence Height
              </label>
              <PillGroup options={heights} value={height} onChange={setHeight} />
            </div>

            {/* Material */}
            <div>
              <label className="text-sm font-semibold text-foreground block mb-3">Material</label>
              <PillGroup options={materials} value={material} onChange={setMaterial} />
            </div>

            {/* Gates */}
            <div>
              <label className="text-sm font-semibold text-foreground block mb-3">
                Number of Gates
              </label>
              <PillGroup options={gateOptions} value={gates} onChange={setGates} />
            </div>

            {/* Toggles */}
            <div className="flex flex-col gap-4 pt-1">
              <Toggle label="Remove old fence" checked={removeOld} onChange={() => setRemoveOld(!removeOld)} />
              <Toggle label="Sloped yard" checked={sloped} onChange={() => setSloped(!sloped)} />
            </div>
          </div>

          {/* Price card */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="rounded-2xl border border-border/60 bg-card p-7 md:p-8 lg:sticky lg:top-24 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Estimated Price Range
              </p>
              <p className="text-4xl md:text-[2.75rem] font-black text-accent tabular-nums tracking-tight leading-tight">
                ${minPrice.toLocaleString()}&thinsp;–&thinsp;${maxPrice.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                *Approximate. Final pricing based on on-site measurement.
              </p>
              <p className="text-sm font-semibold text-accent mt-5">
                Flexible payment options available
              </p>

              <hr className="border-border my-6" />

              <p className="font-bold text-foreground text-lg mb-5">Get Your Exact Quote</p>
              <a
                href="tel:8166232363"
                className="flex items-center justify-center bg-accent text-accent-foreground w-full py-4 rounded-full text-sm font-bold tracking-wide hover:brightness-110 transition-all shadow-md"
              >
                Call Now — (816) 623-2363
              </a>
              <p className="text-xs text-muted-foreground text-center mt-3">
                We'll schedule your free on-site measurement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
