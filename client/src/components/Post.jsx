import { useEffect, useState } from "react";
import "../css/Post.css";
import Service from "../services/post";
import { useAuth0 } from "@auth0/auth0-react";

export const Post = ({ post }) => {
  const [comment, setComment] = useState("");
  const [commenting, setCommenting] = useState(false);
  const [comments, setComments] = useState([]);
  const { user, loginWithRedirect } = useAuth0();

  useEffect(() => {
    Service.getComments(post._id).then((response) => {
      setComments(response.comments);
    });
  }, [post]);

  const redirectLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  const addComment = (e) => {
    e.preventDefault();

    if (!user) {
      redirectLogin();
      return;
    }

    const commentObject = {
      post: post._id,
      author: user.name,
      content: comment,
    };

    Service.createComment(commentObject).then((response) => {
      setComments((comments) => [...comments, response.comment]);
    });
  };

  return (
    <div className="post">
      <h3 className="post-author">Posted by {post.author}</h3>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-content">{post.content}</p>
      <div className="post-comments" onClick={() => setCommenting(!commenting)}>
        {comments.length} comments
      </div>
      {commenting ? (
        <div className="comments">
          <hr className="comments-border" />
          <div className="comments-input">
            <textarea
              placeholder="Comment here..."
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={(e) => addComment(e)}>Comment</button>
          </div>
          {comments.map((comment, i) => {
            return (
              <div key={i} className="comment">
                <p>Commented by {comment.author}</p>
                <p>{comment.content}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
