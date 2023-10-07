const express = require("express");
const { createSubject } = require("../controllers/subjectController");

const subjectRoutes = express.Router();

subjectRoutes.post("/", createSubject);

module.exports = subjectRoutes;
