import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Tracks = lazy(() => import("@/components/Tracks"));
const CTA = lazy(() => import("@/components/CTA"));
const Venue = lazy(() => import("@/components/Venue"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));
const Social = lazy(() => import("@/components/Social"));
const AboutAurum = lazy(() => import("@/components/AboutAurum"));
const Schedule = lazy(() => import("@/components/Schedule"));
const Marquee = lazy(() => import("@/components/Marquee"));

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent relative selection:bg-gold/20 selection:text-gold-light">
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="h-32"></div>}>
          <Marquee />
          <AboutAurum />
          <Tracks />
          <Schedule />
          <CTA />
          <FAQ />
          <Venue />
          <Social />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
