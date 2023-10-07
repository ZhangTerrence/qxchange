const express = require("express");
const checkJwt = require("../middleware/checkAuth");

const userRouter = express.Router();

userRouter.get("/", checkJwt, () => {
  console.log("Hello");
});

module.exports = userRouter;
