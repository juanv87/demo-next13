const postBySlug = `
  query postBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
    }
  }
`
export default postBySlug