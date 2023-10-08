import axios from "axios";

const getPosts = (subject) => {
  const request = axios.get(`http://localhost:6060/api/post/${subject}`);
  return request.then((response) => response.data);
};

const createPost = (payload) => {
  const request = axios.post("http://localhost:6060/api/post", payload);
  return request.then((response) => response.data);
};

const getComments = (comment) => {
  const request = axios.get(`http://localhost:6060/api/comment/${comment}`);
  return request.then((response) => response.data);
};

const createComment = (payload) => {
  const request = axios.post("http://localhost:6060/api/comment", payload);
  return request.then((response) => response.data);
};

export default {
  getPosts,
  createPost,
  getComments,
  createComment,
};
