export const ultimasNoticias = `
  query ultimas($first: Int) {
    posts(first: $first) {
      edges {
        node {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl(size: MEDIUM_LARGE)
            }
          }
          campos {
            descripcionDestacado
            volanta
          }
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`