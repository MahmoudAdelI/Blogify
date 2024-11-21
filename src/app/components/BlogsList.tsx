import Link from "next/link"
import { blogs } from "../types"

type Props = {
    blogs: blogs,
}
export default function BlogsList({blogs}:Props) {
  return (
    <div className="blog-list">
            <h2>All the blogs</h2>
            {blogs.map(blog => ( 
            <div className="blog-preview" key={blog.id}> 
                <Link href= {`/blog-details/${blog.id}`}> 
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </Link>
            </div>
           ))}
        </div> 
  )
}
