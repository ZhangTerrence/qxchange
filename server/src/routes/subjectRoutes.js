const express = require("express");
const {
  createSubject,
  getSubjects,
} = require("../controllers/subjectController");

const subjectRoutes = express.Router();

subjectRoutes.get("/", getSubjects);
subjectRoutes.post("/", createSubject);

module.exports = subjectRoutes;
