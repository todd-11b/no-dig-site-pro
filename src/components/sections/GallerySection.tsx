import { motion } from "framer-motion";
import completedFence from "@/assets/completed-fence.jpg";

const projects = [
  { city: "Overland Park, KS", type: "Wood" },
  { city: "Lee's Summit, MO", type: "Vinyl" },
  { city: "Olathe, KS", type: "Wood" },
  { city: "Lenexa, KS", type: "Aluminum" },
  { city: "Shawnee, KS", type: "Wood" },
  { city: "Kansas City, MO", type: "Chain Link" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <span className="text-cta text-accent mb-4 block">Our Work</span>
          <h2 className="text-section-heading">Recent Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <img
                src={completedFence}
                alt={`${project.type} fence in ${project.city}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4 pt-12">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">{project.type}</span>
                <p className="text-sm text-primary-foreground font-medium">{project.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
