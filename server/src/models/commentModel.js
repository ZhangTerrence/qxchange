const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const commentModel = mongooose.model("comments", commentSchema);

module.exports = {
  commentSchema,
  commentModel,
};
