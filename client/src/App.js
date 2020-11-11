import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default () => {
  return (
    <div className="container mt-4">
      <h1>CreatePost</h1>
      <PostCreate />
      <hr />
      <h1>Post List</h1>
      <PostList />
    </div>
  );
};
