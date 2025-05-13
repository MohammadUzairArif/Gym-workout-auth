import React, { useState } from "react";
import { addWorkout } from "../../api/workoutApi";
import { useWorkoutContext } from "../../hooks/useWorkoutContext";
import { useAuthContext } from "../../hooks/useAuthContext";
function WorkoutForm({ editWorkout, setEditWorkout }) {
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
      dispatch({ type: "ADD_WORKOUT", payload: response.data });
      setWorkoutData({ title: "", load: "", reps: "", sets: "" });
      setError(null);
    } catch (error) {
      console.error("Error adding workout:", error);
      setError("An error occurred while adding the workout.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 text-white p-6 rounded-xl shadow-md border border-gray-700 font-poppins space-y-4"
    >
      <h3 className="text-xl font-semibold text-emerald-400">
        {editWorkout ? "Update current Workout" : "Add a new Workout"}
      </h3>
      {["title", "load", "reps", "sets"].map((field) => (
        <input
          key={field}
          type={field === "title" ? "text" : "number"}
          name={field}
          value={workoutData[field]}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      ))}
      <button
        type="submit"
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md transition"
      >
        {editWorkout ? "Update Workout" : "Add Workout"}
      </button>
      {error && (
        <div className="text-sm text-red-400 bg-red-900 p-2 rounded">
          {error}
        </div>
      )}
    </form>
  );
}

export default WorkoutForm;
