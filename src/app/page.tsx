export const dynamic = 'force-dynamic';

import { fetchGraphQL } from '@/lib/graphql-client';
import HeroSection from '@/components/HeroSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import PerformanceSection from '@/components/PerformanceSection';
import PricingSection from '@/components/PricingSection';
import AdditionalServicesSection from '@/components/AdditionalServicesSection';
import ServicesSection from '@/components/ServicesSection';

interface PageData {
  page: {
    title: string;
    fieldgrouptakiso: {
      tituloDelHeroTakiso: string;
      subtituloDelHero: string;
      imagenDelHero: {
        node: {
          sourceUrl: string;
        };
      } | null;
      textoDelBoton: string;
      urlDelBoton: string;
    };
  };
}

const GET_HOME_PAGE = `
  query GetHomePage {
    page(id: "home", idType: URI) {
      title
      fieldgrouptakiso {
        tituloDelHeroTakiso
        subtituloDelHero
        imagenDelHero {
          node {
            sourceUrl
          }
        }
        textoDelBoton
        urlDelBoton
      }
    }
  }
`;

export default async function Home() {
  const { page } = await fetchGraphQL<PageData>(GET_HOME_PAGE);
  const acf = page.fieldgrouptakiso;

  return (
    <>
      <HeroSection
        titulo={acf.tituloDelHeroTakiso}
        subtitulo={acf.subtituloDelHero}
        imagenUrl={acf.imagenDelHero?.node?.sourceUrl}
        textoBoton={acf.textoDelBoton}
        urlBoton={acf.urlDelBoton}
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
