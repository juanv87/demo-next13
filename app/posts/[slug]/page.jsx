import getPostBySlug from '../../services/getPostBySlug'

const Post = async ({params}) => {
  const { slug } = params
  const { title, slug: notaSlug } = await getPostBySlug(slug)
  return (
    <div>{title}, {notaSlug}</div>
  )
}

export default Post