import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { SuiteGrid } from "@/components/SuiteGrid";
import { FlagshipBlocks } from "@/components/FlagshipBlocks";
import { StudioStandard } from "@/components/StudioStandard";
import { PricingSummary } from "@/components/PricingSummary";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <SuiteGrid />
      <FlagshipBlocks />
      <StudioStandard />
      <PricingSummary />
      <Footer />
    </main>
  );
}