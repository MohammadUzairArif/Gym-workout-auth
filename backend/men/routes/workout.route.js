import express from "express";
import { createWorkout, deleteWorkout, getAllWorkouts, getSingleWorkout, UpdateWorkout } from "../controllers/workout.controller.js";
const router = express.Router();

router.get("/", getAllWorkouts)

// Get a single workout
router.get("/:id", getSingleWorkout)
// Create a new workout
router.post("/", createWorkout)

// Update a workout
router.patch("/:id", UpdateWorkout)
// Delete a workout

router.delete("/:id", deleteWorkout)
export default router;
