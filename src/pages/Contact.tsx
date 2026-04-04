import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function ContactPage() {
  const [searchParams] = useSearchParams();

  const estimateMaterial = searchParams.get("material");
  const estimateLength = searchParams.get("length");
  const estimateGate = searchParams.get("gate");
  const estimateDemo = searchParams.get("demo");
  const estimateRange = searchParams.get("estimate");
  const hasEstimate = !!estimateMaterial;

  return (
    <>
      <PageMeta
        title="Get a Free Fence Quote | Abrams Fence Co. Kansas City"
        description="Request a free no-obligation fence estimate from Abrams Fence Company. Same-day quotes, no-dig installation across Kansas City."
        canonical="https://abramsfence.com/contact"
      />
      <Header />
      <main className="pt-20 pb-16 lg:pb-0">
        <section className="section-padding-lg">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="text-cta text-accent mb-4 block">Contact</span>
                <h1 className="text-display text-primary mb-6">Get Your Free Fence Quote</h1>
                <p className="text-body mb-6">
                  Pick a time that works for you and we'll give you a detailed quote. No obligation. No pressure.
                </p>

                {hasEstimate && (
                  <div className="rounded-xl bg-accent/5 border border-accent/20 p-4 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Your Estimate</p>
                    <p className="text-2xl font-black text-accent mb-2">{estimateRange}</p>
                    <div className="text-xs text-muted-foreground space-y-0.5">
                      <p>{estimateMaterial} · {estimateLength} ft</p>
                      {estimateGate !== "None" && <p>Gates: {estimateGate}</p>}
                      {estimateDemo === "yes" && <p>Includes demo &amp; haul-off</p>}
                    </div>
                  </div>
                )}

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

              {/* Booking Calendar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="min-h-[700px]"
              >
                <iframe
                  src="https://links.opsaiworks.com/widget/booking/GZJr7oldzXIpGnqo0klp"
                  title="Schedule a Fence Consultation"
                  className="w-full h-full min-h-[700px] rounded-2xl border border-border"
                  style={{ border: "none" }}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
