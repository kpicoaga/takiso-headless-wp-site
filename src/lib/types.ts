// Media types
export interface MediaItem {
  id: string;
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    width: number;
    height: number;
  };
}

// SEO types (Yoast / Rank Math)
export interface SEOData {
  title: string;
  metaDesc: string;
  canonical: string;
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphImage: MediaItem | null;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: MediaItem | null;
  schema: {
    raw: string;
  };
}

// ACF Flexible Content types
export interface HeroSection {
  __typename: string;
  title: string;
  subtitle: string;
  backgroundImage: MediaItem;
  buttonText: string;
  buttonUrl: string;
}

export interface TestimonialsSection {
  __typename: string;
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    avatar: MediaItem;
  }>;
}

export interface CTASection {
  __typename: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  backgroundImage: MediaItem | null;
}

export type FlexibleSection = HeroSection | TestimonialsSection | CTASection;

export interface FlexibleContent {
  sections: FlexibleSection[];
}

// Page types
export interface Page {
  id: string;
  slug: string;
  title: string;
  seo: SEOData;
  flexibleContent: FlexibleContent;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage: MediaItem | null;
  seo: SEOData;
  content: string;
}
