import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Link } from "react-router-dom";
import messyImg from "@/assets/messy-install.jpg";
import cleanImg from "@/assets/clean-install.jpg";

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
            className="rounded-2xl overflow-hidden bg-card"
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
            className="rounded-2xl overflow-hidden bg-card border-2 border-accent/20"
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

        {/* Side-by-side Videos */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {/* Traditional - YouTube clip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/tdBfqxY-DRY?start=85&end=100&autoplay=0&mute=1&loop=1&playlist=tdBfqxY-DRY&controls=0&modestbranding=1&rel=0"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Traditional fence post installation — digging and concrete"
              />
            </div>
            <p className="text-center text-sm text-primary-foreground/50 mt-4 font-light">
              Traditional: digging holes & mixing concrete.
            </p>
          </motion.div>

          {/* SteelCore - Vimeo clip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden aspect-video">
              <iframe
                src="https://player.vimeo.com/video/846054082?autoplay=1&loop=1&muted=1&background=1"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="No yard damage after post installation"
              />
            </div>
            <p className="text-center text-sm text-primary-foreground/50 mt-4 font-light">
              SteelCore™: immediately after setting posts — no damage.
            </p>
          </motion.div>
        </div>

        {/* Clean Site Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-5">Clean Site Guarantee</p>
          <h2 className="text-section-heading text-primary-foreground mb-6">
            Your yard looks better when we leave than when we arrived.
          </h2>
          <p className="text-lg leading-[1.7] text-primary-foreground/50 mb-10 font-light">
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
