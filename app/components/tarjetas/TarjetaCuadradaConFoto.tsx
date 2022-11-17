import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const TarjetaCuadradaConFoto = ({
  seccion,
  slug,
  title,
  descripcionDestacado,
  volanta,
  imagen,
}) => {
  return (
    <article className="border-t-4 border-rose-600">
      {descripcionDestacado}
      {volanta}
      {imagen && (
        <Link href={`/${seccion}/${slug}`}>
          <picture className="w-5 relative">
            <Image
              alt={title}
              src={imagen}
              placeholder="blur"
              blurDataURL={imagen}
              width={500}
              height={500}
            />
          </picture>
        </Link>
      )}
      <Link href={`/${seccion}/${slug}`}>
        <h2 className="text-rose-600">{title}</h2>
      </Link>
    </article>
  );
};

export default TarjetaCuadradaConFoto