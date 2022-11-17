import Link from "next/link";
import React from "react";
import TarjetaCuadradaConFoto from "./tarjetas/TarjetaCuadradaConFoto";
import getUltimasNoticias from "../services/getUltimasNoticias";

const UltimasNoticias = async () => {
  const posts = await getUltimasNoticias(15);
  return (
    <section className="grid grid-cols-12">
      {posts.edges.map(
        ({
          node: {
            id,
            slug,
            title,
            featuredImage: {
              node: { sourceUrl },
            },
            campos: { descripcionDestacado, volanta },
            categories: {
              edges: [
                {
                  node: { slug: seccion },
                },
              ],
            },
          },
        }) => (
          <TarjetaCuadradaConFoto
            key={id}
            slug={slug}
            title={title}
            seccion={seccion}
            descripcionDestacado={descripcionDestacado}
            volanta={volanta}
            imagen={sourceUrl}
          />
        )
      )}
    </section>
  );
};

export default UltimasNoticias;
