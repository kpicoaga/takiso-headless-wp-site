import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_PAGE } from '@/lib/queries';
import { notFound } from 'next/navigation';

interface PageData {
  page: {
    title: string;
    slug: string;
    content: string;
    featuredImage: {
      node: {
        sourceUrl: string;
        altText: string;
      } | null;
    } | null;
  };
}

// Static files that should not be treated as WordPress pages
const SKIP_SLUGS = ['robots.txt', 'sitemap.xml', 'favicon.ico'];

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Skip GraphQL for non-WordPress routes like robots.txt
  if (SKIP_SLUGS.includes(slug)) {
    notFound();
  }

  const data = await fetchGraphQL<PageData>(GET_PAGE, { slug });

  if (!data?.page) {
    notFound();
  }

  const { page } = data;
  const heroImage = page.featuredImage?.node;

  return (
    <main>
      {heroImage && (
        <img
          src={heroImage.sourceUrl}
          alt={heroImage.altText || page.title}
          className="w-full h-64 object-cover"
        />
      )}
      <h1 className="text-3xl font-bold p-4">{page.title}</h1>
      <div className="p-4" dangerouslySetInnerHTML={{ __html: page.content }} />
    </main>
  );
}

