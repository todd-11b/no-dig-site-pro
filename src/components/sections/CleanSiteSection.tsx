import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const guarantees = [
  "Photo-documented cleanup on every job",
  "Tarps used for all debris during installation",
  "Magnet sweep for nails and metal fragments",
  "All materials, trash, and equipment removed",
  "Grass, mulch, and landscaping protected throughout",
];

export default function CleanSiteSection() {
  return (
    <section className="section-padding-lg bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-label text-accent mb-5">Clean Site Guarantee</p>
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
