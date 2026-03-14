import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex gap-0.5 mb-6 justify-center">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="text-lg lg:text-xl text-primary-foreground leading-relaxed mb-8 font-light">
            "We tried building a fence the traditional way in Rockhill — a KC neighborhood that lives up to its name. Every hole had rocks. The concrete was a mess. The yard was destroyed. So we found a better method: driven steel posts, no digging, no concrete. The fence went up faster, cleaner, and stronger than anything we'd ever seen. That experience is exactly why we started Abrams Fence — and it's the same method we use on every job."
          </blockquote>
          <div>
            <p className="text-sm font-semibold text-primary-foreground">The Abrams Fence Team</p>
            <p className="text-xs text-primary-foreground/50 mt-1">Kansas City, MO</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
