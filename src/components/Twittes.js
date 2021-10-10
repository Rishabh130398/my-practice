import React from "react";
import CreateTweet from "./CreateTweet";
import Posts from "./Post";
const Twittes = () => {
  return (
    <div className="posts">
      <div className="posts__home">Home</div>
      <CreateTweet />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default Twittes;