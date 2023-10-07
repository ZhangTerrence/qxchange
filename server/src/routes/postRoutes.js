const express = require("express");
const {
  createPost,
  getPost,
  getPosts,
} = require("../controllers/postController");

const postRoutes = express.Router();

postRoutes.get("/:id", getPost);
postRoutes.get("/", getPosts);
postRoutes.post("/", createPost);

module.exports = postRoutes;
