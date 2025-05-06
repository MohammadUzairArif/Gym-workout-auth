import React, { useEffect,useState } from 'react'
import { getWorkouts } from '../api/workoutApi'
import WorkoutDetails from '../components/ui/WorkoutDetails'

const Home = () => {
  const [workouts,setWorkouts ] = useState(null)
useEffect(() => {
  const fetchWorkouts = async () => {
  try {
    const response = await getWorkouts();
    if (response.status === 200) {
      
      setWorkouts(response.data);
   ;
  
    }
  } catch (error) {
    console.error(error);
   
  }
}
  fetchWorkouts()

  }
  ,[])
  
  return (
  <div className="home">
    <div className="workouts">
    {workouts && workouts.map((workout) => (
      < WorkoutDetails key={workout._id} workout={workout} />
    ))}
    </div>
  </div>
  )
}

export default Home