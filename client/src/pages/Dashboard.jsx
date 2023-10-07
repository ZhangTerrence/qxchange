import "../css/Dashboard.css";
import { useState, useEffect } from "react";
import { Post } from "../components/Post.jsx";
import Service from "../services/post";
import { Leaderboard } from "../components/Leaderboard";
import { CreatePost } from "../components/CreatePost";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    Service.getAll().then((initialPosts) => {
      setPosts(initialPosts.posts);
    });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleTitleChange = (event) => {
    console.log(event.target.value);
    console.log("title");
    setNewTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    console.log(event.target.value);
    console.log("content");
    setNewContent(event.target.value);
  };

  const addPost = (event) => {
    event.preventDefault();
    const postObject = {
      author: "Evan",
      title: newTitle,
      content: newContent,
    };

    Service.create(postObject).then((returnedObject) => {
      setPosts(posts.concat(returnedObject));
      setNewTitle("");
      setNewContent("");
      setOpen(false);
    });
  };
  if (!posts) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <section className="dashboard-body">
        {/* nav component goes here */}
        <div className="dashboard-container">
          <div className="left-container">
            <div className="create-container">
              {open ? (
                <CreatePost
                  handleTitleChange={handleTitleChange}
                  handleContentChange={handleContentChange}
                  newTitle={newTitle}
                  newContent={newContent}
                  addPost={addPost}
                />
              ) : (
                <div className="input-container" onClick={handleOpen}>
                  <input className="input" placeholder="Create new post..." />
                </div>
              )}
            </div>
            {open ? <div className="overlay" onClick={handleOpen} /> : null}

            <div className="post-container">
              {posts.map((post) => (
                <Post post={post} key={post.id} />
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
