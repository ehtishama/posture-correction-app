import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ExerciseDemoCard } from "./components/exerciseDemoCard";
import typography from "./styles/typography";
import Button from "./components/button";
import { useLocalSearchParams, useNavigation } from "expo-router";

import Countdown from "./components/countdown";
import TakeRestModal from "./components/takeRestModal";
import { Feather } from "@expo/vector-icons";

import * as Speech from "expo-speech";
import { getExerciseById } from "./data/utils";

const ExerciseScreen = () => {
  const navigation = useNavigation();

  const { exercises } = useLocalSearchParams();
  const [currExerciseIdx, setCurrExerciseIdx] = useState(0);
  const [isRestModalVisible, setIsRestModalVisible] = useState(false);
  const [isPause, setIsPause] = useState(true);

  const { exercise_id, duration, repetitions } = exercises[currExerciseIdx];
  const current_exercise = getExerciseById(exercise_id);

  const next_exercise = () => {
    if (currExerciseIdx + 1 < exercises.length)
      setCurrExerciseIdx((exerciseIdx) => exerciseIdx + 1);
    else navigation.replace("session_complete_screen");
  };

  const prev_exercise = () => {
    if (currExerciseIdx > 0)
      setCurrExerciseIdx((exerciseIdx) => exerciseIdx - 1);
  };

  const preExerciseMessage = (onDone = () => {}) => {
    Speech.speak(
      "Get ready for your next exercise. The countdown will start now.",
      {
        onDone,
      }
    );
  };

  // useEffect

  return (
    <View style={styles.container}>
      <ExerciseDemoCard poses={current_exercise.demo_poses} />

      <View style={styles.content}>
        <Text style={typography.titleMedium}>{current_exercise.title}</Text>
        <Countdown
          duration={duration}
          onDone={() => setIsRestModalVisible(true)}
          // 🔴 TODO :: reset the countdown when the current exercise changes... (A better approach is to use seprate countdowns for each exercise, on exercise change destroy the current countdown, create new one)
          reset={current_exercise}
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

      {isRestModalVisible && (
        <TakeRestModal
          onRestComplete={() => {
            setIsRestModalVisible(false);

            preExerciseMessage(next_exercise);
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
