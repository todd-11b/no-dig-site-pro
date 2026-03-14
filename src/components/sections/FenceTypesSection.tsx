import { motion } from "framer-motion";
import fenceWood from "@/assets/fence-wood.jpg";
import fenceShadowbox from "@/assets/fence-shadowbox.jpg";
import fenceHorizontal from "@/assets/fence-horizontal.jpg";
import fenceStained from "@/assets/fence-stained.png";

const fenceTypes = [
  {
    name: "Board-on-Board",
    desc: "Classic privacy and style. Cedar or treated pine on SteelCore™ driven posts.",
    detail: "Stain every 2–3 years · 50+ year posts",
    img: fenceWood,
  },
  {
    name: "Shadowbox",
    desc: "Semi-private design with airflow and a beautiful look from both sides.",
    detail: "Great for neighborhoods · 50+ year posts",
    img: fenceShadowbox,
  },
  {
    name: "Horizontal",
    desc: "Modern, clean lines with horizontal boards on SteelCore™ posts.",
    detail: "Contemporary style · 50+ year posts",
    img: fenceHorizontal,
  },
  {
    name: "Stained Cedar",
    desc: "Premium stained cedar fencing for a rich, finished look.",
    detail: "Custom stain options · 50+ year posts",
    img: fenceStained,
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
              <img src={f.img} alt={`${f.name} fence`} className="w-full h-40 object-cover" />
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
