import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import HiddenProblemSection from "@/components/sections/HiddenProblemSection";
import EngineeringDataSection from "@/components/sections/EngineeringDataSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import InstallComparisonSection from "@/components/sections/InstallComparisonSection";
import ComparisonTableSection from "@/components/sections/ComparisonTableSection";
import PostMasterSection from "@/components/sections/PostMasterSection";
import CostComparisonSection from "@/components/sections/CostComparisonSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { motion } from "framer-motion";

export default function NoDigPage() {
  return (
    <>
      <PageMeta
        title="No-Dig SteelCore™ Fence Posts | Abrams Fence Co. Kansas City"
        description="Discover how the SteelCore™ No-Dig post system installs fences 4× stronger than concrete — no holes, no mess, no yard damage."
        canonical="https://abramsfence.com/no-dig"
      />
      <Header />
      <main className="pt-20 pb-16 lg:pb-0">
        <section className="section-padding-lg">
          <div className="container mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-cta text-accent mb-4 block">Our Flagship Method</span>
              <h1 className="text-display text-primary mb-6">
                SteelCore™ No-Dig Fence Installation in Kansas City
              </h1>
              <p className="text-body text-lg">
                The science behind a fence that never rots, never leans, and never needs replacement. Driven steel, undisturbed soil, zero concrete.
              </p>
            </motion.div>
          </div>
        </section>

        <HiddenProblemSection />
        <EngineeringDataSection />
        <HowItWorksSection />
        <InstallComparisonSection />
        <ComparisonTableSection />
        <PostMasterSection />
        <CostComparisonSection />

        {/* When we use concrete */}
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-heading mb-6">When we use concrete instead</h2>
              <p className="text-body mb-4">
                We're honest about our method. In rare cases — such as extremely sandy soil, certain gate and corner posts, or specific structural requirements — concrete may be the better choice. When that's the case, we tell you upfront. No upsell. No hidden agenda.
              </p>
              <p className="text-body">
                Our goal isn't to sell you No-Dig. It's to build you a fence that lasts. In 95%+ of Kansas City installations, driven steel is the superior method.
              </p>
            </motion.div>
          </div>
        </section>

        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
