import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <p className="text-label text-accent mb-5">Instant Estimate</p>
          <h2 className="text-section-heading">Get a ballpark in 30 seconds.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-8 md:p-12 max-w-2xl"
        >
          {/* Length */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-3">
              <label className="text-label">Fence Length</label>
              <span className="text-2xl font-bold text-foreground tabular-nums">{length} <span className="text-sm font-medium text-muted-foreground">ft</span></span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground/50 mt-2">
              <span>50 ft</span><span>500 ft</span>
            </div>
          </div>

          {/* Height */}
          <div className="mb-10">
            <label className="text-label mb-3 block">Fence Height</label>
            <div className="flex gap-2">
              {heights.map((h) => (
                <button
                  key={h}
                  onClick={() => setHeight(h)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    height === h
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:bg-border"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>

          {/* Material */}
          <div className="mb-10">
            <label className="text-label mb-3 block">Material</label>
            <div className="flex flex-wrap gap-2">
              {materials.map((m) => (
                <button
                  key={m}
                  onClick={() => setMaterial(m)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    material === m
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:bg-border"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Gates */}
          <div className="mb-10">
            <label className="text-label mb-3 block">Gates</label>
            <div className="flex gap-2">
              {gateOptions.map((g) => (
                <button
                  key={g}
                  onClick={() => setGates(g)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    gates === g
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:bg-border"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="flex flex-wrap gap-8 mb-12">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={`relative w-11 h-6 rounded-full transition-colors ${removeOld ? "bg-accent" : "bg-border"}`}
                onClick={() => setRemoveOld(!removeOld)}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-card shadow-sm transition-transform ${removeOld ? "translate-x-5" : "translate-x-0.5"}`} />
              </div>
              <span className="text-sm text-foreground">Remove old fence</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={`relative w-11 h-6 rounded-full transition-colors ${sloped ? "bg-accent" : "bg-border"}`}
                onClick={() => setSloped(!sloped)}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-card shadow-sm transition-transform ${sloped ? "translate-x-5" : "translate-x-0.5"}`} />
              </div>
              <span className="text-sm text-foreground">Sloped yard</span>
            </label>
          </div>

          {/* Price */}
          <div className="border-t border-border pt-8 mb-8">
            <p className="text-label mb-3">Estimated Range</p>
            <p className="text-4xl md:text-5xl font-bold text-foreground tabular-nums tracking-tight">
              ${minPrice.toLocaleString()} – ${maxPrice.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground/60 mt-3">
              Final price depends on site conditions, permits, and material selections.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:brightness-110 transition-all"
          >
            Get Your Exact Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
