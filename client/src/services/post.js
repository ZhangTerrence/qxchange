import axios from "axios";

const getPosts = (subject) => {
  const request = axios.get(
    `https://hackru-api.onrender.com/api/post/${subject}`
  );
  return request.then((response) => response.data);
};

const createPost = (payload) => {
  const request = axios.post(
    "https://hackru-api.onrender.com/api/post",
    payload
  );
  return request.then((response) => response.data);
};

const getComments = (comment) => {
  const request = axios.get(
    `https://hackru-api.onrender.com/api/comment/${comment}`
  );
  return request.then((response) => response.data);
};

const createComment = (payload) => {
  const request = axios.post(
    "https://hackru-api.onrender.com/api/comment",
    payload
  );
  return request.then((response) => response.data);
};

export default {
  getPosts,
  createPost,
  getComments,
  createComment,
};
