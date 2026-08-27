export const dynamic = 'force-dynamic';\nimport { fetchGraphQL } from '@/lib/graphql-client';

interface PageData {
  page: {
    title: string;
    slug: string;
    seo: {
      title: string;
      metaDesc: string;
      opengraphTitle: string;
      opengraphDescription: string;
      opengraphImage: { sourceUrl: string; altText: string } | null;
      schema: { raw: string };
    };
    acfFields: Record<string, unknown>;
  };
}

const GET_HOME_PAGE = `
  query GetHomePage {
    page(id: "home", idType: SLUG) {
      title
      slug
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphImage { sourceUrl altText }
        schema { raw }
      }
      acfFields
    }
  }
`;

export default async function Home() {
  const { page } = await fetchGraphQL<PageData>(GET_HOME_PAGE);

  // page.acfFields contains all your ACF fields as a plain object
  // Example: page.acfFields.hero_title, page.acfFields.hero_image, etc.
  // Build your UI from here

  return (
    <>
      {page.seo?.schema?.raw && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: page.seo.schema.raw }} />
      )}
      <main>
        <h1>{page.title}</h1>
        <pre>{JSON.stringify(page.acfFields, null, 2)}</pre>
      </main>
    </>
  );
}