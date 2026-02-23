import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import UseCasesSection from "@/components/UseCasesSection";
import DemoSection from "@/components/DemoSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TechnologySection />
      <UseCasesSection />
      <DemoSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
