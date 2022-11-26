import Link from "next/link";
import React from "react";
import TarjetaCuadradaConFoto from "./tarjetas/TarjetaCuadradaConFoto";
import getUltimasNoticias from "../services/getUltimasNoticias";

const UltimasNoticias = async () => {
  const posts = await getUltimasNoticias(15);
  return (
    <section className="grid gap-4 grid-cols-12">
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
          <div key={id} className="col-span-12 md:col-span-3">
            <TarjetaCuadradaConFoto
              slug={slug}
              title={title}
              seccion={seccion}
              descripcionDestacado={descripcionDestacado}
              volanta={volanta}
              imagen={sourceUrl}
            />
          </div>
        )
      )}
    </section>
  );
};

export default UltimasNoticias;
