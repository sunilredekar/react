import { useState, useEffect } from "react";
import Post from "./post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

export function PostsList() {
  const posts = useLoaderData();
   
  return (
    <div>

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
