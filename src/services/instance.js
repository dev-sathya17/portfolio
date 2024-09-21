import axios from "axios";

const baseURL = "https://portfolio-backend-q0wj.onrender.com/api/v1";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  timeout: 10000,
});

export default instance;
