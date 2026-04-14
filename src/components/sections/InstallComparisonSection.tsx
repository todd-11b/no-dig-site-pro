import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function InstallComparisonSection() {
  return (
    <section className="section-padding-lg bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-12 md:mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-4 md:mb-5">Installation</p>
          <h2 className="text-section-heading text-primary-foreground">Installation without the mess.</h2>
        </motion.div>

        {/* Side-by-side on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto mb-16 md:mb-24 lg:mb-32">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[9/16] md:aspect-[9/16] max-h-[400px] md:max-h-none relative">
              <video
                src="https://videos.pexels.com/video-files/18689551/18689551-uhd_2730_1440_30fps.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="bg-card rounded-2xl p-5 md:p-6 mt-3 md:mt-4">
              <h3 className="text-base font-semibold text-foreground mb-3 md:mb-4">Traditional Installation</h3>
              <ul className="space-y-2.5 md:space-y-3">
                {["Holes dug in your yard", "Dirt piles everywhere", "Wet concrete mixing", "Heavy equipment ruts"].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
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
          >
            <div className="rounded-2xl overflow-hidden aspect-[9/16] md:aspect-[9/16] max-h-[400px] md:max-h-none relative">
              <video
                src="https://videos.pexels.com/video-files/5765076/5765076-uhd_1440_2560_30fps.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="bg-card rounded-2xl p-5 md:p-6 mt-3 md:mt-4 border-2 border-accent/20">
              <h3 className="text-base font-semibold text-foreground mb-3 md:mb-4">SteelCore™ Installation</h3>
              <ul className="space-y-2.5 md:space-y-3">
                {["Pneumatic post driver", "Clean installation", "Minimal lawn disturbance", "No concrete mess"].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Clean Site Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-4 md:mb-5">Clean Site Guarantee</p>
          <h2 className="text-section-heading text-primary-foreground mb-4 md:mb-6">
            Your yard looks better when we leave than when we arrived.
          </h2>
          <p className="text-[15px] md:text-lg leading-[1.7] text-primary-foreground/50 mb-8 md:mb-10 font-light">
            We leave your yard spotless — blown off, raked, swept, and free of debris.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:brightness-110 transition-all"
          >
            Get Your Free Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
