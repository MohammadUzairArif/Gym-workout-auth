import WorkoutModel from "../models/workout.model.js";
import mongoose from "mongoose";

// Get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });
    if(workouts.length === 0) {
      return res.status(404).json({ error: "No workouts found" });
    }
    res.status(200).json(workouts);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// Create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  
  try {
    const workout = new  WorkoutModel({
      title,
      reps,
      load,
    });
    await workout.save();
    res.status(200).json(workout);
    
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
    
  }
  
};

// Get a single workout by ID
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout not found" });
  }

  try {
    const workout = await WorkoutModel.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
    
  }
};

// Delete a workout by ID
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout not found" });
  }

  try {
    const workout = await WorkoutModel.findByIdAndDelete(id);
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }
    res.status(200).json({ message: "Workout deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// Update a workout by ID
const updateWorkout = async(req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout not found" });
  }

  const updatedData = req.body;

  try {
    const workout = await WorkoutModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }

  

};

export{
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout
};