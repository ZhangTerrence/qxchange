const express = require("express");
const {
  createComment,
  getComments,
} = require("../controllers/commentController");

const commentRoutes = express.Router();

commentRoutes.get("/:id", getComments);
commentRoutes.post("/", createComment);

module.exports = commentRoutes;
