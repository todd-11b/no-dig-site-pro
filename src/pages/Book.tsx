import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

export default function BookPage() {
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
        title="Schedule Your Fence Consultation | Abrams Fence Co."
        description="Book a free fence consultation with Abrams Fence Company. Pick a time that works for you."
        noindex
      />
      <Header />
      <main className="pt-20 pb-16 lg:pb-0">
        <section className="section-padding-lg">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                Step 2
              </p>
              <h1 className="text-display text-primary mb-4">
                Schedule Your Consultation
              </h1>
              <p className="text-body max-w-lg mx-auto">
                Pick a time that works for you. We'll confirm your appointment and give you a detailed quote.
              </p>
            </motion.div>

            {hasEstimate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="rounded-xl bg-accent/5 border border-accent/20 p-4 mb-8 max-w-md mx-auto text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Your Estimate</p>
                <p className="text-2xl font-black text-accent mb-1">{estimateRange}</p>
                <div className="text-xs text-muted-foreground space-y-0.5">
                  <p>{estimateMaterial} · {estimateLength} ft</p>
                  {estimateGate !== "None" && <p>Gates: {estimateGate}</p>}
                  {estimateDemo === "yes" && <p>Includes demo &amp; haul-off</p>}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
            >
              <iframe
                src="https://links.opsaiworks.com/widget/booking/GZJr7oldzXIpGnqo0klp"
                title="Schedule a Fence Consultation"
                className="w-full"
                style={{ border: "none", minHeight: "750px" }}
                loading="lazy"
              />
            </motion.div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              No obligation. Free estimate included with every consultation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
