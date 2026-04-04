import { Link } from "react-router-dom";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden h-16 bg-card/95 backdrop-blur-lg border-t border-border flex items-center px-3">
      <Link
        to="/estimate"
        className="flex-1 flex items-center justify-center bg-accent text-accent-foreground rounded-lg h-12 text-cta"
      >
        Get Your Free Quote
      </Link>
    </div>
  );
}
