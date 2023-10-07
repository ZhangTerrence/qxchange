import "../css/Dashboard.css";
import { useState, useEffect } from "react";
import { Post } from "../components/Post.jsx";
import Service from "../services/post";
import { LogoutButton } from "../components/LogoutButton";
import { Leaderboard } from "../components/Leaderboard";

export const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Service.getAll().then((initialPosts) => {
      console.log(initialPosts);
      setPosts(initialPosts.posts);
    });
  }, []);

  if (!posts) {
    return null;
  }

  return (
    <div>
      <LogoutButton />
      <section className="dashboard-body">
        {/* nav component goes here */}
        <div className="dashboard-container">
          <div className="left-container">
            <div className="create-container">
              <div></div>
            </div>
            <div className="post-container">
              {posts.map((post, i) => (
                <Post key={i} post={post} />
              ))}
            </div>
          </div>

          <div className="right-container">
            <Leaderboard />
          </div>
        </div>
      </section>
    </div>
  );
};
