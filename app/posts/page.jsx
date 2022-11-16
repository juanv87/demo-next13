
import React from 'react'
import ListOfPosts from './ListOfPosts'
import UltimasNoticias from './UltimasNoticias'

const PostsPage = async () => {
  return (
    <section>
      <h1>Posts</h1>
      <ListOfPosts />
      {/* <UltimasNoticias /> */}
    </section>
  )
}

export default PostsPage