'use client'

import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Volanta from './Volanta';

const TarjetaCuadradaConFoto = ({
  seccion,
  slug,
  title,
  descripcionDestacado,
  volanta,
  imagen,
}) => {
  return (
    <article className="container">
      <Volanta volanta={volanta} />
      {imagen && (
        <Link href={`/${seccion}/${slug}`}>
          <picture className="w-5 imagen">
            <Image
              alt={title}
              src={imagen}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={imagen}
            />
          </picture>
        </Link>
      )}
      <h3 className="font-sans font-semibold text-lg mb-2 leading-tight">
        <Link href={`/${seccion}/${slug}`}>{title}</Link>
      </h3>
      {descripcionDestacado && (
        <div className="descripcionDestacado">
          <p className="text-sm">{descripcionDestacado}</p>
        </div>
      )}
      <style jsx>{`
        .container {
          font-family: "Roboto", sans-serif;
          position: relative;
        }
        .descripcionDestacada p {
          font-size: 15px;
          line-height: 19px;
        }
        .imagen {
          border-top-width: 3px;
          border-color: var(--${seccion});
          background-color: #f3f3f3;
          display: flex;
          position: relative;
          width: 100%;
          height: 180px;
          margin-bottom: 10px;
        }
      `}</style>
    </article>
  );
};

export default TarjetaCuadradaConFoto