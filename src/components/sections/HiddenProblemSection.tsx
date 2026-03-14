import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import traditionalPost from "@/assets/traditional-post-cross-section.png";
import steelcorePost from "@/assets/steelcore-post-cross-section.png";

export default function HiddenProblemSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-section-heading mb-6">
            Every fence in your neighborhood is rotting from the inside out.
          </h2>
          <p className="text-body">
            Traditional fence posts are buried in concrete. Over time, that concrete traps moisture against the wood — causing posts to rot, lean, and fail. The very thing holding your fence up is what destroys it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface p-8 border-destructive/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-primary">Traditional Post</h3>
            </div>
            <ul className="space-y-3 text-body mb-6">
              <li className="flex gap-2"><X className="w-5 h-5 text-destructive shrink-0 mt-0.5" /> Wood buried in concrete</li>
              <li className="flex gap-2"><X className="w-5 h-5 text-destructive shrink-0 mt-0.5" /> Moisture trapped at the base</li>
              <li className="flex gap-2"><X className="w-5 h-5 text-destructive shrink-0 mt-0.5" /> Rot guaranteed within 8–15 years</li>
              <li className="flex gap-2"><X className="w-5 h-5 text-destructive shrink-0 mt-0.5" /> 49 MPH failure point</li>
            </ul>
            <img
              src={traditionalPost}
              alt="Cross-section of traditional concrete footing showing rot, frost heave, and moisture problems"
              className="w-full max-w-xs mx-auto rounded-xl"
            />
          </motion.div>

          {/* SteelCore */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface p-8 border-accent/20 ring-2 ring-accent/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary">SteelCore™ Post</h3>
            </div>
            <ul className="space-y-3 text-body mb-6">
              <li className="flex gap-2"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> Driven steel in undisturbed soil</li>
              <li className="flex gap-2"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> No concrete. No rot.</li>
              <li className="flex gap-2"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> 50+ year post lifespan</li>
              <li className="flex gap-2"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" /> 110+ MPH wind rated</li>
            </ul>
            <img
              src={steelcorePost}
              alt="Cross-section of SteelCore no-dig driven steel post with soil compression and skin friction"
              className="w-full max-w-xs mx-auto rounded-xl"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-sm text-muted-foreground italic max-w-2xl"
        >
          "A driven post is as strong or stronger than a concreted post in almost all soil types. In KC's clay-heavy soil, driven posts anchor through natural compression — no concrete needed."
        </motion.p>
      </div>
    </section>
  );
}
