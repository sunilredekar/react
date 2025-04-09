import { Link } from 'react-router-dom';
import classes from './Post.module.css';

function Post({ post }) {
    return (
        <li className={classes.post}>
            <Link to={post.id} className={classes.link}>
                <p className={classes.author}>{post.author}</p>
                <p className={classes.text}>{post.body}</p>
            </Link>
        </li>
    );
}

export default Post;