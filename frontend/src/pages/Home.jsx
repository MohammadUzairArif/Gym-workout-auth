import React, { useEffect, useState } from "react";
import { getWorkouts } from "../api/workoutApi";
import WorkoutDetails from "../components/ui/WorkoutDetails";
import WorkoutForm from "../components/ui/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";
import UpdateWorkoutModal from "../components/ui/UpdateWorkoutModal";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuthContext();

const handleEdit = (workout)=>{
  setShowModal(true)
  setSelectedWorkout(workout)
}

const closeModal = ()=>{
  setShowModal(false)
  setSelectedWorkout(null)
}

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await getWorkouts(user.token);
        if (response.status === 200) {
          dispatch({ type: "SET_WORKOUTS", payload: response.data });
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (user) {

      fetchWorkouts();
    }
    
  }, [dispatch,user]);

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 py-10 max-w-[1400px] mx-auto font-poppins">
      <div className="flex-1 space-y-6">
        {workouts && workouts.length > 0 ? (
            workouts.map((workout) => (
              <WorkoutDetails
                key={workout._id}
                workout={workout}
                onEdit={handleEdit}
              />
            ))
          ) : (
            <p className="text-gray-400 text-center py-8">
              No workouts found. Add your first workout!
            </p>
          )}
      </div>
      <div className="md:w-[400px]">
        <WorkoutForm/>
      </div>
      {selectedWorkout && (
        <UpdateWorkoutModal
          isOpen={showModal}
          onClose={closeModal}
          workout={selectedWorkout}
        />
      )}
    </div>
  );
};

export default Home;
