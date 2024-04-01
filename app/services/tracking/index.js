/**
 * Tracking Service
 *
 * It is responsible for all the logic regarding workout tracking and analytics.
 *
 * Dependencies:
 *  StorageService: To store and fetch workout data.
 *
 */

import { isEqual, isSameDay } from "date-fns";
import { storageService } from "../storage";

let instance;

class TrackingService {
  /**
   * @constructor
   * @param {storageService} storage
   */
  constructor(storage) {
    if (instance) {
      throw new Error(
        "The TrackingService Singleton can only be initialized once."
      );
    }
    this.storage = storage;
    instance = this;
  }

  /**
   * Stores information when a workout is completed.
   * @param {*} workout
   */
  addCompletedWorkout(workout) {
    this.storage.push("completed_workouts", workout);
  }

  getAllCompletedWorkouts() {
    if (this.storage.exists("completed_workouts"))
      return this.storage.get("completed_workouts");
    else return [];
  }

  /**
   *
   * @param {Date} date
   * @returns {Object[]}
   */
  getWorkoutsByDate(date) {
    const workouts = this.getAllCompletedWorkouts();
    return workouts.filter((workout) => isSameDay(date, workout.createdAt));
  }

  // saveWorkout()
  // getAllWorkouts()
  // getWorkoutsForSpecificDate()
  // deleteWorkout()

  // getTotalWorkoutsCompleted()
  // getAverageWorkoutsPerWeek()
  // getMostFrequentWorkoutType()
  // getMostFrequentWorkoutType()
}

const trackingService = Object.freeze(new TrackingService(storageService));

export default trackingService;
