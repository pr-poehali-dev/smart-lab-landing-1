import { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorks from '@/components/sections/HowItWorks';
import FounderQuote from '@/components/sections/FounderQuote';
import ReportExample from '@/components/sections/ReportExample';
import WhyTrustUs from '@/components/sections/WhyTrustUs';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import FloatingCTA from '@/components/sections/FloatingCTA';

const BOT_URL = "https://t.me/SmartLab_AiBot?start=link_Xc67zLyivn";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open(BOT_URL, '_blank');
  };

  const handleStepHover = (index: number | null) => {
    setHoveredStep(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-accent to-muted">
      <Header isScrolled={isScrolled} onCTAClick={handleCTAClick} />
      <HeroSection onCTAClick={handleCTAClick} />
      <HowItWorks hoveredStep={hoveredStep} onStepHover={handleStepHover} />
      <FounderQuote />
      <ReportExample />
      <WhyTrustUs />
      <Pricing onCTAClick={handleCTAClick} />
      <FAQ />
      <FinalCTA onCTAClick={handleCTAClick} />
      <Footer />
      <FloatingCTA onCTAClick={handleCTAClick} />
    </div>
  );
};

export default Index;
