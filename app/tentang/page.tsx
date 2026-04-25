import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "./_components/HeroSection";
import FokusSection from "./_components/FokusSection";
import CaraKerjaSection from "./_components/CaraKerjaSection";
import KenapaSection from "./_components/KenapaSection";
import FilosofiSection from "./_components/FilosofiSection";
import BlogSection from "./_components/BlogSection";
import CtaSection from "./_components/CtaSection";

export default function TentangPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <FokusSection />
      <CaraKerjaSection />
      <KenapaSection />
      <FilosofiSection />
      <BlogSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}