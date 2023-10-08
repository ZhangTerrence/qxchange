import "../css/Post.css";
import { useEffect, useState } from "react";
import Service from "../services/post";
import { useAuth0 } from "@auth0/auth0-react";
import {AiFillCaretDown} from 'react-icons/ai'

export const Post = ({ post }) => {
  const [comment, setComment] = useState("");
  const [commenting, setCommenting] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Service.getComments(post._id).then((response) => {
      setComments(response.comments);
    });
  }, [post]);


  const addComment = (e) => {
    e.preventDefault();


    const commentObject = {
      post: post._id,
      author: "Anonymous",
      content: comment,
    };

    Service.createComment(commentObject).then((response) => {
      setComments((comments) => [...comments, response.comment]);
      setComment("");
    });
  };

  return (
    <div className="post">
      <h3 className="post-author">Posted by {post.author}</h3>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-content">{post.content}</p>
      <div className="comment-wrapper" onClick={() => setCommenting(!commenting)} >
      <div className="post-comments"> View {comments.length} Comments </div>
      <AiFillCaretDown/>
      </div>

      {commenting ? (
        <div className="comments">
          <hr className="comments-border" />
          <div className="comments-input">
            <textarea
              placeholder="Comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="comment-button-wrapper">
              <button class="comment-button" onClick={(e) => addComment(e)}>Comment</button>
          </div>
          {comments.map((comment, i) => {
            return (
              <div key={i} className="comment">
                <p class="comment-author">Commented by {comment.author}</p>
                <p class="comment-p">{comment.content}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
