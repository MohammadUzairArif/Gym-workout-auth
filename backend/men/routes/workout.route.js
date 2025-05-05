import express from "express";
import { createWorkout, getAllWorkouts, getSingleWorkout } from "../controllers/workout.controller.js";
const router = express.Router();

router.get("/", getAllWorkouts)

// Get a single workout
router.get("/:id", getSingleWorkout)
// Create a new workout
router.post("/", createWorkout)

// Update a workout
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, load, reps } = req.body;
    try {
        
        res.status(200).json({ message: "Update a workout" });
    } catch (error) {
        
    }
})
// Delete a workout

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: "Delete a workout" });
})
export default router;
