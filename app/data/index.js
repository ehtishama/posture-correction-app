export const data = {
  exercises: [
    {
      id: 1,
      title: "Cat Cow",
      description:
        "The Cat-Cow exercise is a gentle yoga flow that helps improve spinal flexibility, mobility, and posture. It involves moving between two positions: Cow (arched back) and Cat (rounded spine). This exercise is particularly beneficial for relieving tension in the spine, stretching the back muscles, and promoting relaxation.",
      resources: [
        {
          title: "Cat-Cow Pose: Steps and Benefits",
          link: "https://www.healthline.com/health/fitness-exercise/cat-cow-pose",
        },
        {
          title: "How to Do Cat-Cow Stretch",
          link: "https://www.youtube.com/watch?v=qsggKX0G-fE",
        },
      ],
      instructions: [
        "Start on all fours.",
        "Inhale and arch your back into Cow position. 🐄",
        "Exhale and round your spine into Cat position. 😺",
        "Repeat, flowing smoothly between Cat and Cow.",
        "Move with your breath.",
      ],
      demo_poses: [
        require("../../assets/exercises/cat-cows/pose_1.svg"),
        require("../../assets/exercises/cat-cows/pose_2.svg"),
        require("../../assets/exercises/cat-cows/pose_3.svg"),
      ],
    },
    {
      id: 2,
      title: "Bird Dog",
      description:
        "The Bird Dog exercise is a core-strengthening exercise that targets the muscles of the abdominals, lower back, and glutes. It helps improve balance, stability, and posture.",
      resources: [
        {
          title: "How to Do Bird Dog Exercise",
          link: "https://www.youtube.com/watch?v=hWtM-3yQVSw",
        },
      ],
      instructions: [
        "Start on all fours.",
        "Extend right arm forward and left leg backward, keeping them parallel to the floor.",
        "Hold briefly, then return to starting position.",
        "Repeat on the opposite side.",
      ],
      demo_poses: [require("../../assets/exercises/bird-dog/pose_1.svg")],
    },
    {
      id: 3,
      title: "Curl",
      description:
        "The Curl exercise targets the muscles of the upper body, including the biceps and shoulders. It helps strengthen the arms and improve upper body endurance.",
      resources: [
        {
          title: "How to Do Bicep Curls",
          link: "https://www.youtube.com/watch?v=xy38fIADf4s",
        },
      ],
      instructions: [
        "Stand with feet shoulder-width apart, holding dumbbells by your sides.",
        "Curl weights towards shoulders, keeping elbows close to body. 💪",
        "Lower weights back down with control.",
        "Repeat for desired reps.",
      ],
      demo_poses: [
        require("../../assets/exercises/curl/pose_1.svg"),
        require("../../assets/exercises/curl/pose_2.svg"),
      ],
    },
    {
      id: 4,
      title: "Plank",
      description:
        "The Plank exercise is a fundamental core-strengthening exercise that targets the muscles of the abdominals, back, and shoulders. It helps improve stability, posture, and overall core strength.",
      resources: [
        {
          title: "How to Do a Plank",
          link: "https://www.youtube.com/watch?v=pSHjTRCQxIw",
        },
      ],
      instructions: [
        "Start in push-up position with hands under shoulders.",
        "Engage core, keeping body straight from head to heels.",
        "Hold position, breathing steadily.",
        "Avoid sagging hips.",
      ],
      demo_poses: [require("../../assets/exercises/plank/pose_1.svg")],
    },
    {
      id: 5,
      title: "Forearm Plank",
      description:
        "The Forearm Plank exercise is similar to the traditional Plank but places more emphasis on the muscles of the core and shoulders. It helps improve stability, endurance, and core strength.",
      resources: [
        {
          title: "How to Do a Forearm Plank",
          link: "https://www.youtube.com/watch?v=OBwXMuFMMtA",
        },
      ],
      instructions: [
        "Start on forearms with elbows under shoulders.",
        "Lift hips to create straight line from head to heels.",
        "Engage core, holding position.",
        "Breathe steadily, avoid sagging hips.",
      ],
      demo_poses: [require("../../assets/exercises/forearm-plank/pose_1.svg")],
    },
    {
      id: 6,
      title: "Side Plank",
      description:
        "The Side Plank exercise targets the muscles of the core, including the obliques, and helps improve lateral stability and balance. It is an effective exercise for strengthening the entire core and promoting good posture.",
      resources: [
        {
          title: "How to Do a Side Plank",
          link: "https://www.youtube.com/watch?v=K2VljzCC16g",
        },
      ],
      instructions: [
        "Lie on side, propped up on bottom elbow under shoulder.",
        "Lift hips to create straight line from head to heels.",
        "Engage core, holding position.",
        "Breathe steadily, then switch sides.",
      ],
      demo_poses: [require("../../assets/exercises/side-plank/pose_1.svg")],
    },
    {
      id: 7,
      title: "Cobra Stretch",
      description:
        "The Cobra Stretch is a yoga pose that stretches the spine, chest, and shoulders while strengthening the muscles of the lower back. It helps improve posture, alleviate back pain, and promote relaxation.",
      resources: [
        {
          title: "How to Do Cobra Stretch",
          link: "https://www.youtube.com/watch?v=U1tEkX1bqhk",
        },
      ],
      instructions: [
        "Lie face down with palms flat on the floor under your shoulders.",
        "Press into your hands, lifting your chest off the floor while keeping your hips grounded.",
        "Lengthen your spine and reach back through the crown of your head.",
        "Hold for a few breaths, then release back down.",
        "Repeat as desired.",
      ],
      demo_poses: [require("../../assets/exercises/cobra_pushup/pose_1.svg")],
    },
    {
      id: 8,
      title: "Superman",
      description:
        "The Superman exercise targets the muscles of the lower back, glutes, and hamstrings, helping to improve posture and strengthen the posterior chain. It also engages the core muscles for stability.",
      resources: [
        {
          title: "How to Do Superman Exercise",
          link: "https://www.youtube.com/watch?v=ccNk_LYvXnM",
        },
      ],
      instructions: [
        "Lie face down with arms extended overhead and legs straight.",
        "Engage your core and lift your chest, arms, and legs off the ground simultaneously.",
        "Hold for a moment, then lower back down with control.",
        "Repeat for desired repetitions.",
      ],
      demo_poses: [require("../../assets/exercises/superman/pose_1.svg")],
    },
    {
      id: 9,
      title: "Prone Back Extensions",
      description:
        "Prone Back Extensions strengthen the muscles of the lower back and promote spinal extension, aiding in posture improvement and relieving back pain. It also engages the glutes and hamstrings.",
      resources: [
        {
          title: "How to Do Prone Back Extensions",
          link: "https://www.youtube.com/watch?v=lDte6CDTx_4",
        },
      ],
      instructions: [
        "Lie face down with your arms by your sides and palms facing up.",
        "Engage your glutes and lower back muscles to lift your chest and legs off the ground.",
        "Hold for a moment, then lower back down with control.",
        "Repeat for desired repetitions.",
      ],
      demo_poses: [
        require("../../assets/exercises/prone-back/pose_1.svg"),
        require("../../assets/exercises/prone-back/pose_2.svg"),
      ],
    },
    {
      id: 10,
      title: "Reverse Snow Angels",
      description:
        "Reverse Snow Angels target the muscles of the upper back and shoulders, promoting shoulder mobility, and improving posture. This exercise also engages the muscles of the lower back and glutes.",
      resources: [
        {
          title: "How to Do Reverse Snow Angels",
          link: "https://www.youtube.com/watch?v=VAMNwjllflA",
        },
      ],
      instructions: [
        "Lie face down with arms extended overhead and palms facing down.",
        "Engage your back muscles to lift your arms and chest off the ground, squeezing your shoulder blades together.",
        "Lower back down with control.",
        "Repeat for desired repetitions.",
      ],
      demo_poses: [],
    },
    {
      id: 11,
      title: "Wall Angels",
      description:
        "Wall Angels are a shoulder mobility exercise that helps improve posture by strengthening the muscles of the upper back and opening up the chest. It also promotes thoracic spine mobility.",
      resources: [
        {
          title: "How to Do Wall Angels",
          link: "https://www.youtube.com/watch?v=4B3aH3l_JPs",
        },
      ],
      instructions: [
        "Stand with your back against a wall and feet hip-width apart.",
        "Place your arms against the wall with elbows bent at 90 degrees and palms facing forward.",
        "Slide your arms up the wall as far as you can while keeping your elbows and wrists in contact with the wall.",
        "Return to the starting position and repeat for desired repetitions.",
      ],
      demo_poses: [],
    },
    {
      id: 12,
      title: "Child's Pose",
      description:
        "Child's Pose is a yoga pose that stretches the spine, hips, and thighs while promoting relaxation and reducing stress. It can help alleviate back pain and improve posture by releasing tension in the back muscles.",
      resources: [
        {
          title: "How to Do Child's Pose",
          link: "https://www.youtube.com/watch?v=0bR4Kebf_6I",
        },
      ],
      instructions: [
        "Start on all fours with your knees wider than hip-width apart.",
        "Sit back on your heels and extend your arms forward, lowering your chest towards the floor.",
        "Rest your forehead on the ground and relax your entire body.",
        "Hold the pose and breathe deeply for several breaths.",
      ],
      demo_poses: [require("../../assets/exercises/childs-pose/pose_1.svg")],
    },
    {
      id: 13,
      title: "Quadruped Thoracic Rotation",
      description:
        "Quadruped Thoracic Rotation is a mobility exercise that targets the thoracic spine, improving spinal rotation and mobility. It helps alleviate stiffness in the upper back and shoulders, promoting better posture.",
      resources: [
        {
          title: "How to Do Quadruped Thoracic Rotation",
          link: "https://www.youtube.com/watch?v=nNzEp08cjfA",
        },
      ],
      instructions: [
        "Start on all fours with your hands under your shoulders and knees under your hips.",
        "Place one hand behind your head and rotate your torso, reaching your elbow towards the ceiling.",
        "Return to the starting position and repeat on the other side.",
        "Alternate sides for desired repetitions.",
      ],
      demo_poses: [],
    },
    {
      id: 14,
      title: "Seated Twist",
      description:
        "Seated Twist is a yoga pose that stretches the spine and promotes spinal mobility, improving posture. It also massages the internal organs and aids in digestion.",
      resources: [
        {
          title: "How to Do Seated Twist",
          link: "https://www.youtube.com/watch?v=JBIXCPtWTA4",
        },
      ],
      instructions: [
        "Sit on the floor with your legs extended in front of you.",
        "Bend your right knee and cross it over your left leg, placing your right foot flat on the floor outside your left knee.",
        "Twist your torso to the right, placing your left elbow on the outside of your right knee.",
        "Hold the twist and breathe deeply, then repeat on the other side.",
      ],
      demo_poses: [],
    },
    {
      id: 15,
      title: "Doorway Stretch",
      description:
        "Doorway Stretch is a chest and shoulder stretch that helps counteract rounded shoulders and improve posture. It opens up the chest and shoulders, relieving tension and promoting better alignment.",
      resources: [
        {
          title: "How to Do Doorway Stretch",
          link: "https://www.youtube.com/watch?v=Hvqk1YjJUik",
        },
      ],
      instructions: [
        "Stand in a doorway with your elbows bent at 90 degrees and forearms resting on the door frame.",
        "Step forward with one foot, slightly leaning into the stretch until you feel a gentle stretch across your chest and shoulders.",
        "Hold the stretch for 20-30 seconds, then relax and repeat as needed.",
      ],
      demo_poses: [],
    },
    {
      id: 16,
      title: "Cobra Push-ups",
      description:
        "Cobra Push-ups are a dynamic exercise that targets the muscles of the upper body, including the chest, shoulders, and triceps. It also engages the muscles of the lower back and promotes spinal extension.",
      resources: [
        {
          title: "How to Do Cobra Push-ups",
          link: "https://www.youtube.com/watch?v=g3AGmDFCCik",
        },
      ],
      instructions: [
        "Start in a prone position with your hands under your shoulders and elbows close to your body.",
        "Press into your hands, lifting your chest off the ground while keeping your hips grounded.",
        "Lower your chest back down, then push back up into the starting position.",
        "Repeat for desired repetitions.",
      ],
      demo_poses: [require("../../assets/exercises/cobra_pushup/pose_1.svg")],
    },
  ],
  tracks: [
    {
      id: 1,
      title: "Basic",
      thumbnail: require("../../assets/basic-plan.jpg"),
      exercises: [
        { exercise_id: 1, duration: 30 },
        { exercise_id: 2, duration: 30 },
        { exercise_id: 3, duration: 30 },
        { exercise_id: 4, duration: 30 },
        { exercise_id: 5, duration: 30 },
        { exercise_id: 6, duration: 30 },
        { exercise_id: 7, duration: 30 },
        { exercise_id: 8, duration: 30 },
        { exercise_id: 9, duration: 30 },
        { exercise_id: 10, duration: 30 },
        { exercise_id: 11, duration: 30 },
        { exercise_id: 12, duration: 30 },
      ],
      difficulty: 1,
    },
    {
      id: 2,
      title: "Intermediate",
      thumbnail: require("../../assets/intermediate-plan.jpg"),
      exercises: [
        { exercise_id: 1, duration: 45 },
        { exercise_id: 2, duration: 45 },
        { exercise_id: 3, duration: 45 },
        { exercise_id: 4, duration: 45 },
        { exercise_id: 5, duration: 45 },
        { exercise_id: 6, duration: 45 },
        { exercise_id: 7, duration: 45 },
        { exercise_id: 8, duration: 45 },
        { exercise_id: 9, duration: 45 },
        { exercise_id: 10, duration: 45 },
        { exercise_id: 11, duration: 45 },
        { exercise_id: 12, duration: 45 },
        { exercise_id: 13, duration: 45 },
        { exercise_id: 14, duration: 45 },
        { exercise_id: 15, duration: 45 },
      ],
      difficulty: 2,
    },
    {
      id: 3,
      title: "Advance",
      thumbnail: require("../../assets/advance-plan-2.jpg"),
      exercises: [
        { exercise_id: 1, duration: 60 },
        { exercise_id: 2, duration: 60 },
        { exercise_id: 3, duration: 60 },
        { exercise_id: 4, duration: 60 },
        { exercise_id: 5, duration: 60 },
        { exercise_id: 6, duration: 60 },
        { exercise_id: 7, duration: 60 },
        { exercise_id: 8, duration: 60 },
        { exercise_id: 9, duration: 60 },
        { exercise_id: 10, duration: 60 },
        { exercise_id: 11, duration: 60 },
        { exercise_id: 12, duration: 60 },
        { exercise_id: 13, duration: 60 },
        { exercise_id: 14, duration: 60 },
        { exercise_id: 15, duration: 60 },
      ],
      difficulty: 3,
    },
  ],
};

export const exercises = data.exercises;
export const tracks = data.tracks;
