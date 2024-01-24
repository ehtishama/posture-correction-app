const exercises = [
  {
    id: 1,
    title: "Cat Cow",
    description: "",
    demo_poses: [
      require("../../assets/exercises/cat-cows/pose_1.svg"),
      require("../../assets/exercises/cat-cows/pose_2.svg"),
      require("../../assets/exercises/cat-cows/pose_3.svg"),
    ],
  },
  {
    id: 2,
    title: "Bird Dog",
    description: "",
    demo_poses: [require("../../assets/exercises/bird-dog/pose_1.svg")],
  },
  {
    id: 3,
    title: "Curl",
    description: "",
    demo_poses: [
      require("../../assets/exercises/curl/pose_1.svg"),
      require("../../assets/exercises/curl/pose_1.svg"),
    ],
  },
  {
    id: 4,
    title: "Plank",
    description: "",
    demo_poses: [require("../../assets/exercises/plank/pose_1.svg")],
  },
  {
    id: 5,
    title: "Forearm Plank",
    description: "",
    demo_poses: [require("../../assets/exercises/forearm-plank/pose_1.svg")],
  },
];

export const getExercises = (listOfIds) => {
  return exercises.filter((exercise) => listOfIds.includes(exercise.id));
};

export const getExerciseById = (exerciseId) => {
  return exercises.find((item) => item.id == exerciseId);
};
