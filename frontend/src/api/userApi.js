import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:5000/api", 
});


export const signupUser = (data) => {
  return api.post("/users/signup", data);
};

// Login User
export const loginUser = (data) => {
  return api.post("/users/login", data);
};