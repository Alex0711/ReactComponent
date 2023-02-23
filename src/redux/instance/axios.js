import axios from "axios";

const instance = (url) => {
  return axios.create({
    baseURL: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  });
};
export default instance;