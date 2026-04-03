import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import FenceTypesSection from "@/components/sections/FenceTypesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function FenceTypesPage() {
  return (
    <>
      <PageMeta
        title="Fence Types & Styles | Abrams Fence Co. Kansas City"
        description="Browse wood, vinyl, chain link, and ornamental fence styles installed with our no-dig method. Serving the Kansas City metro area."
        canonical="https://abramsfence.com/fence-types"
      />
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
