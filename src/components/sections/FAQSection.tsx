import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does fence installation take?",
    a: "Most residential fences are installed in 1–2 days. The SteelCore™ system is faster than traditional methods since there's no digging or concrete curing time.",
  },
  {
    q: "What is a no-dig fence post?",
    a: "Instead of digging holes and pouring concrete, our SteelCore™ system uses a hydraulic driver to push steel posts directly into the ground. This creates a stronger anchor through soil compression and skin friction — without disturbing your yard.",
  },
  {
    q: "Is the SteelCore™ system really stronger than concrete?",
    a: "Yes. Steel has a yield strength of 250–420 MPa compared to wood's 41 MPa. Our driven steel posts are rated for 110+ MPH winds, while traditional wood-in-concrete posts fail at approximately 49 MPH. In KC's clay-heavy soil, driven posts anchor through natural compression. Concrete actually accelerates rot by trapping moisture against the post.",
  },
  {
    q: "The price is higher than I expected.",
    a: "Many companies use cheaper methods, but they leave behind torn-up yards, mud piles, and inconsistent posts. We specialize in clean installation and long-term durability. Most customers choose Abrams because they want the job done right the first time.",
  },
  {
    q: "Another company is cheaper.",
    a: "Many lower-priced companies still dig traditional holes and use heavy equipment that damages yards. Our No-Dig method and Clean Site Guarantee eliminate the mess and yard repairs. That's where most of the value comes from.",
  },
  {
    q: "We're getting multiple quotes.",
    a: "Absolutely. Just make sure every quote includes yard protection, cleanup standards, installation method, and warranty. Those are the items where most contractors cut corners.",
  },
  {
    q: "Do you handle HOA approvals?",
    a: "Yes. We prepare the full HOA submission package — plot plan, material specs, height/style documentation, setback verification — so you're not stuck in paperwork limbo.",
  },
  {
    q: "What about my sprinklers?",
    a: "Our No-Dig method means we're not augering through underground lines. 'Fewer damaged sprinkler lines' is one of the top five documented advantages of driven-post installation. We mark utilities and flag irrigation before starting.",
  },
  {
    q: "Do you handle obtaining permits?",
    a: "Yes, we can assist you in obtaining the necessary permits for your fence installation. Our team is familiar with local regulations and will ensure that your project complies with all applicable codes.",
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
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-cta text-accent mb-4 block">FAQ</span>
          <h2 className="text-section-heading">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="card-surface overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-semibold text-primary pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
