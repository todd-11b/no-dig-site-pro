import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, ChevronRight } from "lucide-react";

const materials = ["Wood", "Vinyl", "Aluminum", "Chain Link"];
const heights = ["4 ft", "6 ft", "8 ft"];
const gateOptions = ["0", "1", "2", "3+"];

// Rough price ranges per linear foot
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
    <section id="estimate" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <span className="text-cta text-accent mb-4 block">Instant Estimate</span>
          <h2 className="text-section-heading">Get a ballpark in 30 seconds.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card-surface p-8 md:p-12 max-w-3xl"
        >
          {/* Length Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-3">
              <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Fence Length</label>
              <span className="text-2xl font-black text-primary tabular-nums">{length} <span className="text-sm font-bold">ft</span></span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>50 ft</span><span>500 ft</span>
            </div>
          </div>

          {/* Height Toggle */}
          <div className="mb-8">
            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Fence Height</label>
            <div className="flex gap-2">
              {heights.map((h) => (
                <button
                  key={h}
                  onClick={() => setHeight(h)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    height === h
                      ? "bg-primary text-primary-foreground"
                      : "bg-border/50 text-muted-foreground hover:bg-border"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>

          {/* Material Toggle */}
          <div className="mb-8">
            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Material</label>
            <div className="flex flex-wrap gap-2">
              {materials.map((m) => (
                <button
                  key={m}
                  onClick={() => setMaterial(m)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    material === m
                      ? "bg-primary text-primary-foreground"
                      : "bg-border/50 text-muted-foreground hover:bg-border"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Gates */}
          <div className="mb-8">
            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Number of Gates</label>
            <div className="flex gap-2">
              {gateOptions.map((g) => (
                <button
                  key={g}
                  onClick={() => setGates(g)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    gates === g
                      ? "bg-primary text-primary-foreground"
                      : "bg-border/50 text-muted-foreground hover:bg-border"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="flex flex-wrap gap-6 mb-10">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={`relative w-12 h-6 rounded-full transition-colors ${removeOld ? "bg-accent" : "bg-border"}`}
                onClick={() => setRemoveOld(!removeOld)}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-card shadow-md transition-transform ${removeOld ? "translate-x-6" : "translate-x-0.5"}`} />
              </div>
              <span className="text-sm font-medium text-primary">Remove old fence?</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={`relative w-12 h-6 rounded-full transition-colors ${sloped ? "bg-accent" : "bg-border"}`}
                onClick={() => setSloped(!sloped)}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-card shadow-md transition-transform ${sloped ? "translate-x-6" : "translate-x-0.5"}`} />
              </div>
              <span className="text-sm font-medium text-primary">Sloped yard?</span>
            </label>
          </div>

          {/* Price Output */}
          <div className="bg-background rounded-xl p-6 mb-8 border border-border">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Estimated Price Range</p>
            <p className="text-4xl md:text-5xl font-black text-primary tabular-nums">
              ${minPrice.toLocaleString()} – ${maxPrice.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Final price depends on site conditions, permits, and material selections.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-cta hover:brightness-110 transition-all shadow-lift"
          >
            Get Your Exact Quote
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
