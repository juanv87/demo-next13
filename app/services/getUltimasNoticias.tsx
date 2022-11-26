import { ultimasNoticias } from "./ultimasNoticias"

const getUltimasNoticias = (first) => {
  return fetch(process.env.WORDPRESS_API_URL, {
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