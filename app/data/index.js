export default data = {
  exercises: [
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
        require("../../assets/exercises/curl/pose_2.svg"),
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
    {
      id: 6,
      title: "Side Plank",
      description: "",
      demo_poses: [require("../../assets/exercises/side-plank/pose_1.svg")],
    },
  ],
  tracks: [
    {
      id: 1,
      title: "Basic",
      exercises: [
        {
          exercise_id: 1,
          duration: 2,
          repeatitions: 3,
        },
        {
          exercise_id: 2,
          duration: 3,
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
  ],
};

export const { exercises, tracks } = data;
