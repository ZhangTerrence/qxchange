import "../css/CreatePost.css";

export const CreatePost = ({
  newTitle,
  newContent,
  handleTitleChange,
  handleContentChange,
  addPost,
}) => {
  return (
    <div className="form-container">
      <div className="wrapper">
        <h1 className="form-name">Create Post</h1>
      </div>

      <form className="post-form" onSubmit={addPost}>
        <div className="title-wrapper">
          <input
            className="input-title"
            placeholder="Enter title..."
            value={newTitle}
            onChange={handleTitleChange}
          />
        </div>

        <div className="content-wrapper">
          <textarea
            className="input-content"
            placeholder="Enter content..."
            value={newContent}
            onChange={handleContentChange}
          />
        </div>

        <div className="button-wrapper">
          <button className="post-button" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
