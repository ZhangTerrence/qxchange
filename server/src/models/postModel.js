const mongoose = require("mongoose");
const commentSchema = require("./commentModel");

const postSchema = mongoose.Schema({
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
  comments: [commentSchema],
});

const postModel = mongooose.model("post", postSchema);

module.exports = {
  postSchema,
  postModel,
};
