import express from "express";
const router = express.Router();
import WorkoutModel from "../models/workout.model.js";
router.get("/", (req, res) => {
    res.status(200).json({ message: "Get all workouts" });
})

// Get a single workout
router.get("/:id", (req, res) => {
    res.status(200).json({ message: "Get a single workout" });
})
// Create a new workout
router.post("/",async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = new WorkoutModel({ title, load, reps });
        await workout.save();
        res.status(200).json(workout);
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message });
    }

})

// Update a workout
router.patch("/:id", (req, res) => {
    res.status(200).json({ message: "Update a workout" });
})
// Delete a workout

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: "Delete a workout" });
})
export default router;
