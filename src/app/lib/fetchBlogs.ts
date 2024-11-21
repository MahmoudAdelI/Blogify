import type { blogs } from "../types";
export default async function fetchBlogs(url:string):Promise<blogs | undefined> {

    const res = await fetch(url, {cache: 'no-store'});
    const blogs:blogs = await res.json();

  return blogs
}
