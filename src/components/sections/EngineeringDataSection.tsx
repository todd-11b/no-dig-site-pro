import { motion } from "framer-motion";

const metrics = [
  {
    category: "Post strength",
    badge: "8× stronger",
    steelcore: { value: "344 MPa", width: "82%", note: "50,000 psi — ASTM A-653 structural steel" },
    traditional: { value: "41 MPa", width: "10%", note: "~6,000 psi — wood grain average" },
  },
  {
    category: "Wind rating",
    badge: "2× the wind resistance",
    steelcore: { value: "112 MPH", width: "85%", note: "ASCE 7-10 / IBC certified" },
    traditional: { value: "50 MPH", width: "45%", note: "Structural failure threshold" },
  },
  {
    category: "Post lifespan",
    badge: "4× longer",
    steelcore: { value: "50+ years", width: "90%", note: "Galvanized steel · Lifetime warranty" },
    traditional: { value: "10–15 years", width: "22%", note: "KC clay + freeze-thaw conditions" },
  },
];

export default function EngineeringDataSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent mb-5">Engineering</p>
          <h2 className="text-section-heading text-primary-foreground mb-8">The numbers don't lie.</h2>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-sm bg-accent" />
              <span className="text-sm font-medium text-primary-foreground">SteelCore™</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-sm bg-primary-foreground/20" />
              <span className="text-sm font-medium text-primary-foreground/50">Traditional</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-baseline justify-between mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground">{metric.category}</h3>
                <span className="text-xs font-medium text-accent">{metric.badge}</span>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-primary-foreground">SteelCore™</span>
                  <span className="text-lg md:text-xl font-bold text-primary-foreground tabular-nums">{metric.steelcore.value}</span>
                </div>
                <div className="w-full bg-primary-foreground/10 h-4 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: metric.steelcore.width }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="bg-accent h-full rounded-full"
                  />
                </div>
                <p className="text-xs text-primary-foreground/40 mt-2">{metric.steelcore.note}</p>
              </div>

              <div className="mt-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-primary-foreground/50">Traditional</span>
                  <span className="text-base font-medium text-primary-foreground/50 tabular-nums">{metric.traditional.value}</span>
                </div>
                <div className="w-full bg-primary-foreground/10 h-4 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: metric.traditional.width }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    className="bg-primary-foreground/60 h-full rounded-full"
                  />
                </div>
                <p className="text-xs text-primary-foreground/40 mt-2">{metric.traditional.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
