import React from 'react';

const WorkoutDetails = ({ workout }) => {
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
    </div>
  );
};

export default WorkoutDetails;
