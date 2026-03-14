import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import FenceTypesSection from "@/components/sections/FenceTypesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function FenceTypesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-16 lg:pb-0">
        <FenceTypesSection />
        <FinalCTASection />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
