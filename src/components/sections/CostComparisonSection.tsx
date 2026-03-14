import { motion } from "framer-motion";
import { DollarSign, RefreshCw, TrendingDown } from "lucide-react";

export default function CostComparisonSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-cta text-accent mb-4 block">Total Cost of Ownership</span>
          <h2 className="text-section-heading">
            The fence you replace twice costs more than the one you don't.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-surface p-8 opacity-70"
          >
            <RefreshCw className="w-8 h-8 text-muted-foreground mb-4" />
            <h3 className="text-lg font-bold text-primary mb-2">Traditional Install</h3>
            <p className="text-4xl font-black text-primary tabular-nums mb-6">$12,600+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Over 20 Years</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Initial install: ~$4,200</li>
              <li>First replacement (yr 8–10): ~$4,200</li>
              <li>Second replacement (yr 16–20): ~$4,200</li>
              <li>Ongoing staining & repairs</li>
            </ul>
          </motion.div>

          {/* SteelCore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-surface p-8 ring-2 ring-accent/20 border-accent/20"
          >
            <DollarSign className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-bold text-primary mb-2">SteelCore™ Install</h3>
            <p className="text-4xl font-black text-accent tabular-nums mb-6">$5,400</p>
            <p className="text-xs text-accent uppercase tracking-widest font-bold mb-4">One Time</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Initial install: ~$5,400</li>
              <li>Replacements needed: 0</li>
              <li>Posts still standing at year 20+</li>
              <li>Only re-stain pickets as desired</li>
            </ul>
          </motion.div>

          {/* Savings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-accent text-accent-foreground p-8 rounded-2xl flex flex-col items-center justify-center text-center"
          >
            <TrendingDown className="w-10 h-10 mb-4 opacity-80" />
            <p className="text-xs uppercase tracking-widest font-bold mb-2 opacity-70">You Save</p>
            <p className="text-5xl font-black tabular-nums mb-2">$7,200+</p>
            <p className="text-sm opacity-80">over 20 years</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
