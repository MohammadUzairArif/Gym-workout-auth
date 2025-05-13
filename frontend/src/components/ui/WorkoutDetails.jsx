import React, { useState } from "react";
import { Trash2, Pencil } from "lucide-react"; // Import Edit icon
import { deleteWorkout } from "../../api/workoutApi";
import { useWorkoutContext } from "../../hooks/useWorkoutContext";
import UpdateWorkoutModal from "./UpdateWorkoutModal";
import { useAuthContext } from "../../hooks/useAuthContext";
const WorkoutDetails = ({ workout, setEditWorkout, editWorkout }) => {
  const { dispatch } = useWorkoutContext();
  const [error, SetError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuthContext();

  const handleDelete = async (id) => {
    if (!user) {
      SetError("You must be logged in to delete a workout.");
      return;
    }
    try {
      const response = await deleteWorkout(id,user.token);
      if (response.status !== 200) {
        SetError(response.data.error);
      } else {
        dispatch({ type: "DELETE_WORKOUT", payload:  id  });
        SetError(null);
      }
    } catch (error) {
      console.error("Error deleting workout:", error);
      SetError("An error occurred while deleting the workout.");
    }
  };

  const handleEdit = (id, data) => {
    setShowModal(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 mb-4 font-poppins border border-gray-200 dark:border-gray-700 transition-all">
      <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {workout.title}
      </h4>
      <p className="text-gray-700 dark:text-gray-300 mb-1">
        <strong className="text-gray-900 dark:text-gray-100">
          Load (kg):{" "}
        </strong>
        {workout.load}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-1">
        <strong className="text-gray-900 dark:text-gray-100">Reps: </strong>
        {workout.reps}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-1">
        <strong className="text-gray-900 dark:text-gray-100">Sets: </strong>
        {workout.sets}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {new Date(workout.createdAt).toLocaleString(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
          hour12: true,
        })}
      </p>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => handleDelete(workout._id)}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all"
        >
          <Trash2 size={18} />
          Delete
        </button>
        <button
          onClick={() => handleEdit(workout._id)} // Add an edit handler
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
        >
          <Pencil size={18} />
          Edit
        </button>
        <UpdateWorkoutModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          workout={workout}
        />
      </div>

      {error && (
        <p className="text-sm text-red-500 mt-2 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export default WorkoutDetails;
