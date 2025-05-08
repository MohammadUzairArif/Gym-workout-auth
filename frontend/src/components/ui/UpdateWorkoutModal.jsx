import React, { useState, useEffect } from 'react';
import { Save, X } from "lucide-react";

function UpdateWorkoutModal({ isOpen, onClose, workout }) {
  const [updatedWorkout, setUpdatedWorkout] = useState(workout);

  useEffect(() => {
    setUpdatedWorkout(workout);
  }, [workout]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedWorkout(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // You can call updateWorkout here in the future
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-md bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-2xl animate-fadeIn font-poppins">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-extrabold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Update Workout
        </h3>

        <div className="space-y-5">
          <input
            name="title"
            value={updatedWorkout?.title || ''}
            onChange={handleChange}
            placeholder="Workout Title"
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 transition-all"
          />

          <input
            name="load"
            value={updatedWorkout?.load || ''}
            onChange={handleChange}
            placeholder="Load (kg)"
            type="number"
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 transition-all"
          />

          <input
            name="reps"
            value={updatedWorkout?.reps || ''}
            onChange={handleChange}
            placeholder="Reps"
            type="number"
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 transition-all"
          />

          <input
            name="sets"
            value={updatedWorkout?.sets || ''}
            onChange={handleChange}
            placeholder="Sets"
            type="number"
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 transition-all"
          />

          <div className="flex gap-4 mt-6">
            <button
              onClick={onClose}
              className="w-1/2 py-3.5 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="w-1/2 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-md hover:shadow-emerald-400/20 transition-all"
            >
              <Save size={18} />
              <span>Update</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateWorkoutModal;
