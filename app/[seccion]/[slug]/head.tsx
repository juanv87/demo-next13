import getPostBySlug from "../../services/getPostBySlug";

export default async function Head({ params }) {
  const { slug } = params;
  const { title } = await getPostBySlug(slug);
  return (
    <>
      <title>{title}</title>
    </>
  );
}
