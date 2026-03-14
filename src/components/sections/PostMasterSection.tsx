import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";

const specs = [
  "Structural steel with galvanized zinc coating — rust-resistant",
  "Withstands winds of 70+ MPH (ASCE 7-10 certified up to 112 MPH)",
  "Won't warp, crack, twist, rot, or lean",
  "344 MPa (50,000 psi) yield strength — ASTM A-653",
  "Lifetime Limited Warranty from Master Halco (50+ years in the fence industry)",
  "Made from recycled steel — environmentally friendly",
  "No termite damage. No rot. No chemical leaching.",
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
            <span className="text-cta text-accent mb-4 block">PostMaster+® Steel Posts</span>
            <h2 className="text-section-heading mb-6">
              Give Your Fence the Strength of Steel (While Looking Like Wood)
            </h2>
            <p className="text-body mb-6">
              When you use PostMaster+® wood fencing, you get the perfect combination of appearance and durability. A clean, pristine wood appearance with the strength of structural steel underneath.
            </p>
            <p className="text-body mb-6">
              The engineered design makes the posts easily covered, providing a truly good neighbor fence — no ugly side, because the post is invisible on both sides.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Every wood post — treated or not — will eventually disintegrate from moisture, dry rot, or bug infestation. PostMaster+® won't. It's the one-time-and-done answer for any wood or composite fence."
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
