import Hero from "@/components/Hero";
import QuebraDePadrao from "@/components/QuebraDePadrao";
import HowItWorks from "@/components/HowItWorks";
import PorQueExiste from "@/components/PorQueExiste";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import ProvaSocial from "@/components/ProvaSocial";
import ParaQuem from "@/components/ParaQuem";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <QuebraDePadrao />
      <Benefits />
      <HowItWorks />
      <PorQueExiste />
      <Pricing />
      <ProvaSocial />
      <ParaQuem />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default Index;
