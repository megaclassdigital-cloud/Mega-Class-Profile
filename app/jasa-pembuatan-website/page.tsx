"use client";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "./_components/HeroSection";
import ProblemSection from "./_components/ProblemSection";
import SolutionSection from "./_components/SolutionSection";
import ServicesSection from "./_components/ServicesSection";
import PricingSection from "./_components/PricingSection";
import WhyChooseSection from "./_components/WhyChooseSection";
import BenefitsSection from "./_components/BenefitsSection";
import ProcessSection from "./_components/ProcessSection";
import CtaSection from "./_components/CtaSection";
import MecaProductSpotlight from "@/components/MecaProductSpotlight";

export default function JasaPembuatanWebsitePage() {
  const [selectedCategory, setSelectedCategory] = useState("Landing Page");
  const pricingRef = useRef<HTMLDivElement>(null);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    // Scroll ke pricing section dengan smooth
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MecaProductSpotlight />
      <ServicesSection onSelectCategory={handleSelectCategory} />
      <div ref={pricingRef}>
        <PricingSection
          activeCategory={selectedCategory}
          setActiveCategory={setSelectedCategory}
        />
      </div>
      <WhyChooseSection />
      <BenefitsSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
