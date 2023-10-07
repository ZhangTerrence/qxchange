const express = require("express");
const { createPost, getPosts } = require("../controllers/postController");

const postRoutes = express.Router();

postRoutes.get("/", getPosts);
postRoutes.post("/", createPost);

module.exports = postRoutes;
