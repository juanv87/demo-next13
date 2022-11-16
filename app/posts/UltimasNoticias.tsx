'use client'

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

export const GET_ULTIMAS_NOTICIAS = gql`
  query ultimas {
    posts(first: 4) {
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
`;

const UltimasNoticias = () => {
  const { data, loading, error } = useQuery(GET_ULTIMAS_NOTICIAS);
  return (
    <section>
      <h1>Últimas Notícias</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.posts.edges.map(({ node }) => (
            <li key={node.id}>
              <Link href={`/posts/${node.slug}`}>{node.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default UltimasNoticias