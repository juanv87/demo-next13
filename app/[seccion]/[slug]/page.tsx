import Container from "../../components/Container";
import getPostBySlug from "../../services/getPostBySlug";

const Post = async ({ params }) => {
  const { slug } = params;
  const {
    title,
    content,
    slug: notaSlug,
    autores,
    campos: {
      bajada,
      descripcionAutor,
      epigrafe,
      volanta,
      descripcionDestacado,
    },
  } = await getPostBySlug(slug);
  return (
    <Container>
      {volanta && <small>{volanta}</small>}
      <h2
        className={` mt-2 md:mt-4 font-sans font-bold text-xl md:text-4xl leading-6 md:leading-10 ${
          bajada ? "mb-2" : "mb-2 md:mb-8"
        } text-gray-800`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {bajada && (
        <p className=" text-gray-600 text-sm italic border-solid border-b-1 border-gray-300 mb-5 pb-1">
          {bajada}
        </p>
      )}
      <section
        className={`${
          !descripcionAutor && "mb-5 md:mb-2"
        } flex justify-between md:content-start md:flex-start max-w-full items-center relative`}
      >
        {
          autores.edges.map(({ node: { name, slug: slugAutor, camposAutor: { facebook, instagram, twitter, imagen } } }) => (
            <div key={slugAutor} className="flex items-center">
              <p>{name}</p>
              <p>{imagen?.mediaItemUrl}</p>
            </div>
          ))
        }
      </section>
      {descripcionAutor && (
        <p className="text-xs md:text-sm italic text-gray-600 mb-2">
          {descripcionAutor}
        </p>
      )}
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </Container>
  );
};

export default Post;
