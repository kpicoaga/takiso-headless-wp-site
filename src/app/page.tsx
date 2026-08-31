export const dynamic = 'force-dynamic';

import HeroSection from '@/components/HeroSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import PerformanceSection from '@/components/PerformanceSection';
import PricingSection from '@/components/PricingSection';
import AdditionalServicesSection from '@/components/AdditionalServicesSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <>
      <HeroSection
        titulo="Custom Websites Built for Performance"
        subtitulo="We design and develop high-performance WordPress and headless sites that drive results."
        textoBoton="Get Started"
        urlBoton="/contact"
      />
      <WhatWeDoSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <PerformanceSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <ServicesSection />
      <AdditionalServicesSection />
    </>
  );
}
