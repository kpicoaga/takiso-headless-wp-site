// Minimal queries — ACF fields come back as a plain object in `acfFields`
export const GET_PAGE = `
  query GetPage($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;
export const GET_ALL_SLUGS = `
  query GetAllSlugs {
    pages {
      nodes {
        slug
      }
    }
  }
`;

