import React from "react";
import Post from "./Post";

export default function PostList({ user, posts = [], dispatch }) {
  return (
    <div>
      <div>
        {posts.map(
          (p, i) =>
            user === p.author && (
              <Post {...p} dispatch={dispatch} key={"post-" + i} />
            )
        )}
      </div>
    </div>
  );
}
