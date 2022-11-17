const postBySlug = `
  query postBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      postId
      slug
      title
      date
      uri
      prensaNumeros {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl(size: POST_THUMBNAIL)
        }
      }
      seo {
        opengraphTitle
        opengraphUrl
        metaDesc
      }
      content
      tags {
        edges {
          node {
            slug
            name
            id
          }
        }
      }
      autores {
        edges {
          node {
            name
            slug
            camposAutor {
              facebook
              instagram
              twitter
              imagen {
                mediaItemUrl
              }
            }
          }
        }
      }
      campos {
        bajada
        descripcionAutor
        epigrafe
        volanta
        descripcionDestacado
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
`
export default postBySlug