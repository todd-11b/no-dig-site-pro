import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import FloatingQuoteButton from "@/components/FloatingQuoteButton";
import HeroSection from "@/components/sections/HeroSection";

import HiddenProblemSection from "@/components/sections/HiddenProblemSection";
import EngineeringDataSection from "@/components/sections/EngineeringDataSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import InstallComparisonSection from "@/components/sections/InstallComparisonSection";
import FenceTypesSection from "@/components/sections/FenceTypesSection";

import TestimonialsSection from "@/components/sections/TestimonialsSection";
import EstimateCalculator from "@/components/sections/EstimateCalculator";
import FAQSection from "@/components/sections/FAQSection";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <>
      <PageMeta
        title="Kansas City No-Dig Fence Installation — SteelCore™ | Abrams Fence Co."
        description="Abrams Fence Company installs fences 4× stronger than concrete with the SteelCore™ No-Dig Post System. No yard damage, no mess. Serving Kansas City metro."
        canonical="https://abramsfence.com/"
      />
      <Header />
      <main className="pb-16 lg:pb-0">
        <HeroSection />
        
        <HiddenProblemSection />
        <FenceTypesSection />
        <InstallComparisonSection />
        <HowItWorksSection />
        <EngineeringDataSection />
        
        <EstimateCalculator />
        <TestimonialsSection />
        <FAQSection />
        <ServiceAreaSection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileStickyBar />
      <FloatingQuoteButton />
    </>
  );
};

export default Index;
