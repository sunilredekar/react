import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./post";
import classes from "./PostsList.module.css";
import { Modal } from "./Modal";

export function PostsList({ onPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(post) {
    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
  }
  function onPostHandler(post) {
    const postData = {
      ...post,
      id: Math.random().toString(),
    };
    addPostHandler(postData);
  }
  return (
    <div>
      {onPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={onPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div>There are no posts please consider adding some.....</div>
      )}
    </div>
  );
}
