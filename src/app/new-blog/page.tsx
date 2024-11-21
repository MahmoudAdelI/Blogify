'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function NewBlog() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const handelSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const blog = {title, body, author, id:uuidv4()};
        setIsPending(true);
        
        await fetch('https://amused-stripe-play.glitch.me/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })

        setIsPending(false);
        router.push('/');
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form className="create"
            onSubmit={handelSubmit}
            >
                <label>Blog Title:</label>
                <input type="text"
                 required 
                 value={title}
                 onChange={e => setTitle(e.target.value)}
                 />

                <label>Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={e => setBody(e.target.value)}                
                ></textarea>

                <label>Blog Author:</label>
                <input
                type="text"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                >
                </input>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
            
        </div>
  )
}
