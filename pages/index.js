import { useState, useEffect } from 'react';
import Head from 'next/head'
import fire from '../config/firebase-config';
import CreatePost from "../components/CreatePost";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fire.firestore()
      .collection('blog')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogs);
      });
  }, []);

  console.log(blogs)
  return (
    <div>
      <Head>
        <title>valkov.dev</title>
      </Head>
      <h1>My best project</h1>
      <CreatePost />
      <ul>
        {blogs.map(blog =>
          <li key={blog.id}>
            {blog.title}
          </li>
        )}
      </ul>
    </div>
  )
}
export default Home;


