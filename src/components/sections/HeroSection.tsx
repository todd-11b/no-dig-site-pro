import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-install.jpg";

const pillars = [
  { word: "Faster.", proof: "Installed in hours — not days." },
  { word: "Cleaner.", proof: "No concrete. No torn-up yards." },
  { word: "Stronger.", proof: "4× the hold of a traditional post." },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Beautiful Kansas City home with fence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-24 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.04em] leading-[0.95] text-primary-foreground mb-8">
            Stronger fences.
            <br />
            No digging.
            <br />
            No yard damage.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-12 leading-relaxed"
        >
          The SteelCore™ No-Dig Post System. 4X stronger than concrete.
          Built for Kansas City weather.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Your Free Quote
          </Link>
          <a
            href="#how-it-works"
            className="border border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Three-word story strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="relative inline-block text-3xl md:text-4xl font-black text-primary-foreground tracking-tight">
                {pillar.word}
                {/* Orange underline that draws in */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 -bottom-1 w-full h-[3px] bg-accent origin-left rounded-full"
                />
              </span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.25 }}
                className="text-sm text-primary-foreground/50 mt-2 max-w-[180px] mx-auto"
              >
                {pillar.proof}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
