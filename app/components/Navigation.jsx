import Link from 'next/link'
import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation