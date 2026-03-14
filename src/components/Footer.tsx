import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceAreas = [
  "Kansas City MO", "Overland Park KS", "Leawood KS", "Kansas City KS", "Shawnee KS",
  "Olathe KS", "Blue Springs MO", "Lenexa KS", "Fairway KS", "Lee's Summit MO",
  "Independence MO", "Prairie Village KS", "Liberty MO", "Mission KS", "Raytown MO",
  "Grandview MO", "Merriam KS", "Gladstone MO", "Mission Hills KS", "Westwood KS",
];

const quickLinks = [
  { label: "SteelCore™ No-Dig", href: "/no-dig" },
  { label: "Fence Types", href: "/fence-types" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Get a Quote", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/images/abrams-logo.png" alt="Abrams Fence Co." className="h-9 mb-5 brightness-200" />
            <p className="text-sm leading-relaxed text-background/40 mb-8">
              Kansas City's premier fence installer. SteelCore™ No-Dig Post System.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:8166232363" className="flex items-center gap-2.5 text-background/50 hover:text-background/80 transition-colors">
                <Phone className="w-3.5 h-3.5" /> (816) 623-2363
              </a>
              <a href="mailto:info@AbramsFence.com" className="flex items-center gap-2.5 text-background/50 hover:text-background/80 transition-colors">
                <Mail className="w-3.5 h-3.5" /> info@AbramsFence.com
              </a>
              <div className="flex items-start gap-2.5 text-background/50">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                1026 Hickory St., Kansas City, MO 64101
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label text-background/30 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/50 hover:text-background/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2">
            <h4 className="text-label text-background/30 mb-5">Service Areas</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1.5">
              {serviceAreas.map((area) => (
                <span key={area} className="text-sm text-background/40">{area}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/30">© 2026 Abrams Fence Company. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-background/30">
            <span>Licensed & Insured</span>
            <span>·</span>
            <span>PostMaster+® Lifetime Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
