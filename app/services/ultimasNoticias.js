export const ultimasNoticias = `
  query ultimas($first: Int) {
    posts(first: $first) {
      edges {
        node {
          id
          title
          slug
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