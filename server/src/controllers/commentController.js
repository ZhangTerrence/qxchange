const {
  postModel,
  commentModel,
  subjectModel,
} = require("../models/subjectModel");

const getComments = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ error: "Post is required." });
    return;
  }

  const comments = await commentModel.find({ post: id }).sort({ createdAt: 1 });

  res.status(200).json({ comments });
};

const createComment = async (req, res) => {
  const { post, author, content } = req.body;

  const postExists = await postModel.findOne({ _id: post });

  if (!postExists) {
    res.status(404).json({ error: "Post does not exist." });
    return;
  }

  const comment = await commentModel.create({
    post,
    author,
    content,
  });

  postExists.comments.push(comment);
  await postExists.save();

  const subject = await subjectModel.findOne({ subject: postExists.subject });

  const subjectPost = subject.posts.find((post) => (post._id = postExists._id));
  subjectPost.comments.push(comment);
  subject.save();

  res.status(200).json({ comment });
};

module.exports = {
  getComments,
  createComment,
};
