/**
 * Tracking Service
 *
 * It is responsible for all the logic regarding workout activity tracking and analytics.
 *
 * Dependencies:
 *  StorageService: To store and fetch workout data.
 *
 */

import {
  addDays,
  endOfToday,
  isEqual,
  isSameDay,
  isWithinInterval,
  startOfToday,
  subDays,
} from "date-fns";
import { storageService } from "../storage";
import { getTrackDuration } from "../../data/utils";

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

  /**
   *
   * @returns {Object[]}
   */
  getAllCompletedWorkouts() {
    if (this.storage.exists("completed_workouts"))
      return this.storage.get("completed_workouts") || [];
    return [];
  }

  /**
   *
   * @param {Date} date
   * @returns {Object[]}
   */
  getWorkoutsByDate(workouts, date) {
    // const workouts = this.getAllCompletedWorkouts();
    return workouts.filter((workout) => isSameDay(date, workout.createdAt));
  }

  // saveWorkout()
  // getAllWorkouts()
  // getWorkoutsForSpecificDate()
  // deleteWorkout()

  /**
   *
   * @param {Date} startDate
   * @param {Date} endDate
   * @returns {Object[]}
   */
  totalWorkoutsCompleted(startDate, endDate, workouts = null) {
    if (!workouts) workouts = this.getAllCompletedWorkouts();

    return workouts.filter((workout) =>
      isWithinInterval(workout.createdAt, {
        start: startDate,
        end: endDate,
      })
    ).length;
  }

  /**
   * @returns {Object[]}
   */
  totalWorkoutsCompletedLastWeek(workouts = null) {
    if (!workouts) workouts = this.getAllCompletedWorkouts();

    const today = endOfToday();
    return this.totalWorkoutsCompleted(subDays(today, 7), today, workouts);
  }

  /**
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {Object[]} workouts
   * @returns {Number} Time exercised in the date range given by startDate and endDate params.
   */
  totalTimeExercised(startDate, endDate, workouts = null) {
    const interval = {
      start: startDate,
      end: endDate,
    };

    if (!workouts) workouts = this.getAllCompletedWorkouts();

    return workouts
      .filter((workout) => isWithinInterval(workout.createdAt, interval))
      .reduce((acc, curr) => acc + getTrackDuration(curr.track), 0);
  }

  /**
   * @param {Object[]} workouts
   * @returns {Number} Time exercised in the last week starting from today.
   */
  totalTimeExercisedLastWeek(workouts = null) {
    const today = endOfToday();
    if (!workouts) workouts = this.getAllCompletedWorkouts();

    return this.totalTimeExercised(subDays(today, 7), today, workouts);
  }
}
// getAverageWorkoutsPerWeek()
// getMostFrequentWorkoutType()
// getMostFrequentWorkoutType()

const trackingService = Object.freeze(new TrackingService(storageService));

export default trackingService;
