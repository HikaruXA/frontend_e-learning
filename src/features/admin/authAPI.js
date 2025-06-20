// features/auth/authAPI.js
import api from "../../lib/api";

export const login = (data) => api.post("/users/login", data); // baseURL already has /e-learning
