import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-install.jpg";

const pillars = [
  { word: "Faster", proof: "Same-day install." },
  { word: "Cleaner", proof: "No concrete. No torn-up yards." },
  { word: "Stronger", proof: "8× the strength of a wood post." },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Desktop: photo */}
        <img
          src={heroImg}
          alt="Beautiful Kansas City home with fence"
          className="hidden md:block w-full h-full object-cover"
        />
        {/* Mobile: video */}
        <iframe
          src="https://player.vimeo.com/video/846054082?autoplay=1&loop=1&muted=1&background=1"
          className="md:hidden w-full h-full absolute inset-0"
          style={{ transform: "scale(2)", transformOrigin: "center center" }}
          allow="autoplay"
          title="Fence installation video"
        />
        <div className="absolute inset-0 bg-primary/65" />
      </div>

      {/* Main content - centered */}
      <div className="relative z-10 flex-1 container mx-auto px-6 md:px-8 pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.05em] leading-[0.92] text-primary-foreground mb-10">
            Stronger fences.
            <br />
            No digging.
            <br />
            No yard damage.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Trust bar at bottom */}
      <div className="relative z-10 bg-primary-foreground/10 backdrop-blur-md border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-primary-foreground/15">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.3 + i * 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center py-5 sm:py-6 px-4"
              >
                <span className="text-lg md:text-xl font-bold text-accent tracking-tight">
                  {pillar.word}
                </span>
                <span className="text-xs md:text-sm text-primary-foreground/60 mt-1 font-light">
                  {pillar.proof}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}