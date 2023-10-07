const { subjectModel } = require("../models/subjectModel");

const createSubject = async (req, res) => {
  const { subject } = req.body;

  const createdSubject = await subjectModel.create({
    subject,
  });

  res.status(200).json({ subject: createdSubject });
};

const getSubjects = async (req, res) => {
  const subjects = await subjectModel.find({});

  res.status(200).json({ subjects });
};

module.exports = {
  getSubjects,
  createSubject,
};
