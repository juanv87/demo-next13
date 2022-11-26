import React, { Suspense } from 'react'
import Container from '../components/Container'
import UltimasNoticias from '../components/UltimasNoticias'

const PageUltimasNoticias = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <h1>Ultimas noticias</h1>
        <UltimasNoticias />
      </Container>
    </Suspense>
  )
}

export default PageUltimasNoticias