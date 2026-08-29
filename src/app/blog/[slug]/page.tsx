export const dynamic = 'force-dynamic';
import { fetchGraphQL } from '@/lib/graphql-client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';

interface PostData {
  post: {
    id: string;
    title: string;
    slug: string;
    date: string;
    content: string;
    excerpt: string;
    featuredImage: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    } | null;
    author: {
      node: {
        name: string;
        avatar: {
          url: string;
        };
      };
    };
    categories: {
      nodes: {
        name: string;
        slug: string;
      }[];
    };
    tags: {
      nodes: {
        name: string;
        slug: string;
      }[];
    };
  };
}

const GET_POST = `
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      date
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
    }
  }
`;

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min de lectura`;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await fetchGraphQL<PostData>(GET_POST, { slug });

  if (!data?.post) {
    notFound();
  }

  const post = data.post;
  const heroImage = post.featuredImage?.node?.sourceUrl;

  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {heroImage ? (
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt={post.featuredImage?.node?.altText || post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />
          </div>
        ) : (
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          </div>
        )}

        <div className={`relative z-10 max-w-3xl mx-auto ${heroImage ? 'text-white' : ''}`}>
          <Link
            href="/blog"
            className={`inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors ${heroImage ? 'text-white/80 hover:text-white' : 'text-blue-600 hover:text-blue-800'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          {post.categories?.nodes?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.nodes.map((cat: { name: string; slug: string }) => (
                <span key={cat.slug} className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                  {cat.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                {post.author?.node?.name?.charAt(0) || 'T'}
              </div>
              <span className="font-medium">{post.author?.node?.name || 'Takiso'}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{getReadingTime(post.content)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags?.nodes?.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.nodes.map((tag: { name: string; slug: string }) => (
                <span key={tag.slug} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver todas las publicaciones
          </Link>
        </div>
      </div>
    </article>
  );
}