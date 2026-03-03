import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tracks from "@/components/Tracks";
import Prizes from "@/components/Prizes";
import Format from "@/components/Format";
import Evaluation from "@/components/Evaluation";
import CTA from "@/components/CTA";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Tracks />
      <Prizes />
      <Format />
      <Evaluation />
      <CTA />
      <Venue />
      <Footer />
    </div>
  );
};

export default Index;
