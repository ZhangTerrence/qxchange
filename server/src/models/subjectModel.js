const mongoose = require("mongoose");
const postSchema = require("./postModel");

const subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  posts: [postSchema],
});

const subjectModel = mongoose.model("subjects", subjectSchema);

module.exports = subjectModel;
