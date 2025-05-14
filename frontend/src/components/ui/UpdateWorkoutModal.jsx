import React, { useState } from "react";
import { Save, X } from "lucide-react";
import { updateWorkout } from "../../api/workoutApi";
import { useWorkoutContext } from "../../hooks/useWorkoutContext";
import { useAuthContext } from "../../hooks/useAuthContext";

function UpdateWorkoutModal({ isOpen, onClose, workout }) {
  const { dispatch } = useWorkoutContext();
  const [updatedWorkout, setUpdatedWorkout] = useState(workout);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedWorkout((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateWorkout(workout._id, updatedWorkout, user.token);

      if (response.status !== 200) {
        setError(response.data.error);
      } else {
        dispatch({ type: "UPDATE_WORKOUT", payload: response.data });
        onClose();
      }
    } catch (error) {
      console.error("Error updating workout:", error);
      setError("An error occurred while updating the workout.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-[95%] sm:max-w-md bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-2xl animate-fadeIn max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-extrabold mb-6 pb-2 text-white text-center">
          Update Workout
        </h3>

        {error && (
          <div className="text-red-400 text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            type="text"
            value={updatedWorkout.title}
            onChange={handleChange}
            placeholder="Workout Title"
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="load"
              type="number"
              value={updatedWorkout.load}
              onChange={handleChange}
              placeholder="Load (kg)"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
            />

            <input
              name="reps"
              type="number"
              value={updatedWorkout.reps}
              onChange={handleChange}
              placeholder="Reps"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
            />
          </div>

          <input
            name="sets"
            type="number"
            value={updatedWorkout.sets}
            onChange={handleChange}
            placeholder="Sets"
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
          />

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-1/2 py-3.5 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={
                !updatedWorkout.title ||
                !updatedWorkout.load ||
                !updatedWorkout.reps ||
                !updatedWorkout.sets
              }
              className={`w-full sm:w-1/2 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold shadow-md transition-all ${
                !updatedWorkout.title ||
                !updatedWorkout.load ||
                !updatedWorkout.reps ||
                !updatedWorkout.sets
                  ? "bg-emerald-600 text-white opacity-50 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-400/20"
              }`}
            >
              <Save size={18} />
              <span>Update</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateWorkoutModal;
