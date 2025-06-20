// lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // should be http://localhost:8081/e-learning
  withCredentials: true, // send cookies
});

export default api;
