import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const panels = [
  {
    word: "Faster",
    proof: "Same-day install",
    // Pexels stock video of fast construction/driving
    video: "https://videos.pexels.com/video-files/5765085/5765085-uhd_1440_2560_30fps.mp4",
  },
  {
    word: "Cleaner",
    proof: "No concrete. No torn-up yards.",
    // Clean yard / landscaping video
    video: "https://videos.pexels.com/video-files/3728927/3728927-uhd_2560_1440_24fps.mp4",
  },
  {
    word: "Stronger",
    proof: "8× the strength of wood",
    // Steel / industrial strength visual
    video: "https://videos.pexels.com/video-files/5765076/5765076-uhd_1440_2560_30fps.mp4",
  },
];

export default function HeroConceptSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-primary overflow-hidden">
      {/* Three panels */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 min-h-0">
        {panels.map((panel, i) => (
          <motion.div
            key={panel.word}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="relative flex items-center justify-center overflow-hidden group cursor-default"
          >
            {/* Video background */}
            <video
              src={panel.video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/45 transition-colors duration-500" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 md:py-0">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                className="text-6xl sm:text-7xl md:text-6xl lg:text-8xl font-black tracking-[-0.05em] text-primary-foreground leading-none"
              >
                {panel.word}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.2 }}
                className="text-sm md:text-base text-primary-foreground/60 mt-3 font-light tracking-wide"
              >
                {panel.proof}
              </motion.span>
            </div>

            {/* Divider line between panels (desktop) */}
            {i < 2 && (
              <div className="hidden md:block absolute right-0 top-[15%] bottom-[15%] w-px bg-primary-foreground/10" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom bar with tagline + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 bg-primary-foreground/5 backdrop-blur-md border-t border-primary-foreground/10"
      >
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/80 text-lg md:text-xl font-light tracking-tight">
            No digging. No yard damage. Just a better fence.
          </p>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
          >
            Get Your Free Quote
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
