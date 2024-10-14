import BackgroundWrapper from "@/components/BackgroundWrapper";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <BackgroundWrapper>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
      </div>
      <HeroSection />
      <FooterSection />
    </BackgroundWrapper>
  );
}
