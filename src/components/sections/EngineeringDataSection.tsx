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
    <section className="section-padding-lg bg-secondary">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2 className="text-section-heading mb-6">The numbers don't lie.</h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-accent" />
              <span className="text-sm font-semibold text-foreground">SteelCore™</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-border" />
              <span className="text-sm font-semibold text-muted-foreground">Traditional</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{metric.category}</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {metric.badge}
                </span>
              </div>

              {/* SteelCore bar */}
              <div className="mb-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-foreground">SteelCore™</span>
                  <span className="text-lg md:text-xl font-black text-foreground tabular-nums">{metric.steelcore.value}</span>
                </div>
                <div className="w-full bg-border h-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: metric.steelcore.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="bg-accent h-full rounded-full"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">{metric.steelcore.note}</p>
              </div>

              {/* Traditional bar */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Traditional</span>
                  <span className="text-base font-bold text-muted-foreground tabular-nums">{metric.traditional.value}</span>
                </div>
                <div className="w-full bg-border h-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: metric.traditional.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="bg-muted-foreground/30 h-full rounded-full"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">{metric.traditional.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
