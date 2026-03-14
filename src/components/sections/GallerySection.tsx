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
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <p className="text-label text-accent mb-5">Our Work</p>
          <h2 className="text-section-heading">Recent Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={completedFence}
                alt={`${project.type} fence in ${project.city}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-medium tracking-wide text-accent">{project.type}</span>
                <p className="text-sm text-primary-foreground/80 font-medium">{project.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
