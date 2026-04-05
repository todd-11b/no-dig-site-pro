import { useEffect } from "react";
import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Star, Clock, CalendarCheck, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/gtag";

export default function ThankYouPage() {
  useEffect(() => {
    trackEvent("lead_booked", { page: "/thank-you" });
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact", { content_name: "Thank You Page" });
    }
  }, []);
  return (
    <>
      <PageMeta
        title="Thank You | Abrams Fence Co."
        description="Thank you for contacting Abrams Fence Company. We'll be in touch shortly with your free fence estimate."
      />
      <Header />
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl py-16">
          {/* Confirmation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-section-heading mb-3">You're All Set!</h1>
            <p className="text-body text-muted-foreground">
              Your quote request has been received. Here's exactly what happens next.
            </p>
          </motion.div>

          {/* What Happens Next — Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-surface p-8 mb-8"
          >
            <h2 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              What Happens Next
            </h2>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">1</span>
                <div>
                  <p className="font-semibold text-primary">We review your request</p>
                  <p className="text-sm text-muted-foreground">Within 24 hours, our team reviews your project details and prepares for your visit.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">2</span>
                <div>
                  <p className="font-semibold text-primary flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-accent" />
                    Free on-site estimate
                  </p>
                  <p className="text-sm text-muted-foreground">We walk your yard, take measurements, and assess soil conditions — usually takes about 30 minutes.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">3</span>
                <div>
                  <p className="font-semibold text-primary flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    Written quote delivered
                  </p>
                  <p className="text-sm text-muted-foreground">You'll receive a clear, itemized quote — no hidden fees, no pressure. Most quotes are delivered same-day.</p>
                </div>
              </li>
            </ol>
          </motion.div>

          {/* Review Pre-Ask */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-surface p-8 mb-8 border-l-4 border-accent"
          >
            <div className="flex items-start gap-4">
              <div className="flex gap-0.5 shrink-0 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div>
                <h2 className="text-lg font-bold text-primary mb-2">One Small Favor</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  After your fence is installed, we'd love a quick Google review. It takes 30 seconds and helps other KC homeowners find a fence company they can trust.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  We'll send you a reminder link after the job is complete — no pressure, just if you're happy with the work.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center space-y-4"
          >
            <p className="text-sm text-muted-foreground">While you wait, learn more about our process:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/no-dig"
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
              >
                How No-Dig Works
              </Link>
              <span className="text-border">|</span>
              <Link
                to="/fence-types"
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
              >
                Fence Styles & Materials
              </Link>
              <span className="text-border">|</span>
              <Link
                to="/about"
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
              >
                About Us
              </Link>
            </div>

            <div className="pt-6 border-t border-border mt-6">
              <p className="text-sm text-muted-foreground mb-2">Need to reach us sooner?</p>
              <a
                href="tel:8166232363"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                (816) 623-2363
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
