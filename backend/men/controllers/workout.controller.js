import WorkoutModel from "../models/workout.model.js";
import mongoose from "mongoose";
// get all workouts
export const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message });
    }
}

// get a single workout
export const getSingleWorkout = async (req, res) => {
    const { id } = req.params;
    // check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
    }
    try {
        const workout = await WorkoutModel.findById(id);
        if (!workout) {
            return res.status(404).json({ error: "Workout not found" });
        }
        res.status(200).json(workout);
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message });
    }
}
// create a new workout
export const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = new WorkoutModel({ title, load, reps });
        await workout.save();
        res.status(200).json(workout);
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message });
    }

}
// update a workout
export const UpdateWorkout = async (req, res) => {
    const { id } = req.params;
    const { title, load, reps } = req.body;
    // check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
    }
    
    try {
        const Updateworkout = await WorkoutModel.findOneAndUpdate({ _id: id }, { title, load, reps });
        if (!Updateworkout) {
            return res.status(404).json({ error: "Workout not found" });
        }
        res.status(200).json(Updateworkout);
        
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message });
    }
}
//delete a workout
export const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    // check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
    }
    try {
        const workout = await WorkoutModel.findByIdAndDelete(id);
        if (!workout) {
            return res.status(404).json({ error: "Workout not found" });
        }
        res.status(200).json(workout);
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message });
    }
}