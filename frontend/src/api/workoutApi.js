import axios from "axios";

// Create Axios Instance
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Helper to add Authorization header
const authHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Create Workout
export const addWorkout = (data, token) => {
  return api.post("/workouts", data, authHeader(token));
};

// Get All Workouts
export const getWorkouts = (token) => {
  return api.get("/workouts", authHeader(token));
};

// Get Single Workout by ID
export const getWorkout = (id, token) => {
  return api.get(`/workouts/${id}`, authHeader(token));
};

// Delete Workout
export const deleteWorkout = (id, token) => {
  return api.delete(`/workouts/${id}`, authHeader(token));
};

// Update Workout
export const updateWorkout = (id, data, token) => {
  return api.put(`/workouts/${id}`, data, authHeader(token));
};
