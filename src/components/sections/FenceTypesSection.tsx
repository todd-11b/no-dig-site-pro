import { motion } from "framer-motion";
import completedFence from "@/assets/completed-fence.jpg";

const fenceTypes = [
  {
    name: "Wood",
    desc: "Classic privacy and style. Cedar or treated pine on SteelCore™ driven posts.",
    detail: "Stain every 2–3 years · 50+ year posts",
  },
  {
    name: "Vinyl",
    desc: "Zero maintenance privacy fencing. Won't fade, chip, or peel.",
    detail: "Rinse with hose · 50+ year lifespan",
  },
  {
    name: "Aluminum",
    desc: "Elegant ornamental fencing for front yards, pools, and boundaries.",
    detail: "No maintenance · 50+ year lifespan",
  },
  {
    name: "Chain Link",
    desc: "Affordable and durable for property lines, pets, and commercial use.",
    detail: "No maintenance · 25+ year lifespan",
  },
];

export default function FenceTypesSection() {
  return (
    <section id="fence-types" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <p className="text-label text-accent mb-5">Fence Types</p>
          <h2 className="text-section-heading mb-5">Every fence. One unbreakable foundation.</h2>
          <p className="text-body">
            Every fence type below is installed with the SteelCore™ No-Dig Post System.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {fenceTypes.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card overflow-hidden"
            >
              <img src={completedFence} alt={`${f.name} fence`} className="w-full h-40 object-cover" />
              <div className="p-6 lg:p-8">
                <h3 className="text-base font-semibold text-foreground mb-2">{f.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
                <p className="text-xs text-muted-foreground/60">{f.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
