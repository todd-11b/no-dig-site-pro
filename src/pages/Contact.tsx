import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import EstimateCalculator from "@/components/sections/EstimateCalculator";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = (formData.get("name") as string) || "";
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ");

    try {
      const { data, error } = await supabase.functions.invoke("submit-lead", {
        body: {
          firstName,
          lastName,
          phone: formData.get("phone") as string,
          email: formData.get("email") as string,
          address: formData.get("address") as string,
          notes: formData.get("notes") as string,
          source: "Website Contact Form",
        },
      });

      if (error) throw error;
      navigate("/thank-you");
    } catch (err) {
      console.error("Lead submission error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us at (816) 623-2363.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Full Name</label>
                    <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Phone</label>
                    <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="(816) 555-0123" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Email</label>
                    <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Property Address</label>
                    <input name="address" type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="123 Main St, Overland Park, KS" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Tell us about your project</label>
                    <textarea name="notes" rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none" placeholder="Fence type, length, any special requirements..." />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground py-4 rounded-lg text-cta hover:brightness-110 transition-all shadow-lift disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Quote"}
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