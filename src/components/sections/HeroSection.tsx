import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wind, Star, MapPin, Droplets, Shield, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-install.jpg";

const stats = [
  { icon: Wind, value: "110+", label: "MPH Wind Rated" },
  { icon: CheckCircle, value: "500+", label: "Fences Installed" },
  { icon: Star, value: "4.9★", label: "Google Rating" },
  { icon: MapPin, value: "KC", label: "Locally Owned" },
  { icon: Droplets, value: "0", label: "Concrete Used" },
];

const trustBadges = ["Licensed & Insured", "Clean Site Guarantee", "PostMaster+® Lifetime Warranty"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 section-padding-lg overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/85 to-card/40" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-cta text-accent mb-4">
              SteelCore™ No-Dig Post System
            </span>
            <h1 className="text-display text-primary mb-6">
              Stronger fences. <br />
              <span className="text-accent">No digging.</span> <br />
              No yard damage.
            </h1>
            <p className="text-body max-w-lg mb-8">
              The SteelCore™ No-Dig Post System. 4X stronger than concrete. Built for Kansas City weather.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-cta hover:brightness-110 transition-all shadow-lift hover:shadow-lift-hover hover:-translate-y-0.5"
            >
              Get Your Free Quote
            </Link>
            <a
              href="#how-it-works"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-cta hover:bg-primary hover:text-primary-foreground transition-all"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-6 md:gap-8 mb-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <stat.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-bold text-primary tabular-nums">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-primary/5 px-3 py-1.5 rounded-full"
              >
                <Shield className="w-3 h-3 text-accent" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
