import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-install.jpg";

const pillars = [
  { word: "Faster", proof: "Installed in hours — not days." },
  { word: "Cleaner", proof: "No concrete. No torn-up yards." },
  { word: "Stronger", proof: "4× the hold of a traditional post." },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Rotating word + proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 h-24 flex flex-col items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl md:text-4xl font-bold text-accent tracking-tight">
                {pillars[activeIndex].word}.
              </span>
              <span className="text-base md:text-lg text-primary-foreground/50 mt-2 font-light">
                {pillars[activeIndex].proof}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex gap-2 mt-5">
            {pillars.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-accent w-6"
                    : "bg-primary-foreground/30"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
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
      </div>
    </section>
  );
}
