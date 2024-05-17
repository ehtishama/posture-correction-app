/**
 * Tracking Service
 *
 * It is responsible for all the logic regarding workout tracking and analytics.
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
  getWorkoutsByDate(date) {
    const workouts = this.getAllCompletedWorkouts();
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
  totalWorkoutsCompleted(startDate, endDate) {
    const workouts = this.getAllCompletedWorkouts();
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
  totalWorkoutsCompletedLastWeek() {
    const today = endOfToday();
    return this.totalWorkoutsCompleted(subDays(today, 7), today);
  }

  /**
   * @param {Date} startDate
   * @param {Date} endDate
   * @returns {Number} Time exercised in the date range given by startDate and endDate params.
   */
  totalTimeExercised(startDate, endDate) {
    const interval = {
      start: startDate,
      end: endDate,
    };

    return this.getAllCompletedWorkouts()
      .filter((workout) => isWithinInterval(workout.createdAt, interval))
      .reduce((acc, curr) => acc + getTrackDuration(curr.track), 0);
  }

  /**
   * @returns {Number} Time exercised in the last week starting from today.
   */
  totalTimeExercisedLastWeek() {
    const today = endOfToday();
    return this.totalTimeExercised(subDays(today, 7), today);
  }
}
// getAverageWorkoutsPerWeek()
// getMostFrequentWorkoutType()
// getMostFrequentWorkoutType()

const trackingService = Object.freeze(new TrackingService(storageService));

export default trackingService;
