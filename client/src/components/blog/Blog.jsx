import { useState, useEffect } from 'react';
import './Blog.scss';
//import posts from '../../demoPosts.js';
import Posts from './posts/Posts.jsx';




function Blog() {

  const [posts, setPosts] = useState([]);


    

    useEffect( () => {

      console.log('started fetchgin data...')
      
      const fetchPosts = async () => {

        const posts = await fetch('http://localhost:3000/posts');
        const fetchedPosts = await posts.json();
        console.log(`fetched posts: ${fetchedPosts}`);

        setPosts(fetchedPosts);
        console.log(fetchedPosts);
        

      }

      fetchPosts();
    }, []);



  return (
    <div className="blog">

        <Posts posts={posts}/>
      
    </div>
  )
}

export default Blog;
