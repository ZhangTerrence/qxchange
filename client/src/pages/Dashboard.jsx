import "../css/Dashboard.css";
import { useState, useEffect } from "react";
import { Post } from "../components/Post.jsx";
import Service from "../services/post";
import { Leaderboard } from "../components/Leaderboard";
import { CreatePost } from "../components/CreatePost";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const location = useLocation();
  const { user, loginWithRedirect } = useAuth0();
  const [subject, setNewSubject] = useState("");

  useEffect(() => {
    Service.getPosts(location.state.subject).then((initialPosts) => {
      setPosts(initialPosts.posts);
      setNewSubject(location.state.subject);
    });
  }, [location.state.subject]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setNewContent(event.target.value);
  };

  const redirectLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  const addPost = (event) => {
    event.preventDefault();

    if (!user) {
      redirectLogin();
      return;
    }

    const postObject = {
      subject: location.state.subject,
      author: user.name,
      title: newTitle,
      content: newContent,
    };

    Service.createPost(postObject).then((response) => {
      setPosts((posts) => [response.post, ...posts]);
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
            <h1 className="subject">{subject}</h1>
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
