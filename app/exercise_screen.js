import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ExerciseDemoCard } from "./components/exerciseDemoCard";
import typography from "./styles/typography";
import Button from "./components/button";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { getExerciseById } from "./data/exercises";
import Countdown from "./components/countdown";
import TakeRestModal from "./components/takeRestModal";

const ExerciseScreen = () => {
  const navigation = useNavigation();

  const { exercises } = useLocalSearchParams();
  const [exerciseIdx, setExerciseIdx] = useState(0);
  const [showBreakModal, setShowBreakModel] = useState(false);
  const [isPause, setIsPause] = useState(true);

  const { exercise_id, duration, repetitions } = exercises[exerciseIdx];

  const current_exercise = getExerciseById(exercise_id);

  const next_exercise = () => {
    if (exerciseIdx + 1 < exercises.length)
      setExerciseIdx((exerciseIdx) => exerciseIdx + 1);
    else navigation.replace("session_complete_screen");
  };

  const prev_exercise = () => {
    if (exerciseIdx > 0) setExerciseIdx((exerciseIdx) => exerciseIdx - 1);
  };

  return (
    <View style={styles.container}>
      <ExerciseDemoCard poses={current_exercise.demo_poses} />

      <View style={styles.content}>
        <Text style={typography.titleMedium}>{current_exercise.title}</Text>
        <Countdown
          duration={duration}
          onDone={() => setShowBreakModel(true)}
          reset={current_exercise}
          isPlaying={!isPause}
        />
      </View>

      <View style={styles.actions}>
        <Button text="back" onPress={prev_exercise} />
        <Button
          text={isPause ? "start" : "pause"}
          primary
          onPress={() => setIsPause((x) => !x)}
        />
        <Button text="next" onPress={next_exercise} />
      </View>

      {showBreakModal && (
        <TakeRestModal
          onRestComplete={() => {
            setShowBreakModel(false);
            next_exercise();
          }}
        />
      )}
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
    gap: 12,
  },
  actions: {
    // marginTop: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 1,
  },
});
