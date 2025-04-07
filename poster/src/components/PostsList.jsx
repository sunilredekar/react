import Post from "./post";
import classes from "./PostsList.module.css";

export function PostsList({ posts }) {
  return (
    <div>
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
