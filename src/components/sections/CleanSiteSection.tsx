import { motion } from "framer-motion";
import { Sparkles, Camera, Shield, Trash2, Magnet } from "lucide-react";
import { Link } from "react-router-dom";

const guarantees = [
  { icon: Camera, text: "Every job ends with a photo-documented cleanup" },
  { icon: Shield, text: "Tarps used for all debris during installation" },
  { icon: Magnet, text: "Magnet sweep for nails and metal fragments" },
  { icon: Trash2, text: "All materials, trash, and equipment removed — nothing left behind" },
  { icon: Sparkles, text: "Grass, mulch, and landscaping protected throughout the install" },
];

export default function CleanSiteSection() {
  return (
    <section className="section-padding-lg bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cta text-accent mb-4 block">Clean Site Guarantee</span>
            <h2 className="text-section-heading text-primary-foreground mb-6">
              Your Yard Looks Better When We Leave Than When We Arrived.
            </h2>
            <p className="text-lg leading-relaxed opacity-70 mb-8">
              We leave your yard spotless — blown off, raked, swept, and free of debris. More customers mention this in their reviews than anything else.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg text-cta hover:brightness-110 transition-all"
            >
              Get Your Free Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex gap-4 items-start bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10"
              >
                <g.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">{g.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
