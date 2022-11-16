import { ultimasNoticias } from "./ultimasNoticias"

const getUltimasNoticias = (first) => {
  return fetch('https://admin.prensaobrera.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    next: {
      revalidate: 10
    },
    body: JSON.stringify({
      query: ultimasNoticias,
      variables: {
        first
      }
    })
  })
  .then(response => response.json())
  .then(response => response.data.posts)
}
export default getUltimasNoticias