import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-install.jpg";

const pillars = [
  { word: "Faster", proof: "Same-day install." },
  { word: "Cleaner", proof: "No concrete. No torn-up yards." },
  { word: "Stronger", proof: "8× the strength of a wood post." },
  { word: "Longer", proof: "Lasts 4× longer." },
];

const lines1 = ["Stronger fences.", "No digging.", "No yard damage."];
const lines2Flat = [
  "Faster. Same-day install.",
  "Cleaner. No torn-up yards.",
  "Stronger. 8× the strength.",
  "Longer. Lasts 4× longer.",
];
// Bold portion ends at first ". " + 1 char
const lines2BoldLen = lines2Flat.map((l) => l.indexOf(". ") + 1);

function useTypewriter(lines: string[], charSpeed = 45, lineDelay = 300) {
  const [displayed, setDisplayed] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    const allChars: { lineIdx: number; charIdx: number }[] = [];
    lines.forEach((line, li) => {
      line.split("").forEach((_, ci) => {
        allChars.push({ lineIdx: li, charIdx: ci });
      });
      // add a pause marker between lines
      if (li < lines.length - 1) {
        for (let p = 0; p < Math.round(lineDelay / charSpeed); p++) {
          allChars.push({ lineIdx: -1, charIdx: -1 });
        }
      }
    });

    setDisplayed([]);
    let i = 0;
    const tick = () => {
      if (cancelled || i >= allChars.length) return;
      const { lineIdx, charIdx } = allChars[i];
      if (lineIdx >= 0) {
        setDisplayed((prev) => {
          const next = [...prev];
          while (next.length <= lineIdx) next.push("");
          next[lineIdx] = lines[lineIdx].slice(0, charIdx + 1);
          return next;
        });
      }
      i++;
      setTimeout(tick, charSpeed);
    };
    tick();
    return () => { cancelled = true; };
  }, [lines, charSpeed, lineDelay]);

  return displayed;
}

export default function HeroSection() {
  const [phase, setPhase] = useState<"headline" | "pillars">("headline");
  const activeLines = phase === "headline" ? lines1 : lines2;
  const typed = useTypewriter(activeLines, 45, 300);

  useEffect(() => {
    const timer = setTimeout(() => setPhase("pillars"), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Beautiful Kansas City home with fence"
          className="hidden md:block w-full h-full object-cover"
        />
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
        <div className="max-w-4xl min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex items-center justify-center mb-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.05em] leading-[0.92] text-primary-foreground">
            {(typed.length > 0 ? typed : [""]).map((line, i) => (
              <span key={`${phase}-${i}`} className="block">
                {line}
                {i === typed.length - 1 && (
                  <span className="inline-block w-[3px] h-[0.85em] bg-primary-foreground/80 ml-1 animate-pulse align-middle" />
                )}
              </span>
            ))}
          </h1>
        </div>

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

    </section>
  );
}
