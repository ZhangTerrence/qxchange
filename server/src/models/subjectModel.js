const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("comments", commentSchema);

const postSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    comments: {
      type: [commentSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("posts", postSchema);

const subjectSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
      unique: true,
    },
    posts: {
      type: [postSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const subjectModel = mongoose.model("subjects", subjectSchema);

module.exports = {
  subjectModel,
  postModel,
  commentModel,
};
