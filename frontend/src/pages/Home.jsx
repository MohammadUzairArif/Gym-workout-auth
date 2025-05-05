import React, { useEffect, useState } from 'react'
import { getWorkout,getSingleWorkout, addWorkout , updateWorkout, deleteWorkout } from '../api/workoutApi'
const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await getWorkout()
        if(response.status===200){
          setWorkouts(response.data)
        }
      } catch (error) {
        console.error("Error fetching workouts:", error)
      }
    }
    fetchWorkouts()
  },[])



  return (
    <div>
      home
    </div>
  )
}

export default Home
