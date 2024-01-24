const tracks = [
  {
    id: 1,
    title: "Basic",
    exercises: [
      {
        exercise_id: 1,
        duration: 8,
        repeatitions: 3,
      },
      {
        exercise_id: 2,
        duration: 8,
        repeatitions: 3,
      },
      {
        exercise_id: 3,
        duration: 8,
        repeatitions: 3,
      },
      {
        exercise_id: 4,
        duration: 8,
        repeatitions: 3,
      },
      {
        exercise_id: 5,
        duration: 8,
        repeatitions: 3,
      },
    ],
    thumbnail: require("../../assets/basic-plan.jpg"),
  },

  {
    id: 2,
    title: "Intermediate",
    exercises: [
      {
        exercise_id: 1,
        duration: 8,
        repeatitions: 3,
      },
      {
        exercise_id: 6,
        duration: 8,
        repeatitions: 8,
      },
    ],
    thumbnail: require("../../assets/intermediate-plan.jpg"),
  },
];

export const getTrackById = (trackId) => {
  return tracks.find((item) => item.id == trackId);
};

export const getExercisesFromTrack = (track) => {
  const result = {};
};

export default tracks;
