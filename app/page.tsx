import Image from "next/image";
import HeroSection from "@/components/Hero-section";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="bg-white text-black flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
