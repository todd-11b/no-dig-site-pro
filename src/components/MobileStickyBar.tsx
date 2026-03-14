import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden h-16 bg-card/95 backdrop-blur-lg border-t border-border flex items-center gap-2 px-3">
      <a
        href="tel:8166232363"
        className="flex-[2] flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg h-12 text-cta"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex-[3] flex items-center justify-center bg-accent text-accent-foreground rounded-lg h-12 text-cta"
      >
        Get Your Free Quote
      </Link>
    </div>
  );
}
