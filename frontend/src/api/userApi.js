import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const signupUser = (data) => {
  return api.post("/user/signup", data);
};

// Login User
export const loginUser = (data) => {
  return api.post("/user/login", data);
};
