import HeroSection from "@/components/Hero-section";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import WorksSection from "@/components/WorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrustedBy />
      <ServicesSection />
      <StatsSection />
      <WorksSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
