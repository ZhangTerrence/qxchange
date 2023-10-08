const { subjectModel, postModel } = require("../models/subjectModel");
const getPosts = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ error: "Subject is required." });
    return;
  }

  const posts = await postModel.find({ subject: id }).sort({ createdAt: -1 });

  return res.status(200).json({ posts });
};

const createPost = async (req, res) => {
  const { subject, author, title, content } = req.body;

  console.log(title, content);
  const subjectExists = await subjectModel.findOne({ subject });

  if (!subjectExists) {
    res.status(404).json({ error: "Subject does not exist." });
    return;
  }

  const post = await postModel.create({
    subject,
    author,
    title,
    content,
  });

  subjectExists.posts.push(post);
  await subjectExists.save();

  res.status(200).json({ post });
};

module.exports = {
  getPosts,
  createPost,
};
