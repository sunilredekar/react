import classes from './Post.module.css';

function Post({ post }) {
    const chosenName = Math.random() > 0.5 ? "John" : "Jane";
    return (
        <ul className={classes.post}>
            {/* <h1>{chosenName}</h1> */}
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </ul>
    );
}

export default Post;