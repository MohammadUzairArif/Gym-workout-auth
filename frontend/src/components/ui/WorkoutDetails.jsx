import React, { useState } from 'react';
import { Trash2 } from 'lucide-react'; // import the delete icon
import { deleteWorkout } from '../../api/workoutApi';
import { useWorkoutContext } from '../../hooks/useWorkoutContext'; // import the context


const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext(); // access the context
  const [error, SetError] = useState(null)
  
  // Function to handle delete action
 const handleDelete =async (id)=>{
  try {
    const response = await deleteWorkout(id)
    if (response.status !== 200) {
      SetError(response.data.error);
      
    }else{
      dispatch({ type: 'DELETE_WORKOUT', payload: { _id: id } });
      SetError(null)
    }
  } catch (error) {
    console.error("Error deleting workout:", error);
    SetError("An error occurred while deleting the workout.");
  }
 } 
  
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 mb-4 font-poppins border border-gray-200 dark:border-gray-700 transition-all">
      <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {workout.title}
      </h4>
      <p className="text-gray-700 dark:text-gray-300 mb-1">
        <strong className="text-gray-900 dark:text-gray-100">Load (kg): </strong>
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
          dateStyle: 'medium',
          timeStyle: 'short',
          hour12: true,
        })}
      </p>
      <button onClick={()=>handleDelete(workout._id)} className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all">
        <Trash2 size={18} />
        Delete
      </button>
    </div>
  );
};

export default WorkoutDetails;
