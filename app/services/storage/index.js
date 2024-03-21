/**
 * Storage Service
 *
 * It is responsible for all the logic of storing and retrieving data.
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
    if (this.storage.contains(key)) {
      return JSON.parse(this.storage.getString(key));
    }
    return null;
  }

  set(key, value) {
    this.storage.set(key, value);
  }

  delete(key) {
    this.storage.delete(key);
  }

  push(key, value) {
    if (!this.storage.contains(key)) {
      this.storage.set(key, JSON.stringify([value]));
      return;
    }

    let x = JSON.parse(this.storage.getString("key"));

    if (Array.isArray(x)) {
      x.push(value);
      this.storage.set(key, JSON.stringify(x));
    }
  }

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
