import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="section-padding-lg bg-background">
      <div className="container mx-auto text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-section-heading mb-4 md:mb-5">Ready for a fence that actually lasts?</h2>
          <p className="text-body mb-8 md:mb-12">Free estimate. No obligation. No pressure.</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              to="/estimate"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:brightness-110 transition-all"
            >
              Get My Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:8166232363"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-secondary transition-all"
            >
              <Phone className="w-4 h-4" />
              (816) 623-2363
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
