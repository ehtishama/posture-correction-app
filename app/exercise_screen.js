import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ExerciseDemoCard } from "./components/exerciseDemoCard";
import typography from "./styles/typography";
import Button from "./components/button";
import { useLocalSearchParams } from "expo-router";
import { getExerciseById } from "./data/exercises";

const ExerciseScreen = () => {
  const { exercises } = useLocalSearchParams();
  const [exerciseIdx, setExerciseIdx] = useState(0);

  const { exercise_id, duration, repetitions } = exercises[exerciseIdx];
  const current_exercise = getExerciseById(exercise_id);

  {
    /**
     * exercises
     * current_exercise
     * timer
     * upon timer completion => current_exercise = next_exercise
     *
     * if there's no next exercises
     * popup sessions done
     */
  }

  const next_exercise = () => {
    if (exerciseIdx + 1 < exercises.length)
      setExerciseIdx((exerciseIdx) => exerciseIdx + 1);
  };

  const prev_exercise = () => {
    if (exerciseIdx > 0) setExerciseIdx((exerciseIdx) => exerciseIdx - 1);
  };

  return (
    <View style={styles.container}>
      <ExerciseDemoCard poses={current_exercise.demo_poses} />

      <View style={styles.content}>
        <Text style={typography.titleBase}>{current_exercise.title}</Text>
        <Text style={typography.titleXLarge}>{duration}</Text>
      </View>

      <View style={styles.actions}>
        <Button text="back" onPress={prev_exercise} />
        <Button text="pause" primary />
        <Button text="next" onPress={next_exercise} />
      </View>
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    alignItems: "center",
    padding: 16,
    // marginTop: "auto",
  },
  actions: {
    // marginTop: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 1,
  },
});
