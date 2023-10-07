const express = require("express");
const {
  createComment,
  getComment,
  getComments,
} = require("../controllers/commentController");

const commentRoutes = express.Router();

commentRoutes.get("/:id", getComment);
commentRoutes.get("/", getComments);
commentRoutes.post("/", createComment);

module.exports = commentRoutes;
