
const workout = require('../database/workout')
const {v4: uuid} = require('uuid')

const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts()
    return allWorkouts
  }

const getOneWorkout = (workoutId) => {
  const Workout = workout.getOneWorkout(workoutId)
    return Workout
  };
  
  const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
      ...newWorkout,
      id: uuid(),
      createdAt: new Date().toLocaleString('en-US', {timezone: 'UTC'}),
      updatedAt: new Date().toLocaleString('en-US', {timezone: 'UTC'}),

    }
    const createdWorkout = workout.createNewWorkout(workoutToInsert)
    return createdWorkout;
  };
  
  const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = workout.updateOneWorkout(workoutId, changes)
    return updatedWorkout
  };
  
  const deleteOneWorkout = (workoutId) => {
    workout.deleteOneWorkout(workoutId);
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };