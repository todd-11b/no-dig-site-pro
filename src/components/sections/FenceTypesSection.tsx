import { motion } from "framer-motion";
import completedFence from "@/assets/completed-fence.jpg";

const fenceTypes = [
  {
    name: "Wood",
    desc: "Classic privacy and style. Cedar or treated pine on SteelCore™ driven posts — no rot, no lean.",
    maintenance: "Stain every 2–3 years",
    lifespan: "50+ years (SteelCore™ posts)",
    bestFor: "Privacy, traditional aesthetics",
    price: "$$",
  },
  {
    name: "Vinyl",
    desc: "Zero maintenance privacy fencing. Won't fade, chip, or peel. Installed on SteelCore™ for unmatched strength.",
    maintenance: "Rinse with hose",
    lifespan: "50+ years",
    bestFor: "Low maintenance, modern look",
    price: "$$$",
  },
  {
    name: "Aluminum",
    desc: "Elegant ornamental fencing. Perfect for front yards, pools, and decorative boundaries.",
    maintenance: "None",
    lifespan: "50+ years",
    bestFor: "Pool enclosures, curb appeal",
    price: "$$$",
  },
  {
    name: "Chain Link",
    desc: "Affordable and durable. Ideal for property lines, pet containment, and commercial applications.",
    maintenance: "None",
    lifespan: "25+ years",
    bestFor: "Budget, pet containment, security",
    price: "$",
  },
];

export default function FenceTypesSection() {
  return (
    <section id="fence-types" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-cta text-accent mb-4 block">Fence Types</span>
          <h2 className="text-section-heading mb-4">Every fence. One unbreakable foundation.</h2>
          <p className="text-body">
            Every fence type below is installed with the SteelCore™ No-Dig Post System.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {fenceTypes.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-surface overflow-hidden hover:-translate-y-0.5 transition-transform"
            >
              <img src={completedFence} alt={`${f.name} fence`} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{f.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Maintenance</span>
                    <span className="font-medium text-primary">{f.maintenance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lifespan</span>
                    <span className="font-medium text-primary">{f.lifespan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best For</span>
                    <span className="font-medium text-primary">{f.bestFor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price Range</span>
                    <span className="font-medium text-accent">{f.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center">
          All materials installed with SteelCore™ No-Dig Post System for maximum durability.
        </p>
      </div>
    </section>
  );
}
