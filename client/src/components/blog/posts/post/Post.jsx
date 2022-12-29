import './Post.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';

function Post({ post }) {

    console.log(post)
    return (
        <div className='post'>

            <div className="top">

                <h3> {post.title} </h3>
                <p className='postHeader'> by <span className='postAuthor'> {post.author}</span>. Posted on: <span className='postDate'> {post.createdAt} </span>
                </p>


            </div>

            <div className="center">

                <p> {post.content.slice(0, 400)}... {'['}<a href={'/blog/' + post._id} target='_blank'>continue reading</a>{']'}</p>

            </div>

            <div className="bottom">

                <div className="views">
                <VisibilityIcon /> {post.visits} visits
                </div>

                <div className="comments">
                    <CommentIcon /> {post.comments.length}
                </div>

                <div className="tags">
                    Tags:&nbsp; {post.tags.map( tag => (
                        <>
                        
                        <a href=''>{tag}</a><p>,&nbsp;</p>
                        </>
                    ))}
                </div>
                 


            </div>

        </div>
    )
}

export default Post;
