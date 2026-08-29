import { fetchGraphQL } from '@/lib/graphql-client';
import { GET_PAGE } from '@/lib/queries';
import { notFound } from 'next/navigation';

interface PageData {
  page: {
    title: string;
    slug: string;
    content: string;
    featuredImage: { sourceUrl: string; altText: string } | null;
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await fetchGraphQL<PageData>(GET_PAGE, { slug });

  if (!data?.page) {
    notFound();
  }

  const { page } = data;

  return (
    <main>
      {page.featuredImage && (
        <img src={page.featuredImage.sourceUrl} alt={page.featuredImage.altText || ''} />
      )}
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </main>
  );
}

