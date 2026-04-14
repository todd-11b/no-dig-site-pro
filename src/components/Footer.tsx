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
      <div className="container mx-auto px-5 md:px-8 py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <img src="/images/abrams-logo.png" alt="Abrams Fence Co." className="h-8 md:h-9 mb-4 md:mb-5 brightness-200" />
            <p className="text-xs md:text-sm leading-relaxed text-background/40 mb-6 md:mb-8">
              Kansas City's premier fence installer. SteelCore™ No-Dig Post System.
            </p>
            <div className="space-y-2.5 md:space-y-3 text-xs md:text-sm">
              <a href="tel:8166232363" className="flex items-center gap-2 text-background/50 hover:text-background/80 transition-colors">
                <Phone className="w-3.5 h-3.5" /> (816) 623-2363
              </a>
              <a href="mailto:info@AbramsFence.com" className="flex items-center gap-2 text-background/50 hover:text-background/80 transition-colors">
                <Mail className="w-3.5 h-3.5" /> info@AbramsFence.com
              </a>
              <div className="flex items-start gap-2 text-background/50">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                1026 Hickory St., Kansas City, MO 64101
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label text-background/30 mb-4 md:mb-5">Quick Links</h4>
            <ul className="space-y-2 md:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-xs md:text-sm text-background/50 hover:text-background/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="col-span-2 lg:col-span-2">
            <h4 className="text-label text-background/30 mb-4 md:mb-5">Service Areas</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-1 md:gap-y-1.5">
              {serviceAreas.map((area) => (
                <span key={area} className="text-xs md:text-sm text-background/40">{area}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 md:mt-16 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-[11px] md:text-xs text-background/30">© 2026 Abrams Fence Company. All rights reserved.</p>
          <div className="flex gap-3 md:gap-4 text-[11px] md:text-xs text-background/30">
            <span>Licensed & Insured</span>
            <span>·</span>
            <span>SteelCore™ No-Dig System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
