import postById from './postBySlug'

const getPostBySlug = (slug: string) => {
  return fetch('https://admin.prensaobrera.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    next: {
      revalidate: 10
    },
    body: JSON.stringify({ query: postById, variables: { slug } })
  })
    .then(res => res.json())
    .then(res => res.data.post)
}

export default getPostBySlug