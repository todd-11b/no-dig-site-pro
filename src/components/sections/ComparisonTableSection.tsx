import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Install Time", steel: "Same Day", trad: "3–5 Days" },
  { label: "Yard Damage", steel: "None", trad: "Significant" },
  { label: "Wind Rating", steel: "73–112 MPH", trad: "~50 MPH" },
  { label: "Post Strength", steel: "344 MPa / 50,000 psi", trad: "41 MPa / ~6,000 psi" },
  { label: "Post Lifespan", steel: "50+ Years", trad: "10–15 Years" },
  { label: "Rot Risk", steel: "Zero", trad: "Inevitable" },
  { label: "Concrete Required", steel: "None", trad: "2–3 bags per post" },
  { label: "Frost Heave", steel: "Eliminated", trad: "Common" },
];

export default function ComparisonTableSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <span className="text-cta text-accent mb-4 block">Full Comparison</span>
          <h2 className="text-section-heading">Every Category. Same Winner.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card-surface overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">Feature</th>
                  <th className="text-left p-4 text-sm font-bold uppercase tracking-widest text-accent bg-accent/5">SteelCore™</th>
                  <th className="text-left p-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">Traditional</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "" : "bg-background/50"}>
                    <td className="p-4 text-sm font-medium text-primary">{row.label}</td>
                    <td className="p-4 text-sm font-semibold text-primary bg-accent/5">
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        {row.steel}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-destructive/50" />
                        {row.trad}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-border">
            <p className="text-xs text-muted-foreground opacity-60">
              Sources: PostMaster+ ASTM A-653 spec, Master Halco wind rating (ASCE 7-10), USDA Forest Products Lab, InterNACHI, KC frost line code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
