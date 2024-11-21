import next from "next";
import type { blogs } from "../types";
export default async function fetchBlogs(url:string):Promise<blogs | undefined> {

    const res = await fetch('https://amused-stripe-play.glitch.me/blogs', {cache: 'no-store'});
    const blogs:blogs = await res.json();

  return blogs
}
