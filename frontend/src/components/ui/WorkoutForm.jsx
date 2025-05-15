import React, { useState } from "react";
import { addWorkout } from "../../api/workoutApi.js";
import { useWorkoutContext } from "../../hooks/useWorkoutContext";
import { useAuthContext } from "../../hooks/useAuthContext";


function WorkoutForm() {
  const { user } = useAuthContext();
  const [workoutData, setWorkoutData] = useState({
    title: "",
    load: "",
    reps: "",
    sets: "",
  });
  const [error, setError] = useState(null);
  const { dispatch } = useWorkoutContext();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in to add a workout.");
      return;
    }
    try {
      const response = await addWorkout(workoutData,user.token);
      if (response.status !== 200) {
        setError(response.data.error);
        return;
      }
      else {
        dispatch({ type: "ADD_WORKOUT", payload: response.data });

        setError(null);
        setWorkoutData({ title: "", load: "", reps: "" , sets: "" });
      }
    } catch (error) {
      console.error("Error adding workout:", error);
      setError("An error occurred while adding the workout.");
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-800 font-poppins space-y-4 transition-all"
>
  <h3 className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
    Add New Workout
  </h3>
  {["title", "load", "reps", "sets"].map((field) => (
    <input
      key={field}
      type={field === "title" ? "text" : "number"}
      name={field}
      value={workoutData[field]}
      onChange={handleChange}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 transition-all"
    />
  ))}
  <button
    type="submit"
    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg shadow-md transition-all"
  >
    Add Workout
  </button>
  {error && (
    <div className="text-sm text-red-400 bg-red-900 p-3 rounded">
      {error}
    </div>
  )}
</form>

  );
}

export default WorkoutForm;
