import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-section-heading mb-4">Thank You!</h1>
            <p className="text-body mb-8">
              Your quote request has been received. Here's what happens next:
            </p>

            <div className="card-surface p-8 text-left mb-8">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-primary">We review your request</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours of submission</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-primary">Schedule your free on-site estimate</p>
                    <p className="text-sm text-muted-foreground">We'll walk your yard and assess the project</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-primary">Receive your written quote</p>
                    <p className="text-sm text-muted-foreground">Clear, detailed, no surprises</p>
                  </div>
                </li>
              </ol>
            </div>

            <p className="text-sm text-muted-foreground mb-4">Need to reach us sooner?</p>
            <a
              href="tel:8166232363"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              (816) 623-2363
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
