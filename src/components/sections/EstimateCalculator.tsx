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
    <section id="estimate" className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-label text-accent mb-5">Free & Instant</p>
          <h2 className="text-section-heading mb-4">Get your fence estimate.</h2>
          <p className="text-muted-foreground text-lg">Adjust the options below for an approximate price range.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start"
        >
          {/* Left: Controls */}
          <div className="lg:col-span-3 space-y-10">
            {/* Length */}
            <div>
              <label className="text-sm font-semibold text-foreground block mb-3">Fence Length (linear feet)</label>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <p className="text-center text-2xl font-bold text-foreground tabular-nums mt-3">{length} ft</p>
            </div>

            {/* Height */}
            <div>
              <label className="text-sm font-semibold text-foreground block mb-3">Fence Height</label>
              <div className="flex gap-2">
                {heights.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHeight(h)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      height === h
                        ? "bg-accent text-accent-foreground"
                        : "bg-background border border-border text-muted-foreground hover:border-foreground/30"
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <label className="text-sm font-semibold text-foreground block mb-3">Material</label>
              <div className="flex flex-wrap gap-2">
                {materials.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMaterial(m)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      material === m
                        ? "bg-accent text-accent-foreground"
                        : "bg-background border border-border text-muted-foreground hover:border-foreground/30"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Gates */}
            <div>
              <label className="text-sm font-semibold text-foreground block mb-3">Number of Gates</label>
              <div className="flex gap-2">
                {gateOptions.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGates(g)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      gates === g
                        ? "bg-accent text-accent-foreground"
                        : "bg-background border border-border text-muted-foreground hover:border-foreground/30"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-4">
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
          </div>

          {/* Right: Price card */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8 sticky top-24">
              <p className="text-label mb-3">Estimated Price Range</p>
              <p className="text-4xl md:text-5xl font-bold text-accent tabular-nums tracking-tight">
                ${minPrice.toLocaleString()} – ${maxPrice.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                *Approximate. Final pricing based on on-site measurement.
              </p>

              <p className="text-sm font-medium text-accent mt-4">Flexible payment options available</p>

              <div className="border-t border-border mt-6 pt-6">
                <p className="font-semibold text-foreground mb-4">Get Your Exact Quote</p>
                <a
                  href="tel:8166232363"
                  className="flex items-center justify-center gap-2 bg-accent text-accent-foreground w-full py-4 rounded-full text-sm font-semibold tracking-wide hover:brightness-110 transition-all"
                >
                  Call Now — (816) 623-2363
                </a>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  We'll schedule your free on-site measurement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
