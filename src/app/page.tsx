import BlogsList from "./components/BlogsList";
import fetchBlogs from "./lib/fetchBlogs";

export default async function Home() {

 const blogs = await fetchBlogs('https://amused-stripe-play.glitch.me/blogs');
 console.log(blogs);
 if(!blogs) return;
 return(
  <>
    <BlogsList blogs={blogs} />
  </>
 );
}
