import React, { Suspense } from 'react'
import UltimasNoticias from '../components/UltimasNoticias'

const PageUltimasNoticias = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UltimasNoticias />
    </Suspense>
  )
}

export default PageUltimasNoticias