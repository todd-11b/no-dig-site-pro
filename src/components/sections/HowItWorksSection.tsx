import { motion } from "framer-motion";
import { Eye, Hammer, Layers, Wrench } from "lucide-react";

const steps = [
  {
    num: "00",
    title: "We Walk Your Yard First",
    desc: "Before we unload a single tool, we walk your property. Fence lines marked. Utilities confirmed. Sprinkler lines flagged. Obstacles identified. No surprises.",
    icon: Eye,
  },
  {
    num: "01",
    title: "Hydraulic Drive",
    desc: "Steel posts are driven deep into undisturbed soil using a hydraulic post driver. No digging. No concrete. No mess.",
    icon: Hammer,
  },
  {
    num: "02",
    title: "Soil Compression",
    desc: "KC's clay-heavy soil grips the driven steel post through skin friction, creating a natural anchor stronger than any concrete footing.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Build & Finish",
    desc: "Your fence is built on a foundation that won't rot, shift, or fail. Clean yard. Done in 1–2 days.",
    icon: Wrench,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="text-cta text-accent mb-4 block">Process</span>
          <h2 className="text-section-heading mb-6">
            Three steps to a fence that lasts decades.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-8 hover:-translate-y-0.5 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-black text-accent/20 tabular-nums">{step.num}</span>
                <step.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
