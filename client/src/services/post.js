import axios from "axios";
const baseUrl = "http://localhost:6060/api/post";

const getAll = async (payload) => {
  const request = await axios.get(`http://localhost:6060/api/post/${payload}`);
  const data = await request.data;
  console.log(data);
  return data;
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
};
