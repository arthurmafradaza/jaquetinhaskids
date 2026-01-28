import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import QualityProof from "@/components/QualityProof";
import ProductGallery from "@/components/ProductGallery";
import Testimonials from "@/components/Testimonials";
import Guarantees from "@/components/Guarantees";
import SizeGuide from "@/components/SizeGuide";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <QualityProof />
      <ProductGallery />
      <Testimonials />
      <Guarantees />
      <SizeGuide />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;