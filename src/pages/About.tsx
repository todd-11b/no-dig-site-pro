import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { motion } from "framer-motion";
import { Check, Heart, Eye, MessageSquare, Wrench, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Heart, title: "Clean In, Clean Out", desc: "Every job ends with a photo-documented cleanup." },
  { icon: Eye, title: "Respect the Yard", desc: "Protect grass, mulch, landscaping, sprinklers." },
  { icon: MessageSquare, title: "Over-Communicate Everything", desc: "Confirmation texts, schedule updates, daily progress." },
  { icon: Wrench, title: "Show Up Ready", desc: "Trucks stocked, tools clean, crew on time." },
  { icon: Shield, title: "Own the Outcome", desc: "If we break something, we fix it. No excuses." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-16 lg:pb-0">
        <section className="section-padding-lg">
          <div className="container mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-cta text-accent mb-4 block">About Us</span>
              <h1 className="text-display text-primary mb-6">A Backyard Problem. A Better Solution.</h1>
              <p className="text-body text-lg mb-8">
                We tried building a fence the traditional way in a KC neighborhood called Rockhill. The name says it all. Every hole had rocks in it. The concrete was a mess. The yard was destroyed. So we found a better method — driven steel posts, no digging, no concrete — and the fence went up faster, cleaner, and stronger than anything we'd seen.
              </p>
              <p className="text-body mb-6">
                That's how Abrams Fence started. Not with a business plan. With a backyard problem and a better solution.
              </p>
              <p className="text-body mb-6">
                Our method: the SteelCore™ No-Dig Post System with PostMaster+® structural steel. 4X stronger than concrete. 110+ MPH wind rated. Lifetime warranty. And when No-Dig isn't the right method for a specific yard, we say so.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-section-heading mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-surface p-6"
                >
                  <v.icon className="w-6 h-6 text-accent mb-3" />
                  <h3 className="text-base font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding-lg bg-primary text-primary-foreground text-center">
          <div className="container mx-auto max-w-xl">
            <h2 className="text-section-heading text-primary-foreground mb-4">Ready to see the difference?</h2>
            <p className="opacity-70 mb-8">Free estimate. No obligation. No pressure.</p>
            <Link to="/contact" className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg text-cta hover:brightness-110 transition-all">
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
