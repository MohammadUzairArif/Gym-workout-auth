import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
} from "../controllers/workout.controller.js";
const router = express.Router();

router.get("/", getWorkouts)

// Get a single workout
router.get("/:id", getWorkout)
// Create a new workout
router.post("/", createWorkout)

// Update a workout
router.patch("/:id", updateWorkout)
// Delete a workout

router.delete("/:id", deleteWorkout)
export default router;
