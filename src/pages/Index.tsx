import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tracks from "@/components/Tracks";
import Format from "@/components/Format";
import CTA from "@/components/CTA";
import Venue from "@/components/Venue";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Tracks />
      <Format />
      <CTA />
      <FAQ />
      <Venue />
      <Footer />
    </div>
  );
};

export default Index;
