import React, { useState } from "react";
import { Trash2, Pencil, Dumbbell, Repeat, Calendar, Layers } from "lucide-react";
import { deleteWorkout } from "../../api/workoutApi";
import { useWorkoutContext } from "../../hooks/useWorkoutContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const WorkoutDetails = ({ workout, onEdit }) => {
  const { dispatch } = useWorkoutContext();
  const [error, SetError] = useState(null);
  const { user } = useAuthContext();

  const handleDelete = async (id) => {
    if (!user) {
      SetError("You must be logged in to delete a workout.");
      return;
    }
    try {
      const response = await deleteWorkout(id, user.token);
      if (response.status !== 200) {
        SetError(response.data.error);
      } else {
        dispatch({ type: "DELETE_WORKOUT", payload: id });
        SetError(null);
      }
    } catch (error) {
      console.error("Error deleting workout:", error);
      SetError("An error occurred while deleting the workout.");
    }
  };

  const handleEdit = () => {
    onEdit(workout);
  };

  return (
    <div className="relative bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-emerald-500/10 transition-shadow duration-300">
      {/* Header */}
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h4 className="text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            {workout.title}
          </h4>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-emerald-400/80 to-cyan-400/80 rounded-full" />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="p-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-emerald-500/10"
            title="Edit Workout"
          >
            <Pencil className="text-emerald-400" size={20} strokeWidth={2.2} />
          </button>
          <button
            onClick={() => handleDelete(workout._id)}
            className="p-2 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-red-500/10"
            title="Delete Workout"
          >
            <Trash2 className="text-red-500" size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
          <div className="p-2.5 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 rounded-xl">
            <Dumbbell className="text-emerald-400" size={22} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400/90 uppercase tracking-wider">Load</p>
            <p className="text-xl font-bold text-white mt-0.5">
              {workout.load}
              <span className="text-sm text-gray-400 ml-1">kg</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
          <div className="p-2.5 bg-gradient-to-br from-cyan-500/15 to-emerald-500/10 rounded-xl">
            <Repeat className="text-cyan-400" size={22} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400/90 uppercase tracking-wider">Reps</p>
            <p className="text-xl font-bold text-white mt-0.5">
              {workout.reps}
              <span className="text-sm text-gray-400 ml-1">times</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
          <div className="p-2.5 bg-gradient-to-br from-indigo-500/15 to-purple-500/10 rounded-xl">
            <Layers className="text-indigo-400" size={22} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400/90 uppercase tracking-wider">Sets</p>
            <p className="text-xl font-bold text-white mt-0.5">
              {workout.sets}
              <span className="text-sm text-gray-400 ml-1">sets</span>
            </p>
          </div>
        </div>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-sm text-gray-400/90">
        <div className="p-1.5 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <Calendar className="text-cyan-400" size={16} strokeWidth={2} />
        </div>
        <span className="font-medium">
          {new Date(workout.createdAt).toLocaleString(undefined, {
            dateStyle: "medium",
            timeStyle: "short",
            hour12: true,
          })}
        </span>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default WorkoutDetails;
