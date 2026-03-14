import { motion } from "framer-motion";
import postComparisonDiagram from "@/assets/post-comparison-diagram.png";

export default function EngineeringDataSection() {
  return (
    <section className="section-padding-lg bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="text-cta text-accent mb-4 block">Engineering Data</span>
          <h2 className="text-section-heading text-primary-foreground mb-6">
            4X stronger than concrete.
          </h2>
          <p className="text-lg leading-relaxed opacity-70">
            Steel yield strength: 250–420 MPa. Wood: 41 MPa. Our driven steel posts anchor into undisturbed soil using natural compression — not poured concrete that cracks, shifts, and traps moisture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Steel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-primary-foreground/5 p-8 rounded-2xl border border-primary-foreground/10"
          >
            <div className="flex justify-between items-end mb-4">
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">Steel Yield Strength</span>
              <span className="text-4xl font-black tabular-nums">420 <span className="text-lg font-bold">MPa</span></span>
            </div>
            <div className="w-full bg-primary-foreground/10 h-4 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="bg-primary-foreground h-full rounded-full"
              />
            </div>

            <div className="mt-8 flex justify-between items-end mb-4 opacity-40">
              <span className="text-sm font-bold uppercase tracking-widest">Traditional Wood</span>
              <span className="text-2xl font-bold tabular-nums">41 <span className="text-sm font-bold">MPa</span></span>
            </div>
            <div className="w-full bg-primary-foreground/10 h-4 rounded-full overflow-hidden opacity-40">
              <div className="bg-primary-foreground/40 h-full rounded-full" style={{ width: "10%" }} />
            </div>
          </motion.div>

          {/* Wind */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-primary-foreground/5 p-8 rounded-2xl border border-primary-foreground/10"
          >
            <div className="flex justify-between items-end mb-4">
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">SteelCore™ Wind Rating</span>
              <span className="text-4xl font-black tabular-nums">110+ <span className="text-lg font-bold">MPH</span></span>
            </div>
            <div className="w-full bg-primary-foreground/10 h-4 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                className="bg-primary-foreground h-full rounded-full"
              />
            </div>

            <div className="mt-8 flex justify-between items-end mb-4 opacity-40">
              <span className="text-sm font-bold uppercase tracking-widest">Traditional Post Failure</span>
              <span className="text-2xl font-bold tabular-nums">~49 <span className="text-sm font-bold">MPH</span></span>
            </div>
            <div className="w-full bg-primary-foreground/10 h-4 rounded-full overflow-hidden opacity-40">
              <div className="bg-primary-foreground/40 h-full rounded-full" style={{ width: "45%" }} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16"
        >
          <img
            src={postComparisonDiagram}
            alt="Engineering comparison: Traditional concrete footing vs No-Dig driven steel post"
            className="w-full max-w-4xl mx-auto rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
