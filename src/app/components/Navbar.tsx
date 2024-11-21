import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
            <Link href={'/'}><h1>Blogify</h1></Link>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/new-blog">New Blog</Link>
            </div>
        </nav>
  )
}
