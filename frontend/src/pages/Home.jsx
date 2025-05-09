import React, { useEffect, useState } from 'react';
import { getWorkouts } from '../api/workoutApi';
import WorkoutDetails from '../components/ui/WorkoutDetails';
import WorkoutForm from '../components/ui/WorkoutForm';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const [editWorkout, setEditWorkout] = useState(null)
  

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await getWorkouts();
        if (response.status === 200) {
          dispatch({ type: 'SET_WORKOUTS', payload: response.data });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 py-10 max-w-[1400px] mx-auto font-poppins">
      <div className="flex-1 space-y-6">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} editWorkout={editWorkout} setEditWorkout={setEditWorkout}/>
        ))}
      </div>
      <div className="md:w-[400px]">
        <WorkoutForm editWorkout={editWorkout} setEditWorkout={setEditWorkout} />
      </div>
    </div>
  );
};

export default Home;