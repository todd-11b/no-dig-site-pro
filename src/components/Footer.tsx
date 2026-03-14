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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/images/abrams-logo.png" alt="Abrams Fence Co." className="h-10 mb-4 brightness-200" />
            <p className="text-sm leading-relaxed opacity-70 mb-6">
              Kansas City's premier fence installer. SteelCore™ No-Dig Post System. Stronger fences, no yard damage.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:8166232363" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" /> (816) 623-2363
              </a>
              <a href="mailto:info@AbramsFence.com" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4" /> info@AbramsFence.com
              </a>
              <div className="flex items-start gap-2 opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                1026 Hickory St., Kansas City, MO 64101
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Service Areas</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {serviceAreas.map((area) => (
                <span key={area} className="text-sm opacity-60">{area}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">© 2026 Abrams Fence Company. All rights reserved.</p>
          <div className="flex gap-4 text-xs opacity-50">
            <span>Licensed & Insured</span>
            <span>·</span>
            <span>PostMaster+® Lifetime Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
