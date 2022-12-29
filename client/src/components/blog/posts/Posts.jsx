import './Posts.scss';
import Post from './post/Post.jsx';

function Posts({ posts }) {


    return (
        <div className="posts">

            {posts.map( post => (
                <Post key={post._id} post={post}/>
            ))}

        </div>
    )
}

export default Posts;
