import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ExerciseDemoCard } from "../components/exerciseDemoCard";
import typography from "../styles/typography";
import Button from "../components/button";

import Countdown from "../components/countdown";
import TakeRestModal from "../components/takeRestModal";
import { Feather } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { getExerciseById } from "../data/utils";
import { useNavigation, useRoute } from "@react-navigation/native";
import ScreenLayout from "./screen_layout";
import { STACK_ROUTES } from "../navigation/Routes";

const preExerciseMessage = (onDone, isFirstExercise = false) => {
  let message;
  if (!isFirstExercise)
    message = "Get ready for your next exercise. The countdown will start now.";
  else
    message = "Get ready for your first exercise. The countdown will start now";

  Speech.speak(message, {
    onDone,
  });
};

export default function ExerciseScreen() {
  const navigation = useNavigation();

  const {
    params: { exercises },
  } = useRoute();

  const [currExerciseIdx, setCurrExerciseIdx] = useState(0);
  const [isRestModalVisible, setIsRestModalVisible] = useState(false);
  const [isPause, setIsPause] = useState(true);

  const { exercise_id, duration } = exercises[currExerciseIdx];
  const currExerciseModel = getExerciseById(exercise_id);

  const start_exercise = () => {
    preExerciseMessage(() => setIsPause(false), true);
  };

  const nextExercise = () => {
    if (currExerciseIdx + 1 < exercises.length)
      setCurrExerciseIdx((exerciseIdx) => exerciseIdx + 1);
    else navigation.replace(STACK_ROUTES.SESSION_COMPLETE_SCREEN);
  };

  const prevExercise = () => {
    if (currExerciseIdx > 0)
      setCurrExerciseIdx((exerciseIdx) => exerciseIdx - 1);
  };

  useEffect(() => {
    start_exercise();
  }, []);

  return (
    <ScreenLayout style={styles.container}>
      <ExerciseDemoCard poses={currExerciseModel.demo_poses} />

      <View style={styles.content}>
        <Text style={typography.titleMedium}>{currExerciseModel.title}</Text>
        <Countdown
          duration={duration}
          onCompleted={() => setIsRestModalVisible(true)}
          // reset the countdown when the current exercise changes
          // 🔴 TODO :: (A better approach is to use seprate countdowns for each exercise, on exercise change destroy the current countdown, create new one)
          reset={currExerciseModel}
          running={!isPause}
        />
      </View>

      <View style={styles.actions}>
        <Button onPress={prevExercise}>
          <Feather name="arrow-left" size={24} color="black" />
        </Button>

        <Button primary onPress={() => setIsPause((x) => !x)}>
          {isPause ? (
            <Feather name="play" size={24} color="black" />
          ) : (
            <Feather name="pause" size={24} color="black" />
          )}
        </Button>

        <Button onPress={nextExercise}>
          <Feather name="arrow-right" size={24} color="black" />
        </Button>
      </View>

      {isRestModalVisible && (
        <TakeRestModal
          onRestComplete={() => {
            setIsRestModalVisible(false);
            setIsPause(true);
            nextExercise();
            preExerciseMessage(() => setIsPause(false));
          }}
        />
      )}
    </ScreenLayout>
  );
}

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
