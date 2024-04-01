/**
 * Storage Service
 *
 * It is responsible for all the logic of storing and retrieving data.
 * All the strings getting stored must be compaitable with JSON.parse.
 *
 */

import { MMKV } from "react-native-mmkv";

class Storage {
  /**
   *
   * @param {MMKV} storage
   */
  constructor(storage) {
    this.storage = storage;
  }

  get(key) {
    if (this.exists(key)) {
      return JSON.parse(this.storage.getString(key));
    }
    throw new Error(`Trying to access value for a non-existent key '${key}'`);
  }

  /**
   *
   * @param {string} key
   * @param {object} value
   */
  set(key, value) {
    const jsonValue = JSON.stringify(value);
    this.storage.set(key, jsonValue);
  }
  /**
   *
   * @param {string} key
   */
  delete(key) {
    this.storage.delete(key);
  }

  /**
   *
   * @param {string} key
   * @param {object} value
   */
  push(key, value) {
    if (!this.exists(key)) {
      this.set(key, [value]);
      return;
    }

    let x = this.get(key);

    if (Array.isArray(x)) {
      x.push(value);
      this.set(key, x);
    }
  }

  /**
   *
   * @param {string} key
   * @returns {boolean}
   */
  exists(key) {
    return this.storage.contains(key);
  }
}

const _storage = new MMKV({
  id: "global-mmkv-storage",
  //   path: `posture-perfect/storage`,
  encryptionKey: "hunter2",
});

export const storageService = new Storage(_storage);

console.log("MMKV Storage Instance: ");
console.log(JSON.parse(_storage.getString("completed_workouts")));
