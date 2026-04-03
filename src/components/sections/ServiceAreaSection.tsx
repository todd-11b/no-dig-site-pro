import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Kansas City MO", "Overland Park KS", "Leawood KS", "Kansas City KS", "Shawnee KS",
  "Olathe KS", "Blue Springs MO", "Lenexa KS", "Fairway KS", "Lee's Summit MO",
  "Independence MO", "Prairie Village KS", "Liberty MO", "Mission KS", "Raytown MO",
  "Grandview MO", "Merriam KS", "Gladstone MO", "Mission Hills KS", "Westwood KS",
];

export default function ServiceAreaSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-10 md:mb-20"
        >
          <p className="text-label text-accent mb-4 md:mb-5">Coverage</p>
          <h2 className="text-section-heading">Serving the Kansas City metro.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-56 md:h-80 bg-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198477.14793285047!2d-94.73680697!3d39.09932075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f75eafe99997%3A0x558525e66aaa51a2!2s1026%20Hickory%20St%2C%20Kansas%20City%2C%20MO%2064101!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Abrams Fence service area"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-2 py-0.5 md:py-1">
                <MapPin className="w-3 h-3 text-accent shrink-0" />
                <span className="text-xs md:text-sm text-muted-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
