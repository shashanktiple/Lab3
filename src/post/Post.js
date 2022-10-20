import React from "react";
import { useState } from "react";

export default function Post({
  title,
  content,
  author,
  dateCreated,
  dispatch,
  completed,
  dateCompleted,
}) {
  console.log("Date created" + dateCreated);

  const handleChange = (e) => {
    console.log(e.target.checked);
    dispatch({
      type: "TOGGLE_TODO",
      title,
      content,
      author: author,
      dateCreated,
      completed: e.target.checked ? "True" : "False",
    });
  };

  const deletePost = (e) => {
    console.log("Delete post");
    e.preventDefault();
    dispatch({
      type: "DELETE_TODO",
      title,
      content,
      author: author,
    });
  };

  return (
    <div className="container" style={{ marginBottom: "40px" }}>
      <div className="row">
        <div className="col">
          <input
            type="checkbox"
            checked={completed === "True"}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="col">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="row">
        <i>
          Description <b>{content}</b>
        </i>
      </div>
      <i>
        Written by <b>{author}</b>
      </i>
      <br></br>
      <i>
        Date Created <b>{dateCreated}</b>
      </i>
      <br></br>
      <i>
        Completed <b>{completed}</b>
      </i>
      <br></br>
      <i>
        Date Completion<b>{dateCompleted}</b>
      </i>
      <div>
        <input
          type="submit"
          value="Delete"
          onClick={(event) => deletePost(event)}
        />
      </div>
    </div>
  );
}
