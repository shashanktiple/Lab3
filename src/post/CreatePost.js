import React from "react";
import { useState } from "react";

export default function CreatePost({ user, posts, dispatch }) {
  const current = new Date();
  const dateCreated = `${current.getDate()}/${current.getMonth() +
    1}/${current.getFullYear()}`;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "CREATE_POST",
          title,
          content,
          author: user,
          dateCreated,
        });
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <textarea
        value={content}
        required
        onChange={(event) => setContent(event.target.value)}
      />
      <input type="submit" value="Create" />
    </form>
  );
}
