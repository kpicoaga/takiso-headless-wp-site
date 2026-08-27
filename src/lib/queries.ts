export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: SLUG) {
      id
      slug
      title
      seo {
        title
        metaDesc
        canonical
        opengraphTitle
        opengraphDescription
        opengraphImage {
          sourceUrl
          altText
        }
        twitterTitle
        twitterDescription
        twitterImage {
          sourceUrl
          altText
        }
        schema {
          raw
        }
      }
      flexibleContent {
        sections {
          ... on Page_Flexiblecontent_Sections_Hero {
            __typename
            title
            subtitle
            backgroundImage {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
            buttonText
            buttonUrl
          }
          ... on Page_Flexiblecontent_Sections_Testimonials {
            __typename
            testimonials {
              quote
              author
              role
              avatar {
                sourceUrl
                altText
              }
            }
          }
          ... on Page_Flexiblecontent_Sections_Cta {
            __typename
            heading
            description
            buttonText
            buttonUrl
            backgroundImage {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_PAGE_SLUGS = `
  query GetAllPageSlugs {
    pages {
      nodes {
        slug
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      excerpt
      date
      featuredImage {
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
      seo {
        title
        metaDesc
        canonical
        opengraphTitle
        opengraphDescription
        opengraphImage {
          sourceUrl
          altText
        }
        twitterTitle
        twitterDescription
        twitterImage {
          sourceUrl
          altText
        }
        schema {
          raw
        }
      }
      content
    }
  }
`;

export const GET_ALL_POST_SLUGS = `
  query GetAllPostSlugs {
    posts {
      nodes {
        slug
      }
    }
  }
`;

export const GET_ALL_POSTS_PREVIEW = `
  query GetAllPostsPreview {
    posts {
      nodes {
      slug
        title
        excerpt
        date
        featuredImage {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;
