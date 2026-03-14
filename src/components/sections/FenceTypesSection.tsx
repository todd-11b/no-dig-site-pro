import { motion } from "framer-motion";
import fenceWood from "@/assets/fence-wood.jpg";
import fenceShadowbox from "@/assets/fence-shadowbox.jpg";
import fenceHorizontal from "@/assets/fence-horizontal.jpg";
import fenceStained from "@/assets/fence-stained.png";
import fenceVinyl from "@/assets/fence-vinyl.jpg";
import fenceAluminum from "@/assets/fence-aluminum.jpg";

const fenceTypes = [
  {
    name: "Board-on-Board",
    desc: "Classic privacy and style. Cedar or treated pine on SteelCore™ driven posts.",
    img: fenceWood,
  },
  {
    name: "Shadowbox",
    desc: "Semi-private design with airflow and a beautiful look from both sides.",
    img: fenceShadowbox,
  },
  {
    name: "Horizontal",
    desc: "Modern, clean lines with horizontal boards on SteelCore™ posts.",
    img: fenceHorizontal,
  },
  {
    name: "Stained Cedar",
    desc: "Premium stained cedar fencing for a rich, finished look.",
    img: fenceStained,
  },
  {
    name: "Vinyl",
    desc: "Low-maintenance vinyl privacy fencing that never needs painting or staining.",
    img: fenceVinyl,
  },
  {
    name: "Aluminum",
    desc: "Elegant ornamental aluminum fencing — perfect for front yards and pool areas.",
    img: fenceAluminum,
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
          <p className="text-label text-accent mb-5">Hidden Strength</p>
          <h2 className="text-section-heading mb-5">The post your neighbor will never see is the reason your fence outlasts theirs.</h2>
          <p className="text-body mb-4">
            Traditional wood posts rot. Moisture gets in, dry rot starts, termites finish the job. Treated or not, every wood post fails at the ground line.
          </p>
          <p className="text-body mb-4">
            SteelCore™ posts are structural steel — galvanized, powder-coated, rust-proof — hidden completely inside the fence. You see wood on both sides. No ugly side. No brackets. No visible hardware.
          </p>
          <p className="text-body">
            Your fence looks like wood. It performs like steel. You never replace a post.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
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
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
