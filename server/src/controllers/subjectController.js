const { subjectModel } = require("../models/subjectModel");

const createSubject = async (req, res) => {
  const { subject } = req.body;

  const createdSubject = await subjectModel.create({
    subject,
  });

  res.status(200).json({ subject: createdSubject });
};

module.exports = {
  createSubject,
};
