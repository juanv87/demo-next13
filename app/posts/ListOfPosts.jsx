import Link from 'next/link'
import React from 'react'
import getUltimasNoticias from '../services/getUltimasNoticias'

const ListOfPosts = async () => {
  const posts = await getUltimasNoticias(15)
  return (
    posts.edges.map(post => (
      <article key={post.node.id}>
        <Link href={`/posts/${post.node.slug}`}>
          <h2 className="text-rose-600">{post.node.title}</h2>
        </Link>
      </article>
    ))
  )
}

export default ListOfPosts