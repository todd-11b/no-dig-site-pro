import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs: { q: string; a: string | React.ReactNode }[] = [
  {
    q: "How long does fence installation take?",
    a: "Most residential fences are installed in 1–2 days. The SteelCore™ system is faster than traditional methods since there's no digging or concrete curing time.",
  },
  {
    q: "What is a no-dig fence post?",
    a: "Instead of digging holes and pouring concrete, our SteelCore™ system uses a pneumatic driver to push steel posts directly into the ground. This creates a stronger anchor through soil compression and skin friction — without disturbing your yard.",
  },
  {
    q: "Is the SteelCore™ system really stronger than concrete?",
    a: "Yes. Steel has a yield strength of 250–420 MPa compared to wood's 41 MPa. Our driven steel posts are rated for 110+ MPH winds, while traditional wood-in-concrete posts fail at approximately 49 MPH.",
  },
  {
    q: "How does your pricing compare to other fence companies?",
    a: <>Many companies use cheaper methods — digging traditional holes with heavy equipment that tears up yards, leaving mud piles and inconsistent posts. Our No-Dig method and Clean Site Guarantee eliminate the mess, yard repairs, and long-term post failure. Not sure what to look for? <a href="/How-to-Evaluate-Your-Fence-Contractor.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:brightness-110">Download our guide: How to Evaluate Your Fence Contractor →</a></>,
  },
  {
    q: "Do you handle HOA approvals?",
    a: "Yes. We prepare the full HOA submission package — plot plan, material specs, height/style documentation, setback verification — so you're not stuck in paperwork limbo.",
  },
  {
    q: "What about my sprinklers?",
    a: "Our No-Dig method means we're not augering through underground lines. We mark utilities and flag irrigation before starting.",
  },
  {
    q: "Do you handle obtaining permits?",
    a: "Yes, we assist with all necessary permits. Our team is familiar with local regulations and will ensure your project complies with all applicable codes.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the entire Kansas City metro including Kansas City MO, Overland Park KS, Leawood KS, Olathe KS, Shawnee KS, Blue Springs MO, Lenexa KS, Lee's Summit MO, Independence MO, Prairie Village KS, Liberty MO, and more.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <p className="text-label text-accent mb-4 md:mb-5">FAQ</p>
          <h2 className="text-section-heading">Common questions.</h2>
        </motion.div>

        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
              >
                <span className="text-sm md:text-[15px] font-medium text-foreground pr-6 md:pr-8 group-hover:text-accent transition-colors">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="pb-5 md:pb-6 -mt-1">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
