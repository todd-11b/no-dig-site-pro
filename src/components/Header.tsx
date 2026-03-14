import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "SteelCore™", href: "/no-dig" },
  { label: "Fence Types", href: "/fence-types" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBg = scrolled || !isHome || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBg
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/abrams-logo.png"
            alt="Abrams Fence Co."
            className={`h-9 w-auto transition-all duration-500 ${
              !showBg ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-colors ${
                showBg
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:8166232363"
            className={`flex items-center gap-2 text-[13px] font-medium transition-colors ${
              showBg
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            (816) 623-2363
          </a>
          <Link
            to="/contact"
            className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
              showBg
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-accent text-accent-foreground hover:brightness-110"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            showBg ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] font-medium text-foreground py-3"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:8166232363"
                className="flex items-center gap-2 text-[15px] font-medium text-foreground py-3 border-t border-border mt-2 pt-4"
              >
                <Phone className="w-4 h-4" />
                (816) 623-2363
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
