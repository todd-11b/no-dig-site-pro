import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";

const specs = [
  "2⅜\" Schedule 40 steel pipe — ASTM A53 Grade B",
  "8 ft total length: 4 ft driven below grade, 4 ft above",
  "Yield strength: 241 MPa (35,000 psi) — 6× stronger than wood",
  "Wall thickness: 0.154\" — built to last decades underground",
  "Galvanized coating resists rust and corrosion",
  "Won't warp, crack, twist, rot, or lean",
  "No termite damage. No rot. No chemical leaching.",
  "Made from recycled steel — environmentally friendly",
];

export default function PostMasterSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cta text-accent mb-4 block">SteelCore™ Driven Steel Posts</span>
            <h2 className="text-section-heading mb-6">
              Give Your Fence the Strength of Steel (While Looking Like Wood)
            </h2>
            <p className="text-body mb-6">
              Our SteelCore™ system uses heavy-duty Schedule 40 steel pipe, pneumatically driven 4 feet into undisturbed soil. The result: a rock-solid foundation that won't shift, rot, or fail — covered by your fence for a clean, seamless look on both sides.
            </p>
            <p className="text-body mb-6">
              The driven pipe sits invisibly inside your fence, providing a truly good neighbor fence — no ugly side, because the post is hidden on both sides.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Every wood post — treated or not — will eventually disintegrate from moisture, dry rot, or bug infestation. Driven steel won't. It's the one-time-and-done answer for any wood or composite fence."
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
