import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Link } from "react-router-dom";
import messyImg from "@/assets/messy-install.jpg";
import cleanImg from "@/assets/clean-install.jpg";

const guarantees = [
  "Photo-documented cleanup on every job",
  "Tarps used for all debris during installation",
  "Magnet sweep for nails and metal fragments",
  "All materials, trash, and equipment removed",
  "Grass, mulch, and landscaping protected throughout",
];

export default function InstallComparisonSection() {
  return (
    <section className="section-padding-lg bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-5xl">
        {/* Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-5">Installation</p>
          <h2 className="text-section-heading text-primary-foreground">Installation without the mess.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-primary-foreground/10"
          >
            <img src={messyImg} alt="Messy traditional fence installation" className="w-full h-56 object-cover" />
            <div className="p-8">
              <h3 className="text-base font-semibold text-primary-foreground mb-5">Traditional Installation</h3>
              <ul className="space-y-3">
                {["Holes dug in your yard", "Dirt piles everywhere", "Wet concrete mixing", "Heavy equipment ruts"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-primary-foreground/50">
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
            className="rounded-2xl overflow-hidden border-2 border-accent/30"
          >
            <img src={cleanImg} alt="Clean SteelCore fence installation" className="w-full h-56 object-cover" />
            <div className="p-8">
              <h3 className="text-base font-semibold text-primary-foreground mb-5">SteelCore™ Installation</h3>
              <ul className="space-y-3">
                {["Hydraulic post driver", "Clean installation", "Minimal lawn disturbance", "No concrete mess"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-primary-foreground/50">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Clean Site Guarantee — flows naturally below */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-5">Clean Site Guarantee</p>
            <h2 className="text-section-heading text-primary-foreground mb-6">
              Your yard looks better when we leave than when we arrived.
            </h2>
            <p className="text-lg leading-[1.7] text-primary-foreground/50 mb-10 font-light">
              We leave your yard spotless — blown off, raked, swept, and free of debris. More customers mention this in their reviews than anything else.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:brightness-110 transition-all"
            >
              Get Your Free Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ul className="space-y-5">
              {guarantees.map((g, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="flex gap-4 items-start text-sm text-primary-foreground/70 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                  {g}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
