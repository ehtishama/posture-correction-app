/**
 * Tracking Service
 *
 * It is responsible for all the logic regarding workout tracking and analytics.
 *
 * Dependencies:
 *  StorageService: To store and fetch workout data.
 *
 */

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
}

const trackingService = Object.freeze(new TrackingService(storageService));

export default trackingService;
