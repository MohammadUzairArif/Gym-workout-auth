import React, { useState } from 'react';
import { addWorkout } from '../../api/workoutApi';

function WorkoutForm({ setWorkouts }) {
  const [workoutData, setWorkoutData] = useState({
    title: '',
    load: '',
    reps: '',
    sets: '' // New field
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSUbmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addWorkout(workoutData);

      if (response.status !== 200) {
        setError(response.data.error);
        return;
      }

      setWorkouts((prev) => [...prev, response.data]);
      setError(null);
      setWorkoutData({ title: '', load: '', reps: '', sets: '' }); // Reset
    } catch (error) {
      console.error("Error adding workout:", error);
      setError("An error occurred while adding the workout.");
    }
  };

  return (
    <form
      onSubmit={handleSUbmit}
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 w-full max-w-md font-poppins"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Add a New Workout
      </h3>

      <input
        type="text"
        name="title"
        value={workoutData.title}
        onChange={handleChange}
        placeholder="Workout Title"
        className="w-full mb-3 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <input
        type="number"
        name="load"
        value={workoutData.load}
        onChange={handleChange}
        placeholder="Load (kg)"
        className="w-full mb-3 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <input
        type="number"
        name="reps"
        value={workoutData.reps}
        onChange={handleChange}
        placeholder="Reps"
        className="w-full mb-3 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <input
        type="number"
        name="sets"
        value={workoutData.sets}
        onChange={handleChange}
        placeholder="Sets"
        className="w-full mb-4 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-emerald-600 transition-colors duration-300"
      >
        Add Workout
      </button>

      {error && (
        <div className="mt-3 text-sm text-red-500 bg-red-100 dark:bg-red-900 dark:text-red-300 p-2 rounded">
          {error}
        </div>
      )}
    </form>
  );
}

export default WorkoutForm;
