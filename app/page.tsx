import React, { Suspense } from 'react'
import Container from './components/Container'
import UltimasNoticias from './components/UltimasNoticias'

const page = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <UltimasNoticias />
        </Container>
      </Suspense>
    </>
  )
}

export default page