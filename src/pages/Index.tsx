import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tracks from "@/components/Tracks";
import CTA from "@/components/CTA";
import Venue from "@/components/Venue";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Social from "@/components/Social";
import AboutAurum from "@/components/AboutAurum";
import Schedule from "@/components/Schedule";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutAurum />
      <Tracks />
      <Schedule />
      <CTA />
      <FAQ />
      <Venue />
      <Social />
      <Footer />
    </div>
  );
};

export default Index;
