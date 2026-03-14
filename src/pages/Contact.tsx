import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import EstimateCalculator from "@/components/sections/EstimateCalculator";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-16 lg:pb-0">
        <section className="section-padding-lg">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="text-cta text-accent mb-4 block">Contact</span>
                <h1 className="text-display text-primary mb-6">Get Your Free Fence Quote</h1>
                <p className="text-body mb-10">
                  Use our instant calculator below or call us directly. No obligation. No pressure. Just a clear, honest estimate.
                </p>

                <div className="space-y-6">
                  <a href="tel:8166232363" className="flex items-center gap-4 text-primary hover:text-accent transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-bold">(816) 623-2363</p>
                    </div>
                  </a>
                  <a href="mailto:info@AbramsFence.com" className="flex items-center gap-4 text-primary hover:text-accent transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-bold">info@AbramsFence.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-bold text-primary">1026 Hickory St., Kansas City, MO 64101</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Hours</p>
                      <p className="font-bold text-primary">Mon–Fri 7AM–6PM, Sat 8AM–2PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card-surface p-8"
              >
                <h2 className="text-xl font-bold text-primary mb-6">Request Your Free Estimate</h2>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = "/thank-you"; }}>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Phone</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="(816) 555-0123" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Email</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Property Address</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="123 Main St, Overland Park, KS" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Tell us about your project</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none" placeholder="Fence type, length, any special requirements..." />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground py-4 rounded-lg text-cta hover:brightness-110 transition-all shadow-lift"
                  >
                    Get My Free Quote
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Free estimate. No obligation. We'll respond within 24 hours.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <EstimateCalculator />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
