import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ExerciseDemoCard } from "./components/exerciseDemoCard";
import typography from "./styles/typography";
import Button from "./components/button";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { getExerciseById } from "./data/exercises";
import Countdown from "./components/countdown";
import TakeRestModal from "./components/takeRestModal";
import { Feather } from "@expo/vector-icons";

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
          reset={current_exercise} // 🔴 TODO :: reset the countdown when the current exercise changes... (A better approach is to use seprate countdowns for each exercise, on exercise change destroy the current countdown, create new one)
          isPlaying={!isPause}
        />
      </View>

      <View style={styles.actions}>
        <Button onPress={prev_exercise}>
          <Feather name="arrow-left" size={24} color="black" />
        </Button>

        <Button primary onPress={() => setIsPause((x) => !x)}>
          {isPause ? (
            <Feather name="play" size={24} color="black" />
          ) : (
            <Feather name="pause" size={24} color="black" />
          )}
        </Button>

        <Button onPress={next_exercise}>
          <Feather name="arrow-right" size={24} color="black" />
        </Button>
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
