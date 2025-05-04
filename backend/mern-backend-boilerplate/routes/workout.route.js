import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Get all workouts" });
})

// Get a single workout
router.get("/:id", (req, res) => {
    res.status(200).json({ message: "Get a single workout" });
})
// Create a new workout
router.post("/", (req, res) => {
    res.status(200).json({ message: "Create a new workout" });
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
