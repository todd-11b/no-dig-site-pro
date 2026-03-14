import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import messyImg from "@/assets/messy-install.jpg";
import cleanImg from "@/assets/clean-install.jpg";

const advantages = [
  "No dirt to clean up",
  "Fewer damaged sprinkler lines",
  "Elimination of frost heave",
  "Faster installation — no wait time on concrete curing",
  "Lower cost without compromising product integrity",
];

export default function InstallComparisonSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-cta text-accent mb-4 block">Side by Side</span>
          <h2 className="text-section-heading">Installation without the mess.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img src={messyImg} alt="Messy traditional fence installation" className="w-full h-56 object-cover" />
            <div className="p-6 bg-card border border-border rounded-b-2xl">
              <h3 className="text-lg font-bold text-primary mb-4">Traditional Installation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><X className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Holes dug in your yard</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Dirt piles everywhere</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Wet concrete mixing</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Heavy equipment ruts</li>
              </ul>
            </div>
          </motion.div>

          {/* SteelCore */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
          >
            <img src={cleanImg} alt="Clean SteelCore fence installation" className="w-full h-56 object-cover" />
            <div className="p-6 bg-card border-2 border-accent/20 rounded-b-2xl">
              <h3 className="text-lg font-bold text-primary mb-4">SteelCore™ Installation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Hydraulic post driver</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Clean installation</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Minimal lawn disturbance</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> No concrete mess</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 5 Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-surface p-8"
        >
          <h3 className="text-lg font-bold text-primary mb-6">Why driven posts outperform concrete:</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((adv, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                <span className="text-sm text-muted-foreground">{adv}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
