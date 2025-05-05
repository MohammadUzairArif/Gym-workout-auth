import axios from "axios";

// Create Axios Instance
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});
// Get All Workouts
export const getWorkout = () => {
  return api.get("/workouts");
};
// Get Single Workout
export const getSingleWorkout = (id) => {
  return api.get(`/workouts/${id}`);
};

// Create Workout
export const addWorkout = (data) => {
  return api.post("/workouts", data);
};

// Update Workout
export const updateWorkout = (id, data) => {
  return api.patch(`/workouts/${id}`, data)
};
// Delete Workout
export const deleteWorkout = (id) => {
  return api.delete(`/workouts/${id}`)
};