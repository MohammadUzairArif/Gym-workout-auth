import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
} from "../controllers/workout.controller.js";

import {requireAuth} from "../middlewares/requireAuth.js";
const router = express.Router();
// require auth for all workout routes
router.use(requireAuth);

router.get("/", getWorkouts);

// Get a single workout
router.get("/:id", getWorkout);
// Create a new workout
router.post("/", createWorkout);

// Update a workout
router.put("/:id", updateWorkout);
// Delete a workout

router.delete("/:id", deleteWorkout);
export default router;
