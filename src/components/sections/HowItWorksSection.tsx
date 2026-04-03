import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "We Walk Your Yard First",
    desc: "Fence lines marked. Utilities confirmed. Sprinkler lines flagged. No surprises.",
  },
  {
    num: "02",
    title: "Hydraulic Drive",
    desc: "Steel posts driven deep into undisturbed soil. No digging. No concrete. No mess.",
  },
  {
    num: "03",
    title: "Soil Compression",
    desc: "KC's clay-heavy soil grips the driven steel through skin friction — a natural anchor stronger than concrete.",
  },
  {
    num: "04",
    title: "Build & Finish",
    desc: "Your fence is built on a foundation that won't rot, shift, or fail. Clean yard. Done in 1–2 days.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12 md:mb-20"
        >
          <p className="text-label text-accent mb-4 md:mb-5">Process</p>
          <h2 className="text-section-heading">
            Four steps to a fence that lasts decades.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card p-5 md:p-8 lg:p-10"
            >
              <span className="text-xs font-medium text-muted-foreground/40 tabular-nums mb-4 md:mb-6 block">{step.num}</span>
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-2 md:mb-3">{step.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
