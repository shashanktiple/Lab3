import React from "react";
import { useState, useReducer } from "react";

import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";

import appReducer from "./reducers";

function App() {
  const initialPosts = [
    // {
    //   title: "My first Post",
    //   content: "Some content",
    //   author: "Shashank",
    // },
    // {
    //   title: "My Second Post",
    //   content: "New content",
    //   author: "Tiple",
    // },
  ];

  // Don't manage global state like this in a real app
  // const [globalState, updateGlobalState] = useState({
  //   user: "",
  //   posts: [],
  //   comments: []
  // })
  // updateGlobalState({ ...globalState, user: "Shashank" })

  //const [user, setUser] = useState("");
  //const [user, dispatchUser] = useReducer(userReducer, "");

  //const [posts, setPosts] = useState(initialPosts);
  //const [posts, dispatchPosts] = useReducer(postReducer, initialPosts);

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && (
        <PostList user={state.user} posts={state.posts} dispatch={dispatch} />
      )}
      {state.user && (
        <CreatePost user={state.user} posts={state.posts} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
