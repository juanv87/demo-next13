import React, { Suspense } from 'react'
import UltimasNoticias from './components/UltimasNoticias'

const page = () => {
  return (
    <>
      <div>Home</div>
      <Suspense fallback={<div>Loading...</div>}>
        <UltimasNoticias />
      </Suspense>
    </>
  )
}

export default page