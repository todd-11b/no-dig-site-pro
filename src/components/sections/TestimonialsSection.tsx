import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Best fence company in Kansas City, hands down. The no-dig system was fascinating to watch — and our fence is rock solid.",
    author: "Mike T.",
    location: "Kansas City, MO",
  },
  {
    text: "I was skeptical about no concrete, but after seeing the engineering behind it, I'm a believer. Our yard looked untouched after installation.",
    author: "Jennifer L.",
    location: "Olathe, KS",
  },
  {
    text: "Fast, professional, and the fence looks amazing. They finished in one day and you'd never know they were here.",
    author: "David & Rachel K.",
    location: "Lee's Summit, MO",
  },
  {
    text: "After last year's storms took out our old fence, we went with Abrams and the SteelCore system. Not a single issue since.",
    author: "Tom R.",
    location: "Shawnee, KS",
  },
  {
    text: "From the moment I contacted them for a quote to the final installation, their professionalism and expertise were evident.",
    author: "Clerk S.",
    location: "Kansas City",
  },
  {
    text: "Their team demonstrated a high level of expertise and attention to detail from the start. They listened to my vision and provided a comprehensive plan.",
    author: "Celene T.",
    location: "Kansas City",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <p className="text-label text-accent mb-5">Reviews</p>
          <h2 className="text-section-heading">Built different. Reviewed to prove it.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card p-8"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="text-sm font-medium text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
