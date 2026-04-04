import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import EstimateCalculator from "@/components/sections/EstimateCalculator";

export default function EstimatePage() {
  return (
    <>
      <PageMeta
        title="Instant Fence Estimate | Abrams Fence Co."
        description="Get an instant ballpark fence estimate. No obligation, no spam."
        noindex
      />
      <Header />
      <main className="pt-20 pb-16 lg:pb-0">
        <EstimateCalculator />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
