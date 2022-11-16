'use client'

import React, { useState } from 'react'

const LikeButton = () => {
  const [liked, setLiked] = useState(false)
  const text = liked ? 'Unlike' : 'Like'
  return (
    <button onClick={() => setLiked(!liked)}>
      {text}
    </button>
  )
}

export default LikeButton