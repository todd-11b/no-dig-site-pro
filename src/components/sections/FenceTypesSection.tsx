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

const specs = [
  "Structural steel with galvanized zinc coating — rust-resistant",
  "Withstands winds of 70+ MPH (ASCE 7-10 certified up to 112 MPH)",
  "Won't warp, crack, twist, rot, or lean",
  "344 MPa (50,000 psi) yield strength — ASTM A-653",
  "Lifetime Limited Warranty from Master Halco (50+ years in the fence industry)",
  "Made from recycled steel — environmentally friendly",
  "No termite damage. No rot. No chemical leaching.",
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

        {/* The Perfect Combination — PostMaster+ Section */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-label text-accent mb-5">The Perfect Combination</p>
            <h2 className="text-section-heading mb-6">
              Give Your Fence The Strength Of Steel (While Looking Like Wood!)
            </h2>
            <p className="text-body mb-6">
              The innovative design of the PostMaster+® Fence System gives your fence posts the ultimate longevity. Powder-coated steel construction resists both rust and rot, while every wooden post (treated or not) will eventually disintegrate from moisture, dry rot, or bug infestation.
            </p>
            <p className="text-body">
              When you use PostMaster+® wood fencing, you get the perfect combination of appearance and durability. A clean, pristine wood appearance with the strength of structural steel underneath — no ugly side, because the post is invisible on both sides.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-surface p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold text-primary">Key Specifications</h3>
            </div>
            <ul className="space-y-4">
              {specs.map((spec, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">{spec}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
