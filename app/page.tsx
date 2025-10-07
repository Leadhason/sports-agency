import Image from "next/image";
import HeroSection from "@/components/Hero-section";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-white text-black flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrustedBy />
      <ServicesSection />
    </div>
  );
}
