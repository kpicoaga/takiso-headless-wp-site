import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_PAGE } from '@/lib/queries';
import { notFound } from 'next/navigation';

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
    featuredImage: { sourceUrl: string; altText: string } | null;
    acfFields: Record<string, unknown>;
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchGraphQL<PageData>(GET_PAGE, { slug: params.slug });

  if (!data?.page) {
    notFound();
  }

  const { page } = data;

  // page.acfFields contains all your ACF fields as a plain object
  // Build your UI from here

  return (
    <>
      {page.seo?.schema?.raw && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: page.seo.schema.raw }}
        />
      )}
      <main>
        <h1>{page.title}</h1>
        <pre>{JSON.stringify(page.acfFields, null, 2)}</pre>
      </main>
    </>
  );
}
