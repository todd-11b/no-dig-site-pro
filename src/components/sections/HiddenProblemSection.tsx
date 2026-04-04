import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import traditionalPost from "@/assets/traditional-post-cross-section.webp";
import steelcorePost from "@/assets/steelcore-post-cross-section.webp";

export default function HiddenProblemSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12 md:mb-20"
        >
          <p className="text-label text-accent mb-4 md:mb-5">The Problem</p>
          <h2 className="text-section-heading mb-4 md:mb-6">
            Every fence in your neighborhood is rotting from the inside out.
          </h2>
          <p className="text-body max-w-xl">
            Traditional fence posts are buried in concrete. Over time, that concrete traps moisture against the wood — causing posts to rot, lean, and fail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 lg:p-10"
          >
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6">Traditional Post</h3>
            <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
              {[
                "Wood buried in concrete",
                "Moisture trapped at the base",
                "Rot guaranteed within 8–15 years",
                "49 MPH failure point",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 md:gap-3 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <img
              src={traditionalPost}
              alt="Cross-section of traditional concrete footing showing rot and moisture problems"
              className="w-full max-w-[200px] md:max-w-[240px] mx-auto"
            />
          </motion.div>

          {/* SteelCore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border-2 border-accent/20 bg-card p-6 md:p-8 lg:p-10"
          >
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6">SteelCore™ Post</h3>
            <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
              {[
                "Driven steel in undisturbed soil",
                "No concrete. No rot.",
                "50+ year post lifespan",
                "110+ MPH wind rated",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 md:gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <img
              src={steelcorePost}
              alt="Cross-section of SteelCore no-dig driven steel post"
              className="w-full max-w-[200px] md:max-w-[240px] mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
