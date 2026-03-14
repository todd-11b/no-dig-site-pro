import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import messyImg from "@/assets/messy-install.jpg";
import cleanImg from "@/assets/clean-install.jpg";

export default function InstallComparisonSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-label text-accent mb-5">Side by Side</p>
          <h2 className="text-section-heading">Installation without the mess.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border"
          >
            <img src={messyImg} alt="Messy traditional fence installation" className="w-full h-56 object-cover" />
            <div className="p-8">
              <h3 className="text-base font-semibold text-foreground mb-5">Traditional Installation</h3>
              <ul className="space-y-3">
                {["Holes dug in your yard", "Dirt piles everywhere", "Wet concrete mixing", "Heavy equipment ruts"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* SteelCore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden border-2 border-accent/20"
          >
            <img src={cleanImg} alt="Clean SteelCore fence installation" className="w-full h-56 object-cover" />
            <div className="p-8">
              <h3 className="text-base font-semibold text-foreground mb-5">SteelCore™ Installation</h3>
              <ul className="space-y-3">
                {["Hydraulic post driver", "Clean installation", "Minimal lawn disturbance", "No concrete mess"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
