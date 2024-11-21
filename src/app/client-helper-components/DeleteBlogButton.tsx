'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function DeleteBlogButton({id}:{id:string}) {
    const router = useRouter();
    const deleteBlog = async () => {
        await fetch('https://amused-stripe-play.glitch.me/blogs/' + id, {
            method: 'DELETE'
        });
        router.push('/')
    }
  return (
    <button onClick={deleteBlog}>Delete</button>

  )
}
