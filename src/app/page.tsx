export const dynamic = 'force-dynamic';
import { fetchGraphQL } from '@/lib/graphql-client';

interface PageData {
  page: {
    title: string;
    slug: string;
    content: string;
  };
}

const GET_HOME_PAGE = `
  query GetHomePage {
    page(id: "home", idType: URI) {
      title
      slug
      content
    }
  }
`;

export default async function Home() {
  const { page } = await fetchGraphQL<PageData>(GET_HOME_PAGE);

  return (
    <main>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </main>
  );
}