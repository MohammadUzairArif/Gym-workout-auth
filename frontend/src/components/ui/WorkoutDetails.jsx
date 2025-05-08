import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { deleteWorkout } from '../../api/workoutApi';
import { useWorkoutContext } from '../../hooks/useWorkoutContext';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const [error, SetError] = useState(null);

  const handleDelete = async (id) => {
    try {
      const response = await deleteWorkout(id);
      if (response.status !== 200) {
        SetError(response.data.error);
      } else {
        dispatch({ type: 'DELETE_WORKOUT', payload: { _id: id } });
        SetError(null);
      }
    } catch (error) {
      console.error("Error deleting workout:", error);
      SetError("An error occurred while deleting the workout.");
    }
  };

  return (
    <div className="bg-gray-900 text-white shadow-lg rounded-xl p-6 border border-gray-700 hover:shadow-2xl transition-all">
      <h4 className="text-2xl font-semibold mb-2 text-emerald-400">{workout.title}</h4>
      <p><span className="font-medium text-gray-400">Load:</span> {workout.load} kg</p>
      <p><span className="font-medium text-gray-400">Reps:</span> {workout.reps}</p>
      <p><span className="font-medium text-gray-400">Sets:</span> {workout.sets}</p>
      <p className="text-sm text-gray-500 mt-2">
        {new Date(workout.createdAt).toLocaleString('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short',
        })}
      </p>
      <button
        onClick={() => handleDelete(workout._id)}
        className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
      >
        <Trash2 size={18} /> Delete
      </button>
      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default WorkoutDetails;