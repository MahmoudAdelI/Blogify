import DeleteBlogButton from '@/app/client-helper-components/DeleteBlogButton';
import { blog } from '@/app/types';
import React from 'react'

export default async function BlogDetails({params}:{params:Promise<{id:string}>}) {
    const {id} = await params;
    const res = await fetch('https://amused-stripe-play.glitch.me/blogs/' + id, {cache: 'force-cache'});
    const blog:blog = await res.json();

  return (
    <div  className="blog-details">
      {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.author }</p>
                    <div>{ blog.body }</div>
                    <DeleteBlogButton id={blog.id} />
                </article>
            )}
    </div>
  )
}
