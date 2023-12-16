import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Punitha_",
      postImage:
        "https://img.freepik.com/premium-photo/wallpaper-lamborghini-car-with-smoke-galaxy-vibe-generated-ai_843138-353.jpg?w=740",
      likes: 700,
      timestamp: "1hrs",
    },
    {
      user: "Dinesh_",
      postImage:
        "https://images.unsplash.com/photo-1591378603223-e15b45a81640?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 432,
      timestamp: "1d",
    },
    {
      user: "Deva_Shree",
      postImage:
        "https://images.pexels.com/photos/133400/pexels-photo-133400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 100,
      timestamp: "2d",
    },
    {
      user: "vedha-Shree",
      postImage:
        "https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg",
      likes: 150,
      timestamp: "3d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
