import "../css/Post.css";

export const Post = ({ post }) => {
  return (
    <div className="post">
      <h3 className="post-author">Posted by {post.author}</h3>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-content">{post.content}</p>
      <div className="post-author">3 Comments</div>
    </div>
  );
};
