const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  posts: [String],
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
