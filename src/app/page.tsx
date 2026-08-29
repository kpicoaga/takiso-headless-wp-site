export const dynamic = 'force-dynamic';
import { fetchGraphQL } from '@/lib/graphql-client';
import HeroSection from '@/components/HeroSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import Navigation from '@/components/Navigation';

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
  const heroImage = acf.imagenDelHero?.node?.sourceUrl;

  return (
    <>
      <Navigation />
      <HeroSection
        titulo={acf.tituloDelHeroTakiso}
        subtitulo={acf.subtituloDelHero}
        imagenUrl={heroImage}
        textoBoton={acf.textoDelBoton}
        urlBoton={acf.urlDelBoton}
      />
      <WhatWeDoSection />
    </>
  );
}