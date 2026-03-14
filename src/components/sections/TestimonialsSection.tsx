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
    text: "From the moment I contacted them for a quote to the final installation, their professionalism and expertise were evident. They took the time to understand my needs and provided valuable recommendations.",
    author: "Clerk S.",
    location: "Kansas City",
  },
  {
    text: "Their team demonstrated a high level of expertise and attention to detail from the start. They listened to my vision and provided a comprehensive plan that perfectly aligned with my needs.",
    author: "Celene T.",
    location: "Kansas City",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-cta text-accent mb-4 block">Reviews</span>
          <h2 className="text-section-heading">Built different. Reviewed to prove it.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-surface p-6 hover:-translate-y-0.5 transition-transform"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-primary">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
