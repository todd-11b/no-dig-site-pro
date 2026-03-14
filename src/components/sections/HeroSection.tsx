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
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Beautiful Kansas City home with fence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/65" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-32 pb-40 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.05em] leading-[0.92] text-primary-foreground mb-8">
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
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-primary-foreground/60 max-w-lg mb-14 leading-relaxed font-light"
        >
          The SteelCore™ No-Dig Post System. 4× stronger than concrete.
          Built for Kansas City weather.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-24"
        >
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-10 py-4 rounded-full text-sm font-semibold tracking-wide hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Your Free Quote
          </Link>
          <a
            href="#how-it-works"
            className="border border-primary-foreground/20 text-primary-foreground px-10 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Three-word story */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="relative inline-block text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">
                {pillar.word}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 1.05 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 -bottom-1.5 w-full h-[2px] bg-accent origin-left rounded-full"
                />
              </span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
                className="text-sm text-primary-foreground/40 mt-3 max-w-[180px] mx-auto font-light"
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
