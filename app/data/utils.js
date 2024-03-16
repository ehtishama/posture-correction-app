import { data } from "./index";

const { exercises, tracks } = data;

// Exercises Utils
export const getExercises = (listOfIds) => {
  return exercises.filter((exercise) => listOfIds.includes(exercise.id));
};

export const getExerciseById = (exerciseId) => {
  return exercises.find((item) => item.id == exerciseId);
};

//   Tracks Utils

export const getTrackById = (trackId) => {
  return tracks.find((item) => item.id == trackId);
};

export const getExercisesFromTrack = (track) => {
  const result = {};
};

export const getTrackDuration = (trackId) => {
  const track = getTrackById(trackId);

  if (track)
    return track.exercises.reduce((acc, curr) => acc + curr.duration, 0);

  return 0;
};
