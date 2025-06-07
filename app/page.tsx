"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import IdeaSection from "@/components/IdeaSection";
import ResearchSection from "@/components/ResearchSection";
import MethodologySection from "@/components/MethodologySection";
import OutcomesSection from "@/components/OutcomesSection";
import InterfaceSection from "@/components/InterfaceSection";
import TechStackSection from "@/components/TechStackSection";
// import SafetySection from '@/components/SafetySection';
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <IdeaSection />
      <ResearchSection />
      <MethodologySection />
      <OutcomesSection />
      <InterfaceSection />
      <TechStackSection />
      {/* <SafetySection /> */}
      <TeamSection />
      <Footer />
    </main>
  );
}
