export const dynamic = 'force-dynamic';
import { fetchGraphQL } from '@/lib/graphql-client';

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt={acf.tituloDelHeroTakiso}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>
        )}

        {/* Solid background fallback */}
        {!heroImage && (
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900" />
        )}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {acf.tituloDelHeroTakiso}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              {acf.subtituloDelHero}
            </p>
            <a
              href={acf.urlDelBoton}
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105 active:scale-95"
            >
              {acf.textoDelBoton}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Placeholder for more sections */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {page.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Agrega más secciones aquí usando ACF.
          </p>
        </div>
      </section>
    </main>
  );
}