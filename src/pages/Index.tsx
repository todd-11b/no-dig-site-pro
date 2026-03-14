import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
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
    </>
  );
};

export default Index;
